import React from 'react'
interface IItemBaner {
  title: string
  icon: React.ReactNode
}

export default function ItemBanner({ title, icon }: IItemBaner) {
  return (
    <div className="flex gap-1">
      {icon}
      <p>{title}</p>
    </div>
  )
}
