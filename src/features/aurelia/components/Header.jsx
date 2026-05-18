import React from "react";
import { ShieldCheck } from "lucide-react";
import { AURELIA_LOGO } from "../data/aureliaData";

export function Header() {
  return (
    <header className="border-b border-stone-200 bg-white">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-9">
        <div className="flex items-center gap-3">
          <img
            src={AURELIA_LOGO}
            alt="Aurelia House"
            className="h-12 w-12 shrink-0 rounded-full object-contain"
            onError={(event) => {
              event.currentTarget.style.display = "none";
            }}
          />
          <div>
            <div className="font-serif text-lg uppercase tracking-[0.23em] text-stone-900">Aurelia House</div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.24em] text-stone-500">Internal System</div>
          </div>
        </div>

        <div className="hidden items-center gap-3 sm:flex">
          <ShieldCheck className="h-5 w-5 text-[#a67a27]" />
          <div className="text-right">
            <div className="font-serif text-xs font-semibold uppercase tracking-[0.12em] text-[#9a6f21]">DCCU Verified</div>
            <div className="text-[11px] text-stone-500">Read-only mirror</div>
          </div>
        </div>
      </div>
    </header>
  );
}
