import { SidebarDrawerContext } from "@/context/Drawer";
import { useContext } from "react";

export function useSidebar() {
  const context = useContext(SidebarDrawerContext);
  return context;
}
