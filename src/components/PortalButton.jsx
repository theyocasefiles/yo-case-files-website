import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoldButton } from "./Button";

const BRIEFING_ACCESS_KEY = "yo_case_files_briefing_access";

export default function PortalButton({ className = "" }) {
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    const checkAccess = () => {
      setHasAccess(
        localStorage.getItem(BRIEFING_ACCESS_KEY) === "granted"
      );
    };

    checkAccess();
    window.addEventListener("storage", checkAccess);

    return () => {
      window.removeEventListener("storage", checkAccess);
    };
  }, []);

  if (hasAccess) {
    return (
      <Link to="/briefing">
        <GoldButton className={className}>Enter Portal</GoldButton>
      </Link>
    );
  }

  return (
    <GoldButton href="#footer" className={className}>
      Enter Portal
    </GoldButton>
  );
}