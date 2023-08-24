'use client'
import React, { useState } from 'react'
import { Input } from '../Input/Index'

interface IAutoCompleteProps {
  onSelect: any
}

export default function InputAutoComplete({ onSelect }: IAutoCompleteProps) {
  const [suggestions, setSuggestions] = useState([])
  const [inputValue, setInputValue] = useState('')
  const handleChangeInput = async (value: string) => {
    setInputValue(value)
    const fetchSuggestions = await fetch(`/api?input=${value}`, {
      method: 'GET',
    })
    const data = await fetchSuggestions.json()

    setSuggestions(data.predictions)
  }

  const handleSelect = async (address: any) => {
    setInputValue(address.description)
    setSuggestions([])
    try {
      const response = await fetch(`/api/maps?placeId=${address.place_id}`, {
        method: 'GET',
      })
      const data = await response.json()
      if (data.result.geometry.location) {
        onSelect(data.result.geometry.location)
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      <Input
        title="Localização"
        placeholder="Insira o endereçõ do seu evento"
        type="input"
        value={inputValue}
        onChange={(e) => handleChangeInput(e.target.value)}
      />
      <ul className="rounded bg-white shadow">
        {suggestions.map((suggestion: any, key) => (
          <li
            className=" cursor-pointer p-2 hover:bg-gray-100"
            key={key}
            onClick={() => handleSelect(suggestion)}
          >
            {suggestion.description}
          </li>
        ))}
      </ul>
    </>
  )
}
