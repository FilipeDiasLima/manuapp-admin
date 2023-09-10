"use client";

import Image from "next/image";

import Logo from "../assets/logo.svg";
import { useSidebar } from "@/hooks/useSidebar";
import { ThemeSwitcher } from "./Buttons/ThemeSwitcher";
import { Divider } from "./Divider";
import { OutlineButton } from "./Buttons/OutlineButton";
import { Icon } from "./Icon";
import {
  BarChartBig,
  FileText,
  HardHat,
  LayoutPanelLeft,
  LogOut,
  Users2,
  X,
} from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { usePathname, useRouter } from "next/navigation";

export function SidebarMobile() {
  const router = useRouter();
  const pathname = usePathname();

  const { theme } = useTheme();
  const { isOpen, onClose } = useSidebar();

  return (
    <div
      className={`
        flex
        bg-[#101010a1]
        fixed
        z-20
        top-0
        bottom-0
        left-0
        right-0
        w-full
        transition-all
        duration-500
        transform 
        -translate-x-full
        ${isOpen ? "translate-x-0" : ""}
      `}
    >
      <div
        className={`
          flex 
          flex-col 
          p-8 
          w-3/4
          bg-white 
          dark:bg-gray-backgroundDark 
          min-h-screen 
          justify-between
        `}
      >
        <div className="flex flex-row w-full justify-between items-center">
          <p className="text-xl">Menu</p>
          <X onClick={onClose} />
        </div>

        <div className="flex flex-col w-full space-y-10">
          <div className="flex flex-col space-y-2">
            <Link
              href="/dashboard"
              className={`
                  flex 
                  flex-row 
                  items-center 
                  justify-start 
                  rounded-xl
                  ${
                    pathname === "/dashboard"
                      ? "bg-gray-main text-white dark:bg-white dark:text-gray-main"
                      : "bg-transparent text-gray-main dark:text-white"
                  }
                  p-4
                  w-full
                  space-x-2
                  hover:shadow-md
                shadow-black
                dark:shadow-white/10
                  duration-200
                `}
            >
              <BarChartBig />
              <p>Dashboard</p>
            </Link>

            <Link
              href="/technician"
              className={`
                  flex 
                  flex-row 
                  items-center 
                  justify-start 
                  rounded-xl
                  ${
                    pathname === "/technician"
                      ? "bg-gray-main text-white dark:bg-white dark:text-gray-main"
                      : "bg-transparent text-gray-main dark:text-white"
                  }
                  p-4
                  w-full
                  space-x-2
                  hover:shadow-md
                shadow-black
                dark:shadow-white/10
                  duration-200
                `}
            >
              <HardHat />
              <p>Técnicos</p>
            </Link>

            <Link
              href="/clients"
              className={`
                flex 
                flex-row 
                items-center 
                justify-start 
                rounded-xl
                ${
                  pathname === "/clients"
                    ? "bg-gray-main text-white dark:bg-white dark:text-gray-main"
                    : "bg-transparent text-gray-main dark:text-white"
                }
                p-4
                w-full
                space-x-2
                hover:shadow-md
              shadow-black
              dark:shadow-white/10
                duration-200
          `}
            >
              <Users2 />
              <p>Clientes</p>
            </Link>

            <Link
              href="/pmocs"
              className={`
            flex 
            flex-row 
            items-center 
            justify-start 
            rounded-xl
            ${
              pathname === "/pmocs"
                ? "bg-gray-main text-white dark:bg-white dark:text-gray-main"
                : "bg-transparent text-gray-main dark:text-white"
            }
            p-4
            w-full
            space-x-2
            hover:shadow-md
          shadow-black
          dark:shadow-white/10
            duration-200
          `}
            >
              <FileText />
              <p>PMOCs</p>
            </Link>

            <Link
              href="/models"
              className={`
            flex 
            flex-row 
            items-center 
            justify-start 
            rounded-xl
            ${
              pathname === "/models"
                ? "bg-gray-main text-white dark:bg-white dark:text-gray-main"
                : "bg-transparent text-gray-main dark:text-white"
            }
            p-4
            w-full
            space-x-2
            hover:shadow-md
          shadow-black
          dark:shadow-white/10
            duration-200
          `}
            >
              <LayoutPanelLeft />
              <p>Modelos</p>
            </Link>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col w-full space-y-6">
          <div
            className="flex flex-row items-center justify-start space-x-2 cursor-pointer"
            onClick={() => router.push("/profile")}
          >
            <Image
              width={50}
              height={50}
              src="https://github.com/filipediaslima.png"
              alt="Avatar"
              className="rounded-xl border-2 border-gray-border"
            />
            <div className="flex flex-col space-y-1">
              <p>Filipe Dias</p>
              <p className="text-green-600 text-sm">Online</p>
            </div>
          </div>

          <div className="flex flex-row space-x-3 items-center">
            <ThemeSwitcher />
            <p className="capitalize">{theme}</p>
          </div>

          <Divider />

          <div>
            <OutlineButton
              label="Sair"
              icon={<Icon isMain icon={<LogOut />} />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
