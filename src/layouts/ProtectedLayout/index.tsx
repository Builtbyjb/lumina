import { Outlet } from "react-router";

export default function ProtectedLayout() {
  return (
    <>
      <main>
        <Outlet />
      </main>
    </>
  );
}
