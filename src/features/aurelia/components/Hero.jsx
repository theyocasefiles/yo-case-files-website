import React from "react";
import { HERO_IMAGE } from "../data/aureliaData";
import { SafeImage } from "./ui";

export function Hero() {
  return (
    <div className="border-b border-stone-200 bg-white">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid lg:grid-cols-[1fr_1.05fr]">
          <div className="order-2 px-4 py-6 sm:px-6 lg:order-1 lg:px-9">
            <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.3em] text-stone-500">Recovered Founder Credential</p>
            <h1 className="font-serif text-3xl leading-tight text-stone-950 sm:text-4xl">Internal Records Mirror</h1>
            <p className="mt-2 text-sm text-stone-600">MCU-002 · Read-only · Chain of custody secured</p>
          </div>

          <SafeImage src={HERO_IMAGE} alt="Aurelia House reception" className="order-1 h-28 rounded-none sm:h-40 lg:order-2 lg:h-full" />
        </div>
      </div>
    </div>
  );
}
