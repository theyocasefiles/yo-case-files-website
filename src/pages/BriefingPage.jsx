import { Link, Navigate } from "react-router-dom";
import { GoldButton, GhostButton } from "../components/Button";

const BRIEFING_ACCESS_KEY = "yo_case_files_briefing_access";

const briefingItems = [
  "Recovered digital trail fragments",
  "Suspect movements under review",
  "Evidence chain still incomplete",
  "Final reveal remains locked",
];

const briefingLog = [
  "Victim profile archived",
  "Digital narrative flagged",
  "Evidence release pending",
  "Portal reveal secured",
];

const lockedModules = [
  {
    title: "Evidence Archive",
    text: "Crime scene photographs, lab reports, and witness statements remain sealed.",
  },
  {
    title: "Suspect Files",
    text: "Full suspect profiles and interviews are unavailable at your current clearance level.",
  },
  {
    title: "Timeline Reconstruction",
    text: "Movement analysis and event sequencing will unlock with full access.",
  },
  {
    title: "Final Accusation Portal",
    text: "Identity confirmation and full reveal remain restricted until launch.",
  },
];

export default function BriefingPage() {
  const hasAccess =
    typeof window !== "undefined" &&
    localStorage.getItem(BRIEFING_ACCESS_KEY) === "granted";

  if (!hasAccess) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,#312516_0%,#17181d_38%,#0b0b0d_78%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:60px_60px]" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0b0d]/52 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 md:px-6 lg:px-8">
          <Link
            to="/"
            className="text-[1.9rem] font-semibold uppercase tracking-[0.32em] text-[#f5efe4] transition hover:text-[#c6a96b] drop-shadow-[0_0_12px_rgba(198,169,107,0.28)]"
          >
            The Yo Case Files
          </Link>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8 lg:py-14">
        <div className="mb-8 rounded-[1.5rem] border border-[#3a3227]/60 bg-[#111318]/70 px-5 py-4 backdrop-blur-sm">
          <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c6a96b]">
                Access Status
              </p>
              <p className="mt-2 text-lg font-semibold text-[#f5efe4]">
                Preliminary Clearance Granted
              </p>
            </div>

            <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm text-emerald-300">
              Access logged successfully
            </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.08fr_0.92fr] lg:items-start">
          <section className="rounded-[2rem] border border-[#2b2e34] bg-[#111318]/82 p-7 shadow-[0_30px_80px_rgba(0,0,0,0.42)] backdrop-blur-sm md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#d7bb7f]">
              Restricted Briefing
            </p>

            <h1 className="mt-4 text-4xl font-semibold leading-[0.98] text-[#f5efe4] md:text-6xl">
              Case 001 Briefing
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-[#d7dbe2] md:text-lg">
              Welcome, Detective. You’ve entered the preliminary briefing layer
              for{" "}
              <span className="text-[#f5efe4]">
                The Murder of an Influencer
              </span>
              . The public story is polished. The internal picture is not.
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {briefingItems.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#2c2f36] bg-[#0f1116] px-4 py-4 text-sm text-[#e7ebf0] transition duration-300 hover:border-[#3a3227] hover:shadow-[0_15px_40px_rgba(0,0,0,0.28)]"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-[1.5rem] border border-[#3a3227]/60 bg-black/20 p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-[#c6a96b]">
                Internal Note
              </p>
              <p className="mt-3 leading-7 text-[#a9adb7]">
                This briefing is only a teaser layer. Full evidence access,
                suspect files, and the final accusation portal remain locked
                until launch.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#c6a96b]">
                Restricted Modules
              </p>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {lockedModules.map((module) => (
                  <button
                    key={module.title}
                    type="button"
                    className="cursor-not-allowed rounded-[1.5rem] border border-[#2f3138] bg-[#0f1116]/85 p-5 text-left blur-[0.6px] transition duration-300 hover:border-[#4a3e2b]"
                  >
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#f5efe4]">
                      {module.title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#9aa0ab]">
                      {module.text}
                    </p>
                    <p className="mt-4 text-xs uppercase tracking-[0.22em] text-[#c6a96b]">
                      Access Denied
                    </p>
                  </button>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/">
                <GoldButton>Return to Homepage</GoldButton>
              </Link>
              <GhostButton href="#briefing-log">View Briefing Log</GhostButton>
            </div>
          </section>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-[#2b2e34] bg-[#14161b] p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c6a96b]">
                Status
              </p>

              <h2 className="mt-3 text-2xl font-semibold text-[#f5efe4]">
                Investigation in Preparation
              </h2>

              <p className="mt-4 leading-7 text-[#a9adb7]">
                The first case file is being assembled. Waitlist members will be
                first to receive launch access and future investigation updates.
              </p>
            </div>

            <div
              id="briefing-log"
              className="rounded-[2rem] border border-[#2b2e34] bg-[linear-gradient(180deg,#1b1611,#111318)] p-6 md:p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c6a96b]">
                Briefing Log
              </p>

              <div className="mt-5 space-y-4">
                {briefingLog.map((line) => (
                  <div
                    key={line}
                    className="rounded-2xl border border-[#2f3138] bg-black/20 px-4 py-3 text-[#edf0f5]"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[2rem] border border-[#2b2e34] bg-[#101216] p-6 md:p-7">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c6a96b]">
                Access Level
              </p>

              <p className="mt-3 text-lg font-semibold text-[#f5efe4]">
                Preliminary Clearance Only
              </p>

              <p className="mt-4 leading-7 text-[#a9adb7]">
                You can view the initial briefing, but the deeper case layers
                remain sealed until official release.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}