'use client'

import { Select } from '@/app/components/Form/Select/Index'
import { categories } from '@/app/utils/categories'
import React, { useEffect, useState } from 'react'
import { Input } from '@/app/components/Form/Input/Index'
import { InputRange } from '@/app/components/Form/InputRange/Index'
import Button from '@/app/components/Form/Button'
import CardFilter from '@/app/components/CardFilter'
import { useSearchParams } from 'next/navigation'
import { fetchWrapper } from '@/app/utils/fetchWrapper'
import { Event } from '@/app/interfaces/IEvent'

export default function CreateEvent() {
  const searchParams = useSearchParams()
  const [events, setEvents] = useState<Event[]>([])

  const getEvent = async (data: any) => {
    const response = await fetchWrapper(
      '/events/filter?' +
        new URLSearchParams({
          name: data.name,
        }),
      { method: 'GET' },
    )

    setEvents(response)
  }
  useEffect(() => {
    if (searchParams.get('q')) {
      getEvent({ name: searchParams.get('q') })
    }
  }, [searchParams.get('q')])
  return (
    <div className="container mt-20 px-8">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="mb-4 mt-10 border-teal-300 px-8 text-blue sm:border-r-2">
          <p className="text-2xl font-medium">Filtrar Evento</p>
          <p className="mb-4 text-base font-light">
            Busque o evento que é a sua cara de maneira mais detalhada!
          </p>
          <form>
            <Input
              title="Nome"
              placeholder="Insira o nome do seu evento"
              type="text"
            />
            <Input
              title="Localização"
              placeholder="Insira o endereço do seu evento"
              type="text"
            />
            <Input title="Cupom" placeholder="Insira o código" type="text" />

            <Input
              title="Data"
              placeholder="dd/mm/aaaa"
              type="date"
              postionText="center"
            />

            <Select
              title="Tipo de Evento"
              placeholder="Selecione uma modalide de evento"
            >
              {categories.map((category) => (
                <option value={category.name} key={category.name}>
                  {category.name}
                </option>
              ))}
            </Select>
            <InputRange title="Distância" />
            <InputRange title="Valor" />
            <div className="m-auto flex  w-2/3  grid-cols-2 flex-col gap-7 md:grid">
              <Button typeButton="secondary" title="Limpar" />
              <Button title="Buscar" />
            </div>
          </form>
        </div>
        <div className="mb-4 mt-10 text-blue sm:ml-4">
          <p className="text-2xl font-medium">Resultados da busca</p>
          <p className="text-base font-light">
            Explore os resultados da sua busca por diversão! :)
          </p>
          <div className="mt-6 flex flex-col gap-5 p-5">
            {events.map((event) => (
              <CardFilter event={event} key={event._id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
