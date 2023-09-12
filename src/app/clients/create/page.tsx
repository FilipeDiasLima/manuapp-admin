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
    <div className="flex sm:flex-col md:flex-row min-h-screen">
      <Sidebar />
      <MainBoxPage title="Novo cliente">
        <div className="flex flex-row justify-between items-center">
          <p>Cadastrar novo cliente</p>
        </div>

        <Divider />

        <div className="flex md:flex-row sm:flex-col sm:space-y-4 md:space-y-0 md:space-x-6 w-full sm:items-center md:items-start">
          <div className="flex-1">
            <AvatarDropzone
              label="Imagem do cliente"
              onFileUploaded={() => {}}
            />
          </div>

          <div className="flex flex-col w-full space-y-6">
            <div className="flex flex-col md:w-2/6 sm:w-full space-y-2">
              <Input placeholder="Nome" />
              <Input placeholder="CPF/CNPJ" />
              <Input placeholder="E-mail" />
              <Input placeholder="Telefone" />
              <Input placeholder="Encarregado técnico" />
            </div>

            <div className="md:w-4/6 sm:w-full">
              <Divider />
            </div>

            <div className="flex md:flex-row sm:flex-col w-full sm:space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex flex-col md:w-2/6 sm:w-full space-y-2">
                <Input placeholder="CEP" />
                <Input placeholder="País" />
                <Input placeholder="Estado" />
                <Input placeholder="Cidade" />
              </div>
              <div className="flex flex-col md:w-2/6 sm:w-full space-y-2">
                <Input placeholder="Endereço" />
                <Input placeholder="Número" />
                <Input placeholder="Bairro" />
                <Input placeholder="Complemento" />
              </div>
            </div>

            <div className="flex flex-col md:w-4/6 sm:w-full space-y-4">
              <Divider />
              <div className="flex md:flex-row sm:flex-col-reverse w-full items-center justify-between md:space-x-4">
                <Link href="/clients" className="w-full sm:mt-2 md:mt-0">
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
