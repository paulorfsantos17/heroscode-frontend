import React from 'react'
import ItemBanner from '../ItemBanner'
import Calendar from '@/app/assets/Calendar'
import Clock from '@/app/assets/Clock'
import MapPin from '@/app/assets/MapPin'

export default function BannerSecondary() {
  return (
    <div className="rounded p-5">
      <div className="relative h-[150px] w-full rounded-3xl bg-black bg-opacity-25 shadow">
        <div className="ml-2 p-3 text-neutral-50">
          <p className="text-2xl font-semibold">Jorge e Matheus</p>
          <div className="mr-4 flex gap-3 text-xs font-medium">
            <ItemBanner
              icon={<Calendar className="h-4 w-4" />}
              title="08/07/2023"
            />
            <ItemBanner icon={<Clock className="h-4 w-4" />} title="14h" />
          </div>
          <div className="absolute bottom-0 pb-2 text-xs font-medium">
            <ItemBanner
              icon={<MapPin className="h-4 w-4" />}
              title="Mineirão - Belo Horizonte"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
