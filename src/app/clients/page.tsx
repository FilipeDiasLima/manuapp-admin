import { IconButton } from "@/components/Buttons/IconButton";
import { MainButton } from "@/components/Buttons/MainButton";
import { ClientCard } from "@/components/Cards/ClientCard";
import { Divider } from "@/components/Divider";
import { Filter } from "@/components/Filter";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Inputs/Input";
import { MainBoxPage } from "@/components/MainBoxPage";
import { Sidebar } from "@/components/Sidebar";
import { Search, ArrowDownUp, RefreshCcw } from "lucide-react";
import Link from "next/link";

const clients = [
  {
    id: 1,
    avatar:
      "https://housing.com/news/wp-content/uploads/2022/11/cafe-design-compressed-1.jpg",
    nome: "Empresa A Ltda",
    email: "empresaA@gmail.com",
    contato: "(11) 9 1234-5678",
    data: "15/04/2021",
  },
  {
    id: 2,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsMlk4lQhkSofh0O_wLy7TorPxm_zCazu9uw&usqp=CAU",
    nome: "Empresa B S/A",
    email: "empresaB@hotmail.com",
    contato: "(22) 9 9876-5432",
    data: "02/11/2022",
  },
  {
    id: 3,
    avatar:
      "https://www.jornalcontabil.com.br/wp-content/uploads/2018/07/empresa-inativa.jpg",
    nome: "Empresa C & Associados",
    email: "contato@empresaC.com",
    contato: "(33) 9 2345-6789",
    data: "20/08/2020",
  },
  {
    id: 4,
    avatar:
      "https://www.aurum.com.br/blog/wp-content/uploads/2021/07/teoria-da-empresa-e1612530817928.jpg",
    nome: "Empresa D Global",
    email: "info@empresaD.com",
    contato: "(44) 9 8765-4321",
    data: "05/12/2023",
  },
  {
    id: 5,
    avatar:
      "https://www.arapongas.pr.gov.br/imagens/noticias/3e6e28a7af9f6a6892c8a09e30063bb0.jpg",
    nome: "Empresa E S/S",
    email: "contato@empresaE.net",
    contato: "(55) 9 3456-7890",
    data: "30/07/2021",
  },
  {
    id: 6,
    avatar:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvCugmEt3JwYDVvdUuT-pKeeayuPwWiA_wdKBz9CuegEe7XXQ2EFQriyqAE9s34yCzT6I&usqp=CAU",
    nome: "Empresa F Comércio",
    email: "empresaF@outlook.com",
    contato: "(66) 9 6543-2109",
    data: "14/09/2022",
  },
];

export default function Client() {
  return (
    <div className="flex sm:flex-col md:flex-row min-h-screen">
      <Sidebar />
      <MainBoxPage title="Clientes">
        <div className="flex flex-row justify-between items-center">
          <p>Clientes cadastrados</p>
          <p>Total: 41</p>
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
            <Link href="/clients/create">
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
            <p className="text-center w-[21%]">Nome</p>
            <p className="text-center w-[17%]">E-mail</p>
            <p className="text-center w-[15%]">Contato</p>
            <p className="text-center w-[12%]">Data de inclusão</p>
            <p className="text-center w-[10%]">Equipamentos</p>
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
            {clients.map((item) => (
              <ClientCard
                key={item.id}
                avatar={item.avatar}
                contact={item.contato}
                date={item.data}
                email={item.email}
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
