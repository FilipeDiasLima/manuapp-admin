import { MainButton } from "@/components/Buttons/MainButton";
import { OutlineButton } from "@/components/Buttons/OutlineButton";
import { Divider } from "@/components/Divider";
import { Input } from "@/components/Inputs/Input";
import { Select } from "@/components/Inputs/Select";
import { MainBoxPage } from "@/components/MainBoxPage";
import { Sidebar } from "@/components/Sidebar";
import Link from "next/link";

const clients = [
  {
    id: 0,
    name: "Selecione um cliente",
  },
  {
    id: 1,
    name: "Cliente",
  },
];

const techs = [
  {
    id: 0,
    name: "Selecione um técnico",
  },
  {
    id: 1,
    name: "Vitor Kona",
  },
  {
    id: 2,
    name: "Filipe Dias",
  },
  {
    id: 3,
    name: "Eduardo GG",
  },
];

export default function CreatePmoc() {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <MainBoxPage title="Modelo PMOC">
        <div className="flex flex-row justify-between items-center">
          <p>Cadastrar novo PMOC</p>
        </div>
        <Divider />
        <div className="flex flex-row w-full justify-center space-x-6">
          <div className="flex flex-col space-y-4 w-2/6">
            <Input placeholder="Nome do documento" />
            <Select label="Cliente" itens={clients} />
            <Select label="Técnico 2" itens={techs} />
            <Select label="Técnico 3" itens={techs} />
            <Select label="Técnico 3" itens={techs} />
            <Input placeholder="Responsável" />
            <Input placeholder="CREA/CFT" />
          </div>
          <div className="flex flex-col space-y-4 w-2/6">
            <Input placeholder="Nome do documento" />
            <Input placeholder="Nome do documento" />
            <Input placeholder="Nome do documento" />
            <Input placeholder="Nome do documento" />
            <Input placeholder="Nome do documento" />
          </div>
        </div>
        <div className="flex flex-col w-full items-center">
          <div className="w-4/6 flex flex-col space-y-4">
            <Divider />
            <div className="flex flex-row w-full items-center justify-between space-x-6">
              <Link href="/technician" className="w-full">
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
