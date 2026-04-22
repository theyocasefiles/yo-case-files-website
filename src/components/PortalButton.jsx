import { GoldButton } from "./Button";

export default function PortalButton({ className = "" }) {
  return (
    <GoldButton href="/portal" className={className}>
      Enter Portal
    </GoldButton>
  );
}