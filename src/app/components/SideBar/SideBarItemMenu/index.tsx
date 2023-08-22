import Link from 'next/link'
import React from 'react'
interface ISideBarItemMenu {
  title: string
  icon: React.ReactNode
  route: string
}

export default function SideBarItemMenu({
  title,
  icon,
  route,
}: ISideBarItemMenu) {
  return (
    <Link href={route}>
      <div className="mb-9 flex cursor-pointer flex-col items-center justify-center transition hover:opacity-70">
        {icon}
        <span className="text-center">{title}</span>
      </div>
    </Link>
  )
}
