import Hero from "../sections/Hero";
import Intro from "../sections/Intro";
import HowItWorks from "../sections/HowItWorks";
import Case001 from "../sections/Case001";
import Detectives from "../sections/Detectives";
import FAQ from "../sections/FAQ";
import Footer from "../sections/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#0b0b0d] text-white">
      <div className="fixed inset-0 -z-20 bg-[radial-gradient(circle_at_top,#312516_0%,#17181d_38%,#0b0b0d_78%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.05] [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:60px_60px]" />

      <header className="sticky top-0 z-50 border-b border-white/5 bg-[#0b0b0d]/52 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-4 md:px-6 lg:px-8">
          <a
            href="#home"
            className="max-w-full text-center text-[1.55rem] font-semibold uppercase tracking-[0.24em] text-[#f5efe4] transition hover:text-[#c6a96b] drop-shadow-[0_0_12px_rgba(198,169,107,0.28)] sm:text-[1.75rem] sm:tracking-[0.28em] md:text-[1.9rem] md:tracking-[0.32em]"
          >
            The Yo Case Files
          </a>
        </div>
      </header>

      <main>
        <Hero />
        <Intro />
        <Case001 />
        <HowItWorks />
        <Detectives />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}