"use client";

import { SideBarDrawerProvider } from "@/context/Drawer";

export function Drawer({ children }: { children: React.ReactNode }) {
  return <SideBarDrawerProvider>{children}</SideBarDrawerProvider>;
}
