export function GoldButton({
  children,
  href,
  className = "",
  type = "button",
  disabled = false,
}) {
  const classes = `inline-flex items-center justify-center rounded-2xl border border-[#d4b473] bg-[#c6a96b] px-6 py-3 text-sm font-semibold text-[#121317] shadow-[0_0_30px_rgba(198,169,107,0.18)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#d4b473] disabled:cursor-not-allowed disabled:opacity-60 ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}

export function GhostButton({ children, href = "#", className = "" }) {
  return (
    <a
      href={href}
      className={`inline-flex items-center justify-center rounded-2xl border border-[#4b4335] bg-black/20 px-6 py-3 text-sm font-semibold text-[#f5efe4] backdrop-blur-sm transition duration-300 hover:-translate-y-0.5 hover:border-[#8c7750] hover:bg-white/5 ${className}`}
    >
      {children}
    </a>
  );
}