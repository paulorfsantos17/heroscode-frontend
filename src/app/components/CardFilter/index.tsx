import React from 'react'
import ItemBanner from '../ItemBanner'
import Calendar from '@/app/assets/Calendar'
import Clock from '@/app/assets/Clock'
import MapPin from '@/app/assets/MapPin'
import Button from '../Form/Button'

export default function BannerSecondary() {
  return (
    <div className=" rounded-3xl border border-blue shadow">
      <div className="relative h-[150px] w-full rounded-3xl rounded-b-none bg-black bg-opacity-25 shadow">
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
      <div className="relative flex w-full flex-col items-center gap-4 rounded-3xl rounded-t-none bg-slate-200 bg-opacity-25 py-4">
        <p className=" w-[90%] text-xs font-semibold text-black">
          Venha conhecer aprender o básico da programação numa oficina realizada
          pela coordenação do curso de Ciência da Computação da UFMG, uma das
          faculdades mais renomadas do país!
        </p>
        <div className="w-4/3">
          <Button title="Ver Detalhes do Evento" />
        </div>
      </div>
    </div>
  )
}
