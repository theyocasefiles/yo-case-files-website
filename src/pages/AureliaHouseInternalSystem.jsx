import React from "react";
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
} from "lucide-react";

const AURELIA_LOGO = "/aurelia/images/aurelia-round-logo.png";
const HERO_IMAGE = "/aurelia/images/aurelia-reception-hero.jpg";
const CREDENTIAL_IMAGE = "/aurelia/images/founder-credential-card.jpg";
const SUITE_THREE_IMAGE = "/aurelia/images/suite-three-thumb.jpg";

const cctvQueue = [
  {
    id: "GH-D02A",
    label: "Main Entrance",
    camera: "Camera 01",
    time: "14:08:21",
    status: "NEW",
    image: "/aurelia/images/cctv-main-entrance.jpg",
  },
  {
    id: "GH-D02B",
    label: "Treatment Wing",
    camera: "Camera 03",
    time: "14:14:32",
    status: "NEW",
    image: "/aurelia/images/cctv-treatment-wing.jpg",
  },
  {
    id: "GH-D02C",
    label: "Spa Lounge",
    camera: "Camera 05",
    time: "14:43:18",
    status: "NEW",
    image: "/aurelia/images/cctv-spa-lounge.jpg",
  },
  {
    id: "GH-D02D",
    label: "Service Corridor",
    camera: "Camera 08",
    time: "14:52:04",
    status: "REVIEWED",
    image: "/aurelia/images/cctv-service-corridor.jpg",
  },
];

const moduleNav = [
  { id: "dashboard", label: "Dashboard", icon: Grid3X3, active: true },
  { id: "bookings", label: "Bookings", icon: CalendarDays },
  { id: "cctv", label: "CCTV", icon: Video },
  { id: "suite-three", label: "Suite Three", icon: DoorOpen },
  { id: "staff-access", label: "Staff Access", icon: Users },
  { id: "maintenance", label: "Maintenance", icon: Wrench },
  { id: "incident-archive", label: "Incident Archive", icon: Archive },
  { id: "reconstruction", label: "Reconstruction", icon: Landmark },
];

const bookingStats = [
  { value: "24", label: "Upcoming\nBookings" },
  { value: "7", label: "Check-Ins\nToday" },
  { value: "2", label: "VIP\nBookings" },
  { value: "92%", label: "Occupancy\n7 Days" },
];

const suiteStatus = [
  { label: "Access Control", value: "Online" },
  { label: "Environmental Systems", value: "Online" },
  { label: "Secure Storage", value: "Online" },
  { label: "Comms Channel", value: "Online" },
  { label: "Data Terminal", value: "Online" },
];

