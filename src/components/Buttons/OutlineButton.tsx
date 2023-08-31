import { ButtonHTMLAttributes, ReactNode } from "react";

interface MainButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  icon?: ReactNode;
}

export function OutlineButton({ label, icon, ...rest }: MainButtonProps) {
  return (
    <button
      type="button"
      className="
        flex 
        flex-row 
        items-center 
        justify-center 
        space-x-2 
        bg-transparent 
        text-gray-main 
        dark:text-white 
        border-gray-border 
        dark:border-white 
        border-2 
        rounded-2xl 
        w-full 
        py-5 
        hover:border-gray-main 
        duration-300
      "
      {...rest}
    >
      {icon}
      <p>{label}</p>
    </button>
  );
}
