import { IconButton } from "@/components/Buttons/IconButton";
import { MainButton } from "@/components/Buttons/MainButton";
import { UserCard } from "@/components/Cards/UserCard";
import { Divider } from "@/components/Divider";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Inputs/Input";
import { MainBoxPage } from "@/components/MainBoxPage";
import { Sidebar } from "@/components/Sidebar";
import { ArrowDownUp, RefreshCcw, Search } from "lucide-react";
import Link from "next/link";

export default function Technician() {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <MainBoxPage title="Técnicos">
        <div className="flex flex-row justify-between items-center">
          <p>Técnicos cadastrados</p>
          <p>Total: 21</p>
        </div>
        <Divider />
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-row flex-1 space-x-4">
            <div className="w-1/3">
              <Input type="text" icon={<Icon icon={<Search />} />} />
            </div>
            <div className="flex flex-row items-center space-x-2">
              <p>Data: </p>
              <IconButton icon={<ArrowDownUp size={20} />} />
            </div>
            <div className="flex flex-row items-center space-x-2">
              <p>A-Z: </p>
              <IconButton icon={<ArrowDownUp size={20} />} />
            </div>
            <div className="flex flex-row items-center space-x-2">
              <p>Atualizar: </p>
              <IconButton icon={<RefreshCcw size={20} />} />
            </div>
          </div>
          <div className="w-36">
            <Link href="/technician/create">
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
          <p className="text-center w-[5%]">ID</p>
          <p className="text-center w-[10%]">Avatar</p>
          <p className="text-center w-[25%]">Nome</p>
          <p className="text-center w-[15%]">CPF</p>
          <p className="text-center w-[15%]">CNPJ</p>
          <p className="text-center w-[12%]">Data de inclusão</p>
          <p className="text-center w-[8%]">Status</p>
          <p className="text-center w-[5%]">Editar</p>
          <p className="text-center w-[5%]">Excluir</p>
        </div>
        <div className="flex flex-col">
          {/* Card */}
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
          <UserCard />
        </div>
      </MainBoxPage>
    </div>
  );
}
