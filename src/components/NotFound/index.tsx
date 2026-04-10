import { Home } from "lucide-react";
import { useNavigate } from "react-router";
import { Button } from "@/components/ui/button";

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto text-center">
      <h1 className="text-6xl md:text-7xl font-bold tracking-tighter leading-none mb-4">404</h1>
      <h2 className="text-3xl md:text-5xl font-semibold text-foreground text-balance mb-10">Page not found</h2>

      <p className="max-w-2xl mx-auto mb-10">
        Looks like you have wandered into uncharted territory. The page you are looking for does not exist.
      </p>

      <Button onClick={() => navigate("/")}>
        <Home className="mr-2 h-4" />
        Back to Home
      </Button>
    </div>
  );
};
