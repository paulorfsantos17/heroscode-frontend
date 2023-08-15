import React from "react";
interface ICAtegoriesItem {
  name: string;
  icons: string;
  route: string;
}

export default function CategoriesItem({
  icons,
  name,
  route,
}: ICAtegoriesItem) {
  return (
    <div className=" flex flex-col items-center justify-center cursor-pointer">
      <img src={icons} alt="" className="rounded-full " />
      <p className="text-violet-950 text-base font-medium">{name}</p>
    </div>
  );
}
