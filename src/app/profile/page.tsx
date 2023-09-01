import { MainBoxPage } from "@/components/MainBoxPage";
import { Sidebar } from "@/components/Sidebar";

export default function Profile() {
  return (
    <div className="flex flex-row min-h-screen">
      <Sidebar />
      <MainBoxPage title="Perfil">
        <h1>Perfil</h1>
      </MainBoxPage>
    </div>
  );
}
