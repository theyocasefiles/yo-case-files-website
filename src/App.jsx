import { useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import BriefingPage from "./pages/BriefingPage";
import BriefingVideoPage from "./pages/BriefingVideoPage";
import Case001ArchivePage from "./pages/Case001ArchivePage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";

import PortalLogin from "./portal/pages/PortalLogin";
import Case001Portal from "./portal/pages/Case001Portal";
import ProtectedPortal from "./portal/components/ProtectedPortal";

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
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,#2a1f12_0%,#141519_40%,#0b0b0d_75%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:60px_60px]" />

      <ScrollToTop />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/briefing" element={<BriefingPage />} />
        <Route path="/briefing-video" element={<BriefingVideoPage />} />

        <Route path="/portal" element={<PortalLogin />} />
        <Route
          path="/portal/case-001"
          element={
            <ProtectedPortal>
              <Case001Portal />
            </ProtectedPortal>
          }
        />

        <Route path="/case-001-archive" element={<Case001ArchivePage />} />

        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </div>
  );
}