import { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "../Icon";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
  small?: boolean;
}

export function IconButton({ icon, small = false, ...rest }: IconButtonProps) {
  return (
    <button
      className={`
        flex
        items-center
        justify-center
        ${small ? "p-2" : "p-3"}
        ${small ? "rounded-lg " : "rounded-xl "}
        border-2 
        duration-300
        border-gray-border 
        dark:border-gray-borderDark 
        hover:border-gray-main 
        hover:dark:border-white
        w-full
      `}
      {...rest}
    >
      <Icon icon={icon} isMain />
    </button>
  );
}
