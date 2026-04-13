import { Outlet } from "react-router";
import { Toaster } from "@/components/ui/sonner";
import Navbar from "@/components/Navbar";

export default function RootLayout() {
  return (
    <>
      <main className="min-h-screen overflow-hidden">
        <Navbar />
        <Outlet />
        <Toaster />
      </main>
    </>
  );
}
