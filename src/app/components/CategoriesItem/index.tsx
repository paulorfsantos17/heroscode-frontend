import React from 'react'
interface ICategoriesItem {
  name: string
  icons: string
  // route: string
}

export default function CategoriesItem({
  icons,
  name, // route,
}: ICategoriesItem) {
  return (
    <div className=" flex cursor-pointer flex-col items-center justify-center">
      <img src={icons} alt="" className="rounded-full " />
      <p className="text-base font-medium text-violet-950">{name}</p>
    </div>
  )
}
