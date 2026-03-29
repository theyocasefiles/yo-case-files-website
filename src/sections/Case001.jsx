import { GhostButton } from "../components/Button";
import PortalButton from "../components/PortalButton";

export default function Case001() {
  return (
    <section id="case-001" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[center_78%] md:bg-[center_45%] opacity-90"
        style={{ backgroundImage: "url('/images/case001.png')" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,13,0.04),rgba(11,11,13,0.18),rgba(11,11,13,0.58))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(11,11,13,0.28),transparent_46%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8 lg:py-14">
        <div className="max-w-md lg:ml-6 lg:mr-auto">
          <div className="rounded-[2rem] border border-[#3a3227]/50 bg-[#0f1014]/10 p-5 shadow-[0_30px_70px_rgba(0,0,0,0.42)] backdrop-blur-[2px] md:bg-[#0f1014]/16 md:p-7 md:backdrop-blur-md">
            <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#c6a96b]">
              Featured Investigation
            </p>

            <h2 className="mt-3 text-3xl font-semibold leading-tight text-[#f5efe4] md:text-5xl">
              Case 001: The Murder of an Influencer
            </h2>

            <p className="mt-5 text-base leading-7 text-[#d5d8df] md:text-lg">
              An influencer is found dead in her apartment.
              <br />
              <span className="text-white/90">
                The online narrative is clean. The evidence is not.
              </span>
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                "Printed evidence and statements",
                "Digital clues and hidden content",
                "Social media and message trails",
                "Portal-based final reveal",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-[#2f3138] bg-black/16 px-4 py-3 text-[#edf0f5] transition duration-300 hover:border-[#c6a96b]/40"
                >
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <PortalButton className="min-w-[190px]" />

              <GhostButton href="#how-it-works" className="min-w-[190px]">
                How It Works
              </GhostButton>
            </div>

            <p className="mt-5 text-xs uppercase tracking-[0.25em] text-[#8f959f]">
              First case launching soon
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}