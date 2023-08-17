import React, { HTMLAttributes } from 'react'

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  title: string
  typeButton?: 'primary' | 'secondary'
}

const ButtonClass = {
  primary: 'bg-blue text-white',
  secondary: 'bg-transparent text-blue border-2 border-blue',
}

export default function Button({ title, typeButton = 'primary' }: IButton) {
  return (
    <div className="flex w-full items-center justify-center">
      <button
        className={`w-full rounded-2xl px-4 py-2 text-sm ${ButtonClass[typeButton]}`}
      >
        {title}
      </button>
    </div>
  )
}
