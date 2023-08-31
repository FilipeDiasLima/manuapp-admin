"use client";

import { useTheme } from "next-themes";
import { ReactNode } from "react";

interface IconProps {
  icon: ReactNode;
  isMain?: boolean;
}

export function Icon({ icon, isMain = false }: IconProps) {
  const { theme } = useTheme();

  return (
    <div
      style={{
        color:
          theme === "light"
            ? isMain
              ? "#2C2C2C"
              : "#D9D9D9"
            : isMain
            ? "#FFF"
            : "#828282",
      }}
    >
      {icon}
    </div>
  );
}
