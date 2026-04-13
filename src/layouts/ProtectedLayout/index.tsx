import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Outlet } from "react-router";
import Sidebar from "@/components/Sidebar";

export default function ProtectedLayout() {
  // Authenticated layout
  return (
    <>
      <SidebarProvider>
        <Sidebar />
        <main>
          <SidebarTrigger />
          <div>
            <Outlet />
          </div>
        </main>
      </SidebarProvider>
    </>
  );
}
