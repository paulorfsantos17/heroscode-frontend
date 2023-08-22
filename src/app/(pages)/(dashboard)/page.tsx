import React from 'react'
import { categories } from '@/app/utils/categories'
import CategoriesItem from '@/app/components/CategoriesItem'
import BannerSecondary from '@/app/components/BannerSecondary'
import BannerPrimary from '@/app/components/BannerPrimary'
import { fetchWrapper } from '@/app/utils/fetchWrapper'

export default async function DashBoard() {
  const response = await fetchWrapper('/events/main', { method: 'GET' })
  const responseSecondary = response.slice(1)

  return (
    <div className="container mx-auto w-[90%]">
      <BannerPrimary event={response[0]} />

      <div className="ml-2 p-2 text-blue">
        <p className="text-2xl font-medium">Eventos em Destaque</p>
        <p className=" text-base font-light">
          Se divirta com os principais eventos de Minas Gerais e do Brasil!
        </p>
      </div>

      <div className=" grid grid-cols-3 gap-3">
        {responseSecondary.map((event: any, index: number) => (
          <BannerSecondary event={event} key={index} />
        ))}
      </div>

      <div className="ml-2 p-2 text-blue ">
        <p className="text-2xl font-medium">Navegue por tipo de evento</p>
        <p className=" text-base font-light">
          Vá ao evento que é a sua cara :D
        </p>
      </div>

      <div className="ml-2 grid grid-cols-2 sm:gap-1 md:grid-cols-7 lg:gap-2">
        {categories.map((category) => (
          <CategoriesItem
            icons={category.icons}
            name={category.name}
            route={category.route}
            key={category.name}
          />
        ))}
      </div>
    </div>
  )
}
