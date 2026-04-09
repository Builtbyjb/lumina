import Navbar from "../../components/Navbar";
import { Outlet } from "react-router";

export default function GuestLayout() {
  return (
    <>
      <div className="min-h-screen bg-zinc-950 text-white overflow-hidden">
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
