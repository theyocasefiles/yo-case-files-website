export default function FAQItem({ q, a, isOpen, onClick }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-[#2b2e34] bg-[#15171c]/80 backdrop-blur-sm">
      <button
        type="button"
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="text-lg font-medium text-[#f5efe4]">{q}</span>
        <span className="text-[#c6a96b]">{isOpen ? "−" : "+"}</span>
      </button>

      {isOpen ? <div className="px-6 pb-6 text-[#a9adb7]">{a}</div> : null}
    </div>
  );
}