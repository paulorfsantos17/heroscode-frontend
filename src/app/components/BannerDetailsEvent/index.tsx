import React from 'react'
import ItemBanner from '../ItemBanner'
import Calendar from '@/app/assets/Calendar'
import MapPin from '@/app/assets/MapPin'
import Clock from '@/app/assets/Clock'
import { dateFormated } from '@/app/utils/dateFormatted'
import { Event } from '@/app/interfaces/IEvent'
import { getImage } from '@/app/utils/getImage'

interface IBannerPrimary {
  event: Event
}

export default function BannerDetailsEvent({ event }: IBannerPrimary) {
  const date = new Date(event.date)
  const image = getImage(event.banner)

  return (
    <div className="">
      <div
        className="relative h-[280px] w-full scale-105 bg-cover  p-10 shadow"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute bottom-0 p-5 text-white">
          <h3 className="pb-4 text-5xl font-bold">{event.title}</h3>
          <div className="flex">
            <div className="mr-4 flex gap-3">
              <ItemBanner
                icon={<Calendar className="h-6 w-6" />}
                title={dateFormated(date)}
              />
              <ItemBanner
                icon={<MapPin className="h-6 w-6" />}
                title={event.formattedAddress}
              />
              <ItemBanner
                icon={<Clock className="h-6 w-6" />}
                title={date.getHours() + 'h'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
