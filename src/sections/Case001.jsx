import { GoldButton, GhostButton } from "../components/Button";
import PortalButton from "../components/PortalButton";
import { storeConfig } from "../data/storeConfig";

function getPrimaryCta(config) {
  switch (config.status) {
    case "preorder":
      return {
        label: config.cta.preorder,
        href: config.checkoutUrl,
        disabled: false,
      };
    case "live":
      return {
        label: config.cta.live,
        href: config.checkoutUrl,
        disabled: false,
      };
    case "sold-out":
      return {
        label: config.cta.soldOut,
        href: "#case-001",
        disabled: true,
      };
    case "coming-soon":
    default:
      return {
        label: config.cta.comingSoon,
        href: "#footer",
        disabled: false,
      };
  }
}

function getLaunchBadge(config) {
  switch (config.status) {
    case "preorder":
      return config.launchBadge.preorder;
    case "live":
      return config.launchBadge.live;
    case "sold-out":
      return config.launchBadge.soldOut;
    case "coming-soon":
    default:
      return config.launchBadge.comingSoon;
  }
}

export default function Case001() {
  const primaryCta = getPrimaryCta(storeConfig);
  const launchBadge = getLaunchBadge(storeConfig);

  return (
    <section id="case-001" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[center_78%] md:bg-[center_45%] opacity-90"
        style={{ backgroundImage: "url('/images/case001.png')" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,13,0.08),rgba(11,11,13,0.22),rgba(11,11,13,0.72))]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_left,rgba(11,11,13,0.34),transparent_46%)]" />

      <div className="relative mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <div className="max-w-2xl">
            <div className="rounded-[2rem] border border-[#3a3227]/50 bg-[#0f1014]/20 p-6 shadow-[0_30px_70px_rgba(0,0,0,0.42)] backdrop-blur-md md:p-8">
              <div className="flex flex-wrap items-center gap-3">
                <p className="text-xs font-semibold uppercase tracking-[0.38em] text-[#c6a96b]">
                  Case {storeConfig.caseCode}
                </p>

                <span className="rounded-full border border-[#6f5c37] bg-[#1a1611]/70 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-[#f0d49b]">
                  {launchBadge}
                </span>
              </div>

              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#f5efe4] md:text-5xl">
                {storeConfig.productName}
              </h2>

              <p className="mt-5 text-base leading-7 text-[#d5d8df] md:text-lg">
                A young influencer is found dead in her apartment after what should
                have been an ordinary livestream.
                <br />
                <span className="text-white/90">
                  The online narrative is clean. The evidence is not.
                </span>
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm uppercase tracking-[0.2em] text-[#cfd4dc]">
                <span>{storeConfig.price}</span>
                <span>{storeConfig.productMeta.players}</span>
                <span>{storeConfig.productMeta.playTime}</span>
                <span>{storeConfig.productMeta.age}</span>
                <span>{storeConfig.productMeta.difficulty}</span>
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-2">
                {storeConfig.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-2xl border border-[#2f3138] bg-black/20 px-4 py-3 text-[#edf0f5] transition duration-300 hover:border-[#c6a96b]/40"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-7 flex flex-wrap gap-3">
                {primaryCta.disabled ? (
                  <button
                    type="button"
                    disabled
                    className="inline-flex min-w-[190px] items-center justify-center rounded-2xl border border-[#6c5a36] bg-[#3a3122] px-6 py-3 text-sm font-semibold text-[#d8c39a] opacity-70"
                  >
                    {primaryCta.label}
                  </button>
                ) : (
                  <GoldButton href={primaryCta.href} className="min-w-[190px]">
                    {primaryCta.label}
                  </GoldButton>
                )}

                <GhostButton href="#how-it-works" className="min-w-[190px]">
                  {storeConfig.cta.secondary}
                </GhostButton>

                <PortalButton className="min-w-[190px]" />
              </div>

              <p className="mt-5 text-sm leading-7 text-[#bcc3cd]">
                A premium physical + digital detective experience built around
                evidence review, suspect interviews, digital clues, and a portal-led
                final resolution.
              </p>

              <div className="mt-4 text-sm leading-6 text-[#aeb6c1]">
                <p>Secure checkout powered by Shopify.</p>
              </div>
            </div>
          </div>

          <div>
            <div className="rounded-[2rem] border border-white/10 bg-[#0d0f13]/78 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.3)] backdrop-blur-md">
              <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c6a96b]">
                What’s Inside
              </p>

              <div className="mt-5 grid gap-4 text-sm leading-7 text-[#d7dbe2]">
                <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                  <p className="font-semibold uppercase tracking-[0.18em] text-[#f5efe4]">
                    Core File Pack
                  </p>
                  <p className="mt-2">{storeConfig.contents.core}</p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                  <p className="font-semibold uppercase tracking-[0.18em] text-[#f5efe4]">
                    Printed Evidence
                  </p>
                  <p className="mt-2">{storeConfig.contents.printed}</p>
                </div>

                <div className="rounded-2xl border border-white/8 bg-white/5 p-4">
                  <p className="font-semibold uppercase tracking-[0.18em] text-[#f5efe4]">
                    Digital Access
                  </p>
                  <p className="mt-2">{storeConfig.contents.digital}</p>
                </div>
              </div>

              <div className="mt-6 rounded-2xl border border-[#4a3d27] bg-[#15110b]/80 p-4 text-sm leading-7 text-[#d9cfbe]">
                This is not a party game. This is a structured investigation built
                for players who want to analyse evidence, uncover connections,
                interrogate suspects, and solve the case properly.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}