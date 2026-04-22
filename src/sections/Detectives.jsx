export default function Detectives() {
  return (
    <section id="detectives" className="px-4 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <p className="text-sm uppercase tracking-[0.3em] text-[#c6a96b]">
              Detectives
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Meet the team behind the cases
            </h2>

            <p className="mt-4 text-base leading-8 text-white/70">
              We’re a couple who love a good murder mystery, puzzle solving, and the thrill
              of a real investigation. After playing detective games ourselves, we decided
              to create our own — combining cinematic storytelling with realistic case
              design. With real police detective experience behind the scenes, The Yo Case
              Files is built using genuine investigative thinking, official-style documents,
              and the kind of detail we always wanted to see in a case.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-3 shadow-[0_20px_60px_rgba(0,0,0,0.35)]">
            <img
              src="/images/about-team-triptych.png"
              alt="The team behind The Yo Case Files"
              className="h-[320px] w-full rounded-[20px] bg-[#0b1220] object-contain md:h-[420px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}