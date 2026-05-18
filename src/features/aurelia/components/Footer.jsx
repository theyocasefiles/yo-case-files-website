import React from "react";
import { AURELIA_LOGO } from "../data/aureliaData";

export function Footer() {
  return (
    <footer className="border-t border-stone-200 bg-white px-4 py-5 text-center sm:px-6 lg:px-9">
      <div className="mx-auto flex max-w-[1500px] flex-col items-center gap-2 text-stone-500">
        <img
          src={AURELIA_LOGO}
          alt=""
          className="h-8 w-8 object-contain opacity-70"
          onError={(event) => {
            event.currentTarget.style.display = "none";
          }}
        />
        <div className="font-serif text-sm uppercase tracking-[0.35em] text-stone-700">Aurelia House Internal System</div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.24em]">DCCU Mirror · Version 1.0.8</div>
      </div>
    </footer>
  );
}
