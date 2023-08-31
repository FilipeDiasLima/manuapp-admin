import { Check, FileDown, FileEdit, Trash } from "lucide-react";
import { Icon } from "../Icon";

export function PmocCard() {
  return (
    <tr
      className="
        border-b-2 
        border-gray-border 
        dark:border-gray-borderDark
        hover:shadow-md
        hover:scale-[1.02]
        duration-300
        shadow-black
        dark:shadow-white/10
        cursor-pointer
        rowShadow
      "
    >
      <td className="text-center">54</td>
      <td className="text-center">Cafeteria (2023)</td>
      <td className="text-center">Cl Prata Ltda</td>
      <td className="text-center">Agosto</td>
      <td className="text-center">Em andamento</td>
      <td className="text-center">
        <p>Vitor Kona</p>
        <p>Filipe Dias</p>
        <p>Eduardo Cici</p>
      </td>
      <td className="text-center">
        <button
          className="
            p-2 
            text-gray-main 
            dark:text-white 
            hover:shadow-md 
            shadow-black
            dark:shadow-white/10 
            rounded-lg 
            duration-300
          "
        >
          <Icon isMain icon={<FileDown />} />
        </button>
      </td>
      <td className="text-center">
        <button
          className="
            p-2 
            text-gray-main 
            dark:text-white 
            hover:shadow-md 
            shadow-black
            dark:shadow-white/10 
            rounded-lg 
            duration-300
          "
        >
          <Icon isMain icon={<FileDown />} />
        </button>
      </td>
      <td className="text-center">
        <button
          className="
            p-2 
            text-gray-main 
            dark:text-white 
            hover:shadow-md 
            shadow-black
            dark:shadow-white/10 
            rounded-lg 
            duration-300
          "
        >
          <Check color="#00B169" />
        </button>
      </td>
      <td className="text-center">
        <button
          className="
              p-2 
            text-gray-main 
            dark:text-white 
            hover:shadow-md 
            shadow-black
            dark:shadow-white/10 
            rounded-lg 
            duration-300
          "
        >
          <FileEdit />
        </button>
      </td>
      <td className="text-center">
        <button className="p-2 hover:shadow-md shadow-black dark:shadow-white/10 rounded-lg duration-300">
          <Trash color="#EF4949" />
        </button>
      </td>
    </tr>
  );
}
