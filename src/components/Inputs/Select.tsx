"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { Icon } from "../Icon";

interface ValueProps {
  id: number;
  name: string;
}

interface SelectProps {
  label: string;
  itens: ValueProps[];
}

export function Select({ label, itens }: SelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState({} as ValueProps);

  return (
    <div className="relative">
      <button
        className="
          flex 
          space-x-2 
          flex-row 
          w-full 
          rounded-2xl 
          p-3
          bg-transparent 
          border-2 
          justify-between
          border-gray-border
          dark:border-gray-borderDark
          focus-within:border-gray-borderDark
          focus-within:dark:border-white
        "
        onClick={() => setIsOpen(!isOpen)}
      >
        <p
          className={`
            ${
              value.id
                ? "text-gray-main dark:text-white"
                : "text-gray-main/50 dark:text-gray-200/50"
            }
          `}
        >
          {value.name ?? label}
        </p>
        {isOpen ? (
          <Icon icon={<ChevronUp />} />
        ) : (
          <Icon icon={<ChevronDown />} />
        )}
      </button>
      {isOpen && (
        <div
          className="
          flex 
          flex-col
          rounded-2xl 
          border-2 
          border-gray-border 
          dark:border-gray-border
          bg-white
          dark:bg-[#2D2D2D]
          absolute
          z-10
          w-full
          top-14
          overflow-hidden
        "
        >
          {itens.map((item) => (
            <p
              key={item.id}
              className="
                cursor-pointer
                p-3
                hover:bg-gray-background 
                hover:dark:bg-gray-backgroundDark 
                duration-300
              "
              onClick={() => {
                setValue(item);
                setIsOpen(false);
              }}
            >
              {item.name}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
