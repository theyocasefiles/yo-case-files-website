import { motion } from "framer-motion";

export default function SectionHeading({ eyebrow, title, text }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mx-auto mb-10 max-w-3xl text-center md:mb-12"
    >
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.38em] text-[#c6a96b]">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-semibold leading-[1.05] text-[#f5efe4] md:text-5xl">
        {title}
      </h2>

      {/* subtle divider */}
      <div className="mx-auto mt-4 h-[1px] w-16 bg-gradient-to-r from-transparent via-[#c6a96b]/40 to-transparent" />

      {text && (
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-[#a9adb7] md:text-lg">
          {text}
        </p>
      )}
    </motion.div>
  );
}