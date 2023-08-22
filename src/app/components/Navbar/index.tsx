'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [search, setSearch] = useState<string>()
  const router = useRouter()

  const handleSubmit = () => {
    const queryString = encodeURIComponent(search as string | number | boolean)
    router.push(`/filter-events?q=${queryString}`)
  }

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
          onKeyDown={(e) => {
            if (e.key === 'Enter') {
              handleSubmit()
            }
          }}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </nav>
  )
}
