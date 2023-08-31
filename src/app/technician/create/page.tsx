"use client";

import { AvatarDropzone } from "@/components/AvatarDropzone";
import { MainButton } from "@/components/Buttons/MainButton";
import { OutlineButton } from "@/components/Buttons/OutlineButton";
import { Divider } from "@/components/Divider";
import { Input } from "@/components/Inputs/Input";
import { MainBoxPage } from "@/components/MainBoxPage";
import { Sidebar } from "@/components/Sidebar";
import Link from "next/link";

export default function CreateUser() {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <MainBoxPage title="Novo técnico">
        <div className="flex flex-row justify-between items-center">
          <p>Cadastrar novo técnico</p>
        </div>
        <Divider />
        <div className="flex flex-row space-x-6 w-full">
          <div className="flex-1">
            <AvatarDropzone
              label="Imagem do técnico"
              onFileUploaded={() => {}}
            />
          </div>
          <div className="flex flex-col w-full space-y-6">
            <div className="flex flex-row w-full space-x-4">
              <div className="flex flex-col w-2/6 space-y-2">
                <Input placeholder="Nome" />
                <Input placeholder="CPF/CNPJ" />
                <Input placeholder="E-mail" />
                <Input placeholder="Telefone" />
              </div>
              <div className="flex flex-col w-2/6 space-y-2">
                <Input placeholder="Empresa" />
                <Input placeholder="CREA/CFT" />
                <Input placeholder="Periodo de contrato" />
                <Input placeholder="Status" />
              </div>
            </div>

            <div className="w-4/6">
              <Divider />
            </div>

            <div className="flex flex-row w-full space-x-4">
              <div className="flex flex-col w-2/6 space-y-2">
                <Input placeholder="CEP" />
                <Input placeholder="País" />
                <Input placeholder="Estado" />
                <Input placeholder="Cidade" />
              </div>
              <div className="flex flex-col w-2/6 space-y-2">
                <Input placeholder="Endereço" />
                <Input placeholder="Número" />
                <Input placeholder="Bairro" />
                <Input placeholder="Complemento" />
              </div>
            </div>

            <div className="flex flex-col w-4/6 space-y-4">
              <Divider />
              <div className="flex flex-row w-full items-center justify-between space-x-4">
                <Link href="/technician" className="w-full">
                  <OutlineButton label="Cancelar" />
                </Link>
                <MainButton label="Cadastrar" />
              </div>
            </div>
          </div>
        </div>
      </MainBoxPage>
    </div>
  );
}
