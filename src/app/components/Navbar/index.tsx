import React from 'react'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="fixed top-0 z-30 mx-auto flex  h-16 w-full items-center bg-blue px-6">
      <Image
        src="/logo.png"
        alt="Logo Hero Tickets"
        width={200}
        height={200}
        className="mr-24"
      />
      <div className="flex w-1/2 items-center">
        <input
          className="w-full rounded-md px-3 py-2 text-sm font-normal"
          placeholder="Insira o nome ou endereço do seu evento por aqui! :)"
          type="text"
        />
      </div>
    </nav>
  )
}
