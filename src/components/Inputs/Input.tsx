import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  icon?: ReactNode;
  hasButton?: boolean;
  buttonLabel?: string;
}

export function Input({ icon, hasButton, buttonLabel, ...rest }: InputProps) {
  return (
    <div
      className="
        flex 
        space-x-2 
        flex-row 
        w-full 
        rounded-2xl 
        p-3
        bg-transparent 
        border-2 
        border-gray-border
        dark:border-gray-borderDark
        focus-within:border-gray-borderDark
        focus-within:dark:border-white
        relative
      "
    >
      {icon}
      <input
        className={`bg-transparent outline-none ${
          hasButton ? "flex-[0.9]" : "flex-1"
        }`}
        {...rest}
      />
      {hasButton && (
        <button
          className="
            absolute 
            rounded-xl 
            bg-gray-border 
            text-gray-main 
            dark:bg-white 
            p-2 
            right-1 
            top-1
          "
        >
          {buttonLabel}
        </button>
      )}
    </div>
  );
}
