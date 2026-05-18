import React, { useState } from "react";
import {
  ShieldCheck,
  Grid3X3,
  CalendarDays,
  Video,
  DoorOpen,
  Users,
  Wrench,
  Archive,
  Landmark,
  Lock,
  CheckCircle2,
  ChevronRight,
  Bell,
  BadgeCheck,
  KeyRound,
  Server,
  FileText,
  Clock3,
  CircleDot,
  AlertTriangle,
  ClipboardList,
  Eye,
  FileSearch,
  Fingerprint,
  Gauge,
  History,
  Info,
  MapPin,
  PlayCircle,
  Route,
  Settings2,
  HelpCircle,
} from "lucide-react";

const AURELIA_LOGO = "/aurelia/images/aurelia-round-logo.png";
const HERO_IMAGE = "/aurelia/images/aurelia-reception-hero.jpg";
const CREDENTIAL_IMAGE = "/aurelia/images/founder-credential-card.jpg";
const SUITE_THREE_IMAGE = "/aurelia/images/suite-three-thumb.jpg";

const moduleNav = [
  { id: "start", label: "Start Here", icon: Grid3X3 },
  { id: "bookings", label: "Bookings", icon: CalendarDays },
  { id: "cctv", label: "CCTV", icon: Video },
  { id: "suite-three", label: "Suite Three", icon: DoorOpen },
  { id: "staff-access", label: "Staff Access", icon: Users },
  { id: "more", label: "More Records", icon: Archive },
];

const investigationSteps = [
  {
    number: "01",
    title: "Check the booking",
    module: "Bookings",
    target: "bookings",
    summary: "Confirm who was booked into Suite Three and why Amelia Hart appears important early on.",
  },
  {
    number: "02",
    title: "Review CCTV",
    module: "CCTV",
    target: "cctv",
    summary: "Compare arrival, treatment wing entry, corridor exit and staff movement records.",
  },
  {
    number: "03",
    title: "Open Suite Three",
    module: "Suite Three",
    target: "suite-three",
    summary: "Review the room status, privacy mode and system behaviour without jumping to conclusions.",
  },
  {
    number: "04",
    title: "Check staff access",
    module: "Staff Access",
    target: "staff-access",
    summary: "Separate who was physically nearby from who could actually control restricted systems.",
  },
  {
    number: "05",
    title: "Use More Records last",
    module: "More Records",
    target: "more",
    summary: "Maintenance, archive and reconstruction records should be reviewed after the main timeline is clear.",
  },
];

const bookingRecords = [
  {
    id: "GH-D01",
    title: "Guest Booking & Treatment Timeline",
    type: "Booking Record",
    status: "Available",
    timestamp: "May 12, 2025 · 14:10–15:24",
    icon: CalendarDays,
    summary: "Amelia Hart was checked into Aurelia House for a private Suite Three appointment with Cassandra Vale.",
    details: ["Guest: Amelia Hart", "Host: Cassandra Vale", "Suite: Suite Three", "Session: Private Founder’s Session"],
    dccuNote: "This supports Amelia’s proximity, but it does not prove she could control Suite Three systems.",
  },
  {
    id: "GH-D01A",
    title: "Reception Check-In Record",
    type: "Movement Log",
    status: "Available",
    timestamp: "May 12, 2025 · 14:10–14:14",
    icon: ClipboardList,
    summary: "Reception confirms arrival, pass verification and direction toward the treatment wing.",
    details: ["Pass verified at 14:12", "Privacy protocol noted", "Treatment wing access permitted", "No staff permissions assigned"],
    dccuNote: "Useful for timeline construction. Compare with CCTV exit and staff access records.",
  },
  {
    id: "GH-D01B",
    title: "Founder Diary Entry",
    type: "Founder Schedule",
    status: "Restricted Preview",
    timestamp: "May 12, 2025 · 13:50",
    icon: FileText,
    summary: "Cassandra Vale’s schedule confirms the meeting. Linked founder notes remain restricted.",
    details: ["Private guest session confirmed", "Suite Three reserved", "Linked founder archive flagged", "Late-stage review required"],
    dccuNote: "Linked archive content may become relevant after the main system records are reviewed.",
  },
  {
    id: "GH-D01C",
    title: "Suite Three Booking Amendment",
    type: "System Amendment",
    status: "Queued",
    timestamp: "May 12, 2025 · 14:04",
    icon: History,
    summary: "A pre-session amendment confirms Suite Three settings were checked before the private session window.",
    details: ["Amendment logged before session", "Privacy mode confirmed", "Recovery cycle referenced", "Staff-only audit trail pending"],
    dccuNote: "Compare this entry with Suite Three system data and Staff Access logs.",
  },
];

