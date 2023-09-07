import { IconButton } from "@/components/Buttons/IconButton";
import { MainButton } from "@/components/Buttons/MainButton";
import { PmocCard } from "@/components/Cards/PmocCard";
import { Divider } from "@/components/Divider";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Inputs/Input";
import { MainBoxPage } from "@/components/MainBoxPage";
import { Sidebar } from "@/components/Sidebar";
import { RefreshCcw, Search } from "lucide-react";
import Link from "next/link";

export default function Pmocs() {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <MainBoxPage title="PMOCs">
        <div className="flex flex-row justify-between items-center">
          <p>Lista de PMOCs</p>
          <p>Total: 89</p>
        </div>
        <Divider />
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row flex-1 space-x-4">
            <div className="w-1/3">
              <Input type="text" icon={<Icon icon={<Search />} />} />
            </div>
            <div className="flex flex-row items-center space-x-2">
              <p>Atualizar: </p>
              <IconButton icon={<RefreshCcw size={20} />} />
            </div>
          </div>
          <div className="w-36">
            <Link href="/pmocs/create">
              <MainButton label="Novo" />
            </Link>
          </div>
        </div>
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
          <p className="text-center w-[5%]">ID</p>
          <p className="text-center w-[18%]">Nome</p>
          <p className="text-center w-[17%]">Cliente</p>
          <p className="text-center w-[7%]">Mês</p>
          <p className="text-center w-[10%]">Status</p>
          <p className="text-center w-[13%]">Técnicos</p>
          <p className="text-center w-[6%]">Relatório</p>
          <p className="text-center w-[6%]">ART</p>
          <p className="text-center w-[6%]">Finalizar</p>
          <p className="text-center w-[6%]">Editar</p>
          <p className="text-center w-[6%]">Excluir</p>
        </div>
        <div className="flex flex-col">
          <PmocCard />
          <PmocCard />
          <PmocCard />
          <PmocCard />
          <PmocCard />
          <PmocCard />
          <PmocCard />
          <PmocCard />
          <PmocCard />
        </div>
      </MainBoxPage>
    </div>
  );
}
