import React from "react";
import { CheckCircle2 } from "lucide-react";
import { navItems } from "../data/aureliaData";
import { cx } from "./ui";

export function Navigation({ active, setActive, reviewed }) {
  return (
    <nav className="sticky top-0 z-20 border-b border-stone-200 bg-white/95 backdrop-blur">
      <div className="grid grid-cols-3 px-3 sm:px-6 lg:px-9">
        {navItems.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            type="button"
            onClick={() => setActive(id)}
            className={cx(
              "relative flex items-center justify-center gap-2 px-2 py-3 text-xs font-semibold text-stone-600 hover:text-[#9a6f21]",
              active === id && "text-[#9a6f21]"
            )}
          >
            <span className="relative">
              <Icon className="h-4 w-4" />
              {reviewed[id] && id !== "home" && (
                <CheckCircle2 className="absolute -right-2 -top-2 h-3.5 w-3.5 rounded-full bg-white text-emerald-700" />
              )}
            </span>
            {label}
            {active === id && <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-[#c79632]" />}
          </button>
        ))}
      </div>
    </nav>
  );
}
