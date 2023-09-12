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
    <div className="flex sm:flex-col md:flex-row min-h-screen">
      <Sidebar />
      <MainBoxPage title="PMOCs">
        <div className="flex flex-row justify-between items-center">
          <p>Lista de Equipamentos</p>
          <p>Total: 4</p>
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
            <Link href={`/equipments/${params.clientId}/create`}>
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
            sm:w-[1366px]
            md:w-full
            md:px-0
            sm:px-2
          "
          >
            <p className="text-center w-[8%]">ID</p>
            <p className="text-center w-[30%]">Nome equipamento</p>
            <p className="text-center w-[15%]">Fabricante</p>
            <p className="text-center w-[15%]">Modelo</p>
            <p className="text-center w-[10%]">Potência</p>
            <p className="text-center w-[10%]">Local</p>
            <p className="text-center w-[6%]">Editar</p>
            <p className="text-center w-[6%]">Excluir</p>
          </div>
          <div
            className="
              flex 
              flex-col 
              w-full 
              sm:w-[1366px]
              md:w-full
              md:px-0
              sm:px-2"
          >
            <EquipmentCard />
            <EquipmentCard />
            <EquipmentCard />
            <EquipmentCard />
            <EquipmentCard />
            <EquipmentCard />
            <EquipmentCard />
          </div>
        </div>
      </MainBoxPage>
    </div>
  );
}
