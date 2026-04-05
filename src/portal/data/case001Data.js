export const STORAGE_KEY = "yo_case_files_case001_portal_state_v4";

export const DIGITAL_EVIDENCE = [
  {
    id: "DIGITAL-01",
    title: "WhatsApp Extraction",
    description:
      "Recovered WhatsApp message threads linked to Lena Varga, Sara Malik and Maya Brooks.",
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
    title: "Access Log",
    description: "Recovered session activity log linked to Daniel Kovacs account usage.",
    type: "image",
    file: "/evidence/digital-05-access-log.png",
    status: "AVAILABLE",
    section: "digital",
  },
  {
    id: "DIGITAL-04",
    title: "Recovered Secure Note",
    description:
      "Partial secure note fragment recovered from Sara Malik device extraction.",
    type: "image",
    file: "/evidence/DIGITAL-04_recovered_secure_note.png",
    status: "AVAILABLE",
    section: "digital",
  },
];

export const REQUIRED_FILE_IDS = ["DIGITAL-01", "DIGITAL-02", "DIGITAL-03"];

export const INITIAL_MESSAGE = {
  type: "neutral",
  text: "DCCU system online. Review all required material before accessing recovered mailboxes or submitting a conclusion.",
};