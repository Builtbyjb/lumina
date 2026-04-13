import "./App.css";
import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import Thinkledger from "./pages/Thinkledger";
import GuestLayout from "./layouts/GuestLayout";
import NotFound from "./components/NotFound";
import Login from "./pages/Login";
import RootLayout from "./layouts/RootLayout";
import ProtectedLayout from "./layouts/ProtectedLayout";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/thinkledger" element={<Thinkledger />} />

          {/* Guest layout routes */}
          <Route path="/" element={<GuestLayout />}>
            <Route index element={<LandingPage />} />
          </Route>

          {/* Protected layout routes */}
          <Route path="/home" element={<ProtectedLayout />}>
            <Route index element={<Dashboard />} />
          </Route>

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
