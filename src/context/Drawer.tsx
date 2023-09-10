"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

interface SideBarDrawerProviderProps {
  children: ReactNode;
}

type SidebarDrawerContextProps = {
  isOpen: boolean;
  isMobile: boolean;
  onOpen: () => void;
  onClose: () => void;
};

export const SidebarDrawerContext = createContext(
  {} as SidebarDrawerContextProps
);

export function SideBarDrawerProvider({
  children,
}: SideBarDrawerProviderProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  function onOpen() {
    setIsOpen(true);
  }

  function onClose() {
    setIsOpen(false);
  }

  useEffect(() => {
    setIsMobile(window.innerWidth <= 500);
  }, []);

  return (
    <SidebarDrawerContext.Provider
      value={{ isOpen, isMobile, onOpen, onClose }}
    >
      {children}
    </SidebarDrawerContext.Provider>
  );
}
