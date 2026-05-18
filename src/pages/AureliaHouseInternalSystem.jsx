import React, { useEffect, useState } from "react";
import {
  Archive,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  DoorOpen,
  FileSearch,
  Grid3X3,
  KeyRound,
  Landmark,
  Lock,
  ShieldCheck,
  Users,
  Video,
  Wrench,
} from "lucide-react";

const AURELIA_LOGO = "/aurelia/images/aurelia-round-logo.png";
const HERO_IMAGE = "/aurelia/images/aurelia-reception-hero.jpg";
const CREDENTIAL_IMAGE = "/aurelia/images/founder-credential-card.jpg";
const STORAGE_KEY = "yo_case_files_mcu002_aurelia_essential_v1";

const navItems = [
  { id: "home", label: "Home", icon: Grid3X3 },
  { id: "evidence", label: "Evidence", icon: FileSearch },
  { id: "locked", label: "Locked", icon: Lock },
];

const evidenceCards = [
  {
    id: "GH-D01",
    title: "Booking Record",
    icon: CalendarDays,
    time: "14:10–15:24",
    status: "Available",
    summary: "Amelia Hart was booked for a private Founder session with Cassandra Vale in Suite Three.",
    facts: ["Guest: Amelia Hart", "Host: Cassandra Vale", "Suite Three", "Private session"],
  },
  {
    id: "GH-D02",
    title: "CCTV Frames",
    icon: Video,
    time: "14:08–15:24",
    status: "Available",
    summary: "Recovered frames from reception, treatment wing, corridor exit, staff corridor and emergency response.",
    facts: ["Arrival", "Treatment wing entry", "Corridor exit", "Staff corridor movement"],
    hasCctv: true,
  },
  {
    id: "GH-D03",
    title: "Suite Three Status",
    icon: DoorOpen,
    time: "14:27–15:24",
    status: "Available",
    summary: "Suite Three was sealed, privacy mode was active and monitoring was routed through the house system.",
    facts: ["Door sealed", "Privacy active", "Session in progress", "Staff-side monitoring"],
  },
  {
    id: "GH-D04",
    title: "Staff Access Record",
    icon: Users,
    time: "Full day",
    status: "Available",
    summary: "Guest access and staff access were separate. Amelia Hart had guest treatment access only.",
    facts: ["Guest access only", "No staff console", "No service corridor", "No override permission"],
  },
];

const cctvFrames = [
  { id: "GH-D02A", title: "Reception", time: "14:08", image: "/aurelia/images/cctv-reception-arrival.jpg" },
  { id: "GH-D02B", title: "Wing Entry", time: "14:14", image: "/aurelia/images/cctv-treatment-wing-entry.jpg" },
  { id: "GH-D02C", title: "Corridor Exit", time: "14:43", image: "/aurelia/images/cctv-amelia-corridor-exit.jpg" },
  { id: "GH-D02D", title: "Staff Corridor", time: "14:52", image: "/aurelia/images/cctv-staff-corridor-movement.jpg" },
  { id: "GH-D02E", title: "Response", time: "15:24", image: "/aurelia/images/cctv-emergency-response.jpg" },
];

const lockedFiles = [
  {
    id: "GH-D06",
    title: "Maintenance & Calibration",
    icon: Wrench,
    summary: "Sensor checks and calibration history.",
  },
  {
    id: "GH-D10–D13",
    title: "Incident Archive",
    icon: Archive,
    summary: "Restricted founder archive material.",
  },
  {
    id: "GH-D09",
    title: "Final Reconstruction",
    icon: Landmark,
    summary: "DCCU / FIU reconstruction file.",
  },
];

function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

