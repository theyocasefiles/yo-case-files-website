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
  FileCheck2,
} from "lucide-react";

export const AURELIA_LOGO = "/aurelia/images/aurelia-round-logo.png";
export const HERO_IMAGE = "/aurelia/images/aurelia-reception-hero.jpg";
export const CREDENTIAL_IMAGE = "/aurelia/images/founder-credential-card.jpg";

export const STORAGE_KEY = "yo_case_files_mcu002_aurelia_essential_v1";

export const navItems = [
  { id: "home", label: "Home", icon: Grid3X3 },
  { id: "evidence", label: "Evidence", icon: FileSearch },
  { id: "locked", label: "Locked", icon: Lock },
  { id: "accuse", label: "Accuse", icon: FileCheck2 },
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
    extract: [
      "Daniel Hart suffered a serious medical collapse after an advanced Suite Three session.",
      "The incident was recorded internally as a treatment complication.",
      "The original record does not clearly assign system responsibility.",
      "Later archive material shows the incident remained under internal review.",
    ],
    linked: ["Clinical Risk Escalation", "Draft Revised Liability Report"],
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
    extract: [
      "Rowan Hale recorded operational concerns around Suite Three before the Daniel Hart incident.",
      "The memo references recovery controls, service responsibility and system behaviour.",
      "The document shows Operations had detailed knowledge of Suite Three risk areas.",
      "The memo became relevant again after Cassandra Vale reopened the liability review.",
    ],
    linked: ["Maintenance & Calibration", "Suite Three Override / Access Report"],
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
    extract: [
      "Dr. Helena Marr raised clinical concerns around advanced Suite Three treatment conditions.",
      "The note flags risk during recovery and supervision windows.",
      "Clinical risk was escalated before Daniel Hart’s incident.",
      "The record does not identify a single cause, but it confirms internal concern existed.",
    ],
    linked: ["Daniel Hart Incident", "Operations Concern Memo"],
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
    extract: [
      "A revised liability position was being prepared shortly before Cassandra Vale’s death.",
      "The draft moves the Daniel Hart incident back into active internal review.",
      "Operations handling and Suite Three controls are raised as relevant areas.",
      "The timing places pressure on staff connected to Suite Three systems.",
    ],
    linked: ["Daniel Hart Incident", "Rowan Hale Memo"],
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
    extract: [
      "Noah Bell recorded a mismatch in the Suite Three system state.",
      "The note suggests the visible room status did not fully match the system behaviour.",
      "The issue required review against access and override records.",
      "This note supports the need to compare technical activity with staff movement.",
    ],
    linked: ["Suite Three Status", "Override / Access Report"],
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
    extract: [
      "Suite Three activity was recorded through a staff-side control path.",
      "Guest access did not permit environmental override or service-panel control.",
      "The report places restricted system activity inside the relevant window.",
      "This record should be compared with CCTV staff corridor movement and access permissions.",
    ],
    linked: ["Staff Access Record", "Noah Bell Technical Note"],
  },
];

export const quickCards = [
  { icon: CalendarDays, title: "Timeline", text: "Booking and CCTV records." },
  { icon: DoorOpen, title: "Suite Three", text: "Room status records." },
  { icon: KeyRound, title: "Access", text: "Credential and panel records." },
];

export const FINAL_ACCUSATION_KEY = "ROWANHALE";

export const finalReport = {
  suspect: "Rowan Hale",
  title: "Final Accusation Report",
  status: "Accusation Supported",

  summary:
    "The recovered evidence supports Rowan Hale as the only suspect with the access, technical knowledge, service-route opportunity and motive required to make Suite Three lethal without being inside the room at the time of death.",

  method:
    "Cassandra Vale was not killed during a physical confrontation with Amelia Hart. The supported sequence indicates that Suite Three was manipulated through staff-side treatment-system controls. The room remained sealed under privacy mode while its recovery and monitoring systems were controlled externally through restricted operational access.",

  motive:
    "The locked archive shows that Aurelia House was preparing to reopen responsibility for the earlier Daniel Hart incident. Cassandra Vale was moving toward a revised liability position that placed pressure on Operations and the handling of Suite Three. Rowan Hale had reason to prevent that review from reaching final disclosure.",

  whyAmeliaIsCleared:
    "Amelia Hart had proximity and motive, which made her the strongest early suspect. However, the recovered records show she had guest treatment access only. She had no staff console access, no service corridor permission and no override authority. CCTV also places her leaving the treatment corridor before the later system activity window.",

  findings: [
    "Amelia Hart was present for a private Founder session, but her access level was guest-only.",
    "CCTV shows Amelia leaving the treatment corridor before the key Suite Three system activity.",
    "Suite Three was sealed, privacy mode was active and monitoring was routed through house systems.",
    "Staff-only corridor movement and panel activity occurred during the relevant window.",
    "The archive documents show prior Suite Three risk concerns and pressure around Daniel Hart’s incident.",
    "The Suite Three override/access report links the fatal window to staff-side system activity.",
    "The fatal sequence required restricted operational access, not guest proximity.",
  ],

  sequence: [
    "Amelia attends the private Founder session with Cassandra Vale.",
    "Amelia leaves the treatment corridor before the critical system window.",
    "Suite Three remains sealed under privacy mode.",
    "Staff-side system activity occurs after Amelia’s exit.",
    "The room condition changes while Cassandra remains inside.",
    "Emergency response begins after Cassandra is reported overdue.",
  ],

  conclusion:
    "Cassandra Vale’s death was the result of a controlled environmental/system sequence inside Suite Three. The evidence does not support a guest-controlled killing. Rowan Hale had the operational access, system knowledge, service-route opportunity and personal motive required to carry out the act and redirect suspicion toward Amelia Hart.",
};