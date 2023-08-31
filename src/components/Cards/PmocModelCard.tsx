import { FileEdit, Trash } from "lucide-react";

export function PmocModelCard() {
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
      <p>411</p>
      <p className="max-w-xs">VRV/VRF CONDENSADO</p>
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
        <FileEdit />
      </button>
      <button className="p-2 hover:shadow-md shadow-black dark:shadow-white/10 rounded-lg duration-300">
        <Trash color="#EF4949" />
      </button>
    </div>
  );
}
