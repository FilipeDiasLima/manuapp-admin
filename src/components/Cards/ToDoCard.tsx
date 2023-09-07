"use client";

import { Trash } from "lucide-react";
import { Input } from "../Inputs/Input";
import { Select } from "../Inputs/Select";
import { useState } from "react";

const toDoTypes = [
  {
    value: 1,
    label: "Check",
  },
  {
    value: 2,
    label: "Número",
  },
  {
    value: 3,
    label: "Texto",
  },
];

const frequecyTypes = [
  {
    value: 1,
    label: "Semanal",
  },
  {
    value: 2,
    label: "Mensal",
  },
  {
    value: 3,
    label: "Bimestral",
  },
  {
    value: 4,
    label: "Trimestral",
  },
  {
    value: 5,
    label: "Semestral",
  },
  {
    value: 6,
    label: "Anual",
  },
];

interface ToDoCardProps {
  id: number;
  onDelete: (id: number) => void;
}

interface SelectValueProps {
  value: number;
  label: string;
}

export function ToDoCard({ id, onDelete }: ToDoCardProps) {
  const [selectedToDoType, setSelectedToDoType] = useState(
    {} as SelectValueProps
  );
  const [selectedFrequencyType, setSelectedFrequencyType] = useState(
    {} as SelectValueProps
  );

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
          <Select
            data={toDoTypes}
            placeholder="Tipo de tarefa"
            value={selectedToDoType?.value ? selectedToDoType : null}
            onChange={(value) => setSelectedToDoType(value)}
          />
          <Select
            data={frequecyTypes}
            placeholder="Frequência"
            value={selectedFrequencyType?.value ? selectedFrequencyType : null}
            onChange={(value) => setSelectedFrequencyType(value)}
          />
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
