import React from "react";
import { CREDENTIAL_IMAGE, quickCards } from "../data/aureliaData";
import { GoldButton, SafeImage, SectionCard, StatusPill } from "../components/ui";

export function Home({ setActive }) {
  return (
    <div className="space-y-4">
      <SectionCard className="overflow-hidden">
        <div className="grid lg:grid-cols-[1fr_300px]">
          <div className="p-5 sm:p-6">
            <h2 className="font-serif text-2xl text-stone-950">Recovered access confirmed</h2>
            <p className="mt-2 text-sm text-stone-600">Founder credential mirror active. Review the available records, then check the locked archive.</p>

            <div className="mt-5 grid gap-2 sm:grid-cols-3">
              <InstructionStep title="1. Evidence" text="Open recovered records." />
              <InstructionStep title="2. Compare" text="Check times and access." />
              <InstructionStep title="3. Locked" text="Review restricted files." />
            </div>

            <div className="mt-5 flex flex-col gap-2 sm:flex-row">
              <GoldButton onClick={() => setActive("evidence")} className="w-full sm:w-auto">Open Evidence</GoldButton>
              <GoldButton onClick={() => setActive("locked")} className="w-full sm:w-auto">Locked Files</GoldButton>
            </div>
          </div>

          <div className="border-t border-stone-100 bg-[#fbf7ef] p-5 lg:border-l lg:border-t-0">
            <div className="flex items-center gap-4">
              <SafeImage src={CREDENTIAL_IMAGE} alt="Founder credential" className="h-24 w-24 shrink-0 rounded-xl border border-[#d7c08d]" />
              <div className="text-sm">
                <div className="font-serif font-semibold uppercase tracking-[0.08em] text-stone-900">Cassandra Vale</div>
                <div className="mt-1 text-xs text-stone-500">AH-FND-001</div>
                <div className="mt-2"><StatusPill>Verified</StatusPill></div>
              </div>
            </div>
          </div>
        </div>
      </SectionCard>

      <div className="grid gap-3 md:grid-cols-3">
        {quickCards.map(({ icon: Icon, title, text }) => (
          <SectionCard key={title} className="p-4">
            <Icon className="mb-3 h-5 w-5 text-[#b58a3b]" />
            <div className="font-serif text-base font-semibold text-stone-950">{title}</div>
            <p className="mt-1 text-sm text-stone-600">{text}</p>
          </SectionCard>
        ))}
      </div>
    </div>
  );
}

function InstructionStep({ title, text }) {
  return (
    <div className="rounded-xl border border-stone-200 bg-white p-3">
      <div className="font-serif text-sm font-semibold text-stone-950">{title}</div>
      <div className="mt-1 text-xs text-stone-500">{text}</div>
    </div>
  );
}
