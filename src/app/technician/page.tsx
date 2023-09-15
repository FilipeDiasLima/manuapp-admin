import { IconButton } from "@/components/Buttons/IconButton";
import { MainButton } from "@/components/Buttons/MainButton";
import { UserCard } from "@/components/Cards/UserCard";
import { Divider } from "@/components/Divider";
import { Filter } from "@/components/Filter";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Inputs/Input";
import { MainBoxPage } from "@/components/MainBoxPage";
import { Sidebar } from "@/components/Sidebar";
import { RefreshCcw, Search } from "lucide-react";
import Link from "next/link";

const technicians = [
  {
    id: 1,
    avatar: "filipediaslima",
    nome: "João Silva",
    cpf: "12345678901",
    cnpj: "12345678901234",
    data: "15/04/2021",
  },
  {
    id: 2,
    avatar: "abraao503",
    nome: "Maria Santos",
    cpf: "98765432101",
    cnpj: "98765432101234",
    data: "02/11/2022",
  },
  {
    id: 3,
    avatar: "diego3g",
    nome: "Carlos Pereira",
    cpf: "45678912301",
    cnpj: "45678912301234",
    data: "20/08/2020",
  },
  {
    id: 4,
    avatar: "queziaregina",
    nome: "Ana Oliveira",
    cpf: "65432178901",
    cnpj: "65432178901234",
    data: "05/12/2023",
  },
  {
    id: 5,
    avatar: "maykbrito",
    nome: "Paulo Souza",
    cpf: "78901234501",
    cnpj: "78901234501234",
    data: "30/07/2021",
  },
  {
    id: 6,
    avatar: "rodrigoogh",
    nome: "Mariana Pereira",
    cpf: "32178945601",
    cnpj: "32178945601234",
    data: "14/09/2022",
  },
  {
    id: 7,
    avatar: "AlexandrePecker",
    nome: "Luiz Costa",
    cpf: "56789012301",
    cnpj: "56789012301234",
    data: "18/03/2020",
  },
  {
    id: 8,
    avatar: "janaBR30",
    nome: "Julia Fernandes",
    cpf: "23456789012",
    cnpj: "23456789012345",
    data: "22/06/2023",
  },
  {
    id: 9,
    avatar: "rodrigorgtic",
    nome: "Pedro Alves",
    cpf: "89012345601",
    cnpj: "89012345601234",
    data: "09/01/2021",
  },
  {
    id: 10,
    avatar: "Amanda-ribeiiro",
    nome: "Fernanda Lima",
    cpf: "43210987601",
    cnpj: "43210987601234",
    data: "07/05/2023",
  },
];

export default function Technician() {
  return (
    <div className="flex sm:flex-col md:flex-row min-h-screen">
      <Sidebar />
      <MainBoxPage title="Técnicos">
        <div className="flex flex-row justify-between items-center">
          <p>Técnicos cadastrados</p>
          <p>Total: 21</p>
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
            <div className="flex items-center flex-row space-x-4 md:w-72 sm:w-full">
              <div className="flex flex-1 w-full">
                <Filter />
              </div>
              <div>
                <IconButton icon={<RefreshCcw size={20} />} />
              </div>
            </div>
          </div>
          <div className="md:w-36 sm:w-full">
            <Link href="/technician/create">
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
            {technicians.map((item) => (
              <UserCard
                key={item.id}
                avatar={item.avatar}
                cnpj={item.cnpj}
                cpf={item.cpf}
                date={item.data}
                id={item.id}
                name={item.nome}
              />
            ))}
          </div>
        </div>
      </MainBoxPage>
    </div>
  );
}
