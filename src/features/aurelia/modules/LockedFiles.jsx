import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Lock, ShieldCheck, X } from "lucide-react";
import { lockedFiles } from "../data/aureliaData";
import { SectionCard, StatusPill } from "../components/ui";

const ARCHIVE_STORAGE_KEY = "aurelia_locked_archive_unlocked_v1";
const CORRECT_KEY = "AHST3041";

function normaliseKey(value) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

export function LockedFiles() {
  const [archiveKey, setArchiveKey] = useState("");
  const [error, setError] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [unlocked, setUnlocked] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(ARCHIVE_STORAGE_KEY) === "true";
  });

  const selectedFile = selectedIndex !== null ? lockedFiles[selectedIndex] : null;

  function handleUnlock(event) {
    event.preventDefault();

    if (normaliseKey(archiveKey) === CORRECT_KEY) {
      setUnlocked(true);
      setError("");
      window.localStorage.setItem(ARCHIVE_STORAGE_KEY, "true");
      return;
    }

    setError("Archive key not recognised.");
  }

  function openPrevious() {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return current === 0 ? lockedFiles.length - 1 : current - 1;
    });
  }

  function openNext() {
    setSelectedIndex((current) => {
      if (current === null) return null;
      return current === lockedFiles.length - 1 ? 0 : current + 1;
    });
  }

  if (!unlocked) {
    return (
      <div className="space-y-4">
        <SectionCard className="p-5 sm:p-6">
          <div className="mb-4 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d2b676] bg-[#fbf7ef] text-[#a67a27]">
              <Lock className="h-5 w-5" />
            </div>

            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
                Restricted Archive
              </div>
              <h2 className="mt-1 font-serif text-2xl text-stone-950">
                Additional Authentication Required
              </h2>
            </div>
          </div>

          <div className="rounded-2xl border border-[#d2b676] bg-[#fbf7ef] p-4">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
              Archive Clue
            </div>
            <p className="mt-2 font-serif text-lg text-stone-900">
              Where the pass and the log match, the archive opens.
            </p>
          </div>

          <form onSubmit={handleUnlock} className="mt-5 space-y-3">
            <label className="block">
              <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                Authentication Key
              </span>
              <input
                value={archiveKey}
                onChange={(event) => setArchiveKey(event.target.value)}
                placeholder="Enter key"
                className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 font-mono text-sm uppercase tracking-[0.12em] text-stone-900 outline-none focus:border-[#c79632]"
              />
            </label>

            {error && <div className="text-sm text-red-700">{error}</div>}

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#d2b676] bg-white px-4 py-3 font-serif text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a6f21] hover:bg-[#fbf7ef] sm:w-auto"
            >
              Unlock Archive
            </button>
          </form>
        </SectionCard>

        <div className="grid gap-4 md:grid-cols-3">
          {lockedFiles.map((file) => {
            const Icon = file.icon;

            return (
              <SectionCard key={file.id} className="p-5 opacity-70">
                <div className="mb-4 flex items-center justify-between gap-2">
                  <Icon className="h-5 w-5 text-[#b58a3b]" />
                  <StatusPill locked>Locked</StatusPill>
                </div>

                <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">
                  {file.id}
                </div>

                <h3 className="mt-2 font-serif text-lg font-semibold text-stone-950">
                  {file.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-stone-600">
                  {file.summary}
                </p>
              </SectionCard>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <SectionCard className="p-5 sm:p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800">
            <ShieldCheck className="h-5 w-5" />
          </div>

          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
              Restricted Archive
            </div>
            <h2 className="mt-1 font-serif text-2xl text-stone-950">
              Archive Access Confirmed
            </h2>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-stone-600">
          Recovered Aurelia House documents are now available for review.
        </p>
      </SectionCard>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {lockedFiles.map((file, index) => (
          <ArchiveDocumentCard
            key={file.id}
            file={file}
            index={index}
            total={lockedFiles.length}
            onOpen={() => setSelectedIndex(index)}
          />
        ))}
      </div>

      {selectedFile && (
        <DocumentViewer
          file={selectedFile}
          index={selectedIndex}
          total={lockedFiles.length}
          onClose={() => setSelectedIndex(null)}
          onPrevious={openPrevious}
          onNext={openNext}
        />
      )}
    </div>
  );
}

function ArchiveDocumentCard({ file, index, total, onOpen }) {
  const Icon = file.icon;

  return (
    <SectionCard className="overflow-hidden">
      <button type="button" onClick={onOpen} className="block w-full text-left">
        <div className="border-b border-stone-200 bg-[#fbf7ef] px-5 py-4">
          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
                Recovered Document {index + 1} of {total}
              </div>
              <h3 className="mt-1 font-serif text-xl font-semibold text-stone-950">
                {file.title}
              </h3>
              <p className="mt-1 text-xs text-stone-500">{file.date}</p>
            </div>

            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#d2b676] bg-white text-[#a67a27]">
              <Icon className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="bg-stone-100 p-3">
          <div className="aspect-[3/4] overflow-hidden rounded-xl border border-stone-200 bg-white">
            <img
              src={file.image}
              alt={file.title}
              className="h-full w-full object-cover object-top"
            />
          </div>
        </div>

        <div className="p-5">
          <div className="mb-3">
            <StatusPill>{file.status}</StatusPill>
          </div>

          <div className="text-sm font-semibold text-stone-900">{file.label}</div>
          <p className="mt-2 text-sm leading-relaxed text-stone-600">{file.summary}</p>

          <div className="mt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#9a6f21]">
            Open Document
          </div>
        </div>
      </button>
    </SectionCard>
  );
}

function DocumentViewer({ file, index, total, onClose, onPrevious, onNext }) {
  return (
    <div className="fixed inset-0 z-50 bg-black/75 p-2 sm:p-6">
      <div className="mx-auto flex h-full max-w-6xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between gap-3 border-b border-stone-200 px-4 py-3">
          <div className="min-w-0">
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
              Recovered Document {index + 1} of {total} · {file.id}
            </div>
            <h3 className="truncate font-serif text-lg font-semibold text-stone-950">
              {file.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-stone-200 text-stone-600 hover:bg-stone-50"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex items-center justify-between gap-2 border-b border-stone-200 bg-[#fbf7ef] px-3 py-2">
          <button
            type="button"
            onClick={onPrevious}
            className="inline-flex items-center gap-2 rounded-xl border border-[#d2b676] bg-white px-3 py-2 font-serif text-[10px] font-semibold uppercase tracking-[0.08em] text-[#9a6f21]"
          >
            <ChevronLeft className="h-4 w-4" />
            Previous
          </button>

          <div className="text-center text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">
            Swipe/scroll document to read
          </div>

          <button
            type="button"
            onClick={onNext}
            className="inline-flex items-center gap-2 rounded-xl border border-[#d2b676] bg-white px-3 py-2 font-serif text-[10px] font-semibold uppercase tracking-[0.08em] text-[#9a6f21]"
          >
            Next
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-auto bg-stone-100 p-3 sm:p-5">
          <img
            src={file.image}
            alt={file.title}
            className="mx-auto w-full max-w-4xl rounded-xl bg-white shadow-xl"
          />
        </div>
      </div>
    </div>
  );
}