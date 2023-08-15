import React, { HtmlHTMLAttributes } from 'react'
interface ICheckbox extends HtmlHTMLAttributes<HTMLInputElement> {
  title: string
}

export default function Checkbox({ title, ...rest }: ICheckbox) {
  return (
    <div className="flex items-center">
      <input
        className="relative mr-1 h-4 w-4 rounded border border-gray-300 bg-white"
        type="checkbox"
        {...rest}
      />
      <label className="text-xs font-normal leading-tight text-zinc-800">
        {title}
      </label>
    </div>
  )
}
