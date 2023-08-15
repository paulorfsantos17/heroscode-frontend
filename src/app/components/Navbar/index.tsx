import React from "react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="bg-blue flex mx-auto px-6 top-0  w-full h-16 items-center fixed z-30">
      <Image
        src="/logo.png"
        alt="Logo Hero Tickets"
        width={200}
        height={200}
        className="mr-24"
      />
      <div className="flex items-center w-1/2">
        <input
          className="w-full rounded-md px-3 py-2 text-sm font-normal"
          placeholder="Insira o nome ou endereço do seu evento por aqui! :)"
          type="text"
        />
      </div>
    </nav>
  );
}
