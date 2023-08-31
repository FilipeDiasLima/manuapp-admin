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
        p-2
        border-b-2 
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
      <p>3022</p>
      <Image
        width={50}
        height={50}
        src="https://github.com/filipediaslima.png"
        alt="avatar"
        className="object-cover rounded-xl border-2"
      />
      <p className="max-w-xs">Filipe Dias de Lima</p>
      <p className="max-w-xs">430.324.095-42</p>
      <p className="max-w-xs">000.000.000/0001-00</p>
      <p>23/07/2022</p>
      <p>Ativo</p>
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
      <button className="p-2 hover:shadow-md shadow-black dark:shadow-white/10 rounded-lg duration-300">
        <Trash color="#EF4949" />
      </button>
    </div>
  );
}
