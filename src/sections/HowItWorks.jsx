import { motion } from "framer-motion";
import SectionHeading from "../components/SectionHeading";
import { investigationSteps } from "../data/investigationSteps";

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="mx-auto max-w-7xl px-4 py-10 md:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="How the Investigation Works"
        title="From case file to final accusation"
        text="Simple to begin, layered to solve. Review the evidence, follow the digital trail, and build your conclusion carefully."
      />

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {investigationSteps.map((step, index) => {
          const Icon = step.icon;

          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="rounded-[2rem] border border-[#2b2e34] bg-[#14161b] p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#c6a96b]/12 text-[#c6a96b]">
                <Icon size={22} />
              </div>

              <p className="mt-5 text-sm font-semibold uppercase tracking-[0.25em] text-[#8d929d]">
                Step {index + 1}
              </p>

              <h3 className="mt-3 text-2xl font-semibold text-[#f5efe4]">
                {step.title}
              </h3>

              <p className="mt-4 leading-7 text-[#a9adb7]">{step.text}</p>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}