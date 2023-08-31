import { ButtonHTMLAttributes, ReactNode } from "react";
import { Icon } from "../Icon";

interface IconButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode;
}

export function IconButton({ icon }: IconButtonProps) {
  return (
    <button
      className="
        p-3
        rounded-xl 
        border-2 
        duration-300
        border-gray-border 
        dark:border-gray-borderDark 
        hover:border-gray-main 
        hover:dark:border-white
      "
    >
      <Icon icon={icon} isMain />
    </button>
  );
}