const restrictedAreas = [
  "Suite Three",
  "Founder Archive Room",
  "Staff Record Vault",
  "IT Core Server Room",
  "Evidence Lockbox Cabinet",
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

function StatusDot({ label = "Online" }) {
  return (
    <span className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-800">
      <span className="h-1.5 w-1.5 rounded-full bg-emerald-700" />
      {label}
    </span>
  );
}

function SectionCard({ children, className }) {
  return (
    <section
      className={cx(
        "rounded-2xl border border-stone-200 bg-white shadow-[0_12px_35px_rgba(35,25,15,0.045)]",
        className
      )}
    >
      {children}
    </section>
  );
}

function SectionHeader({ icon: Icon, title, action }) {
  return (
    <div className="mb-4 flex items-center justify-between gap-4">
      <div className="flex min-w-0 items-center gap-2.5">
        <Icon className="h-4 w-4 shrink-0 text-[#b58a3b]" />
        <h2 className="truncate font-serif text-sm font-semibold uppercase tracking-[0.08em] text-stone-900">
          {title}
        </h2>
      </div>
      {action}
    </div>
  );
}

function GoldButton({ children, className }) {
  return (
    <button
      type="button"
      className={cx(
        "group inline-flex items-center justify-center gap-2 rounded-xl border border-[#d2b676] bg-white px-4 py-3 text-center font-serif text-[11px] font-semibold uppercase leading-tight tracking-[0.08em] text-[#9a6f21] transition hover:bg-[#fbf7ef]",
        className
      )}
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
            <div className="font-serif text-lg uppercase tracking-[0.23em] text-stone-900 sm:text-xl">
              Aurelia House
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">
              Internal System
            </div>
          </div>
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <div className="flex items-center gap-3 border-r border-stone-200 pr-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#d2b676] bg-[#fbf7ef] text-[#a67a27]">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <div className="font-serif text-xs font-semibold uppercase tracking-[0.12em] text-[#9a6f21]">
                DCCU Verified
              </div>
              <div className="text-[11px] text-stone-500">Digital & Cyber Crime Unit</div>
            </div>
          </div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 font-serif text-xs font-semibold text-[#9a6f21]">
            AH
          </div>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-stone-200 text-stone-700 md:hidden"
          aria-label="Open menu"
        >
          <span className="block h-px w-5 bg-current shadow-[0_7px_0_current,0_-7px_0_current]" />
        </button>
      </div>

      <div className="border-t border-stone-100 px-4 py-3 md:hidden">
        <div className="mx-auto flex max-w-[1500px] items-center justify-center gap-3 text-center">
          <ShieldCheck className="h-5 w-5 text-[#a67a27]" />
          <div>
            <div className="font-serif text-xs font-semibold uppercase tracking-[0.12em] text-[#9a6f21]">
              DCCU Verified
            </div>
            <div className="text-[10px] text-stone-500">Digital & Cyber Crime Unit</div>
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
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">
              Recovered Founder Credential
            </p>
            <h1 className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl lg:text-5xl">
              Aurelia House Internal System
            </h1>
            <p className="mt-2 font-serif text-lg italic text-[#a67a27] sm:text-xl">
              Read-Only Forensic Mirror
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
              <span>Mirrored & Secured by DCCU</span>
              <span className="h-1 w-1 rounded-full bg-[#c7a45a]" />
              <span>Digital & Cyber Crime Unit</span>
              <span className="h-1 w-1 rounded-full bg-[#c7a45a]" />
              <span>MCU-002</span>
            </div>
          </div>
          <SafeImage
            src={HERO_IMAGE}
            alt="Aurelia House reception interior"
            className="order-1 h-36 rounded-none sm:h-48 lg:order-2 lg:h-full lg:min-h-[205px]"
          />
        </div>
      </div>
    </div>
  );
}

function ModuleNavigation() {
  return (
    <nav className="border-b border-stone-200 bg-white">
      <div className="mx-auto max-w-[1500px] overflow-x-auto px-4 sm:px-6 lg:px-9">
        <div className="flex min-w-max items-stretch gap-2 py-0">
          {moduleNav.map(({ id, label, icon: Icon, active }) => (
            <button
              key={id}
              type="button"
              className={cx(
                "relative flex min-w-[82px] flex-col items-center justify-center gap-1 px-3 py-3 text-center text-[11px] font-medium text-stone-600 transition hover:text-[#9a6f21] sm:min-w-[110px] sm:flex-row sm:gap-2 sm:text-sm",
                active && "text-[#9a6f21]"
              )}
            >
              <Icon className="h-4 w-4" />
              <span className="leading-tight">{label}</span>
              {active && <span className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#c79632]" />}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}

function FounderCredentialCard() {
  return (
    <SectionCard className="p-4 sm:p-5">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <SafeImage
          src={CREDENTIAL_IMAGE}
          alt="Recovered founder credential"
          className="h-32 w-32 shrink-0 rounded-xl border border-[#d7c08d] shadow-sm"
        />
        <div className="min-w-0 flex-1">
          <h2 className="font-serif text-sm font-semibold uppercase tracking-[0.09em] text-stone-900">
            Founder Credential
          </h2>
          <dl className="mt-4 grid grid-cols-[112px_1fr] gap-x-4 gap-y-2 text-sm">
            <dt className="text-stone-500">Holder</dt>
            <dd className="font-medium text-stone-900">Cassandra Vale</dd>
            <dt className="text-stone-500">Credential ID</dt>
            <dd className="font-medium text-stone-900">AH-FND-001</dd>
            <dt className="text-stone-500">Status</dt>
            <dd>
              <span className="rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold uppercase tracking-[0.08em] text-emerald-800">
                Verified
              </span>
            </dd>
            <dt className="text-stone-500">Recovered</dt>
            <dd className="font-medium text-stone-900">May 12, 2025</dd>
          </dl>
        </div>
        <GoldButton className="w-full sm:w-40">View Full Credential</GoldButton>
      </div>
    </SectionCard>
  );
}

function SystemIntegrityCard() {
  return (
    <SectionCard className="overflow-hidden">
      <div className="grid h-full md:grid-cols-[0.95fr_1.05fr]">
        <div className="flex items-center gap-4 bg-emerald-50/50 p-5">
          <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-emerald-700/40 text-emerald-800">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-600">
              Case Status
            </div>
            <h2 className="mt-1 font-serif text-xl font-semibold uppercase leading-tight tracking-[0.05em] text-emerald-900">
              System Integrity Confirmed
            </h2>
            <p className="mt-2 text-xs text-stone-600">Mirror Active · Read-Only · DCCU Secured</p>
          </div>
        </div>
        <dl className="grid grid-cols-[1fr_auto] gap-x-5 gap-y-2 p-5 text-sm">
          <dt className="text-stone-500">System Mirror</dt>
          <dd className="font-medium text-emerald-800">Active</dd>
          <dt className="text-stone-500">Last Sync</dt>
          <dd className="font-medium text-stone-900">May 17, 2025 08:42</dd>
          <dt className="text-stone-500">Data Integrity</dt>
          <dd className="font-medium text-emerald-800">100%</dd>
          <dt className="text-stone-500">Chain of Custody</dt>
          <dd className="font-medium text-emerald-800">Verified</dd>
          <dt className="text-stone-500">DCCU Oversight</dt>
          <dd className="font-medium text-emerald-800">Active</dd>
        </dl>
      </div>
    </SectionCard>
  );
}

function BookingHighlights() {
  return (
    <SectionCard className="p-5">
      <SectionHeader icon={CalendarDays} title="Booking Highlights" />
      <div className="grid grid-cols-4 gap-2 text-center">
        {bookingStats.map((stat) => (
          <div key={stat.label} className="rounded-xl bg-stone-50 px-2 py-3">
            <div className="font-serif text-2xl font-semibold text-stone-950">{stat.value}</div>
            <div className="mt-1 whitespace-pre-line text-[11px] leading-tight text-stone-500">{stat.label}</div>
          </div>
        ))}
      </div>
    </SectionCard>
  );
}

function CCTVQueue() {
  return (
    <SectionCard className="p-5">
      <SectionHeader
        icon={Video}
        title="CCTV Queue"
        action={
          <button className="flex items-center gap-1 font-serif text-xs font-semibold uppercase tracking-[0.08em] text-[#9a6f21]">
            View All
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#c79632] text-white">
              <ChevronRight className="h-3 w-3" />
            </span>
          </button>
        }
      />
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {cctvQueue.map((clip) => (
          <button key={clip.id} type="button" className="group text-left">
            <SafeImage
              src={clip.image}
              alt={clip.label}
              className="mb-2 h-16 rounded-lg border border-stone-200 transition group-hover:border-[#c79632]"
            />
            <div className="truncate text-xs font-semibold text-stone-900">{clip.label}</div>
            <div className="truncate text-[11px] text-stone-500">{clip.camera}</div>
            <div className="text-[11px] font-medium text-stone-700">{clip.time}</div>
            <span
              className={cx(
                "mt-1 inline-flex rounded-full px-2 py-0.5 text-[9px] font-semibold uppercase tracking-[0.08em]",
                clip.status === "NEW"
                  ? "bg-[#c79632] text-white"
                  : "bg-stone-100 text-stone-500"
              )}
            >
              {clip.status}
            </span>
          </button>
        ))}
      </div>
    </SectionCard>
  );
}

function SuiteThreeStatus() {
  return (
    <SectionCard className="p-5">
      <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
        <SafeImage
          src={SUITE_THREE_IMAGE}
          alt="Suite Three"
          className="h-24 w-full rounded-xl border border-stone-200 sm:w-32"
        />
        <div className="flex-1">
          <SectionHeader icon={DoorOpen} title="Suite Three System Status" />
          <div className="grid gap-2 sm:grid-cols-2">
            {suiteStatus.map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-2 text-xs">
                <span className="text-stone-600">{item.label}</span>
                <StatusDot label={item.value} />
              </div>
            ))}
          </div>
        </div>
        <GoldButton className="w-full sm:w-44">View Suite Three Dashboard</GoldButton>
      </div>
    </SectionCard>
  );
}

function RestrictedAreas() {
  return (
    <SectionCard className="p-5">
      <div className="grid gap-5 lg:grid-cols-[1fr_auto]">
        <div>
          <SectionHeader icon={Lock} title="Restricted Areas" />
          <div className="grid gap-2 sm:grid-cols-2">
            {restrictedAreas.map((area) => (
              <div key={area} className="flex items-center justify-between gap-3 text-sm">
                <span className="text-stone-700">{area}</span>
                <span className="rounded-full bg-stone-100 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.08em] text-stone-500">
                  Restricted
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex min-w-[180px] flex-col items-center justify-center rounded-xl bg-[#fbf7ef] p-4 text-center">
          <BadgeCheck className="mb-2 h-5 w-5 text-[#b58a3b]" />
          <div className="font-serif text-sm font-semibold uppercase leading-tight tracking-[0.06em] text-stone-900">
            Access Control Enforced
          </div>
          <p className="mt-2 text-xs leading-relaxed text-stone-600">
            Restricted areas are monitored and logged.
          </p>
          <button className="mt-3 flex items-center gap-1 font-serif text-xs font-semibold uppercase tracking-[0.08em] text-[#9a6f21]">
            View Access Log <ChevronRight className="h-3 w-3" />
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
            <p className="mt-1 text-xs leading-relaxed text-stone-600">
              Suite Three environmental systems scheduled for May 20, 2025 from 02:00 AM – 06:00 AM.
            </p>
          </div>
          <button className="hidden rounded-lg border border-[#d2b676] px-3 py-2 font-serif text-[10px] font-semibold uppercase tracking-[0.08em] text-[#9a6f21] sm:block">
            View Details
          </button>
        </div>
        <div className="flex items-start gap-3 rounded-xl bg-stone-50 p-4">
          <CircleDot className="mt-0.5 h-4 w-4 shrink-0 text-stone-400" />
          <div className="min-w-0 flex-1">
            <div className="text-sm font-semibold text-stone-900">New Staff Access Protocol</div>
            <p className="mt-1 text-xs leading-relaxed text-stone-600">
              Updated authentication required for all staff accounts.
            </p>
          </div>
          <div className="hidden text-xs text-stone-500 sm:block">May 15, 2025</div>
        </div>
      </div>
    </SectionCard>
  );
}

function QuickRecordStrip() {
  return (
    <div className="grid gap-3 md:grid-cols-4">
      <SectionCard className="p-4">
        <KeyRound className="mb-3 h-5 w-5 text-[#b58a3b]" />
        <div className="font-serif text-sm font-semibold uppercase tracking-[0.06em] text-stone-900">
          Founder Mirror
        </div>
        <p className="mt-1 text-xs text-stone-500">Credential AH-FND-001 is active in read-only mode.</p>
      </SectionCard>
      <SectionCard className="p-4">
        <FileText className="mb-3 h-5 w-5 text-[#b58a3b]" />
        <div className="font-serif text-sm font-semibold uppercase tracking-[0.06em] text-stone-900">
          Evidence Index
        </div>
        <p className="mt-1 text-xs text-stone-500">Initial booking, CCTV and Suite Three records available.</p>
      </SectionCard>
      <SectionCard className="p-4">
        <Server className="mb-3 h-5 w-5 text-[#b58a3b]" />
        <div className="font-serif text-sm font-semibold uppercase tracking-[0.06em] text-stone-900">
          System Mirror
        </div>
        <p className="mt-1 text-xs text-stone-500">Local records frozen for DCCU forensic review.</p>
      </SectionCard>
      <SectionCard className="p-4">
        <Clock3 className="mb-3 h-5 w-5 text-[#b58a3b]" />
        <div className="font-serif text-sm font-semibold uppercase tracking-[0.06em] text-stone-900">
          Timeline Window
        </div>
        <p className="mt-1 text-xs text-stone-500">Priority review period: 14:04–15:24.</p>
      </SectionCard>
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
        <div className="font-serif text-sm uppercase tracking-[0.35em] text-stone-700">
          Aurelia House Internal System
        </div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.24em]">
          Mirrored by DCCU · Read-Only Access · Version 1.0.3
        </div>
      </div>
    </footer>
  );
}

export default function AureliaHouseInternalSystem() {
  return (
    <main className="min-h-screen bg-[#f7f5f0] text-stone-900">
      <TopBrowserBar />
      <div className="mx-auto max-w-[1600px] bg-white shadow-[0_25px_80px_rgba(35,25,15,0.12)] md:my-3 md:overflow-hidden md:rounded-xl md:border md:border-stone-200">
        <Header />
        <Hero />
        <ModuleNavigation />

        <div className="bg-[#fbfaf7] px-4 py-4 sm:px-6 lg:px-9 lg:py-5">
          <QuickRecordStrip />

          <div className="mt-4 grid gap-4 xl:grid-cols-[1fr_1.1fr]">
            <FounderCredentialCard />
            <SystemIntegrityCard />
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[0.92fr_1.08fr]">
            <BookingHighlights />
            <CCTVQueue />
          </div>

          <div className="mt-4 grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
            <SuiteThreeStatus />
            <RestrictedAreas />
          </div>

          <div className="mt-4">
            <SystemAnnouncements />
          </div>
        </div>

        <Footer />
      </div>
    </main>
  );
}
