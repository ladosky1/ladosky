import {
  IconArrowUpRight,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandWhatsapp,
  IconBrandX,
  IconMail,
} from "@tabler/icons-react";
import { mySocials } from "../data/social";
import { contact } from "../data/site";

function SocialIcon({ name }: { name: string }) {
  switch (name) {
    case "GitHub":
      return <IconBrandGithub size={18} stroke={1.8} />;

    case "X":
      return <IconBrandX size={17} stroke={1.8} />;

    case "Instagram":
      return <IconBrandInstagram size={18} stroke={1.8} />;

    case "WhatsApp":
      return <IconBrandWhatsapp size={18} stroke={1.8} />;

    default:
      return <IconArrowUpRight size={17} stroke={1.8} />;
  }
}

function Contact() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden px-6 pb-8 pt-10 md:pb-8 md:pt-8"
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-130 w-130 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-accent)/6 blur-[140px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 md:p-10 lg:p-12">
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.035]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "48px 48px",
            }}
            aria-hidden="true"
          />

          <div
            className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full bg-(--color-accent)/8 blur-[100px]"
            aria-hidden="true"
          />

          <div className="relative">
            <p className="text-sm font-medium uppercase tracking-widest text-(--color-accent)">
              Contact
            </p>

            <div className="mt-4 grid gap-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16">
              <div>
                <h2 className="max-w-4xl font-serif text-4xl font-semibold leading-tight text-white md:text-6xl">
                  Let's build something.
                </h2>

                <p className="mt-5 max-w-2xl leading-7 text-(--color-text-muted)">
                  Have an idea, opportunity, or just want to talk about
                  building software? You can find me here.
                </p>
              </div>

              <a
                href={`mailto:${contact.email}`}
                className="group inline-flex w-fit items-center gap-3 rounded-full border border-(--color-accent) px-5 py-3 text-sm font-medium text-(--color-accent) transition-colors hover:bg-(--color-accent) hover:text-black focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-4"
              >
                <IconMail size={18} stroke={1.8} />

                <span>{contact.email}</span>

                <IconArrowUpRight
                  size={17}
                  stroke={1.8}
                  className="transition-transform duration-200 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-2.5">
              {mySocials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={social.name}
                  className="group inline-flex items-center gap-2.5 rounded-full border border-(--color-border) bg-(--color-surface-soft) px-4 py-2.5 text-sm text-(--color-text-muted) transition-all duration-200 hover:border-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-4"
                >
                  <SocialIcon name={social.name} />

                  <span>{social.name}</span>

                  <IconArrowUpRight
                    size={15}
                    stroke={1.8}
                    className="opacity-40 transition-all duration-200 group-hover:translate-x-0.5 group-hover:opacity-100"
                  />
                </a>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-(--color-border) pt-6">
              <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-(--color-text-muted)">
                Open to conversations · collaborations · opportunities
              </p>

              <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-(--color-text-muted)">
                Lagos · Nigeria
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;