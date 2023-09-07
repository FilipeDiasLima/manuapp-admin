"use client";

import Image from "next/image";

export function ScheduleCard() {
  return (
    <div
      className="
        shadow-cards
        flex 
        flex-col 
        w-11/12 
        rounded-2xl 
        cursor-pointer 
        dark:border-none
        bg-gray-background
        dark:bg-gray-main
        duration-300
      "
    >
      <header
        className="
          flex 
          flex-row 
          p-3 
          border-b-2
          border-gray-border 
          dark:border-gray-borderDark 
          items-center 
          space-x-2
        "
      >
        <Image
          className="rounded-xl h-[50px] w-[50px] object-cover border-2 border-gray-border"
          width={40}
          height={40}
          src="https://housing.com/news/wp-content/uploads/2022/11/cafe-design-compressed-1.jpg"
          alt="place"
        />
        <p className="text-lg">Cafeteria da Opera</p>
      </header>
      <div className="flex flex-col p-3 space-y-2 mt-1">
        <div className="text-sm">
          <strong>Cliente: </strong>
          <span className="text-ellipsis overflow-hidden">
            CI Prata Ltdde mcd ecefceuh whdopci whpcihw pa
          </span>
        </div>
        <div className="text-sm w-full">
          <strong>Data: </strong>
          <span className="text-ellipsis overflow-hidden">20/03/2023</span>
        </div>
        <p className="text-sm w-full text-center text-gray-borderDark">
          Clique para abrir
        </p>
      </div>
    </div>
  );
}
