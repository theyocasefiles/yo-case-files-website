import React, { useState } from "react";
import { KeyRound, Lock, ShieldCheck } from "lucide-react";
import { lockedFiles } from "../data/aureliaData";
import { GoldButton, SectionCard, StatusPill } from "../components/ui";

const ARCHIVE_STORAGE_KEY = "aurelia_locked_archive_unlocked_v1";
const CORRECT_KEY = "AHST3041";

function normaliseKey(value) {
  return value.toUpperCase().replace(/[^A-Z0-9]/g, "");
}

export function LockedFiles() {
  const [archiveKey, setArchiveKey] = useState("");
  const [error, setError] = useState("");
  const [unlocked, setUnlocked] = useState(() => {
    if (typeof window === "undefined") return false;
    return window.localStorage.getItem(ARCHIVE_STORAGE_KEY) === "true";
  });

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

            <GoldButton className="w-full sm:w-auto">Unlock Archive</GoldButton>
          </form>
        </SectionCard>

        <div className="grid gap-4 md:grid-cols-3">
          {lockedFiles.map((file) => {
            const Icon = file.icon;

            return (
              <SectionCard key={file.id} className="p-5 opacity-75">
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
                <p className="mt-2 text-sm leading-relaxed text-stone-600">{file.summary}</p>
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
          Founder archive mirror unlocked. Restricted Aurelia House materials are now available.
        </p>
      </SectionCard>

      <div className="grid gap-4 xl:grid-cols-3">
        {lockedFiles.map((file) => (
          <AureliaArchiveMaterial key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
}

function AureliaArchiveMaterial({ file }) {
  const Icon = file.icon;
  const locked = file.status.toLowerCase() === "locked";

  return (
    <SectionCard className="overflow-hidden">
      <div className="border-b border-[#d2b676] bg-[#fbf7ef] px-5 py-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
              Aurelia House Internal Material
            </div>
            <h3 className="mt-1 font-serif text-xl font-semibold text-stone-950">
              {file.title}
            </h3>
          </div>

          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#d2b676] bg-white text-[#a67a27]">
            <Icon className="h-5 w-5" />
          </div>
        </div>
      </div>

      <div className="p-5">
        <div className="grid gap-3 text-sm">
          <MetaRow label="Reference" value={file.id} />
          <MetaRow label="Type" value={file.type} />
          <MetaRow label="Department" value={file.department} />
          <MetaRow label="Date" value={file.date} />
        </div>

        <div className="mt-4">
          <StatusPill locked={locked}>{file.status}</StatusPill>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-stone-600">{file.summary}</p>

        <div className="mt-5 rounded-2xl border border-stone-200 bg-stone-50 p-4">
          <div className="mb-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
            Extracted Entries
          </div>

          <div className="space-y-2">
            {file.entries.map((entry) => (
              <div key={entry} className="flex items-start gap-2 text-sm text-stone-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#b58a3b]" />
                <span>{entry}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 border-t border-stone-200 pt-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-400">
          Read-only mirror · DCCU preserved copy
        </div>
      </div>
    </SectionCard>
  );
}

function MetaRow({ label, value }) {
  return (
    <div className="grid grid-cols-[90px_1fr] gap-3 border-b border-stone-100 pb-2">
      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-stone-400">
        {label}
      </div>
      <div className="font-medium text-stone-800">{value}</div>
    </div>
  );
}