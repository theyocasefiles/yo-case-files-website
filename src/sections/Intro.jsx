import { motion } from "framer-motion";

export default function Intro() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-14 md:px-6 lg:px-8 lg:py-16">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-[2rem] border border-[#2b2e34] bg-[#14161b] p-7 md:p-8"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.32em] text-[#c6a96b]">
            Designed to Feel Real
          </p>

          <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#f5efe4] md:text-4xl">
            An investigation you can actually step into.
          </h2>

          <p className="mt-5 text-base leading-7 text-[#a9adb7] md:text-lg">
            The Yo Case Files goes beyond a typical mystery game. Every case is
            built to feel structured, layered, and believable, with evidence
            that pushes the investigation beyond the printed page.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-[2rem] border border-[#2b2e34] bg-[linear-gradient(180deg,#1c1712,#111318)] p-7 md:p-8"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Physical evidence and printed case materials",
              "Social media, messages, and hidden digital trails",
              "Portal-based final reveal",
              "Built with real investigative logic and atmosphere",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-[#2c2f36] bg-[#101216] p-4 text-[#dde0e5] transition duration-300 hover:-translate-y-1 hover:border-[#3a3227] hover:shadow-[0_15px_40px_rgba(0,0,0,0.35)]"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}