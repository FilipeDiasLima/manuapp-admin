import { IconButton } from "@/components/Buttons/IconButton";
import { MainButton } from "@/components/Buttons/MainButton";
import { EquipmentCard } from "@/components/Cards/EquipmentCard";
import { Divider } from "@/components/Divider";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Inputs/Input";
import { MainBoxPage } from "@/components/MainBoxPage";
import { Sidebar } from "@/components/Sidebar";
import { RefreshCcw, Search } from "lucide-react";
import Link from "next/link";

interface EquipmentsProps {
  params: { clientId: string };
}

export default function Equipments({ params }: EquipmentsProps) {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <MainBoxPage title="PMOCs">
        <div className="flex flex-row justify-between items-center">
          <p>Lista de Equipamentos</p>
          <p>Total: 4</p>
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
            <Link href={`/equipments/${params.clientId}/create`}>
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
          <p className="text-center w-[8%]">ID</p>
          <p className="text-center w-[30%]">Nome Equipamento</p>
          <p className="text-center w-[30%]">Modelo</p>
          <p className="text-center w-[20%]">Ambiente</p>
          <p className="text-center w-[6%]">Editar</p>
          <p className="text-center w-[6%]">Excluir</p>
        </div>
        <div className="flex flex-col">
          <EquipmentCard />
          <EquipmentCard />
          <EquipmentCard />
          <EquipmentCard />
          <EquipmentCard />
          <EquipmentCard />
          <EquipmentCard />
        </div>
      </MainBoxPage>
    </div>
  );
}
