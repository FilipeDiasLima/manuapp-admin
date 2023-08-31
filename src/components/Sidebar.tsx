"use client";

import Image from "next/image";
import Link from "next/link";

import {
  BarChartBig,
  FileText,
  HardHat,
  LayoutPanelLeft,
  LogOut,
  Users2,
} from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";
import Logo from "../assets/logo.svg";
import { OutlineButton } from "./Buttons/OutlineButton";
import { ThemeSwitcher } from "./Buttons/ThemeSwitcher";
import { Divider } from "./Divider";
import { Icon } from "./Icon";

export function Sidebar() {
  const pathname = usePathname();

  const { theme } = useTheme();

  return (
    <div
      className="
        flex 
        flex-col 
        p-8 
        w-[270px]
        bg-white 
        dark:bg-gray-backgroundDark 
        min-h-screen 
        justify-between
        fixed
      "
    >
      {/* Top */}
      <div className="flex flex-col w-full space-y-20">
        {/* Logo */}
        <div className="flex flex-row items-center justify-center">
          <Image
            src={Logo}
            alt="Logo"
            className="animate-spin ease-linear slower-animation dark:invert"
          />
          <p className="text-2xl">ManuApp</p>
        </div>

        {/* Links */}
        <div className="flex flex-col space-y-2 max-w-[200px]">
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
        <div className="flex flex-row items-center justify-start space-x-2">
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
  );
}
