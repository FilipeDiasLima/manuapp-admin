"use client";

import { FileEdit, Trash, UserCog2Icon, Wrench } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export function EquipmentCard() {
  const router = useRouter();

  return (
    <div
      className="
        flex 
        flex-row 
        items-center 
        py-2
        border-b-2 
        border-gray-border 
        dark:border-gray-borderDark
        hover:shadow-md
        hover:scale-[1.02]
        duration-300
        shadow-black
        dark:shadow-white/10
        cursor-pointer
        w-full
      "
    >
      <p className="text-center w-[8%]">1231</p>
      <p className="text-center w-[30%]">Hi Wall - Escritório</p>
      <p className="text-center w-[30%]">12.000 btu</p>
      <p className="text-center w-[20%]">Escritório</p>
      <div className="flex justify-center w-[6%]">
        <button
          className="
          p-2 
          text-gray-main 
          dark:text-white 
          hover:shadow-md 
          shadow-black
          dark:shadow-white/10 
          rounded-lg 
          duration-300"
        >
          <FileEdit />
        </button>
      </div>
      <div className="flex justify-center w-[6%]">
        <button className="p-2 hover:shadow-md shadow-black dark:shadow-white/10 rounded-lg duration-300">
          <Trash color="#EF4949" />
        </button>
      </div>
    </div>
  );
}
