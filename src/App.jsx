import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import BriefingPage from "./pages/BriefingPage";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white">
      {/* global background */}
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,#2a1f12_0%,#141519_40%,#0b0b0d_75%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:60px_60px]" />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/briefing" element={<BriefingPage />} />
      </Routes>
    </div>
  );
}