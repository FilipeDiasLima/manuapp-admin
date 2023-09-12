"use client";

import { Trash } from "lucide-react";
import { Input } from "../Inputs/Input";
import { Select } from "../Inputs/Select";
import { useState } from "react";

const toDoTypes = [
  {
    value: "1",
    label: "Check",
  },
  {
    value: "2",
    label: "Número",
  },
  {
    value: "3",
    label: "Texto",
  },
];

const frequecyTypes = [
  {
    value: "1",
    label: "Semanal",
  },
  {
    value: "2",
    label: "Mensal",
  },
  {
    value: "3",
    label: "Bimestral",
  },
  {
    value: "4",
    label: "Trimestral",
  },
  {
    value: "5",
    label: "Semestral",
  },
  {
    value: "6",
    label: "Anual",
  },
];

interface ToDoCardProps {
  id: number;
  onDelete: (id: number) => void;
}

interface SelectValueProps {
  value: string;
  label: string;
}

export function ToDoCard({ id, onDelete }: ToDoCardProps) {
  const [selectedToDoType, setSelectedToDoType] =
    useState<SelectValueProps | null>(null);
  const [selectedFrequencyType, setSelectedFrequencyType] =
    useState<SelectValueProps | null>(null);

  return (
    <div className="w-full flex space-x-4">
      <div
        className="
          flex 
          md:flex-row 
          sm:flex-col 
          flex-1
          md:space-x-4
          sm:space-y-2
          md:space-y-0
          md:p-6
          sm:p-4
          rounded-xl
          border-2
          border-gray-border
          dark:border-gray-borderDark
        "
      >
        <div className="flex flex-col space-y-2 flex-1">
          <Input placeholder="Descrição da tarefa" />
          <Select
            data={toDoTypes}
            placeholder="Tipo de tarefa"
            value={selectedToDoType}
            onChange={(value) => setSelectedToDoType(value)}
          />
          <Select
            data={frequecyTypes}
            placeholder="Frequência"
            value={selectedFrequencyType}
            onChange={(value) => setSelectedFrequencyType(value)}
          />
        </div>
        <div className="flex items-center sm:w-full md:w-auto">
          <button
            onClick={() => onDelete(id)}
            className="
              p-2 
              hover:shadow-md 
              flex-1 
              shadow-black 
              dark:shadow-white/10 
              rounded-lg 
              duration-300
              flex
              items-center
              justify-center
            "
          >
            <Trash color="#EF4949" />
          </button>
        </div>
      </div>
    </div>
  );
}
