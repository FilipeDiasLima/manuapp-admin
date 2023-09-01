"use client";

import { Trash } from "lucide-react";
import { Input } from "../Inputs/Input";
import { Select } from "../Inputs/Select";

const toDoTypes = [
  {
    id: 1,
    name: "Check",
  },
  {
    id: 2,
    name: "Número",
  },
  {
    id: 3,
    name: "Texto",
  },
];

const frequecyTypes = [
  {
    id: 1,
    name: "Semanal",
  },
  {
    id: 2,
    name: "Mensal",
  },
  {
    id: 3,
    name: "Bimestral",
  },
  {
    id: 4,
    name: "Trimestral",
  },
  {
    id: 5,
    name: "Semestral",
  },
  {
    id: 6,
    name: "Anual",
  },
];

interface ToDoCardProps {
  id: number;
  onDelete: (id: number) => void;
}

export function ToDoCard({ id, onDelete }: ToDoCardProps) {
  return (
    <div className="w-full flex flex-row space-x-4">
      <div
        className="
          flex 
          flex-row 
          flex-1
          space-x-4
          p-6
          rounded-xl
          border-2
          border-gray-border
          dark:border-gray-borderDark
        "
      >
        <div className="flex flex-col space-y-2 flex-1">
          <Input placeholder="Descrição da tarefa" />
          <Select label="Tipo de tarefa" itens={toDoTypes} />
          <Select label="Frequência" itens={frequecyTypes} />
        </div>
        <div className="flex items-center">
          <button
            onClick={() => onDelete(id)}
            className="p-2 hover:shadow-md shadow-black dark:shadow-white/10 rounded-lg duration-300"
          >
            <Trash color="#EF4949" />
          </button>
        </div>
      </div>
    </div>
  );
}
