'use client'
import React, { ChangeEvent, useState } from 'react'
interface IInputFile {
  onChange: (e: File) => void
}

export default function InputFile({ onChange }: IInputFile) {
  const [preview, setPreview] = useState<string>('')
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files?.[0] || null
    if (image) {
      const reader = new FileReader()
      reader.onloadend = (e) => {
        const base64String = e.target?.result
        setPreview(base64String as string)
      }
      reader.readAsDataURL(image)
      onChange(image)
    }
  }
  return (
    <>
      {preview ? (
        <div
          style={{ backgroundImage: `url(${preview})` }}
          className="h-full w-full cursor-pointer rounded-3xl bg-cover bg-center"
        ></div>
      ) : (
        <input
          onChange={handleChange}
          type="file"
          className="block h-full w-full cursor-pointer rounded-3xl opacity-0  group-hover:border-teal-300"
        />
      )}
    </>
  )
}
