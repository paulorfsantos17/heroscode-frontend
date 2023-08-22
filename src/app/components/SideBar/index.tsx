import React from 'react'

import { AiOutlineHome } from 'react-icons/ai'
import { LiaMapMarkedSolid } from 'react-icons/lia'
import { MdOutlineAddBox, MdOutlinePrivacyTip } from 'react-icons/md'
import { FiFilter } from 'react-icons/fi'
import { BsQuestionCircle } from 'react-icons/bs'

import SideBarItemMenu from './SideBarItemMenu'

export default function SideBar() {
  return (
    <aside className="sidebar fixed bottom-0 right-0 top-16 z-10 h-screen w-[90px] overflow-y-auto bg-gray-100 text-xs text-blue shadow">
      <div className="h-full overflow-y-auto px-3 py-4">
        <SideBarItemMenu
          title="Home"
          icon={<AiOutlineHome size={30} />}
          route="/"
        />
        <SideBarItemMenu
          title="Mapa"
          icon={<LiaMapMarkedSolid size={30} />}
          route="/maps"
        />
        <SideBarItemMenu
          title="Adicionar Evento"
          icon={<MdOutlineAddBox size={30} />}
          route="/create-event"
        />
        <SideBarItemMenu
          title="Filtrar Eventos"
          icon={<FiFilter size={30} />}
          route="/filter-events"
        />
        <SideBarItemMenu
          title="SAC"
          icon={<BsQuestionCircle size={30} />}
          route="/"
        />
        <SideBarItemMenu
          title="Privacidade"
          icon={<MdOutlinePrivacyTip size={30} />}
          route="/"
        />
      </div>
    </aside>
  )
}
