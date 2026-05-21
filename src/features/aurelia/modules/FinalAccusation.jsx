import React, { useState } from "react";
import { AlertTriangle, CheckCircle2, FileCheck2, ShieldCheck } from "lucide-react";
import { FINAL_ACCUSATION_KEY, finalReport } from "../data/aureliaData";
import { SectionCard, StatusPill } from "../components/ui";

function normaliseAnswer(value) {
  return value.toUpperCase().replace(/[^A-Z]/g, "");
}

export function FinalAccusation() {
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const correct = normaliseAnswer(answer) === FINAL_ACCUSATION_KEY;

  function handleSubmit(event) {
    event.preventDefault();
    setSubmitted(true);
  }

  if (submitted && correct) {
    return <FinalReport />;
  }

  return (
    <div className="space-y-4">
      <SectionCard className="p-5 sm:p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#d2b676] bg-[#fbf7ef] text-[#a67a27]">
            <FileCheck2 className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
              Final Accusation
            </div>
            <h2 className="mt-1 font-serif text-2xl text-stone-950">
              Submit Primary Suspect
            </h2>
          </div>
        </div>

        <p className="max-w-2xl text-sm leading-relaxed text-stone-600">
          Enter the full name of the person most strongly supported by the available evidence.
        </p>

        <SectionCard className="p-5 sm:p-6">
  <div className="mb-4 flex items-center gap-2">
    <CheckCircle2 className="h-5 w-5 text-emerald-700" />
    <h3 className="font-serif text-xl font-semibold text-stone-950">
      Supported Sequence
    </h3>
  </div>

  <div className="space-y-3">
    {finalReport.sequence.map((item, index) => (
      <div key={item} className="flex items-start gap-3 rounded-xl bg-stone-50 p-3">
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#fbf7ef] font-serif text-xs font-semibold text-[#9a6f21]">
          {index + 1}
        </div>
        <p className="text-sm leading-relaxed text-stone-700">{item}</p>
      </div>
    ))}
  </div>
</SectionCard>

        <form onSubmit={handleSubmit} className="mt-5 space-y-3">
          <label className="block">
            <span className="mb-2 block text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
              Suspect Name
            </span>
            <input
              value={answer}
              onChange={(event) => {
                setAnswer(event.target.value);
                setSubmitted(false);
              }}
              placeholder="Enter name"
              className="w-full rounded-xl border border-stone-200 bg-white px-4 py-3 text-sm text-stone-900 outline-none focus:border-[#c79632]"
            />
          </label>

          {submitted && !correct && (
            <div className="flex items-start gap-2 rounded-xl border border-red-100 bg-red-50 p-3 text-sm text-red-800">
              <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" />
              <span>Accusation not supported by the recovered evidence.</span>
            </div>
          )}

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-[#d2b676] bg-white px-4 py-3 font-serif text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a6f21] hover:bg-[#fbf7ef] sm:w-auto"
          >
            Submit Accusation
          </button>
        </form>
      </SectionCard>
    </div>
  );
}

function FinalReport() {
  return (
    <div className="space-y-4">
      <SectionCard className="p-5 sm:p-6">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-emerald-200 bg-emerald-50 text-emerald-800">
            <ShieldCheck className="h-5 w-5" />
          </div>
          <div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
              Final Accusation
            </div>
            <h2 className="mt-1 font-serif text-2xl text-stone-950">
              {finalReport.title}
            </h2>
          </div>
        </div>

        <div className="mb-4">
          <StatusPill>{finalReport.status}</StatusPill>
        </div>

        <div className="rounded-2xl border border-[#d2b676] bg-[#fbf7ef] p-4">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
            Accused Party
          </div>
          <p className="mt-2 font-serif text-2xl text-stone-950">{finalReport.suspect}</p>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-stone-600">
          {finalReport.summary}
        </p>
        <div className="mt-5 grid gap-4 lg:grid-cols-3">
  <ReportBlock title="How" text={finalReport.method} />
  <ReportBlock title="Why" text={finalReport.motive} />
  <ReportBlock title="Why Amelia is cleared" text={finalReport.whyAmeliaIsCleared} />
</div>
      </SectionCard>

      <SectionCard className="p-5 sm:p-6">
        <div className="mb-4 flex items-center gap-2">
          <CheckCircle2 className="h-5 w-5 text-emerald-700" />
          <h3 className="font-serif text-xl font-semibold text-stone-950">
            Supported Findings
          </h3>
        </div>

        <div className="space-y-3">
          {finalReport.findings.map((finding) => (
            <div key={finding} className="flex items-start gap-3 rounded-xl bg-stone-50 p-3">
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-700" />
              <p className="text-sm leading-relaxed text-stone-700">{finding}</p>
            </div>
          ))}
        </div>
      </SectionCard>

      <SectionCard className="border-[#d2b676] bg-[#fbf7ef] p-5 sm:p-6">
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone-500">
          DCCU / FIU Conclusion
        </div>
        <p className="mt-3 text-sm leading-relaxed text-stone-700">
          {finalReport.conclusion}
        </p>
      </SectionCard>
    </div>
  );
}

function ReportBlock({ title, text }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-stone-50 p-4">
      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-stone-500">
        {title}
      </div>
      <p className="mt-2 text-sm leading-relaxed text-stone-700">{text}</p>
    </div>
  );
}