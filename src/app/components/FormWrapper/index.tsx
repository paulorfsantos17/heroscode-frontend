import React from 'react'
import ContadorWrapper from '../ContadorWrapper'
import { Input } from '../Form/Input/Index'
import Button from '../Form/Button'

export default function FormWrapper() {
  return (
    <div className="mx-auto my-8 w-[90%] rounded-3xl  bg-gray-50 shadow ">
      <p className="rounded-3xl rounded-b-none bg-blue p-3 text-center text-xl font-medium text-neutral-50">
        Ingressos
      </p>
      <div className="p-5">
        <ContadorWrapper />
        <div className="grid grid-cols-5 gap-3 ">
          <Input
            title="Cupom"
            placeholder="Insira aqui um cupom de desconto"
            type="text"
            className="col-span-3"
          />
          <Input
            title="Subtotal"
            placeholder="R$0,00"
            type="text"
            className="col-span-2"
          />
        </div>
        <Input
          title="Nome"
          placeholder="Insira aqui o seu nome completo"
          type="text"
        />
        <Input
          title="Email"
          placeholder="Insira aqui o seu melhor email"
          type="text"
        />
        <div className="mx-auto my-4 w-1/2">
          <Button title="Comprar" className="w-1/2" />
        </div>
      </div>
    </div>
  )
}
