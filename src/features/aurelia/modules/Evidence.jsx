import React from "react";
import { CheckCircle2 } from "lucide-react";
import { evidenceCards, cctvFrames } from "../data/aureliaData";
import { SafeImage, SectionCard, StatusPill } from "../components/ui";

export function Evidence() {
  return (
    <div className="space-y-4">
      <SectionCard className="p-5 sm:p-6">
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">Evidence</div>
        <h2 className="mt-1 font-serif text-2xl text-stone-950">Recovered Records</h2>
      </SectionCard>

      <div className="grid gap-4 xl:grid-cols-2">
        {evidenceCards.map((record) => (
          <EvidenceCard key={record.id} record={record} />
        ))}
      </div>
    </div>
  );
}

function EvidenceCard({ record }) {
  const Icon = record.icon;

  return (
    <SectionCard className="p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="flex gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#d2b676] bg-[#fbf7ef] text-[#a67a27]">
            <Icon className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.16em] text-stone-500">
              {record.id} · {record.time}
            </div>
            <h3 className="mt-1 font-serif text-lg font-semibold text-stone-950">{record.title}</h3>
          </div>
        </div>
        <StatusPill>{record.status}</StatusPill>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-stone-600">{record.summary}</p>

      <div className="mt-4 grid gap-2 sm:grid-cols-2">
        {record.facts.map((fact) => (
          <div key={fact} className="flex items-center gap-2 text-xs text-stone-700">
            <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-700" />
            {fact}
          </div>
        ))}
      </div>

      {record.hasCctv && <CCTVGrid />}
    </SectionCard>
  );
}

function CCTVGrid() {
  return (
    <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-5 xl:grid-cols-5">
      {cctvFrames.map((frame) => (
        <div key={frame.id} className="overflow-hidden rounded-xl border border-stone-200 bg-stone-50">
          <div className="relative">
            <SafeImage src={frame.image} alt={frame.title} className="h-32 rounded-none" />
            <div className="absolute left-2 top-2 rounded bg-black/70 px-2 py-1 font-mono text-[10px] text-white">{frame.time}</div>
          </div>
          <div className="p-3">
            <div className="text-[10px] font-semibold uppercase tracking-[0.12em] text-stone-500">{frame.id}</div>
            <div className="mt-1 font-serif text-sm font-semibold text-stone-950">{frame.title}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
