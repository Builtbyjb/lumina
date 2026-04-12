import { useNavigate } from "react-router";
import { Button } from "../ui/button";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <>
      <nav className="">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span onClick={() => navigate("/")} className="text-2xl font-semibold tracking-tight cursor-pointer">
              Lumina
            </span>
          </div>
          <div>
            <Button onClick={() => navigate("/login")}>Login</Button>
          </div>
        </div>
      </nav>
    </>
  );
}
