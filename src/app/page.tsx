import Image from "next/image";

import { MainButton } from "@/components/Buttons/MainButton";
import { OutlineButton } from "@/components/Buttons/OutlineButton";
import Link from "next/link";
import MaintenanceSVG from "../assets/Maintenance-home.svg";
import { ThemeSwitcher } from "@/components/Buttons/ThemeSwitcher";

export default function Home() {
  return (
    <>
      <header className="flex flex-row items-center justify-between px-4 py-3 shadow-lg">
        <Link href="/">
          <h1 className="text-3xl font-bold w-full items-start">ManuApp</h1>
        </Link>
        <ThemeSwitcher />
      </header>
      <main
        className="
        flex 
        min-h-[calc(100vh_-_12rem)] 
        sm:flex-col-reverse 
        md:flex-row 
        sm:items-center 
        md:items-center 
        justify-between 
        sm:space-y-2 
        md:space-y-0 
        sm:px-10 
        sm:py-2 
        md:p-18
      "
      >
        <div
          className="
            flex 
            flex-col 
            flex-1 
            md:min-h-0 
            items-center 
            md:justify-start 
            sm:space-y-4
          "
        >
          <div className="flex flex-col space-y-4 items-center">
            <h1 className="text-3xl font-bold text-center">
              Bem-vindo ao ManuApp
            </h1>
            <h3 className="text-lg sm:w-full md:w-3/4 text-center">
              Acesse o painel administrativo pelo login ou cadastre sua empresa
              na plataforma.
            </h3>
          </div>
          <div className="flex flex-col sm:w-full md:w-2/4 space-y-3">
            <Link href="/">
              <MainButton label="Cadastrar" type="button" />
            </Link>
            <Link href="/login">
              <OutlineButton label="Entrar" type="button" />
            </Link>
          </div>
        </div>
        <Image
          src={MaintenanceSVG}
          alt="HomeSVG"
          className="sm:w-[200px] md:w-auto"
        />
      </main>
    </>
  );
}
