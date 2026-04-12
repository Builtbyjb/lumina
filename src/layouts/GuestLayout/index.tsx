import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";

export default function GuestLayout() {
  return (
    <>
      <div>
        <Navbar />
        <Outlet />
      </div>
    </>
  );
}
