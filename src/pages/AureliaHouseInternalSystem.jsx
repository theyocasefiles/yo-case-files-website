import React, { useEffect, useState } from "react";
import { Header } from "../features/aurelia/components/Header";
import { Hero } from "../features/aurelia/components/Hero";
import { Navigation } from "../features/aurelia/components/Navigation";
import { Footer } from "../features/aurelia/components/Footer";
import { Home } from "../features/aurelia/modules/Home";
import { Evidence } from "../features/aurelia/modules/Evidence";
import { LockedFiles } from "../features/aurelia/modules/LockedFiles";
import { STORAGE_KEY } from "../features/aurelia/data/aureliaData";
import { FinalAccusation } from "../features/aurelia/modules/FinalAccusation";

export default function AureliaHouseInternalSystem() {
  const [active, setActive] = useState("home");
  const [reviewed, setReviewed] = useState(() => {
    if (typeof window === "undefined") return {};
    try {
      return JSON.parse(window.localStorage.getItem(STORAGE_KEY) || "{}");
    } catch {
      return {};
    }
  });

  useEffect(() => {
    if (active === "home") return;

    setReviewed((current) => {
      if (current[active]) return current;
      const next = { ...current, [active]: true };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      return next;
    });
  }, [active]);

  return (
    <main className="min-h-screen bg-[#f7f5f0] text-stone-900">
      <div className="mx-auto max-w-[1600px] bg-white shadow-[0_25px_80px_rgba(35,25,15,0.12)] md:my-3 md:overflow-hidden md:rounded-xl md:border md:border-stone-200">
        <Header />
        <Hero />
        <Navigation active={active} setActive={setActive} reviewed={reviewed} />

        <div className="bg-[#fbfaf7] px-4 py-4 sm:px-6 lg:px-9 lg:py-5">
          {active === "home" && <Home setActive={setActive} />}
          {active === "evidence" && <Evidence />}
          {active === "locked" && <LockedFiles />}
          {active === "accuse" && <FinalAccusation />}
        </div>

        <Footer />
      </div>
    </main>
  );
}
