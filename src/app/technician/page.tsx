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
              <IconButton icon={<ArrowDownUp />} />
            </div>
            <div className="flex flex-row items-center space-x-2">
              <p>A-Z: </p>
              <IconButton icon={<ArrowDownUp />} />
            </div>
            <div className="flex flex-row items-center space-x-2">
              <p>Atualizar: </p>
              <IconButton icon={<RefreshCcw />} />
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
            justify-between 
            p-2
            border-b-2 
            border-gray-border 
            dark:border-gray-borderDark
          "
        >
          <p>ID</p>
          <p>Avatar</p>
          <p>Nome</p>
          <p>CPF</p>
          <p>CNPJ</p>
          <p>Data de inclusão</p>
          <p>Status</p>
          <p>Editar</p>
          <p>Excluir</p>
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
