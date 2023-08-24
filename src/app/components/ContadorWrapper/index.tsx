'use client'
import React, { useState } from 'react'

export default function ContadorWrapper() {
  const [cont, setCont] = useState<number>(1)
  const handleAddCont = () => {
    setCont(cont + 1)
  }
  const handleSubtractCont = () => {
    if (cont <= 1) return setCont(1)
    setCont(cont - 1)
  }
  return (
    <div className="mb-4 flex items-center justify-between">
      <div>
        <p className="text-lg font-bold">Pista</p>
        <p className="text-xs font-light">
          Entrada e acesso á pista do evento.
        </p>
      </div>
      <div className="flex gap-3">
        <p
          onClick={handleSubtractCont}
          className="h-8 w-8 cursor-pointer rounded bg-blue text-center text-2xl font-medium text-white"
        >
          -
        </p>
        <input
          value={cont}
          type="text"
          className="h-8 w-8  rounded border-2 border-gray-300 bg-white text-center font-medium"
        />

        <p
          onClick={handleAddCont}
          className="h-8 w-8 cursor-pointer rounded bg-blue text-center text-2xl font-medium text-white"
        >
          +
        </p>
      </div>
    </div>
  )
}
