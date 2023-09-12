"use client";

import { MainButton } from "@/components/Buttons/MainButton";
import { OutlineButton } from "@/components/Buttons/OutlineButton";
import { Divider } from "@/components/Divider";
import { Input } from "@/components/Inputs/Input";
import { MultiSelect } from "@/components/Inputs/MultiSelect";
import { Select } from "@/components/Inputs/Select";
import { MainBoxPage } from "@/components/MainBoxPage";
import { Sidebar } from "@/components/Sidebar";
import Link from "next/link";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

const clients = [
  {
    value: "1",
    label: "Cliente DFJKWE",
  },
  {
    value: "2",
    label: "Cliente BSCV",
  },
  {
    value: "3",
    label: "Cliente 887Y",
  },
];

const techs = [
  {
    value: "1",
    label: "Vitor Kona",
  },
  {
    value: "2",
    label: "Filipe Dias",
  },
  {
    value: "3",
    label: "Eduardo GG",
  },
];

interface SelectValueProps {
  value: string;
  label: string;
}

export default function CreatePmoc() {
  const [clientSelected, setClientSelected] = useState<SelectValueProps | null>(
    null
  );
  const [techsSelected, setTechsSelected] = useState<SelectValueProps[]>([]);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone();

  const files = acceptedFiles.map((file: File, index) => (
    <p key={file.name}>
      {index + 1} - {file.name}
    </p>
  ));

  return (
    <div className="flex sm:flex-col md:flex-row min-h-screen">
      <Sidebar />
      <MainBoxPage title="Modelo PMOC">
        <div className="flex flex-row justify-between items-center">
          <p>Cadastrar novo PMOC</p>
        </div>

        <Divider />

        <div className="flex md:flex-row sm:flex-col w-full sm:space-y-2 md:space-y-0 md:space-x-4">
          <div className="flex flex-col md:w-2/6 sm:w-full space-y-2">
            <Input placeholder="Nome do documento" />
            <Select
              data={clients}
              placeholder="Clientes"
              value={clientSelected}
              onChange={(value) => setClientSelected(value)}
            />
            <MultiSelect
              data={techs}
              placeholder="Técnicos"
              value={techsSelected}
              onChange={(value) => setTechsSelected(value)}
            />
            <Input placeholder="Responsável" />
            <Input placeholder="CREA/CFT" />
          </div>
          <div className="flex flex-col md:w-2/6 sm:w-full space-y-2">
            <Input placeholder="Período" />
            <Input placeholder="Frequência" />
            <Input placeholder="ART" />
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="md:w-4/6 sm:w-full flex flex-col space-y-4">
            <Divider />
            <p>Anexos:</p>
            <div
              {...getRootProps()}
              className="
                w-full 
                flex 
                items-center 
                justify-center 
                border-dashed 
                border-2 
                border-gray-border
                dark:border-gray-borderDark
                bg-gray-background
                dark:bg-[#2D2D2D]
                py-8
                px-4
                rounded-2xl
                cursor-pointer
              "
            >
              <input {...getInputProps()} />
              <p>
                Arraste e solte aqui seus arquivos ou clique para procurá-los
              </p>
            </div>
            {files}
          </div>
        </div>
        <div className="flex flex-col md:w-4/6 sm:w-full space-y-4">
          <Divider />
          <div className="flex md:flex-row sm:flex-col-reverse w-full items-center justify-between md:space-x-4">
            <Link href="/pmocs" className="w-full sm:mt-2 md:mt-0">
              <OutlineButton label="Cancelar" />
            </Link>
            <MainButton label="Cadastrar" />
          </div>
        </div>
      </MainBoxPage>
    </div>
  );
}
