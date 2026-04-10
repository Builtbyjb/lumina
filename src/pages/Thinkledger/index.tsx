import { useNavigate } from "react-router";

export default function Thinkledger() {
  const navigate = useNavigate();

  return (
    <>
      <div className="max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold tracking-tighter leading-none mb-6">Thinkledger</h1>

        <p className="max-w-2xl mx-auto mb-10">
          We have realized that automating accounting is not the right approach for us. As a result, we are shifting our
          company’s direction and pivoting to Lumina, something we are truly excited about. Check out{" "}
          <span className="underline cursor-pointer hover:text-accent hover:font-medium" onClick={() => navigate("/")}>
            Lumina!
          </span>
        </p>
      </div>
    </>
  );
}
