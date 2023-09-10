"use client";

import { AvatarDropzone } from "@/components/AvatarDropzone";
import { MainButton } from "@/components/Buttons/MainButton";
import { OutlineButton } from "@/components/Buttons/OutlineButton";
import { Divider } from "@/components/Divider";
import { Input } from "@/components/Inputs/Input";
import { MainBoxPage } from "@/components/MainBoxPage";
import { Sidebar } from "@/components/Sidebar";
import Link from "next/link";

interface EquipmentsProps {
  params: { clientId: string };
}

export default function CreateEquipment({ params }: EquipmentsProps) {
  return (
    <div className="flex sm:flex-col md:flex-row min-h-screen">
      <Sidebar />
      <MainBoxPage title="Novo cliente">
        <div className="flex flex-row justify-between items-center">
          <p>Novo equipamento</p>
          <p>FULANO DE TAL</p>
        </div>
        <Divider />
        <div className="flex flex-col space-y-6 w-full items-center">
          <div className="flex flex-row space-x-6 w-full justify-center">
            <div className="flex flex-col w-2/6 space-y-2">
              <Input placeholder="Produto" />
              <Input placeholder="Modelo" />
              <Input placeholder="Fabricante" />
              <Input placeholder="Local" />
            </div>
            <div className="flex flex-col w-2/6 space-y-2">
              <Input placeholder="Potência" />
              <Input placeholder="Tipo de atividade" />
              <Input placeholder="Ocupantes fixos" />
              <Input placeholder="Ocupantes móveis" />
            </div>
          </div>
          <div className="flex flex-col w-4/6 space-y-4">
            <Divider />
            <div className="flex flex-row w-full items-center justify-between space-x-4">
              <Link href={`/equipments/${params.clientId}`} className="w-full">
                <OutlineButton label="Cancelar" />
              </Link>
              <MainButton label="Cadastrar" />
            </div>
          </div>
        </div>
      </MainBoxPage>
    </div>
  );
}
