import { MainButton } from "@/components/Buttons/MainButton";
import { PmocModelCard } from "@/components/Cards/PmocModelCard";
import { Divider } from "@/components/Divider";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Inputs/Input";
import { MainBoxPage } from "@/components/MainBoxPage";
import { Sidebar } from "@/components/Sidebar";
import { Search } from "lucide-react";
import Link from "next/link";

export default function Models() {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <MainBoxPage title="Clientes">
        <div className="flex flex-row justify-between items-center">
          <p>Modelos PMOC</p>
          <p>Total: 12</p>
        </div>
        <Divider />
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row flex-1 space-x-4">
            <div className="w-1/3">
              <Input type="text" icon={<Icon icon={<Search />} />} />
            </div>
          </div>
          <div className="w-36">
            <Link href="/models/create">
              <MainButton label="Novo" />
            </Link>
          </div>
        </div>
        {/* User list */}
        <div
          className="
            flex 
            flex-row 
            items-center 
            py-2
            border-b-2 
            border-gray-border 
            dark:border-gray-borderDark
            w-full
          "
        >
          <p className="text-center w-[10%]">ID</p>
          <p className="text-center w-[40%]">Nome</p>
          <p className="text-center w-[30%]">Data de inclusão</p>
          <p className="text-center w-[10%]">Editar</p>
          <p className="text-center w-[10%]">Excluir</p>
        </div>
        <div className="flex flex-col ">
          {/* Card */}
          <PmocModelCard />
          <PmocModelCard />
          <PmocModelCard />
          <PmocModelCard />
          <PmocModelCard />
          <PmocModelCard />
          <PmocModelCard />
          <PmocModelCard />
          <PmocModelCard />
        </div>
      </MainBoxPage>
    </div>
  );
}
