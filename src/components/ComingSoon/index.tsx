import { useNavigate } from "react-router";
import { Home } from "lucide-react";
import { Button } from "../ui/button";

export default function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto text-center mt-36">
      <h1 className="text-3xl md:text-4xl font-bold tracking-tighter leading-none mb-6">Coming Soon...</h1>
      <Button onClick={() => navigate("/")}>
        <Home />
        Home
      </Button>
    </div>
  );
}
