import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useForm, ValidationError } from "@formspree/react";
import { GoldButton, GhostButton } from "./Button";

const BRIEFING_ACCESS_KEY = "yo_case_files_briefing_access";

export default function WaitlistForm() {
  const [state, handleSubmit] = useForm("xaqleoll");

 useEffect(() => {
  if (state.succeeded) {
    localStorage.setItem(BRIEFING_ACCESS_KEY, "granted");
    window.dispatchEvent(new Event("storage"));
  }
}, [state.succeeded]);

  return (
    <div className="mt-6">
      {state.succeeded ? (
        <div className="rounded-2xl border border-emerald-400/20 bg-black/40 px-5 py-5 backdrop-blur-xl shadow-[0_0_60px_rgba(16,185,129,0.12)]">
          <p className="text-xs uppercase tracking-[0.35em] text-emerald-400/80">
            Case Access Granted
          </p>

          <h3 className="mt-2 text-lg font-semibold text-white">
            You’re now on the list
          </h3>

          <p className="mt-2 text-sm leading-relaxed text-white/60">
            Your details have been logged into the system. You now have access
            to the preliminary briefing layer.
          </p>

          <div className="mt-5 flex flex-wrap gap-3">
            <Link to="/briefing">
              <GoldButton>Enter Briefing</GoldButton>
            </Link>

            <GhostButton href="#home">Return to Top</GhostButton>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-3">
          <input
            type="text"
            name="name"
            autoComplete="name"
            placeholder="Your name"
            className="w-full rounded-2xl border border-[#2b2e34] bg-[#121419] px-4 py-3 text-[#f5efe4] outline-none transition placeholder:text-[#767c87] focus:border-[#c6a96b]"
          />

          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-xs text-red-400"
          />

          <input
            type="email"
            name="email"
            required
            autoComplete="email"
            placeholder="Your email address"
            className="w-full rounded-2xl border border-[#2b2e34] bg-[#121419] px-4 py-3 text-[#f5efe4] outline-none transition placeholder:text-[#767c87] focus:border-[#c6a96b]"
          />

          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-xs text-red-400"
          />

          <div className="flex flex-wrap gap-3">
            <GoldButton type="submit" disabled={state.submitting}>
              {state.submitting ? "Submitting..." : "Join the List"}
            </GoldButton>

            <GhostButton href="#home">Back to Top</GhostButton>
          </div>
        </form>
      )}
    </div>
  );
}