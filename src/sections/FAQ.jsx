import { useState } from "react";
import FAQItem from "../components/FAQItem";
import SectionHeading from "../components/SectionHeading";
import { faqs } from "../data/faqs";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section
      id="faq"
      className="mx-auto max-w-5xl px-4 py-10 md:px-6 lg:px-8"
    >
      <SectionHeading
        eyebrow="FAQ"
        title="Questions before you open the file?"
        text="Everything a first-time investigator should know before starting the case."
      />

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <FAQItem
            key={item.q}
            q={item.q}
            a={item.a}
            isOpen={openFaq === index}
            onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
          />
        ))}
      </div>
    </section>
  );
}