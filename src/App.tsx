import "./App.css";
import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import Thinkledger from "./pages/Thinkledger";
import GuestLayout from "./layouts/GuestLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<GuestLayout />}>
          <Route index element={<LandingPage />} />
          <Route path="/thinkledger" element={<Thinkledger />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
