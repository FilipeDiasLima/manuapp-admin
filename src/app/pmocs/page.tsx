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
              <IconButton icon={<RefreshCcw />} />
            </div>
          </div>
          <div className="w-36">
            <Link href="/pmocs/create">
              <MainButton label="Novo" />
            </Link>
          </div>
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Cliente</th>
              <th>Mês</th>
              <th>Status</th>
              <th>Técnicos</th>
              <th>Relatório</th>
              <th>ART</th>
              <th>Finalizar</th>
              <th>Editar</th>
              <th>Excluir</th>
            </tr>
          </thead>
          <tbody className="py-2">
            <PmocCard />
            <PmocCard />
            <PmocCard />
            <PmocCard />
          </tbody>
        </table>
      </MainBoxPage>
    </div>
  );
}
