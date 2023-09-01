import { Trash, UserCog2Icon } from "lucide-react";
import Image from "next/image";

export function UserCard() {
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
      <div className="flex justify-center items-center w-[10%]">
        <Image
          width={50}
          height={50}
          src="https://github.com/filipediaslima.png"
          alt="avatar"
          className="object-cover rounded-xl border-2"
        />
      </div>
      <p className="text-center w-[25%]">Filipe Dias de Lima</p>
      <p className="text-center w-[15%]">430.324.095-42</p>
      <p className="text-center w-[15%]">000.000.000/0001-00</p>
      <p className="text-center w-[12%]">23/07/2022</p>
      <p className="text-center w-[8%]">Ativo</p>
      <div className="flex justify-center items-center w-[5%]">
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
          <UserCog2Icon />
        </button>
      </div>
      <div className="flex justify-center items-center w-[5%]">
        <button className="p-2 hover:shadow-md shadow-black dark:shadow-white/10 rounded-lg duration-300">
          <Trash color="#EF4949" />
        </button>
      </div>
    </div>
  );
}
