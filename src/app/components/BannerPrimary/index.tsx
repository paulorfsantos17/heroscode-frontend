import React from 'react'
import ItemBanner from '../ItemBanner'
import Calendar from '@/app/assets/Calendar'
import MapPin from '@/app/assets/MapPin'
import Clock from '@/app/assets/Clock'

export default function BannerPrimary() {
  return (
    <div className="rounded p-5">
      <div className=" relative h-72 rounded-3xl bg-black bg-opacity-25 shadow">
        <div className="absolute bottom-0 p-5 text-white">
          <h3 className="pb-4 text-5xl font-bold">Jorge e Matheus</h3>
          <div className="flex">
            <div className="mr-4 flex gap-3">
              <ItemBanner
                icon={<Calendar className="h-6 w-6" />}
                title="08/07/2023"
              />
              <ItemBanner
                icon={<MapPin className="h-6 w-6" />}
                title="Mineirão - Belo Horizonte"
              />
              <ItemBanner icon={<Clock className="h-6 w-6" />} title="14h" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
