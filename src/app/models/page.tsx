import { IconButton } from "@/components/Buttons/IconButton";
import { MainButton } from "@/components/Buttons/MainButton";
import { PmocModelCard } from "@/components/Cards/PmocModelCard";
import { Divider } from "@/components/Divider";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Inputs/Input";
import { MainBoxPage } from "@/components/MainBoxPage";
import { Sidebar } from "@/components/Sidebar";
import { RefreshCcw, Search } from "lucide-react";
import Link from "next/link";

export default function Models() {
  return (
    <div className="flex sm:flex-col md:flex-row min-h-screen">
      <Sidebar />
      <MainBoxPage title="Clientes">
        <div className="flex flex-row justify-between items-center">
          <p>Modelos PMOC</p>
          <p>Total: 12</p>
        </div>

        <Divider />

        <div
          className="
            flex 
            md:flex-row 
            sm:flex-col 
            sm:space-y-2 
            md:space-y-0 
            justify-between 
            items-center
          "
        >
          <div
            className="
              flex 
              md:flex-row 
              sm:flex-col 
              items-center 
              flex-1 
              md:space-x-4 
              sm:space-x-0 
              md:space-y-0 
              sm:space-y-2 
              sm:w-full
            "
          >
            <div className="md:w-1/3 sm:w-full md:flex-none">
              <Input type="text" icon={<Icon icon={<Search />} />} />
            </div>
            <div className="flex items-center flex-row space-x-4 md:w-32 sm:w-full">
              <div className="md:w-auto sm:w-full">
                <IconButton icon={<RefreshCcw size={20} />} />
              </div>
            </div>
          </div>
          <div className="md:w-36 sm:w-full">
            <Link href="/models/create">
              <MainButton label="Novo" />
            </Link>
          </div>
        </div>

        <div
          className="
            flex
            flex-col
            md:items-center
            sm:items-start
            w-full
            sm:overflow-x-scroll
            md:overflow-x-visible
          "
        >
          <div
            className="
            flex 
            flex-row 
            items-center 
            py-2
            border-b-2 
            border-gray-border 
            dark:border-gray-borderDark
            sm:w-[960px]
            md:w-full
            md:px-0
            sm:px-2
          "
          >
            <p className="text-center w-[10%]">ID</p>
            <p className="text-center w-[40%]">Nome</p>
            <p className="text-center w-[30%]">Data de inclusão</p>
            <p className="text-center w-[10%]">Editar</p>
            <p className="text-center w-[10%]">Excluir</p>
          </div>
          <div
            className="
              flex 
              flex-col 
              w-full 
              sm:w-[960px]
              md:w-full
              md:px-0
              sm:px-2"
          >
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
        </div>
      </MainBoxPage>
    </div>
  );
}