function SafeImage({ src, alt, className }) {
  return (
    <div className={cx("overflow-hidden bg-stone-100", className)}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

function StatusPill({ children, locked = false }) {
  return (
    <span
      className={cx(
        "rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em]",
        locked ? "border-stone-200 bg-stone-100 text-stone-600" : "border-emerald-100 bg-emerald-50 text-emerald-800"
      )}
    >
      {children}
    </span>
  );
}

function SectionCard({ children, className }) {
  return (
    <section className={cx("rounded-2xl border border-stone-200 bg-white shadow-[0_12px_35px_rgba(35,25,15,0.045)]", className)}>
      {children}
    </section>
  );
}

function GoldButton({ children, onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-xl border border-[#d2b676] bg-white px-4 py-3 font-serif text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a6f21] hover:bg-[#fbf7ef]",
        className
      )}
    >
      {children}
      <ChevronRight className="h-4 w-4" />
    </button>
  );
}

function Header() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-9">
        <div className="flex items-center gap-3">
          <img
            src={AURELIA_LOGO}
            alt="Aurelia House"
            className="h-12 w-12 shrink-0 rounded-full object-contain"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <div>
            <div className="font-serif text-lg uppercase tracking-[0.23em] text-stone-900">Aurelia House</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">Internal System</div>
          </div>
        </div>
        <div className="hidden items-center gap-3 sm:flex">
          <ShieldCheck className="h-5 w-5 text-[#a67a27]" />
          <div className="text-right">
            <div className="font-serif text-xs font-semibold uppercase tracking-[0.12em] text-[#9a6f21]">DCCU Verified</div>
            <div className="text-[11px] text-stone-500">Read-only mirror</div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <div className="border-b border-stone-200 bg-white">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid lg:grid-cols-[1fr_1.05fr]">
          <div className="order-2 px-4 py-6 sm:px-6 lg:order-1 lg:px-9">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">Recovered Founder Credential</p>
            <h1 className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">Internal Records Mirror</h1>
            <p className="mt-2 text-sm text-stone-600">MCU-002 · Read-only · Chain of custody secured</p>
          </div>
          <SafeImage src={HERO_IMAGE} alt="Aurelia House reception" className="order-1 h-28 rounded-none sm:h-40 lg:order-2 lg:h-full" />
        </div>
      </div>
    </div>
  );
}

function Navigation({ active, setActive, reviewed }) {
  return (
    <nav className="sticky top-0 z-20 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="grid grid-cols-3 px-3 sm:px-6 lg:px-9">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActive(id)}
            className={cx("relative flex items-center justify-center gap-2 px-2 py-3 text-xs font-semibold text-stone-600 hover:text-[#9a6f21]", active === id && "text-[#9a6f21]")}
          >
            <span className="relative">
              <Icon className="h-4 w-4" />
              {reviewed[id] && id !== "home" && <CheckCircle2 className="absolute -right-2 -top-2 h-3.5 w-3.5 rounded-full bg-white text-emerald-700" />}
            </span>
            {label}
            {active === id && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#c79632]" />}
          </button>
        ))}
      </div>
    </nav>
  );
}

function Home({ setActive }) {
  return (
    <div className="space-y-4">
      <SectionCard className="overflow-hidden">
        <div className="grid lg:grid-cols-[1fr_300px]">
          <div className="p-5 sm:p-6">
            <h2 className="font-serif text-2xl text-stone-950">Recovered access confirmed</h2>
            <p className="mt-2 text-sm text-stone-600">Founder credential mirror active. Review the available records, then check the locked archive.</p>
            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              <div className="rounded-xl border border-stone-200 bg-white p-3">
                <div className="font-serif text-sm font-semibold text-stone-950">1. Evidence</div>
                <div className="mt-1 text-xs text-stone-500">Open recovered records.</div>
              </div>
              <div className="rounded-xl border border-stone-200 bg-white p-3">
                <div className="font-serif text-sm font-semibold text-stone-950">2. Compare</div>
                <div className="mt-1 text-xs text-stone-500">Check times and access.</div>
              </div>
              <div className="rounded-xl border border-stone-200 bg-white p-3">
                <div className="font-serif text-sm font-semibold text-stone-950">3. Locked</div>
                <div className="mt-1 text-xs text-stone-500">Review restricted files.</div>
              </div>
            </div>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <GoldButton onClick={() => setActive("evidence")} className="w-full sm:w-auto">Open Evidence</GoldButton>
              <GoldButton onClick={() => setActive("locked")} className="w-full sm:w-auto">Locked Files</GoldButton>
            </div>
          </div>
          <div className="border-t border-stone-100 bg-[#fbf7ef] p-5 lg:border-l lg:border-t-0">
            <div className="flex items-center gap-4">
              <SafeImage src={CREDENTIAL_IMAGE} alt="Founder credential" className="h-24 w-24 shrink-0 rounded-xl border border-[#d7c08d]" />
              <div className="text-sm">
                <div className="font-serif font-semibold uppercase tracking-[0.08em] text-stone-900">Cassandra Vale</div>
                <div className="mt-1 text-xs text-stone-500">AH-FND-001</div>
                <div className="mt-2"><StatusPill>Verified</StatusPill></div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      <div className="grid gap-3 md:grid-cols-3">
        <QuickCard icon={CalendarDays} title="Timeline" text="Booking and CCTV records." />
        <QuickCard icon={DoorOpen} title="Suite Three" text="Room status records." />
        <QuickCard icon={KeyRound} title="Access" text="Credential and panel records." />
      </div>
    </div>
  );
}

