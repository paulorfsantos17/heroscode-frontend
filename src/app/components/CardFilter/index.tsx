import React from 'react'
import ItemBanner from '../ItemBanner'
import Calendar from '@/app/assets/Calendar'
import Clock from '@/app/assets/Clock'
import MapPin from '@/app/assets/MapPin'
import Button from '../Form/Button'
import { Event } from '@/app/interfaces/IEvent'
import { dateFormated } from '@/app/utils/dateFormatted'
import { getImage } from '@/app/utils/getImage'
import Link from 'next/link'

interface ICardFilter {
  event: Event
}

export default function CardFilter({ event }: ICardFilter) {
  const date = new Date(event.date)
  const image = getImage(event.banner)
  const address = event.formattedAddress.split('-')
  return (
    <div className=" rounded-3xl border border-blue shadow">
      <div
        className="relative h-[150px] w-full rounded-3xl rounded-b-none bg-cover bg-center shadow"
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
      <div className="relative flex w-full flex-col items-center gap-4 rounded-3xl rounded-t-none bg-slate-200 bg-opacity-25 py-4">
        <p className=" w-[90%] text-xs font-semibold text-black">
          {event.description}
        </p>
        <div className="w-4/3">
          <Link href={`/event-details/${event._id}`}>
            <Button title="Ver Detalhes do Evento" />
          </Link>
        </div>
      </div>
    </div>
  )
}