const cctvClips = [
  {
    id: "GH-D02A",
    title: "Reception Arrival",
    label: "Main Entrance",
    camera: "Camera 01",
    time: "14:08:21",
    status: "New",
    image: "/aurelia/images/cctv-main-entrance.jpg",
    summary: "Amelia Hart enters Aurelia House before the private Founder session.",
    dccuNote: "Confirms arrival only. It does not confirm activity inside Suite Three.",
  },
  {
    id: "GH-D02B",
    title: "Treatment Wing Entry",
    label: "Treatment Wing Corridor",
    camera: "Camera 02",
    time: "14:14:32",
    status: "New",
    image: "/aurelia/images/cctv-treatment-wing.jpg",
    summary: "Amelia is directed toward the treatment wing after pass verification.",
    dccuNote: "Supports proximity. Compare with staff permission records before assigning capability.",
  },
  {
    id: "GH-D02C",
    title: "Amelia Corridor Exit",
    label: "Spa Lounge",
    camera: "Camera 05",
    time: "14:43:18",
    status: "New",
    image: "/aurelia/images/cctv-spa-lounge.jpg",
    summary: "Amelia leaves the treatment corridor earlier than expected.",
    dccuNote: "Important timing contradiction when compared with later room-system behaviour.",
  },
  {
    id: "GH-D02D",
    title: "Staff Corridor Movement",
    label: "Service Corridor",
    camera: "Camera 07",
    time: "14:52:04",
    status: "Reviewed",
    image: "/aurelia/images/cctv-service-corridor.jpg",
    summary: "Staff-only corridor movement appears during the key operational window.",
    dccuNote: "Relevant because guest credentials do not permit service corridor access.",
  },
  {
    id: "GH-D02E",
    title: "Emergency Response",
    label: "Suite Three Door",
    camera: "Camera 04",
    time: "15:24:09",
    status: "Queued",
    image: "/aurelia/images/cctv-suite-three-door.jpg",
    summary: "External response begins after Cassandra is reported overdue.",
    dccuNote: "Supports locked-room framing. Compare with safety alert routing once unlocked.",
  },
];

const suiteThreeRecords = [
  {
    id: "GH-D03",
    title: "Suite Three Session Status",
    type: "Room System",
    status: "Available",
    timestamp: "May 12, 2025 · 14:27–15:24",
    icon: Gauge,
    summary: "Suite Three was sealed, privacy mode was active and external monitoring was routed through staff-only systems.",
    details: ["Privacy mode active", "Session marked in progress", "Door status sealed", "External monitoring enabled"],
    dccuNote: "This explains why the room looked locked. It does not yet explain the fatal condition.",
  },
  {
    id: "GH-D07",
    title: "Environmental Pattern Review",
    type: "Restricted System Review",
    status: "Restricted Preview",
    timestamp: "May 12, 2025 · 14:48–15:12",
    icon: Settings2,
    summary: "Environmental readings show an abnormal pattern after the guest has already left the key corridor window.",
    details: ["Pattern begins after initial session window", "Recovery cycle flagged", "Manual review required", "Staff console path linked"],
    dccuNote: "Use this record after reviewing CCTV and staff permissions. It should not be the first conclusion.",
  },
];

