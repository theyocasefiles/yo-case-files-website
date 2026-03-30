import { useMemo } from "react";
import { Globe, Mail, MessageCircle } from "lucide-react";
import WaitlistForm from "../components/WaitlistForm";

const socialLinks = [
  { icon: Globe, href: "#" },
  { icon: MessageCircle, href: "#" },
  { icon: Mail, href: "mailto:hello@theyocasefiles.com" },
];

const exploreLinks = [
  { label: "Home", href: "#home" },
  { label: "Case 001", href: "#case-001" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#detectives" },
];

const infoLinks = [
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#footer" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

function SocialIconLink({ icon: Icon, href }) {
  return (
    <a
      href={href}
      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#2b2e34] bg-[#13151a] text-[#f5efe4] transition duration-300 hover:-translate-y-0.5 hover:border-[#c6a96b] hover:text-[#c6a96b]"
    >
      <Icon size={18} />
    </a>
  );
}

function FooterLinkColumn({ title, links }) {
  return (
    <div>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c6a96b]">
        {title}
      </p>

      <div className="mt-5 flex flex-col gap-3">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-[#d6dae1] transition duration-300 hover:text-[#f5efe4]"
          >
            {link.label}
          </a>
        ))}
      </div>
    </div>
  );
}

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), []);

  return (
    <footer
      id="footer"
      className="border-t border-white/5 bg-[linear-gradient(180deg,#0a0b0e,#090a0d)]"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1.15fr_0.7fr_0.7fr_1fr] lg:px-8 lg:py-16">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#c6a96b]">
            The Yo Case Files
          </p>

          <h3 className="mt-4 text-2xl font-semibold uppercase tracking-[0.18em] text-[#f5efe4]">
            Built for Investigators
          </h3>

          <p className="mt-5 max-w-md leading-7 text-[#a9adb7]">
            Premium interactive detective experiences blending physical
            evidence, digital clues, and cinematic storytelling into a case
            you can actually step into.
          </p>

          <div className="mt-7 flex gap-3">
            {socialLinks.map((link, index) => (
              <SocialIconLink
                key={`${link.href}-${index}`}
                icon={link.icon}
                href={link.href}
              />
            ))}
          </div>
        </div>

        <FooterLinkColumn title="Explore" links={exploreLinks} />
        <FooterLinkColumn title="Information" links={infoLinks} />

        <div
          id="portal"
          className="rounded-[2rem] border border-[#2b2e34] bg-[#111318]/85 p-6 backdrop-blur-sm"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c6a96b]">
            Join the Case List
          </p>

          <h4 className="mt-3 text-2xl font-semibold text-[#f5efe4]">
            Stay close to the investigation
          </h4>

          <p className="mt-4 leading-7 text-[#a9adb7]">
            Get launch updates, new case drops, early access news, and future
            investigation briefings.
          </p>

          <WaitlistForm />
        </div>
      </div>

      <div className="border-t border-white/5 px-4 py-5 text-center text-sm text-[#7d838d] md:px-6 lg:px-8">
        © {year} The Yo Case Files. All rights reserved.
      </div>
    </footer>
  );
}