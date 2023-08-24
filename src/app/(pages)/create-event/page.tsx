'use client'

import Button from '@/app/components/Form/Button'
import Checkbox from '@/app/components/Form/Checkbox'
import { Input } from '@/app/components/Form/Input/Index'
import InputAutoComplete from '@/app/components/Form/InputAutocomplete'
import InputFile from '@/app/components/Form/InputFile'
import { TextArea } from '@/app/components/Form/TextArea/Index'
import { categories } from '@/app/utils/categories'
import { fetchWrapper } from '@/app/utils/fetchWrapper'
import 'react-toastify/dist/ReactToastify.css'

import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
export interface IFormProps {
  title: string
  cupom: string
  date: string
  latitude: string
  longitude: string

  time: string
  amount: string
  sector: string
  description: string
  categories: string
  map: File
  banner: File
  flyers: File[]
}

export default function CreateEvent() {
  const [flyers, setFlyers] = useState<File[]>([])
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<IFormProps>()

  const onSubmit = async (data: IFormProps) => {
    const formmatedDate = new Date(`${data.date}T${data.time}`)
    const formData = new FormData()
    formData.append('date', formmatedDate.toISOString())
    for (const property in data) {
      if (property === 'latitude' || property === 'longitude') {
        formData.append(`location[${property}]`, data[property])
      } else if (property === 'amount' || property === 'sector') {
        formData.append(`price[${property}]`, data[property])
      } else if (property === 'date' || property === 'time') {
        continue
      } else {
        formData.append(property, data[property])
      }
    }
    flyers.forEach((flyer) => {
      formData.append('flyers', flyer)
    })

    try {
      await fetchWrapper('/events', {
        method: 'POST',
        body: formData,
      })
      toast.success('Evento Criado com sucesso!')
    } catch (error) {
      toast.error('Erro ao criar evento!')
      console.log('🚀 ~ file: page.tsx:62 ~ onSubmit ~ error:', error)
    }
  }

  const handleFileChange = (name: 'banner' | 'map' | 'flyers', file: File) => {
    if (name === 'flyers') {
      setFlyers([...flyers, file])
    } else {
      setValue(name, file)
    }
  }

  const onSelect = (address: any) => {
    setValue('latitude', address.lat)
    setValue('longitude', address.lng)
  }
  return (
    <div className="container mt-20 px-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <div className="mb-4 mt-10 border-teal-300 px-8 text-blue sm:border-r-2">
            <p className="text-2xl font-medium">Adicionar Eventos</p>
            <p className="mb-4 text-base font-light">
              Crie o seu próprio evento da maneira que você preferir! :)
            </p>

            <Input
              title="Título"
              placeholder="Insira o nome do seu evento"
              type="text"
              {...register('title')}
            />
            <InputAutoComplete onSelect={onSelect} />
            <Input
              title="Cupom"
              placeholder="Insira o código"
              type="text"
              {...register('cupom')}
            />
            <div className="grid grid-cols-2 gap-6">
              <Input
                title="Data"
                placeholder="dd/mm/aaaa"
                type="date"
                postionText="center"
                {...register('date')}
              />
              <Input
                title="Horário"
                type="time"
                postionText="center"
                placeholder="HH:mm"
                {...register('time')}
              />
            </div>
            <p className="mb-4 text-base font-medium">Categoria do Evento</p>
            <div className="mb-4  grid grid-cols-1  gap-2 md:grid-cols-2 xl:grid-cols-4">
              {categories.map((category) => (
                <Checkbox
                  title={category.name}
                  key={category.name}
                  register={{ ...register('categories') }}
                />
              ))}
            </div>

            <p className=" text-base font-medium">Valor</p>
            <p className="mb-4 text-xs font-light text-neutral-500">
              Caso seu evento seja gratuito, o campo deverá ficar vazio. Caso
              haja mais de um setor, basta adicionar a seção. Se houver cupom
              promocional, basta colocar o código no campo “cupom”.
            </p>
            <div className="grid grid-cols-5 gap-4">
              <Input
                title="Preço"
                placeholder="R$0,00"
                type="text"
                {...register('amount')}
                className="col-span-2"
              />
              <Input
                title="Setor"
                placeholder="Insira o nome do setor"
                type="text"
                {...register('sector')}
                className="col-span-3"
              />
            </div>
            <TextArea
              title="Descrição"
              placeholder="Dê uma descrição que vai embalar o seu público!"
              {...register('description')}
            />
          </div>
          <div className="mb-4 mt-10 text-blue sm:ml-4">
            <p className="text-2xl font-medium">Área Criativa</p>
            <p className="text-base font-light">
              Adicione as imagens referentes ao seu evento!
            </p>
            <div className="mt-6">
              <p className=" text-base font-medium">Banner</p>
              <p className="mb-4 text-xs font-light text-neutral-500">
                Insira um banner no formato 336x280
              </p>
              <div className="mb-4 h-28 w-full rounded-3xl bg-zinc-300 shadow">
                <InputFile onChange={(e) => handleFileChange('banner', e)} />
              </div>
              <p className=" text-base font-medium">Flyers</p>
              <p className="mb-4 text-xs font-light text-neutral-500">
                Insira até três flyers
              </p>
              <div className="mb-4 grid grid-cols-3 gap-4">
                <div className="h-28 w-full rounded-3xl bg-zinc-300 shadow">
                  <InputFile onChange={(e) => handleFileChange('flyers', e)} />
                </div>
                <div className="h-28 w-full rounded-3xl bg-zinc-300 shadow">
                  <InputFile onChange={(e) => handleFileChange('flyers', e)} />
                </div>
                <div className="h-28 w-full rounded-3xl bg-zinc-300 shadow">
                  <InputFile onChange={(e) => handleFileChange('flyers', e)} />
                </div>
              </div>

              <p className=" text-base font-medium">Mapa do Evento</p>
              <p className="mb-4 text-xs font-light text-neutral-500">
                Insira o Mapa do Evento indicando os setores
              </p>
              <div className="group mb-8 h-56 w-full rounded-3xl border-2  bg-zinc-300 shadow">
                <InputFile onChange={(e) => handleFileChange('map', e)} />
              </div>

              <Button title="Cadastrar Evento" />
            </div>
          </div>
        </div>
      </form>
    </div>
  )
}
