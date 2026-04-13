import "./App.css";
import { Routes, Route } from "react-router";
import LandingPage from "./pages/LandingPage";
import Thinkledger from "./pages/Thinkledger";
import NotFound from "./components/NotFound";
import Login from "./pages/Login";
import ProtectedLayout from "./layouts/ProtectedLayout";
import RootLayout from "./layouts/RootLayout";
import Chat from "./pages/Chat";
import Docs from "./pages/Docs";
import Models from "./pages/Models";

function App() {
  return (
    <>
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/thinkledger" element={<Thinkledger />} />
          <Route path="/models" element={<Models />} />
          <Route path="/documentation" element={<Docs />} />

          <Route element={<ProtectedLayout />}>
            <Route path="/chat" element={<Chat />} />
          </Route>

          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
