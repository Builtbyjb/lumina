import "./App.css";
import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import Thinkledger from "./pages/Thinkledger";
import GuestLayout from "./layouts/GuestLayout";
import { NotFound } from "./components/NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/thinkledger" element={<Thinkledger />} />

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
