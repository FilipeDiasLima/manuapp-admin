import { ButtonHTMLAttributes } from "react";

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

export function MainButton({ label, type, ...rest }: MainButtonProps) {
  return (
    <button
      className="
        flex 
        flex-row 
        items-center 
        justify-center 
        space-x-2
        bg-gray-main
        text-white 
        dark:bg-white 
        dark:text-gray-main 
        rounded-2xl 
        w-full 
        py-5 
        hover:bg-gray-mainDark 
        duration-300
      "
      {...rest}
    >
      {label}
    </button>
  );
}
