import { IconButton } from "@/components/Buttons/IconButton";
import { MainButton } from "@/components/Buttons/MainButton";
import { ScheduleCard } from "@/components/Cards/ScheduleCard";
import { Divider } from "@/components/Divider";
import { Icon } from "@/components/Icon";
import { Input } from "@/components/Inputs/Input";
import { MainBoxPage } from "@/components/MainBoxPage";
import { Sidebar } from "@/components/Sidebar";
import { formattedDateString } from "@/utils/formattedDateString";
import { CalendarSearch, Search } from "lucide-react";

const weekDays = [
  {
    weekDay: "Segunda-feira (21)",
    works: Array(2).fill("a"),
  },
  {
    weekDay: "Terça-feira (22)",
    works: Array(5).fill("a"),
  },
  {
    weekDay: "Quarta-feira (23)",
    works: Array(2).fill("a"),
  },
  {
    weekDay: "Quinta-feira (24)",
    works: Array(1).fill("a"),
  },
  {
    weekDay: "Sexta-feira (25)",
    works: Array(0).fill("a"),
  },
  {
    weekDay: "Sábado (26)",
    works: Array(4).fill("a"),
  },
  {
    weekDay: "Domingo (27)",
    works: Array(1).fill("a"),
  },
];

export default function Dashboard() {
  const today = formattedDateString(new Date());

  return (
    <div className="flex sm:flex-col md:flex-row min-h-screen">
      <Sidebar />
      <MainBoxPage title="Agenda">
        <div className="flex flex-row justify-between items-center w-full">
          <p className="text-lg">Para esta semana</p>
          <p>Hoje: {today}</p>
        </div>
        <Divider />
        <div className="flex md:flex-row sm:flex-col sm:space-y-2 justify-between items-center">
          <div className="flex md:flex-row sm:flex-col md:space-x-4 sm:space-x-0 sm:space-y-2 w-full">
            <div className="md:w-1/3 sm:w-auto sm:flex-1">
              <Input type="text" icon={<Icon icon={<Search />} />} />
            </div>
            <div className="flex flex-row items-center sm:w-full">
              <IconButton icon={<CalendarSearch />} />
            </div>
          </div>
          <div className="md:w-36 sm:w-full">
            <MainButton label="Novo" />
          </div>
        </div>

        <div className="flex flex-row w-full overflow-x-scroll px-2 py-6">
          {weekDays.map((weekDay, index) => (
            <div
              key={index}
              className="flex flex-col w-full items-center space-y-5 px-3"
            >
              <div className="flex p-2 w-[280px] items-center justify-center border-b-2 border-gray-border dark:border-gray-borderDark">
                <p>{weekDay.weekDay}</p>
              </div>

              {weekDay.works.map((card, id) => (
                <ScheduleCard key={id} />
              ))}
            </div>
          ))}
        </div>
      </MainBoxPage>
    </div>
  );
}