function QuickCard({ icon: Icon, title, text }) {
  return (
    <SectionCard className="p-4">
      <Icon className="mb-3 h-5 w-5 text-[#b58a3b]" />
      <div className="font-serif text-base font-semibold text-stone-950">{title}</div>
      <p className="mt-1 text-sm text-stone-600">{text}</p>
    </SectionCard>
  );
}

function Evidence() {
  return (
    <div className="space-y-4">
      <SectionCard className="p-5 sm:p-6">
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">Evidence</div>
        <h2 className="mt-1 font-serif text-2xl text-stone-950">Recovered Records</h2>
      </SectionCard>

      <div className="grid gap-4 xl:grid-cols-2">
        {evidenceCards.map((record) => (
          <EvidenceCard key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
}

function EvidenceCard({ record }) {
  const Icon = record.icon;
  return (
    <SectionCard className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#d2b676] bg-[#fbf7ef] text-[#a67a27]">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">{record.id} · {record.time}</div>
            <h3 className="mt-1 font-serif text-lg font-semibold text-stone-950">{record.title}</h3>
          </div>
        </div>
        <StatusPill>{record.status}</StatusPill>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-stone-600">{record.summary}</p>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {record.facts.map((fact) => (
          <div key={fact} className="flex items-center gap-2 text-xs text-stone-700">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-700" />
            {fact}
          </div>
        ))}
      </div>

      {record.hasCctv && <CCTVGrid />}
    </SectionCard>
  );
}

function CCTVGrid() {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5">
      {cctvFrames.map((frame) => (
        <div key={frame.id} className="overflow-hidden rounded-xl border border-stone-200 bg-stone-50">
          <div className="relative">
            <SafeImage src={frame.image} alt={frame.title} className="h-32 rounded-none" />
            <div className="absolute left-2 top-2 rounded bg-black/70 px-2 py-1 font-mono text-[10px] text-white">{frame.time}</div>
          </div>
          <div className="p-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-stone-500">{frame.id}</div>
            <div className="mt-1 font-serif text-sm font-semibold text-stone-950">{frame.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}

function LockedFiles() {
  return (
    <div className="space-y-4">
      <SectionCard className="p-5 sm:p-6">
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">Restricted</div>
        <h2 className="mt-1 font-serif text-2xl text-stone-950">Locked Files</h2>
      </SectionCard>

      <div className="grid gap-4 md:grid-cols-3">
        {lockedFiles.map((file) => {
          const Icon = file.icon;
          return (
            <SectionCard key={file.id} className="p-5">
              <div className="mb-4 flex items-center justify-between gap-2">
                <Icon className="h-5 w-5 text-[#b58a3b]" />
                <StatusPill locked>Locked</StatusPill>
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">{file.id}</div>
              <h3 className="mt-2 font-serif text-lg font-semibold text-stone-950">{file.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{file.summary}</p>
            </SectionCard>
          );
        })}
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white px-4 py-5 text-center sm:px-6 lg:px-9">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center gap-2 text-stone-500">
        <img
          src={AURELIA_LOGO}
          alt=""
          className="h-8 w-8 object-contain opacity-70"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className="font-serif text-sm uppercase tracking-[0.35em] text-stone-700">Aurelia House Internal System</div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.24em]">DCCU Mirror · Version 1.0.8</div>
      </div>
    </footer>
  );
}

export default function AureliaHouseInternalSystem() {
  const [active, setActive] = useState("home");
  const [reviewed, setReviewed] = useState(() => {
    if (typeof window === "undefined") return {};
    try {
      return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  });

  useEffect(() => {
    if (active === "home") return;
    setReviewed((current) => {
      if (current[active]) return current;
      const next = { ...current, [active]: true };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, [active]);

  return (
    <main className="min-h-screen bg-[#f7f5f0] text-stone-900">
      <div className="mx-auto max-w-[1600px] bg-white shadow-[0_25px_80px_rgba(35,25,15,0.12)] md:my-3 md:overflow-hidden md:rounded-xl md:border md:border-stone-200">
        <Header />
        <Hero />
        <Navigation active={active} setActive={setActive} reviewed={reviewed} />

        <div className="bg-[#fbfaf7] px-4 py-4 sm:px-6 lg:px-9 lg:py-5">
          {active === "home" && <Home setActive={setActive} />}
          {active === "evidence" && <Evidence />}
          {active === "locked" && <LockedFiles />}
        </div>

        <Footer />
      </div>
    </main>
  );
}
