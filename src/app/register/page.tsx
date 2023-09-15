import Image from "next/image";

import { MainButton } from "@/components/Buttons/MainButton";
import { OutlineButton } from "@/components/Buttons/OutlineButton";
import { ThemeSwitcher } from "@/components/Buttons/ThemeSwitcher";
import { Divider } from "@/components/Divider";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Inputs/Input";
import {
  Building,
  Building2,
  Globe,
  Lock,
  Mail,
  Map,
  MapPin,
  PanelTopInactive,
  School2,
  User2,
  Warehouse,
} from "lucide-react";
import Link from "next/link";
import MaintenanceSVG from "../../assets/Maintenance-login.svg";

export default function Register() {
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
            <div className="sm:w-full md:w-2/4 flex flex-col items-center space-y-4">
              <h2 className="text-xl font-bold">Cadastrar uma conta</h2>

              <Divider />

              <Input
                placeholder="Nome da empresa"
                type="text"
                icon={<Icon icon={<User2 />} />}
              />

              <Input
                placeholder="E-mail"
                type="email"
                icon={<Icon icon={<Mail />} />}
              />

              <Input
                placeholder="Senha"
                type="password"
                icon={<Icon icon={<Lock />} />}
              />

              <Input
                placeholder="CNPJ"
                type="text"
                icon={<Icon icon={<PanelTopInactive />} />}
              />

              <div className="flex flex-col w-full space-y-4">
                <div className="flex sm:flex-col md:flex-row sm:space-y-2 md:space-y-0 md:space-x-2">
                  <div className="sm:w-full lg:w-[49.3%]">
                    <Input
                      placeholder="CEP"
                      type="text"
                      icon={<Icon icon={<MapPin />} />}
                    />
                  </div>

                  <div className="sm:w-full lg:w-[49.3%]">
                    <Input
                      placeholder="Bairro"
                      type="text"
                      icon={<Icon icon={<Building2 />} />}
                    />
                  </div>
                </div>

                <Input
                  placeholder="Endereço"
                  type="text"
                  icon={<Icon icon={<Building />} />}
                />

                <div className="flex sm:flex-col md:flex-row sm:space-y-2 md:space-y-0 md:space-x-2">
                  <div className="sm:w-full lg:w-[49.3%]">
                    <Input
                      placeholder="Número"
                      type="text"
                      icon={<Icon icon={<Warehouse />} />}
                    />
                  </div>

                  <div className="sm:w-full lg:w-[49.3%]">
                    <Input
                      placeholder="Cidade"
                      type="text"
                      icon={<Icon icon={<School2 />} />}
                    />
                  </div>
                </div>

                <div className="flex sm:flex-col md:flex-row sm:space-y-2 md:space-y-0 md:space-x-2">
                  <div className="sm:w-full lg:w-[49.3%]">
                    <Input
                      placeholder="Estado"
                      type="text"
                      icon={<Icon icon={<Map />} />}
                    />
                  </div>

                  <div className="sm:w-full lg:w-[49.3%]">
                    <Input
                      placeholder="País"
                      type="text"
                      icon={<Icon icon={<Globe />} />}
                    />
                  </div>
                </div>
              </div>

              <MainButton label="Cadastrar" />

              <Divider />

              <p>Já possui conta?</p>

              <Link href="/login" className="w-full">
                <OutlineButton label="Entrar" />
              </Link>
            </div>
          </div>
        </div>
        <Image
          src={MaintenanceSVG}
          alt="HomeSVG"
          className="sm:w-[200px] md:w-[600px] lg:w-auto"
        />
      </main>
    </>
  );
}
