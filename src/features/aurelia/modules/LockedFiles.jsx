import React from "react";
import { lockedFiles } from "../data/aureliaData";
import { SectionCard, StatusPill } from "../components/ui";

export function LockedFiles() {
  return (
    <div className="space-y-4">
      <SectionCard className="p-5 sm:p-6">
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">Restricted</div>
        <h2 className="mt-1 font-serif text-2xl text-stone-950">Locked Files</h2>
      </SectionCard>

      <div className="grid gap-4 md:grid-cols-3">
        {lockedFiles.map((file) => {
          const Icon = file.icon;
          return (
            <SectionCard key={file.id} className="p-5">
              <div className="mb-4 flex items-center justify-between gap-2">
                <Icon className="h-5 w-5 text-[#b58a3b]" />
                <StatusPill locked>Locked</StatusPill>
              </div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">{file.id}</div>
              <h3 className="mt-2 font-serif text-lg font-semibold text-stone-950">{file.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">{file.summary}</p>
            </SectionCard>
          );
        })}
      </div>
    </div>
  );
}
