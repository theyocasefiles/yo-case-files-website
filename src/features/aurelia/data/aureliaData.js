import {
  Archive,
  CalendarDays,
  DoorOpen,
  FileSearch,
  Grid3X3,
  KeyRound,
  Landmark,
  Lock,
  Users,
  Video,
  Wrench,
} from "lucide-react";

export const AURELIA_LOGO = "/aurelia/images/aurelia-round-logo.png";
export const HERO_IMAGE = "/aurelia/images/aurelia-reception-hero.jpg";
export const CREDENTIAL_IMAGE = "/aurelia/images/founder-credential-card.jpg";

export const STORAGE_KEY = "yo_case_files_mcu002_aurelia_essential_v1";

export const navItems = [
  { id: "home", label: "Home", icon: Grid3X3 },
  { id: "evidence", label: "Evidence", icon: FileSearch },
  { id: "locked", label: "Locked", icon: Lock },
];

export const evidenceCards = [
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

export const cctvFrames = [
  { id: "GH-D02A", title: "Reception", time: "14:08", image: "/aurelia/images/cctv-reception-arrival.jpg" },
  { id: "GH-D02B", title: "Wing Entry", time: "14:14", image: "/aurelia/images/cctv-treatment-wing-entry.jpg" },
  { id: "GH-D02C", title: "Corridor Exit", time: "14:43", image: "/aurelia/images/cctv-amelia-corridor-exit.jpg" },
  { id: "GH-D02D", title: "Staff Corridor", time: "14:52", image: "/aurelia/images/cctv-staff-corridor-movement.jpg" },
  { id: "GH-D02E", title: "Response", time: "15:24", image: "/aurelia/images/cctv-emergency-response.jpg" },
];

export const lockedFiles = [
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

export const quickCards = [
  { icon: CalendarDays, title: "Timeline", text: "Booking and CCTV records." },
  { icon: DoorOpen, title: "Suite Three", text: "Room status records." },
  { icon: KeyRound, title: "Access", text: "Credential and panel records." },
];
