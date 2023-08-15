import React from 'react'

export default function Footer() {
  return (
    <div className="text-normal fixed bottom-0 flex h-7 w-full items-center justify-end gap-2 bg-blue px-4 pr-32 font-light text-white ">
      <p>Hero Tickets ® {new Date().getFullYear()} | </p>
      <p> Todos os Direitos Reservados</p>
    </div>
  )
}
