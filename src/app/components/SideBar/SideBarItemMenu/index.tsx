import React from 'react'
interface ISideBarItemMenu {
  title: string
  icon: React.ReactNode
}

export default function SideBarItemMenu({ title, icon }: ISideBarItemMenu) {
  return (
    <div className="mb-9 flex cursor-pointer flex-col items-center justify-center transition hover:opacity-70">
      {icon}
      <span className="text-center">{title}</span>
    </div>
  )
}
