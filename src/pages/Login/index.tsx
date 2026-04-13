import { useNavigate } from "react-router";
import { ArrowLeft } from "lucide-react";
import LoginForm from "./LoginForm";

export default function Login() {
  const navigate = useNavigate();

  return (
    <>
      <div className="max-w-5xl mx-auto mt-36">
        <ArrowLeft
          size={36}
          className="mb-8 cursor-pointer opacity-75 hover:opacity-100 hover:scale-120 hover:transition-transform"
          onClick={() => navigate(-1)}
        />
        <LoginForm />
      </div>
    </>
  );
}
