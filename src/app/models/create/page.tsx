"use client";

import { MainButton } from "@/components/Buttons/MainButton";
import { OutlineButton } from "@/components/Buttons/OutlineButton";
import { ToDoCard } from "@/components/Cards/ToDoCard";
import { Divider } from "@/components/Divider";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Inputs/Input";
import { MainBoxPage } from "@/components/MainBoxPage";
import { Sidebar } from "@/components/Sidebar";
import { generateRandomNumber } from "@/utils/generateRandomNumber";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface ToDoInfo {
  id: number;
  description: string;
  type: string;
  frequency: string;
}

export default function CreatePmocModel() {
  const navigation = useRouter();
  const [toDoInfo, setToDoInfo] = useState<ToDoInfo[]>([]);

  function handleAddCard() {
    const randomNumber = generateRandomNumber();

    const findId = toDoInfo.find((item) => item.id === randomNumber);

    if (findId) return;

    setToDoInfo([
      ...toDoInfo,
      {
        id: randomNumber,
        description: "",
        frequency: "",
        type: "",
      },
    ]);
  }

  function handleRemoveCard(id: number) {
    const toDoArr = toDoInfo.filter((item) => item.id !== id);
    setToDoInfo(toDoArr);
  }

  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <MainBoxPage title="Modelo PMOC">
        <div className="flex flex-row justify-between items-center">
          <p>Cadastrar novo modelo PMOC</p>
        </div>
        <Divider />
        <div className="flex flex-col space-y-6 w-full items-center">
          <div className="w-3/6">
            <Input placeholder="Nome do modelo" />
          </div>
          <div className="flex flex-col w-3/6 space-y-4 items-center">
            <p className="text-left w-full">Tarefas:</p>
            <div className="flex flex-col space-y-3 w-full">
              {toDoInfo.map((toDo) => (
                <ToDoCard
                  key={toDo.id}
                  id={toDo.id}
                  onDelete={handleRemoveCard}
                />
              ))}
              <div className="flex w-full justify-center">
                <button
                  onClick={handleAddCard}
                  className="
                    p-2 hover:shadow-md 
                    shadow-black 
                    dark:shadow-white/10 
                    rounded-lg 
                    duration-300
                  "
                >
                  <Icon isMain icon={<PlusCircle />} />
                </button>
              </div>
            </div>
            <div className="w-full flex flex-col space-y-4">
              <Divider />
              <div className="w-full flex flex-row space-x-4">
                <OutlineButton
                  label="Cancelar"
                  onClick={() => navigation.back()}
                />
                <MainButton label="Salvar" />
              </div>
            </div>
          </div>
        </div>
      </MainBoxPage>
    </div>
  );
}
