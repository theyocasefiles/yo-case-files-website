export const STORAGE_KEY = "yo_case_files_case001_portal_state_v3";

export const DIGITAL_EVIDENCE = [
  {
    id: "DIGITAL-01",
    title: "WhatsApp Extraction",
    description: "Recovered WhatsApp conversation between Sara Malik and Lena Varga.",
    type: "image",
    file: "/evidence/digital-01-whatsapp.png",
    status: "AVAILABLE",
    section: "digital",
  },
  {
    id: "DIGITAL-02",
    title: "Livestream Recording",
    description: "Recovered livestream footage captured shortly before death.",
    type: "video",
    file: "/evidence/livestream.mp4",
    status: "AVAILABLE",
    section: "digital",
  },
  {
    id: "DIGITAL-03",
    title: "Email Archive",
    description: "Recovered email correspondence connected to Daniel Kovacs.",
    type: "image",
    file: "/evidence/digital-03-email.png",
    status: "AVAILABLE",
    section: "digital",
  },
  {
    id: "DIGITAL-05",
    title: "Access Log",
    description: "Recovered secure access and building entry records.",
    type: "image",
    file: "/evidence/digital-05-access-log.png",
    status: "AVAILABLE",
    section: "digital",
  },
  {
    id: "DIGITAL-04",
    title: "Encrypted Data",
    description: "Restricted cyber report and encrypted note. Secondary key required.",
    type: "image",
    file: "/evidence/digital-04-cyber-report.png",
    status: "RESTRICTED",
    section: "secure",
  },
];

export const REQUIRED_FILE_IDS = ["DIGITAL-01", "DIGITAL-03", "DIGITAL-05"];

export const INITIAL_MESSAGE = {
  type: "neutral",
  text: "DCCU system online. Review all available material before submitting a conclusion.",
};