const staffAccessRecords = [
  {
    id: "GH-D04",
    title: "Staff Access Permission Record",
    type: "Credential Matrix",
    status: "Available",
    timestamp: "May 12, 2025 · Full day",
    icon: Fingerprint,
    summary: "Guest credentials and staff credentials are separated. Amelia Hart had guest treatment access only.",
    details: ["Amelia: guest treatment access", "No staff console access", "No service corridor permission", "No environmental override permission"],
    dccuNote: "This record separates suspicion from capability.",
  },
  {
    id: "GH-D05",
    title: "Service Corridor / Panel Activity Log",
    type: "Access Log",
    status: "Available",
    timestamp: "May 12, 2025 · 14:04–14:56",
    icon: KeyRound,
    summary: "Staff-only panel and corridor activity appear inside the relevant window.",
    details: ["Service corridor access recorded", "Operations-level permission required", "Panel activity before alert", "Guest credentials excluded"],
    dccuNote: "Compare this with CCTV 4 and the Suite Three system records.",
  },
];

const moreRecords = [
  {
    id: "maintenance",
    title: "Maintenance & Calibration",
    status: "Next Build",
    icon: Wrench,
    summary: "Sensor checks, calibration history and service-panel contradictions.",
    items: ["GH-D06 · Maintenance & Calibration Audit", "Noah Bell check comparison", "Sensor calibration discrepancy"],
  },
  {
    id: "incident-archive",
    title: "Incident Archive",
    status: "Locked",
    icon: Archive,
    summary: "Late-stage founder archive connected to Daniel Hart and retreat liability.",
    items: ["GH-D10 · Daniel Hart Incident Summary", "GH-D11 · Private Settlement Letter", "GH-D12 · Altered Safety Report", "GH-D13 · Cassandra Internal Blame Note"],
  },
  {
    id: "reconstruction",
    title: "Final Reconstruction",
    status: "Locked",
    icon: Landmark,
    summary: "DCCU / FIU timeline overlay for final accusation support.",
    items: ["GH-D09 · Timeline Reconstruction", "Movement overlay", "System-state overlay", "Final accusation support"],
  },
  {
    id: "system-guide",
    title: "System Guide",
    status: "Available",
    icon: HelpCircle,
    summary: "Plain-language help explaining how to review records without technical knowledge.",
    items: ["Read the records in order", "Compare timestamps", "Do not assume proximity means capability"],
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

function StatusPill({ status }) {
  const normalized = status.toLowerCase();
  const styles = normalized.includes("locked")
    ? "bg-stone-100 text-stone-600 border-stone-200"
    : normalized.includes("restricted")
      ? "bg-amber-50 text-amber-800 border-amber-200"
      : normalized.includes("queued") || normalized.includes("next")
        ? "bg-slate-50 text-slate-700 border-slate-200"
        : normalized.includes("reviewed")
          ? "bg-stone-100 text-stone-500 border-stone-200"
          : "bg-emerald-50 text-emerald-800 border-emerald-100";

  return <span className={cx("rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em]", styles)}>{status}</span>;
}

function SectionCard({ children, className }) {
  return <section className={cx("rounded-2xl border border-stone-200 bg-white shadow-[0_12px_35px_rgba(35,25,15,0.045)]", className)}>{children}</section>;
}

function SectionHeader({ icon: Icon, title, action }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-2.5">
        <Icon className="h-4 w-4 shrink-0 text-[#b58a3b]" />
        <h2 className="truncate font-serif text-sm font-semibold uppercase tracking-[0.08em] text-stone-900">{title}</h2>
      </div>
      {action}
    </div>
  );
}

function GoldButton({ children, className, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx("group inline-flex items-center justify-center gap-2 rounded-xl border border-[#d2b676] bg-white px-4 py-3 text-center font-serif text-[11px] font-semibold uppercase leading-tight tracking-[0.08em] text-[#9a6f21] transition hover:bg-[#fbf7ef]", className)}
    >
      {children}
      <ChevronRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
    </button>
  );
}

