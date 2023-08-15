import React from "react";
import ItemBanner from "../ItemBanner";
import Calendar from "@/app/assets/Calendar";
import Clock from "@/app/assets/Clock";
import MapPin from "@/app/assets/MapPin";

export default function BannerSecondary() {
  return (
    <div className="rounded p-5">
      <div className="w-full h-[150px] bg-black bg-opacity-25 rounded-3xl shadow relative">
        <div className="p-3 text-neutral-50 ml-2">
          <p className="font-semibold text-2xl">Jorge e Matheus</p>
          <div className="mr-4 flex gap-3 text-xs font-medium">
            <ItemBanner
              icon={<Calendar className="w-4 h-4" />}
              title="08/07/2023"
            />
            <ItemBanner icon={<Clock className="w-4 h-4" />} title="14h" />
          </div>
          <div className="absolute bottom-0 pb-2 text-xs font-medium">
            <ItemBanner
              icon={<MapPin className="w-4 h-4" />}
              title="Mineirão - Belo Horizonte"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
