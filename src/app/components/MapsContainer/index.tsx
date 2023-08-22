'use client'
import React, { useEffect, useState } from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '100vh',
  maxHeight: '100vh',
}

interface ICenter {
  lat: number
  lng: number
}

const markers = [
  { lat: -19.899613, lng: -43.9314789 },
  { lat: -12.89965, lng: -43.7364789 },
  { lat: -12.82919, lng: -43.987981 },
  { lat: -19.968614, lng: -43.405302 },
]

export default function MapContainer() {
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  if (!apiKey) throw new Error('API KEY NOT FOUND')
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: apiKey,
  })
  const [coordNow, setCoordNow] = useState<ICenter | undefined>()

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude: lat, longitude: lng } = position.coords
          setCoordNow({
            lat,
            lng,
          })
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
        <Marker position={{ lat: marker.lat, lng: marker.lng }} key={index} />
      ))}
      <></>
    </GoogleMap>
  ) : (
    <p>Carregando...</p>
  )
}
