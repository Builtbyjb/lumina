import { Home, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto text-center mt-36">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-4">404</h1>
      <h2 className="text-3xl md:text-5xl font-semibold text-foreground text-balance mb-10">Page not found</h2>

      <p className="max-w-2xl mx-auto mb-10">
        Looks like you have wandered into uncharted territory. The page you are looking for does not exist.
      </p>

      <div className="gap-4 items-center mx-auto">
        <Button variant="outline" onClick={() => navigate(-1)}>
          <ArrowLeft className="mr-2 h-4" />
          Back
        </Button>

        <Button onClick={() => navigate("/")}>
          <Home className="mr-2 h-4" />
          Home
        </Button>
      </div>
    </div>
  );
}
