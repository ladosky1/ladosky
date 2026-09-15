import {
  IconArrowNarrowRight,
  IconBrandGithub,
} from "@tabler/icons-react";
import { motion } from "motion/react";
import { mySocials } from "../data/social";
import portrait from "../assets/images/me/mee.jpeg";
import {
  fadeUp,
  fadeIn,
  stagger,
  scaleIn,
} from "../animations/variant";

const github = mySocials.find((social) => social.name === "GitHub");

function Hero() {
  return (
    <section
      id="home"
      className="relative px-6 pb-20 pt-5 md:min-h-[calc(100vh-80px)] md:py-16"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden opacity-[0.035] md:block"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.35) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.35) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
          maskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 78%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent 0%, black 18%, black 78%, transparent 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[4%] top-1/2 z-0 hidden h-150 w-175 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(183,255,90,0.10)_0%,rgba(183,255,90,0.045)_32%,transparent_70%)] blur-[60px] md:block"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 hidden bg-[radial-gradient(ellipse_at_65%_50%,rgba(183,255,90,0.025),transparent_55%)] md:block"
      />

      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-8 md:grid-cols-[1.05fr_0.95fr] md:gap-16 lg:gap-20">
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
        >
          <motion.p
            variants={fadeUp}
            className="mb-5 text-xs font-medium uppercase tracking-[0.22em] text-(--color-accent) md:text-sm"
          >
            Full-stack developer
          </motion.p>

          <motion.h1
            variants={fadeUp}
            className="max-w-3xl font-serif text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            OLADOJA
            <br />
            BASIT
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-7 max-w-xl text-base leading-7 text-(--color-text-muted) md:text-lg"
          >
           Building real products, learning through the process, and improving with every version I work on. This portfolio documents that journey and it will evolve as I keep building and learning.
          </motion.p>

          <motion.div
            variants={fadeUp}
            className="mt-8 flex gap-3"
          >
            {github && (
              <a
                href={github.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-(--color-accent) px-5 py-3 text-sm font-medium text-(--color-accent) transition-colors hover:bg-(--color-accent) hover:text-black focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-2"
              >
                <IconBrandGithub size={17} stroke={1.8} />
                View GitHub
              </a>
            )}

            <a
              href="#projects"
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-(--color-border) px-5 py-3 text-sm font-medium text-(--color-text-muted) transition-colors hover:border-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-2"
            >
              Explore projects
              <IconArrowNarrowRight size={18} stroke={1.8} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          variants={scaleIn}
          initial="hidden"
          animate="visible"
          className="flex justify-center md:justify-end"
        >
          <div className="relative w-full max-w-95 md:max-w-102.5">
            
            <div className="pointer-events-none absolute -inset-10 rounded-full bg-(--color-accent)/10 blur-[70px]" />

            <div className="relative rounded-3xl border border-(--color-border) bg-(--color-surface) p-2">
              <div className="relative aspect-4/5 overflow-hidden rounded-[1.15rem] border border-(--color-border) bg-[#0A0A0A]">
                <img
                  src={portrait}
                  alt="Oladoja Basit"
                  className="h-full w-full object-cover object-center grayscale-12"
                />

                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/55 via-transparent to-black/10" />

                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.18) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.18) 1px, transparent 1px)",
                    backgroundSize: "42px 42px",
                  }}
                />

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-xl border border-white/10 bg-black/60 px-4 py-3 backdrop-blur-md">
                  <div>
                    <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/45">
                      Builder
                    </p>
                    <p className="mt-1 text-sm font-medium text-white">
                      Ladosky
                    </p>
                  </div>

                  <span className="flex items-center gap-2 font-mono text-[9px] uppercase tracking-wider text-(--color-accent)">
                    <span className="h-1.5 w-1.5 rounded-full bg-(--color-accent) shadow-[0_0_10px_rgba(183,255,90,0.8)]" />
                    Currently building
                  </span>
                </div>
              </div>
            </div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="absolute -right-3 top-8 rounded-full border border-(--color-accent)/30 bg-(--color-surface) px-4 py-2.5 shadow-[0_0_30px_rgba(183,255,90,0.12)] sm:-right-5"
            >
              <div className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full bg-(--color-accent) shadow-[0_0_10px_rgba(183,255,90,0.8)]" />

                <div>
                  <p className="font-mono text-[8px] uppercase tracking-[0.18em] text-(--color-text-muted)">
                    Current work
                  </p>
                  <p className="mt-0.5 text-xs font-semibold text-white">
                    PulseHUB
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              variants={fadeIn}
              initial="hidden"
              animate="visible"
              className="absolute -bottom-3 -left-3 rounded-full border border-(--color-border) bg-(--color-surface) px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.16em] text-(--color-text-muted)"
            >
              Full-stack · 2026
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;