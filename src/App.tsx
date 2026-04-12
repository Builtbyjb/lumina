import "./App.css";
import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import Thinkledger from "./pages/Thinkledger";
import GuestLayout from "./layouts/GuestLayout";
import NotFound from "./components/NotFound";
import Login from "./pages/Login";
import RootLayout from "./layouts/RootLayout";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          {/* Guest layout routes */}
          <Route path="/" element={<GuestLayout />}>
            <Route index element={<LandingPage />} />
          </Route>

          <Route path="/thinkledger" element={<Thinkledger />} />
          <Route path="/login" element={<Login />} />
          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
