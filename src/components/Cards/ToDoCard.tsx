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
          flex-col 
          flex-1
          space-y-2
          p-6
          rounded-xl
          border-2
          border-gray-border
        "
      >
        <Input placeholder="Descrição da tarefa" />
        <Select label="Tipo de tarefa" itens={toDoTypes} />
        <Select label="Frequência" itens={frequecyTypes} />
      </div>
      <button
        onClick={() => onDelete(id)}
        className="text-red-main hover:text-red-600 duration-300"
      >
        <Trash />
      </button>
    </div>
  );
}