function TopBrowserBar() {
  return (
    <div className="hidden border-b border-stone-200 bg-stone-100 px-4 py-2 md:block">
      <div className="mx-auto flex max-w-[1500px] items-center gap-4">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-amber-300" />
          <span className="h-3 w-3 rounded-full bg-emerald-400" />
        </div>
        <div className="flex h-8 flex-1 items-center rounded-full bg-white px-4 text-xs text-stone-500 shadow-inner">
          <Lock className="mr-2 h-3.5 w-3.5" />
          aureliahouse.internal
        </div>
      </div>
    </div>
  );
}

function Header() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-9">
        <div className="flex min-w-0 items-center gap-3">
          <img
            src={AURELIA_LOGO}
            alt="Aurelia House"
            className="h-12 w-12 shrink-0 rounded-full object-contain sm:h-14 sm:w-14"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <div className="min-w-0">
            <div className="font-serif text-lg uppercase tracking-[0.23em] text-stone-900 sm:text-xl">Aurelia House</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">Internal System</div>
          </div>
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d2b676] bg-[#fbf7ef] text-[#a67a27]">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="font-serif text-xs font-semibold uppercase tracking-[0.12em] text-[#9a6f21]">DCCU Verified</div>
            <div className="text-[11px] text-stone-500">Digital & Cyber Crime Unit</div>
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
        <div className="grid items-stretch lg:grid-cols-[1fr_1.05fr]">
          <div className="order-2 px-4 py-7 sm:px-6 lg:order-1 lg:px-9 lg:py-10">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">Recovered Founder Credential</p>
            <h1 className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl lg:text-5xl">Aurelia House Internal System</h1>
            <p className="mt-2 font-serif text-lg italic text-[#a67a27] sm:text-xl">Read-Only Forensic Mirror</p>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
              <span>Mirrored & Secured by DCCU</span>
              <span className="h-1 w-1 rounded-full bg-[#c7a45a]" />
              <span>MCU-002</span>
            </div>
          </div>
          <SafeImage src={HERO_IMAGE} alt="Aurelia House reception interior" className="order-1 h-36 rounded-none sm:h-48 lg:order-2 lg:h-full lg:min-h-[205px]" />
        </div>
      </div>
    </div>
  );
}

