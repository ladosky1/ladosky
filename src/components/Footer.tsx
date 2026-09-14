import {
  IconBrandGithub,
  IconBrandX,
  IconBrandInstagram,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { mySocials } from "../data/social";

const socialIcons = {
  GitHub: IconBrandGithub,
  X: IconBrandX,
  Instagram: IconBrandInstagram,
  WhatsApp: IconBrandWhatsapp,
};

function Footer() {
  return (
    <footer className="border-t border-(--color-border) px-6 py-8">
      <div className="mx-auto flex max-w-7xl 
                      flex-col gap-6 md:flex-row 
                      md:items-center md:justify-between">
        <div>
          <a
            href="#home"
            className="font-mono text-sm font-bold 
                      tracking-[0.18em] text-white">
            LADOSKY
            <span className="text-base text-(--color-accent)">.</span>
          </a>

          <p className="mt-2 text-xs text-(--color-text-muted)">
            Building, learning, iterating.
          </p>
        </div>

        <div className="flex items-center gap-2">
          {mySocials.map((social) => {
            const Icon =
              socialIcons[social.name as keyof typeof socialIcons];

            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.name}
                title={social.name}
                className="flex h-9 w-9 items-center justify-center 
                          rounded-full border border-(--color-border) 
                          text-(--color-text-muted) transition-colors 
                          hover:border-(--color-accent)/40 
                          hover:text-(--color-accent)">
                {Icon && <Icon size={17} stroke={1.8} />}
              </a>
            );
          })}
        </div>

        <p className="text-xs text-(--color-text-muted)">
          © 2026 Oladoja Basit.
        </p>
      </div>
    </footer>
  );
}

export default Footer;