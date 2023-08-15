import Checkbox from '@/app/components/Form/Checkbox'
import { Input } from '@/app/components/Form/Input/Index'
import InputFile from '@/app/components/Form/InputFile'
import { TextArea } from '@/app/components/Form/TextArea/Index'
import { categories } from '@/app/utils/categories'
import React from 'react'

export default function CreateEvent() {
  return (
    <div className="container mt-20 px-8">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
        <div className="mb-4 mt-10 border-teal-300 px-8 text-blue sm:border-r-2">
          <p className="text-2xl font-medium">Adicionar Eventos</p>
          <p className="mb-4 text-base font-light">
            Crie o seu próprio evento da maneira que você preferir! :)
          </p>
          <form>
            <Input
              title="Título"
              placeholder="Insira o nome do seu evento"
              type="text"
            />
            <Input
              title="Endereço"
              placeholder="Insira o endereço do seu evento"
              type="text"
            />
            <Input title="Cupom" placeholder="Insira o código" type="text" />
            <div className="grid grid-cols-2 gap-6">
              <Input
                title="Data"
                placeholder="dd/mm/aaaa"
                type="date"
                postionText="center"
              />
              <Input
                title="Horário"
                type="time"
                postionText="center"
                placeholder="HH:mm"
              />
            </div>
            <p className="mb-4 text-base font-medium">Categoria do Evento</p>
            <div className="mb-4  grid grid-cols-1  gap-2 md:grid-cols-2 xl:grid-cols-4">
              {categories.map((category) => (
                <Checkbox title={category.name} key={category.name} />
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
                className="col-span-2"
              />
              <Input
                title="Setor"
                placeholder="Insira o nome do setor"
                type="text"
                className="col-span-3"
              />
            </div>
            <TextArea
              title="Descrição"
              placeholder="Dê uma descrição que vai embalar o seu público!"
            />
          </form>
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
              <InputFile />
            </div>
            <p className=" text-base font-medium">Flyers</p>
            <p className="mb-4 text-xs font-light text-neutral-500">
              Insira até três flyers
            </p>
            <div className="mb-4 grid grid-cols-3 gap-4">
              <div className="h-28 w-full rounded-3xl bg-zinc-300 shadow">
                <InputFile />
              </div>
              <div className="h-28 w-full rounded-3xl bg-zinc-300 shadow">
                <InputFile />
              </div>
              <div className="h-28 w-full rounded-3xl bg-zinc-300 shadow">
                <InputFile />
              </div>
            </div>

            <p className=" text-base font-medium">Mapa do Evento</p>
            <p className="mb-4 text-xs font-light text-neutral-500">
              Insira o Mapa do Evento indicando os setores
            </p>
            <div className="h-56 w-full rounded-3xl bg-zinc-300 shadow">
              <InputFile />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
