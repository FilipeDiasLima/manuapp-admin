import Image from "next/image";

import { Icon } from "@/components/Icon";
import { Input } from "@/components/Inputs/Input";
import { Lock, Mail } from "lucide-react";
import MaintenanceSVG from "../../assets/Maintenance-login.svg";
import { MainButton } from "@/components/Buttons/MainButton";
import { ThemeSwitcher } from "@/components/Buttons/ThemeSwitcher";
import Link from "next/link";
import { OutlineButton } from "@/components/Buttons/OutlineButton";
import { Divider } from "@/components/Divider";

export default function Login() {
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
          min-h-[calc(100vh_-_10rem)] 
          sm:flex-col-reverse
          md:flex-row 
          items-center 
          justify-between 
          sm:space-y-2 
          md:space-y-0 
          md:space-x-6 
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
            sm:min-h-[calc(100vh_-_6rem)] 
            md:min-h-0 
            items-start 
            md:justify-start 
            sm:justify-between 
            sm:space-y-10 
            xl:space-y-14 
            2xl:space-y-[200px]
          "
        >
          <div className="flex flex-col space-y-12 items-center w-full">
            <div className="sm:w-full md:w-2/4 flex flex-col items-center space-y-6">
              <h2 className="text-xl font-bold">Entre na sua conta</h2>

              <Divider />

              <Input
                placeholder="E-mail"
                type="email"
                icon={<Icon icon={<Mail />} />}
                value="admin@admin.com"
              />

              <Input
                placeholder="Senha"
                type="password"
                icon={<Icon icon={<Lock />} />}
                value="123123"
              />

              <Link href="/dashboard" className="w-full">
                <MainButton label="Entrar" />
              </Link>

              <p>
                Está com problemas para entrar?{" "}
                <Link href="/login" className="underline">
                  Clique aqui
                </Link>
              </p>

              <Divider />

              <p>Ainda não possui conta?</p>

              <Link href="/register" className="w-full">
                <OutlineButton label="Cadastrar-se" />
              </Link>
            </div>
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
