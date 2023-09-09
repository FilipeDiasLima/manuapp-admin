"use client";

import { Check, FileDown, FileEdit, Trash } from "lucide-react";
import { Icon } from "../Icon";

export function PmocCard() {
  return (
    <div
      className="
      flex 
      flex-row 
      items-center 
      justify-between 
      py-2
      border-b-2 
      w-full
      border-gray-border 
      dark:border-gray-borderDark
      hover:shadow-md
      hover:scale-[1.02]
      duration-300
      shadow-black
      dark:shadow-white/10
      cursor-pointer
      "
    >
      <p className="text-center w-[5%]">3022</p>
      <p className="text-center w-[18%]">Cafeteria (2023)</p>
      <p className="text-center w-[17%]">Cl Prata Lpa</p>
      <p className="text-center w-[7%]">Agosto</p>
      <p className="text-center w-[10%]">Em andamento</p>
      <div className="flex flex-col items-center justify-center w-[13%]">
        <p className="text-center">Vitor Kona</p>
        <p className="text-center">Filipe Dias</p>
        <p className="text-center">Eduardo Cici</p>
      </div>
      <div className="text-center w-[6%]">
        <button
          className="
            p-2 
            text-gray-main 
            dark:text-white 
            hover:shadow-md 
            shadow-black
            dark:shadow-white/10 
            rounded-lg 
            duration-300
          "
        >
          <Icon isMain icon={<FileDown />} />
        </button>
      </div>
      <div className="text-center w-[6%]">
        <button
          className="
            p-2 
            text-gray-main 
            dark:text-white 
            hover:shadow-md 
            shadow-black
            dark:shadow-white/10 
            rounded-lg 
            duration-300
          "
        >
          <Icon isMain icon={<FileDown />} />
        </button>
      </div>
      <div className="text-center w-[6%]">
        <button
          className="
            p-2 
            text-gray-main 
            dark:text-white 
            hover:shadow-md 
            shadow-black
            dark:shadow-white/10 
            rounded-lg 
            duration-300
          "
        >
          <Check color="#00B169" />
        </button>
      </div>
      <div className="text-center w-[6%]">
        <button
          className="
              p-2 
            text-gray-main 
            dark:text-white 
            hover:shadow-md 
            shadow-black
            dark:shadow-white/10 
            rounded-lg 
            duration-300
          "
        >
          <FileEdit />
        </button>
      </div>
      <div className="text-center w-[6%]">
        <button className="p-2 hover:shadow-md shadow-black dark:shadow-white/10 rounded-lg duration-300">
          <Trash color="#EF4949" />
        </button>
      </div>
    </div>
  );
}
