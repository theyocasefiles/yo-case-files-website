import { motion } from "framer-motion";
import { GoldButton, GhostButton } from "../components/Button";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-[center_18%] opacity-78"
        style={{ backgroundImage: "url('/images/investigation.png')" }}
      />

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(11,11,13,0.05),rgba(11,11,13,0.16),rgba(11,11,13,0.64))]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(11,11,13,0.58)_0%,rgba(11,11,13,0.28)_34%,rgba(11,11,13,0.08)_58%,rgba(11,11,13,0.14)_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_30%,rgba(255,225,170,0.22),transparent_28%),radial-gradient(circle_at_24%_26%,rgba(198,169,107,0.12),transparent_24%),radial-gradient(circle_at_78%_30%,rgba(198,169,107,0.06),transparent_22%)]" />

      <div className="relative mx-auto flex min-h-[82vh] max-w-7xl items-end px-4 py-10 md:px-6 lg:px-8 lg:py-16">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.38em] text-[#d7bb7f]">
            Premium Interactive Detective Experiences
          </p>

          <h1 className="max-w-4xl text-4xl font-semibold leading-[0.95] text-[#f5efe4] drop-shadow-[0_4px_24px_rgba(0,0,0,0.25)] md:text-6xl lg:text-[4.7rem]">
            A New Kind of Detective Experience
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-7 text-[#e0e4ea] drop-shadow-[0_2px_18px_rgba(0,0,0,0.22)] md:text-xl md:leading-8">
            Led by real investigative insight and built for real thinkers, The
            Yo Case Files blends physical evidence, digital clues, and cinematic
            storytelling into an immersive case-solving experience.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <GoldButton href="#case-001" className="min-w-[180px]">
              Start Case 001
            </GoldButton>

            <GhostButton href="#how-it-works" className="min-w-[180px]">
              See How It Works
            </GhostButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}