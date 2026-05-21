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
    summary:
      "Amelia Hart was booked for a private Founder session with Cassandra Vale in Suite Three.",
    facts: ["Guest: Amelia Hart", "Host: Cassandra Vale", "Suite Three", "Private session"],
  },
  {
    id: "GH-D02",
    title: "CCTV Frames",
    icon: Video,
    time: "14:08–15:24",
    status: "Available",
    summary:
      "Recovered frames from reception, treatment wing, corridor exit, staff corridor and emergency response.",
    facts: ["Arrival", "Treatment wing entry", "Corridor exit", "Staff corridor movement"],
    hasCctv: true,
  },
  {
    id: "GH-D03",
    title: "Suite Three Status",
    icon: DoorOpen,
    time: "14:27–15:24",
    status: "Available",
    summary:
      "Suite Three was sealed, privacy mode was active and monitoring was routed through the house system.",
    facts: ["Door sealed", "Privacy active", "Session in progress", "Staff-side monitoring"],
  },
  {
    id: "GH-D04",
    title: "Staff Access Record",
    icon: Users,
    time: "Full day",
    status: "Available",
    summary:
      "Guest access and staff access were separate. Amelia Hart had guest treatment access only.",
    facts: ["Guest access only", "No staff console", "No service corridor", "No override permission"],
  },
];

export const cctvFrames = [
  {
    id: "GH-D02A",
    title: "Reception",
    time: "14:08",
    image: "/aurelia/images/cctv-reception-arrival.jpg",
  },
  {
    id: "GH-D02B",
    title: "Wing Entry",
    time: "14:14",
    image: "/aurelia/images/cctv-treatment-wing-entry.jpg",
  },
  {
    id: "GH-D02C",
    title: "Corridor Exit",
    time: "14:43",
    image: "/aurelia/images/cctv-amelia-corridor-exit.jpg",
  },
  {
    id: "GH-D02D",
    title: "Staff Corridor",
    time: "14:52",
    image: "/aurelia/images/cctv-staff-corridor-movement.jpg",
  },
  {
    id: "GH-D02E",
    title: "Response",
    time: "15:24",
    image: "/aurelia/images/cctv-emergency-response.jpg",
  },
];

export const lockedFiles = [
  {
    id: "AH-INC-DH-081124",
    title: "Internal Incident Report",
    label: "Daniel Hart Incident",
    icon: Archive,
    status: "Recovered",
    date: "18 November 2024",
    summary: "Restricted internal report relating to a prior Suite Three adverse event.",
    image: "/aurelia/images/archive/daniel-incident-report.png",
  },
  {
    id: "AH-OPS-RH-041124",
    title: "Operations Concern Memo",
    label: "Rowan Hale Memo",
    icon: Wrench,
    status: "Recovered",
    date: "04 November 2024",
    summary: "Facilities memo recording concern around Suite Three recovery controls.",
    image: "/aurelia/images/archive/rowan-operations-concern-memo.png",
  },
  {
    id: "AH-CLN-HM-061124",
    title: "Clinical Risk Escalation",
    label: "Dr. Helena Marr Note",
    icon: FileSearch,
    status: "Recovered",
    date: "06 November 2024",
    summary: "Clinical escalation note regarding advanced Suite Three sessions.",
    image: "/aurelia/images/archive/helena-clinical-risk-escalation.png",
  },
  {
    id: "AH-LGL-REV-DH-090525",
    title: "Draft Revised Liability Report",
    label: "Legal Review Draft",
    icon: Archive,
    status: "Recovered",
    date: "09 May 2025",
    summary: "Draft legal review revising the Daniel Hart liability position.",
    image: "/aurelia/images/archive/draft-revised-liability-report.png",
  },
  {
    id: "AH-TEC-NB-120525",
    title: "Technical Note",
    label: "Noah Bell Note",
    icon: Wrench,
    status: "Recovered",
    date: "12 May 2025",
    summary: "Technical note recording a Suite Three system state mismatch.",
    image: "/aurelia/images/archive/noah-technical-note.png",
  },
  {
    id: "AH-SYS-ST3-120525",
    title: "Suite Three Override / Access Report",
    label: "System Export",
    icon: Landmark,
    status: "Recovered",
    date: "12 May 2025",
    summary: "System export showing Suite Three profile, alert delay and staff credential activity.",
    image: "/aurelia/images/archive/suite-three-override-access-report.png",
  },
];

export const quickCards = [
  { icon: CalendarDays, title: "Timeline", text: "Booking and CCTV records." },
  { icon: DoorOpen, title: "Suite Three", text: "Room status records." },
  { icon: KeyRound, title: "Access", text: "Credential and panel records." },
];