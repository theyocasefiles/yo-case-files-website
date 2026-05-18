import React from "react";
import { ChevronRight } from "lucide-react";

export function cx(...classes) {
  return classes.filter(Boolean).join(" ");
}

export function SafeImage({ src, alt, className }) {
  return (
    <div className={cx("overflow-hidden bg-stone-100", className)}>
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover"
        onError={(event) => {
          event.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

export function StatusPill({ children, locked = false }) {
  return (
    <span
      className={cx(
        "rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.08em]",
        locked
          ? "border-stone-200 bg-stone-100 text-stone-600"
          : "border-emerald-100 bg-emerald-50 text-emerald-800"
      )}
    >
      {children}
    </span>
  );
}

export function SectionCard({ children, className }) {
  return (
    <section className={cx("rounded-2xl border border-stone-200 bg-white shadow-[0_12px_35px_rgba(35,25,15,0.045)]", className)}>
      {children}
    </section>
  );
}

export function GoldButton({ children, onClick, className }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(
        "inline-flex items-center justify-center gap-2 rounded-xl border border-[#d2b676] bg-white px-4 py-3 font-serif text-[11px] font-semibold uppercase tracking-[0.08em] text-[#9a6f21] hover:bg-[#fbf7ef]",
        className
      )}
    >
      {children}
      <ChevronRight className="h-4 w-4" />
    </button>
  );
}
