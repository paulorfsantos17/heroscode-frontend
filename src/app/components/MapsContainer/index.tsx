'use client'
import React, { useEffect, useState } from 'react'
import {
  GoogleMap,
  useJsApiLoader,
  Marker,
  InfoWindow,
} from '@react-google-maps/api'
import { fetchWrapper } from '@/app/utils/fetchWrapper'
import { Event } from '@/app/interfaces/IEvent'
import CardFilter from '../CardFilter'

const containerStyle = {
  width: '100%',
  height: '100vh',
  maxHeight: '100vh',
}

interface ICenter {
  lat: number
  lng: number
}

export default function MapContainer() {
  const [coordNow, setCoordNow] = useState<ICenter | undefined>()
  const [markers, setMarkers] = useState<Event[]>([])
  const [seletedMarker, setSeletedMarker] = useState<Event | null>()
  const getEventByLocation = async (lat: number, lng: number) => {
    const response = await fetchWrapper(
      `/events?latitude=${lat}&longitude=${lng}`,
      { method: 'GET' },
    )

    setMarkers(response)
  }

  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  if (!apiKey) throw new Error('API KEY NOT FOUND')
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  })

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude: lat, longitude: lng } = position.coords
          setCoordNow({
            lat,
            lng,
          })
          getEventByLocation(lat, lng)
        },
        (error) => {
          console.log('Erro ao buscar localização', error)
        },
      )
    }
  }, [])

  return isLoaded ? (
    <GoogleMap mapContainerStyle={containerStyle} center={coordNow} zoom={10}>
      {/* Child components, such as markers, info windows, etc. */}
      {markers.map((marker, index) => (
        <Marker
          position={{
            lat: Number(marker.location.latitude),
            lng: Number(marker.location.longitude),
          }}
          key={index}
          onClick={() => setSeletedMarker(marker)}
        />
      ))}

      {seletedMarker && (
        <InfoWindow
          position={{
            lat: Number(seletedMarker.location.latitude),
            lng: Number(seletedMarker.location.longitude),
          }}
          onCloseClick={() => setSeletedMarker(null)}
        >
          <div className="w-[380px]">
            <CardFilter event={seletedMarker} />
          </div>
        </InfoWindow>
      )}
    </GoogleMap>
  ) : (
    <p>Carregando...</p>
  )
}
