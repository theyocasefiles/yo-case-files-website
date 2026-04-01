export const STORAGE_KEY = "yo_case_files_case001_portal_state_v3";

export const DIGITAL_EVIDENCE = [
  {
    id: "DIGITAL-01",
    title: "WhatsApp Extraction",
    description: "Recovered WhatsApp conversation between Sara Malik and Lena Varga.",
    type: "image",
    file: "/evidence/digital-01-whatsappv2.png",
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
    description: "Recovered email correspondence linked to the victim, Sara Malik, and Daniel Kovacs.",
    type: "image",
    file: "/evidence/digital-03-emailv2.png",
    status: "AVAILABLE",
    section: "digital",
  },
  {
    id: "DIGITAL-07",
    title: "Access Log",
    description: "Recovered secure access and building entry records.",
    type: "image",
    file: "/evidence/digital-05-access-log.png",
    status: "AVAILABLE",
    section: "digital",
  },
  {
    id: "DIGITAL-04",
    title: "Recovered Secure Note",
    description: "Partial secure note fragment recovered from Sara Malik device extraction.",
    type: "image",
    file: "/evidence/DIGITAL-04_recovered_secure_note.png",
    status: "RESTRICTED",
    section: "secure",
  },
  {
    id: "DIGITAL-05",
    title: "Source / Order Correspondence",
    description: "Recovered order correspondence linked to Daniel Kovacs and Hidden Isles Botanicals.",
    type: "image",
    file: "/evidence/DIGITAL-05_source_order_correspondence.png",
    status: "RESTRICTED",
    section: "secure",
  },
  {
    id: "DIGITAL-06",
    title: "DCCU Trace Summary",
    description: "Restricted analyst summary tying recovered communications and procurement records together.",
    type: "image",
    file: "/evidence/DIGITAL-06_dccu_trace_summary.png",
    status: "RESTRICTED",
    section: "secure",
  },
];

export const REQUIRED_FILE_IDS = ["DIGITAL-01", "DIGITAL-02", "DIGITAL-03"];

export const INITIAL_MESSAGE = {
  type: "neutral",
  text: "DCCU system online. Review all required material before accessing restricted files or submitting a conclusion.",
};