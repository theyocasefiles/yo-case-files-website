import { Navigate } from "react-router-dom";

export default function ProtectedPortal({ children }) {
  const hasAccess = localStorage.getItem("yo_case_portal_access") === "granted";

  if (!hasAccess) {
    return <Navigate to="/portal" replace />;
  }

  return children;
}