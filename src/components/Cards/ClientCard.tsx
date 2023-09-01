import { Trash, UserCog2Icon, Wrench } from "lucide-react";
import Image from "next/image";

export function ClientCard() {
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
      <p className="text-center w-[5%]">1231</p>
      <div className="flex justify-center w-[10%]">
        <Image
          width={50}
          height={50}
          src="https://housing.com/news/wp-content/uploads/2022/11/cafe-design-compressed-1.jpg"
          alt="avatar"
          className="object-cover object-center w-[50px] h-[50px] rounded-xl border-2"
        />
      </div>
      <p className="text-center w-[21%]">Cl Prata Ltda</p>
      <p className="text-center w-[17%]">suporte@clprata.com.br</p>
      <p className="text-center w-[15%]">(92) 9 9202-3441</p>
      <p className="text-center w-[12%]">23/07/2022</p>
      <div className="flex justify-center w-[10%]">
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
      </div>
      <div className="flex justify-center w-[5%]">
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
      <div className="flex justify-center w-[5%]">
        <button className="p-2 hover:shadow-md shadow-black dark:shadow-white/10 rounded-lg duration-300">
          <Trash color="#EF4949" />
        </button>
      </div>
    </div>
  );
}
