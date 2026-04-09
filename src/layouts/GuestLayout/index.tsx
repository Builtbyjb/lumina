import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

export default function GuestLayout() {
  return (
    <>
      <div className="min-h-screen overflow-hidden">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