function ModuleNavigation({ activeModule, setActiveModule }) {
  return (
    <nav className="sticky top-0 z-20 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="mx-auto max-w-[1500px] overflow-x-auto px-3 sm:px-6 lg:px-9">
        <div className="flex min-w-max items-stretch gap-1 py-0">
          {moduleNav.map(({ id, label, icon: Icon }) => {
            const active = activeModule === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => setActiveModule(id)}
                className={cx("relative flex min-w-[92px] flex-col items-center justify-center gap-1 px-3 py-3 text-center text-[11px] font-semibold text-stone-600 transition hover:text-[#9a6f21] sm:min-w-[125px] sm:flex-row sm:gap-2 sm:text-sm", active && "text-[#9a6f21]")}
              >
                <Icon className="h-4 w-4" />
                <span className="leading-tight">{label}</span>
                {active && <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#c79632]" />}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

function StartHere({ setActiveModule }) {
  return (
    <div className="space-y-4">
      <SectionCard className="overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[1fr_320px]">
          <div className="p-5 sm:p-6">
            <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
              <Grid3X3 className="h-4 w-4 text-[#b58a3b]" />
              Start Here
            </div>
            <h2 className="font-serif text-2xl leading-tight text-stone-950 sm:text-3xl">Review the records in order</h2>
            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-600">
              This mirror is designed for simple review. Start with the booking record, then CCTV, then Suite Three, then Staff Access. Do not treat the first suspicious person as the final answer.
            </p>
            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <GoldButton onClick={() => setActiveModule("bookings")} className="w-full sm:w-auto">Review Booking Records</GoldButton>
              <GoldButton onClick={() => setActiveModule("cctv")} className="w-full sm:w-auto">Review CCTV</GoldButton>
            </div>
          </div>
          <div className="border-t border-stone-100 bg-[#fbf7ef] p-5 lg:border-l lg:border-t-0">
            <div className="flex items-center gap-4">
              <SafeImage src={CREDENTIAL_IMAGE} alt="Recovered founder credential" className="h-24 w-24 shrink-0 rounded-xl border border-[#d7c08d] shadow-sm" />
              <div>
                <div className="font-serif text-sm font-semibold uppercase tracking-[0.08em] text-stone-900">Founder Credential</div>
                <dl className="mt-2 space-y-1 text-xs text-stone-600">
                  <div><span className="text-stone-500">Holder:</span> Cassandra Vale</div>
                  <div><span className="text-stone-500">ID:</span> AH-FND-001</div>
                  <div><span className="text-stone-500">Status:</span> Verified</div>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      <div className="grid gap-3 md:grid-cols-4">
        <SmallStatus icon={KeyRound} title="Founder Mirror" text="Read-only recovered credential access." />
        <SmallStatus icon={FileText} title="Evidence Index" text="Initial records are ready to review." />
        <SmallStatus icon={Server} title="System Mirror" text="Records frozen for DCCU review." />
        <SmallStatus icon={Clock3} title="Timeline Window" text="Priority review: 14:04–15:24." />
      </div>

      <SectionCard className="p-5 sm:p-6">
        <SectionHeader icon={CheckCircle2} title="Simple Investigation Steps" />
        <div className="grid gap-3 lg:grid-cols-5">
          {investigationSteps.map((step) => (
            <button key={step.number} type="button" onClick={() => setActiveModule(step.target)} className="rounded-2xl border border-stone-200 bg-white p-4 text-left transition hover:border-[#d2b676] hover:bg-[#fbf7ef]">
              <div className="font-serif text-2xl font-semibold text-[#b58a3b]">{step.number}</div>
              <h3 className="mt-2 font-serif text-base font-semibold text-stone-950">{step.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-stone-600">{step.summary}</p>
              <div className="mt-3 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#9a6f21]">
                Open {step.module} <ChevronRight className="h-3 w-3" />
              </div>
            </button>
          ))}
        </div>
      </SectionCard>

      <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <SuiteThreeSummary setActiveModule={setActiveModule} />
        <RestrictedAreas setActiveModule={setActiveModule} />
      </div>

      <SystemAnnouncements />
    </div>
  );
}

function SmallStatus({ icon: Icon, title, text }) {
  return (
    <SectionCard className="p-4">
      <Icon className="mb-3 h-5 w-5 text-[#b58a3b]" />
      <div className="font-serif text-sm font-semibold uppercase tracking-[0.06em] text-stone-900">{title}</div>
      <p className="mt-1 text-xs text-stone-500">{text}</p>
    </SectionCard>
  );
}

function SuiteThreeSummary({ setActiveModule }) {
  const suiteStatus = ["Access Control", "Environmental Systems", "Secure Storage", "Comms Channel", "Data Terminal"];
  return (
    <SectionCard className="p-5">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <SafeImage src={SUITE_THREE_IMAGE} alt="Suite Three" className="h-24 w-full rounded-xl border border-stone-200 sm:w-32" />
        <div className="flex-1">
          <SectionHeader icon={DoorOpen} title="Suite Three Status" />
          <div className="grid gap-2 sm:grid-cols-2">
            {suiteStatus.map((item) => (
              <div key={item} className="flex items-center justify-between gap-2 text-xs">
                <span className="text-stone-600">{item}</span>
                <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-800"><span className="h-1.5 w-1.5 rounded-full bg-emerald-700" />Online</span>
              </div>
            ))}
          </div>
        </div>
        <GoldButton className="w-full sm:w-44" onClick={() => setActiveModule("suite-three")}>Open Suite Three</GoldButton>
      </div>
    </SectionCard>
  );
}

function RestrictedAreas({ setActiveModule }) {
  const restrictedAreas = ["Suite Three", "Founder Archive Room", "Staff Record Vault", "IT Core Server Room", "Evidence Lockbox Cabinet"];
  return (
    <SectionCard className="p-5">
      <div className="grid gap-5 lg:grid-cols-[1fr_auto]">
        <div>
          <SectionHeader icon={Lock} title="Restricted Areas" />
          <div className="grid gap-2 sm:grid-cols-2">
            {restrictedAreas.map((area) => (
              <div key={area} className="flex items-center justify-between gap-3 text-sm">
                <span className="text-stone-700">{area}</span>
                <span className="rounded-full bg-stone-100 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-stone-500">Restricted</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex min-w-[180px] flex-col items-center justify-center rounded-xl bg-[#fbf7ef] p-4 text-center">
          <BadgeCheck className="mb-2 h-5 w-5 text-[#b58a3b]" />
          <div className="font-serif text-sm font-semibold uppercase leading-tight tracking-[0.06em] text-stone-900">Access Control Enforced</div>
          <p className="mt-2 text-xs leading-relaxed text-stone-600">Restricted areas are monitored and logged.</p>
          <button type="button" onClick={() => setActiveModule("staff-access")} className="mt-3 flex items-center gap-1 font-serif text-xs font-semibold uppercase tracking-[0.08em] text-[#9a6f21]">
            Check Staff Access <ChevronRight className="h-3 w-3" />
          </button>
        </div>
      </div>
    </SectionCard>
  );
}

function SystemAnnouncements() {
  return (
    <SectionCard className="p-5">
      <SectionHeader icon={Bell} title="System Announcements" />
      <div className="grid gap-3 lg:grid-cols-2">
        <div className="flex items-start gap-3 rounded-xl bg-[#fbf7ef] p-4">
          <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-[#c79632]" />
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold text-stone-900">Scheduled Maintenance</div>
            <p className="mt-1 text-xs leading-relaxed text-stone-600">Suite Three environmental systems scheduled for May 20, 2025 from 02:00 AM – 06:00 AM.</p>
          </div>
        </div>
        <div className="flex items-start gap-3 rounded-xl bg-stone-50 p-4">
          <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-stone-400" />
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold text-stone-900">New Staff Access Protocol</div>
            <p className="mt-1 text-xs leading-relaxed text-stone-600">Updated authentication required for all staff accounts.</p>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

function ModuleIntro({ icon: Icon, eyebrow, title, summary, status }) {
  return (
    <SectionCard className="overflow-hidden">
      <div className="grid gap-0 lg:grid-cols-[1fr_auto]">
        <div className="p-5 sm:p-6">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
            <Icon className="h-4 w-4 text-[#b58a3b]" />
            {eyebrow}
          </div>
          <h2 className="font-serif text-2xl leading-tight text-stone-950 sm:text-3xl">{title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-stone-600">{summary}</p>
        </div>
        <div className="flex items-center justify-start border-t border-stone-100 bg-[#fbf7ef] p-5 lg:min-w-[230px] lg:justify-center lg:border-l lg:border-t-0">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-stone-500">Module Status</div>
            <div className="mt-2"><StatusPill status={status} /></div>
          </div>
        </div>
      </div>
    </SectionCard>
  );
}

function EvidenceRecordCard({ record }) {
  const Icon = record.icon || FileSearch;
  return (
    <SectionCard className="p-5">
      <div className="flex min-w-0 gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#d2b676] bg-[#fbf7ef] text-[#a67a27]"><Icon className="h-5 w-5" /></div>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2"><span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">{record.id}</span><StatusPill status={record.status} /></div>
          <h3 className="mt-2 font-serif text-lg font-semibold leading-tight text-stone-950">{record.title}</h3>
          <p className="mt-1 text-xs font-medium uppercase tracking-[0.12em] text-[#9a6f21]">{record.type}</p>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-stone-600">{record.summary}</p>
      <div className="mt-4 rounded-xl bg-stone-50 p-4">
        <div className="mb-2 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500"><Clock3 className="h-3.5 w-3.5" />{record.timestamp}</div>
        <div className="grid gap-2 sm:grid-cols-2">
          {record.details.map((detail) => <div key={detail} className="flex items-center gap-2 text-xs text-stone-700"><CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-700" />{detail}</div>)}
        </div>
      </div>
      <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50/50 p-4">
        <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#b58a3b]" />
        <p className="text-xs leading-relaxed text-stone-600"><span className="font-semibold text-stone-800">DCCU note: </span>{record.dccuNote}</p>
      </div>
    </SectionCard>
  );
}

function RecordModule({ icon, eyebrow, title, status, summary, records }) {
  return (
    <div className="space-y-4">
      <ModuleIntro icon={icon} eyebrow={eyebrow} title={title} status={status} summary={summary} />
      <div className="grid gap-4 xl:grid-cols-2">
        {records.map((record) => <EvidenceRecordCard key={record.id} record={record} />)}
      </div>
    </div>
  );
}

function CCTVModule() {
  return (
    <div className="space-y-4">
      <ModuleIntro icon={Video} eyebrow="CCTV Review" title="Treatment Wing Camera Queue" status="Available" summary="Review the clips in order. CCTV confirms movement and timing. It does not automatically identify the killer." />
      <div className="space-y-4">
        {cctvClips.map((clip) => <CCTVClipCard key={clip.id} clip={clip} />)}
      </div>
    </div>
  );
}

function CCTVClipCard({ clip }) {
  return (
    <SectionCard className="overflow-hidden">
      <div className="grid lg:grid-cols-[320px_1fr]">
        <div className="relative">
          <SafeImage src={clip.image} alt={clip.title} className="h-52 rounded-none lg:h-full" />
          <div className="absolute left-3 top-3 rounded bg-black/70 px-2 py-1 font-mono text-[11px] text-white">05-12-2025 · {clip.time}</div>
          <div className="absolute bottom-3 left-3 rounded bg-black/70 px-2 py-1 font-mono text-[11px] text-white">{clip.camera}</div>
          <div className="absolute bottom-3 right-3 flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.08em] text-stone-800"><PlayCircle className="h-3.5 w-3.5 text-[#9a6f21]" />Video Ready</div>
        </div>
        <div className="p-5">
          <div className="flex flex-wrap items-center gap-2"><span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">{clip.id}</span><StatusPill status={clip.status} /></div>
          <h3 className="mt-2 font-serif text-xl font-semibold leading-tight text-stone-950">{clip.title}</h3>
          <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-stone-500"><span className="inline-flex items-center gap-1.5"><MapPin className="h-3.5 w-3.5" />{clip.label}</span><span className="inline-flex items-center gap-1.5"><Video className="h-3.5 w-3.5" />{clip.camera}</span></div>
          <p className="mt-4 text-sm leading-relaxed text-stone-600">{clip.summary}</p>
          <div className="mt-4 flex items-start gap-3 rounded-xl border border-amber-100 bg-amber-50/50 p-4"><Eye className="mt-0.5 h-4 w-4 shrink-0 text-[#b58a3b]" /><p className="text-xs leading-relaxed text-stone-600"><span className="font-semibold text-stone-800">DCCU review note: </span>{clip.dccuNote}</p></div>
        </div>
      </div>
    </SectionCard>
  );
}

function MoreRecords() {
  return (
    <div className="space-y-4">
      <ModuleIntro icon={Archive} eyebrow="Advanced Records" title="More Records" status="Partially Locked" summary="Use this area after the main timeline is clear. These records are for maintenance contradictions, hidden archive material and final reconstruction support." />
      <div className="grid gap-4 xl:grid-cols-2">
        {moreRecords.map((record) => {
          const Icon = record.icon;
          const locked = record.status.toLowerCase().includes("locked");
          return (
            <SectionCard key={record.id} className="p-5">
              <div className="flex items-start gap-3">
                <div className={cx("flex h-11 w-11 shrink-0 items-center justify-center rounded-xl", locked ? "bg-stone-100 text-stone-500" : "border border-[#d2b676] bg-[#fbf7ef] text-[#a67a27]")}><Icon className="h-5 w-5" /></div>
                <div className="min-w-0 flex-1">
                  <div className="flex flex-wrap items-center gap-2"><h3 className="font-serif text-lg font-semibold text-stone-950">{record.title}</h3><StatusPill status={record.status} /></div>
                  <p className="mt-2 text-sm leading-relaxed text-stone-600">{record.summary}</p>
                  <div className="mt-4 grid gap-2">
                    {record.items.map((item) => <div key={item} className="flex items-center gap-2 rounded-xl bg-stone-50 p-3 text-sm text-stone-700">{locked ? <Lock className="h-4 w-4 text-stone-400" /> : <FileSearch className="h-4 w-4 text-[#b58a3b]" />}{item}</div>)}
                  </div>
                </div>
              </div>
            </SectionCard>
          );
        })}
      </div>
      <SectionCard className="border-amber-100 bg-amber-50/50 p-5">
        <div className="flex items-start gap-3">
          <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#b58a3b]" />
          <div>
            <h3 className="font-serif text-lg font-semibold text-stone-950">Player Guidance</h3>
            <p className="mt-1 text-sm leading-relaxed text-stone-600">Do not start here. Review Bookings, CCTV, Suite Three and Staff Access first. The archive and reconstruction make more sense after those records.</p>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}

function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white px-4 py-5 text-center sm:px-6 lg:px-9">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center gap-2 text-stone-500">
        <img src={AURELIA_LOGO} alt="" className="h-8 w-8 object-contain opacity-70" onError={(event) => { event.currentTarget.style.display = "none"; }} />
        <div className="font-serif text-sm uppercase tracking-[0.35em] text-stone-700">Aurelia House Internal System</div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.24em]">Mirrored by DCCU · Read-Only Access · Version 1.0.4</div>
      </div>
    </footer>
  );
}

export default function AureliaHouseInternalSystem() {
  const [activeModule, setActiveModule] = useState("start");
  const activeLabel = moduleNav.find((item) => item.id === activeModule)?.label || "Start Here";

  return (
    <main className="min-h-screen bg-[#f7f5f0] text-stone-900">
      <TopBrowserBar />
      <div className="mx-auto max-w-[1600px] bg-white shadow-[0_25px_80px_rgba(35,25,15,0.12)] md:my-3 md:overflow-hidden md:rounded-xl md:border md:border-stone-200">
        <Header />
        <Hero />
        <ModuleNavigation activeModule={activeModule} setActiveModule={setActiveModule} />

        <div className="bg-[#fbfaf7] px-4 py-4 sm:px-6 lg:px-9 lg:py-5">
          {activeModule !== "start" && (
            <div className="mb-4 flex items-center justify-between gap-3 rounded-2xl border border-stone-200 bg-white px-4 py-3 shadow-[0_12px_35px_rgba(35,25,15,0.035)]">
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">Current Section</div>
                <div className="font-serif text-lg font-semibold text-stone-950">{activeLabel}</div>
              </div>
              <button type="button" onClick={() => setActiveModule("start")} className="rounded-xl border border-[#d2b676] bg-white px-3 py-2 font-serif text-[10px] font-semibold uppercase tracking-[0.08em] text-[#9a6f21]">Start Here</button>
            </div>
          )}

          {activeModule === "start" && <StartHere setActiveModule={setActiveModule} />}
          {activeModule === "bookings" && <RecordModule icon={CalendarDays} eyebrow="Guest & Booking Records" title="Bookings" status="Available" summary="Start here. These records explain Amelia Hart’s appointment and why she looks important early on." records={bookingRecords} />}
          {activeModule === "cctv" && <CCTVModule />}
          {activeModule === "suite-three" && <RecordModule icon={DoorOpen} eyebrow="Suite Three System" title="Suite Three" status="Available" summary="Review room status and system behaviour after checking booking and CCTV records." records={suiteThreeRecords} />}
          {activeModule === "staff-access" && <RecordModule icon={Users} eyebrow="Credential & Access Logs" title="Staff Access" status="Available" summary="Use this section to check who could access staff-only corridors, panels and system controls." records={staffAccessRecords} />}
          {activeModule === "more" && <MoreRecords />}
        </div>

        <Footer />
      </div>
    </main>
  );
}
