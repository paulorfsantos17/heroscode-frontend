import React from 'react'
import ItemBanner from '../ItemBanner'
import Calendar from '@/app/assets/Calendar'
import Clock from '@/app/assets/Clock'
import MapPin from '@/app/assets/MapPin'
import { Event } from '@/app/interfaces/IEvent'
import { getImage } from '@/app/utils/getImage'
import { dateFormated } from '@/app/utils/dateFormatted'

interface IBannerSecondary {
  event: Event
}

export default function BannerSecondary({ event }: IBannerSecondary) {
  const date = new Date(event.date)
  const image = getImage(event.banner)
  const address = event.formattedAddress.split('-')
  return (
    <div className="rounded p-5">
      <div
        className="relative h-[150px] w-full rounded-3xl bg-cover bg-center "
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="ml-2 p-3 text-neutral-50">
          <p className="text-2xl font-semibold">{event.title}</p>
          <div className="mr-4 flex gap-3 text-xs font-medium">
            <ItemBanner
              icon={<Calendar className="h-4 w-4" />}
              title={dateFormated(date)}
            />
            <ItemBanner
              icon={<Clock className="h-4 w-4" />}
              title={date.getHours() + 'h'}
            />
          </div>
          <div className="absolute bottom-0 pb-2 text-xs font-medium">
            <ItemBanner
              icon={<MapPin className="h-4 w-4" />}
              title={address[1]}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
