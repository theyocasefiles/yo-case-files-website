import { GoldButton } from "./Button";

export default function PortalButton({ className = "" }) {
  return (
    <GoldButton href="/case-001-archive" className={className}>
      Case 001 Archive
    </GoldButton>
  );
}