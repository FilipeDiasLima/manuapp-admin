"use client";

import { useState } from "react";
import { Select } from "./Inputs/Select";

interface SelectValueProps {
  value: string;
  label: string;
}

const filters = [
  {
    value: "recent",
    label: "Mais recentes",
  },
  {
    value: "oldest",
    label: "Mais antigo",
  },
  {
    value: "asc",
    label: "A - Z",
  },
  {
    value: "desc",
    label: "Z- A",
  },
  {
    value: "status",
    label: "Status",
  },
];

export function Filter() {
  const [filterSelected, setFilterSelected] = useState<SelectValueProps | null>(
    null
  );
  return (
    <div className="flex w-full">
      <Select
        data={filters}
        placeholder="Filtros"
        value={filterSelected}
        onChange={(value) => setFilterSelected(value)}
      />
    </div>
  );
}
