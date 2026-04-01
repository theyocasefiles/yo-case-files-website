import { useMemo } from "react";
import { Mail } from "lucide-react";
import WaitlistForm from "../components/WaitlistForm";

const socialLinks = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/theyocasefiles?igsh=ZHBnNmNmeGNkbHpk",
    icon: "instagram",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@theyocasefiles?_r=1&_t=ZN-95AjAIkTbNu",
    icon: "tiktok",
  },
  {
    label: "Email",
    href: "mailto:detective.good@TheYoCaseFiles.com",
    icon: "mail",
  },
];

const exploreLinks = [
  { label: "Home", href: "#home" },
  { label: "Case 001", href: "#case-001" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "About", href: "#detectives" },
  { label: "Enter Portal", href: "/portal" },
];

const infoLinks = [
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#footer" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
];

function InstagramIcon({ size = 18 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37a4 4 0 1 1-1.37-2.75A4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}

function TikTokIcon({ size = 18 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.68h-3.13v12.36a2.9 2.9 0 1 1-2-2.77V8.43a6.03 6.03 0 1 0 5.13 5.97V8.14a7.9 7.9 0 0 0 4.77 1.6V6.69Z" />
    </svg>
  );
}

function SocialIcon({ icon, size = 18 }) {
  if (icon === "instagram") return <InstagramIcon size={size} />;
  if (icon === "tiktok") return <TikTokIcon size={size} />;
  if (icon === "mail") return <Mail size={size} />;
  return null;
}

function SocialIconLink({ icon, href, label }) {
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-[#2b2e34] bg-[#13151a] text-[#f5efe4] transition duration-300 hover:-translate-y-0.5 hover:border-[#c6a96b] hover:text-[#c6a96b]"
    >
      <SocialIcon icon={icon} />
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
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:px-6 lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr] lg:px-8 lg:py-16">
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
            {socialLinks.map((link) => (
              <SocialIconLink
                key={link.label}
                icon={link.icon}
                href={link.href}
                label={link.label}
              />
            ))}
          </div>
        </div>

        <FooterLinkColumn title="Explore" links={exploreLinks} />
        <FooterLinkColumn title="Information" links={infoLinks} />

        <div className="rounded-[2rem] border border-[#2b2e34] bg-[#111318]/85 p-6 backdrop-blur-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[#c6a96b]">
            Contact
          </p>

          <h4 className="mt-3 text-2xl font-semibold text-[#f5efe4]">
            Get in touch
          </h4>

          <p className="mt-4 leading-7 text-[#a9adb7]">
            For general enquiries, support, collaborations, or press, contact
            us below or follow the investigation on social media.
          </p>

          <a
            href="mailto:detective.good@TheYoCaseFiles.com"
            className="mt-5 block break-all text-[#f5efe4] transition duration-300 hover:text-[#c6a96b]"
          >
            detective.good@TheYoCaseFiles.com
          </a>

          <div className="mt-6">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#c6a96b]">
              Join the Case List
            </p>

            <p className="mt-3 leading-7 text-[#a9adb7]">
              Get launch updates, new case drops, early access news, and future
              investigation briefings.
            </p>

            <WaitlistForm />
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 px-4 py-5 text-center text-sm text-[#7d838d] md:px-6 lg:px-8">
        © {year} The Yo Case Files. All rights reserved.
      </div>
    </footer>
  );
}