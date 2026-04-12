import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/sonner";

export default function RootLayout() {
  return (
    <>
      <main className="min-h-screen overflow-hidden">
        <Outlet />
        <Toaster />
      </main>
    </>
  );
}
