import { motion } from "framer-motion";

const archiveSections = [
  {
    title: "Core Documents",
    files: [
      {
        title: "Content Checklist",
        type: "PDF",
        href: "/archive/case-001/Content-checklist.pdf",
      },
      {
        title: "MCU Briefing",
        type: "PDF",
        href: "/archive/case-001/MCU-Briefing.pdf",
      },
      {
        title: "MCU Evidence Log",
        type: "PDF",
        href: "/archive/case-001/MCU-Evidence-Log.pdf",
      },
      {
        title: "MCU Timeline",
        type: "PDF",
        href: "/archive/case-001/MCU-Timeline.pdf",
      },
    ],
  },
  {
    title: "Profiles, Statements & Reports",
    files: [
      {
        title: "MCU Autopsy Report",
        type: "PDF",
        href: "/archive/case-001/MCU-Autopsy-Report.pdf",
      },
      {
        title: "MCU Toxicology Report",
        type: "PDF",
        href: "/archive/case-001/MCU-Toxicology-report.pdf",
      },
      {
        title: "MCU Witness Statement — Eleanor Hayes",
        type: "PDF",
        href: "/archive/case-001/MCU-Witness-statement-Eleanor-Hayes.pdf",
      },
      {
        title: "MCU Witness Statement — Tomas Novak",
        type: "PDF",
        href: "/archive/case-001/MCU-Witness-statement-Tomas-Novak.pdf",
      },
      {
        title: "MCU Suspect Profile — Adam Reid",
        type: "PDF",
        href: "/archive/case-001/MCU-Suspect-Profile-Adam-Reid.pdf",
      },
      {
        title: "MCU Suspect Profile — Daniel Kovacs",
        type: "PDF",
        href: "/archive/case-001/MCU-Suspect-Profile-Daniel-Kovacs.pdf",
      },
      {
        title: "MCU Suspect Profile — Maya Brooks",
        type: "PDF",
        href: "/archive/case-001/MCU-Suspect-Profile-Maya-Brooks.pdf",
      },
      {
        title: "MCU Suspect Profile — Sara Malik",
        type: "PDF",
        href: "/archive/case-001/MCU-Suspect-Profile-Sara-Malik.pdf",
      },
      {
        title: "MCU Interrogation Record — Adam Reid",
        type: "PDF",
        href: "/archive/case-001/MCU-Interrogation-Record-Adam-Reid.pdf",
      },
      {
        title: "MCU Interrogation Record — Daniel Kovacs",
        type: "PDF",
        href: "/archive/case-001/MCU-Interrogation-Record-Daniel-Kovacs.pdf",
      },
      {
        title: "MCU Interrogation Record — Maya Brooks",
        type: "PDF",
        href: "/archive/case-001/MCU-Interrogation-Record-Maya-Brooks.pdf",
      },
      {
        title: "MCU Interrogation Record — Sara Malik",
        type: "PDF",
        href: "/archive/case-001/MCU-Interrogation-Record-Sara-Malik.pdf",
      },
    ],
  },
  {
    title: "Printed Evidence & CCTV",
    files: [
      {
        title: "MCU E1",
        type: "PNG",
        href: "/archive/case-001/MCU-E1.png",
      },
      {
        title: "MCU E2",
        type: "PNG",
        href: "/archive/case-001/MCU-E2.png",
      },
      {
        title: "MCU E3",
        type: "PNG",
        href: "/archive/case-001/MCU-E3.png",
      },
      {
        title: "MCU E4",
        type: "PNG",
        href: "/archive/case-001/MCU-E4.png",
      },
      {
        title: "MCU E5",
        type: "PNG",
        href: "/archive/case-001/MCU-E5.png",
      },
      {
        title: "CCTV — Unknown Female",
        type: "PNG",
        href: "/archive/case-001/CCTV-Unknown-female-enters.png",
      },
      {
        title: "CCTV — Daniel Enters",
        type: "PNG",
        href: "/archive/case-001/CCTV-Daniel-enters.png",
      },
      {
        title: "CCTV — Maya Enters",
        type: "PNG",
        href: "/archive/case-001/CCTV-Maya-enters.png",
      },
      {
        title: "CCTV — Maya Exits",
        type: "PNG",
        href: "/archive/case-001/CCTV-Maya-exits.png",
      },
    ],
  },
];

function getFilenameFromHref(href) {
  return href.split("/").pop() || "download";
}

function handleDownload(file) {
  const link = document.createElement("a");
  link.href = file.href;
  link.download = getFilenameFromHref(file.href);
  link.target = "_blank";
  link.rel = "noopener";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function ArchiveFileRow({ file }) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 sm:flex-row sm:items-center sm:justify-between">
      <div className="min-w-0">
        <h3 className="text-sm font-semibold uppercase tracking-[0.16em] text-white">
          {file.title}
        </h3>
        <p className="mt-2 text-xs uppercase tracking-[0.18em] text-[#c6a96b]">
          {file.type}
        </p>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row">
        <a
          href={file.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-white/75 transition hover:bg-white/[0.05]"
        >
          Open
        </a>

        <button
          type="button"
          onClick={() => handleDownload(file)}
          className="inline-flex items-center justify-center rounded-full border border-[#c6a96b]/40 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#f1e2b8] transition hover:bg-[#c6a96b]/10"
        >
          Download
        </button>
      </div>
    </div>
  );
}

function ArchiveSection({ section }) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 sm:p-6">
      <div className="mb-5">
        <h2 className="text-lg font-semibold uppercase tracking-[0.18em] text-white">
          {section.title}
        </h2>
      </div>

      <div className="space-y-4">
        {section.files.map((file) => (
          <ArchiveFileRow key={file.href} file={file} />
        ))}
      </div>
    </section>
  );
}

export default function Case001ArchivePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <div className="mx-auto max-w-5xl px-6 pb-20 pt-28 sm:px-8 md:pt-32">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="max-w-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#c6a96b]">
            Case 001 Archive
          </p>

          <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
            Missing a document?
          </h1>

          <p className="mt-5 text-base leading-7 text-white/70 sm:text-lg">
            If any printed file or evidence item is missing from your case pack,
            you can access backup copies here.
          </p>

          <p className="mt-3 text-sm leading-6 text-white/45">
            This archive is intended only as a replacement for missing physical
            materials.
          </p>
        </motion.div>

        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.025] p-4">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#c6a96b]">
            Archive Notice
          </p>
          <p className="mt-2 text-sm leading-6 text-white/65">
            Only download the files you genuinely need for your investigation.
          </p>
        </div>

        <div className="mt-8 space-y-6">
          {archiveSections.map((section) => (
            <ArchiveSection key={section.title} section={section} />
          ))}
        </div>
      </div>
    </main>
  );
}