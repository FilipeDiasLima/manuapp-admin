import { Trash, UserCog2Icon, Wrench } from "lucide-react";
import Image from "next/image";

export function ClientCard() {
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
      <p>1231</p>
      <Image
        width={50}
        height={50}
        src="https://housing.com/news/wp-content/uploads/2022/11/cafe-design-compressed-1.jpg"
        alt="avatar"
        className="object-cover object-center w-[50px] h-[50px] rounded-xl border-2"
      />
      <p className="max-w-xs">Cl Prata Ltda</p>
      <p className="max-w-xs">suporte@clprata.com.br</p>
      <p>(92) 9 9202-3441</p>
      <p>23/07/2022</p>
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
        <Wrench />
      </button>
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
