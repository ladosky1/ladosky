import { about } from "../data/site";

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden px-6 pb-8 pt-10 md:pb-8 md:pt-8">
      <div
        className="pointer-events-none absolute -left-40 top-20 h-105 w-105 rounded-full bg-(--color-accent)/5 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-40 bottom-0 h-100 w-100 rounded-full bg-(--color-accent)/4 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative mb-10 md:mb-14">
          <p className="text-sm font-medium uppercase tracking-widest text-(--color-accent)">
            About
          </p>

          <h2 className="mt-3 max-w-4xl font-serif text-4xl font-semibold leading-tight text-white md:text-5xl">
            The builder behind the projects.
          </h2>

          <span
            className="pointer-events-none absolute -right-2 -top-8 select-none font-mono text-[100px] font-medium leading-none tracking-[-0.08em] text-white/2.5 drop-shadow-[0_0_40px_rgba(183,255,90,0.08)] md:-right-4 md:-top-12 md:text-[150px]"
            aria-hidden="true">
            04
          </span>
        </div>

        <div className="grid gap-10 md:grid-cols-[1.05fr_0.95fr] md:gap-16">
          <div>
            <p className="max-w-2xl text-xl font-medium leading-8 text-white md:text-2xl md:leading-9">
              {about.intro}
            </p>

            <p className="mt-7 max-w-2xl leading-8 text-(--color-text-muted)">
              {about.story}
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <span className="rounded-full border border-(--color-border) bg-(--color-surface) px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-(--color-text-muted)">
                Build through iteration
              </span>

              <span className="rounded-full border border-(--color-border) bg-(--color-surface) px-3.5 py-2 font-mono text-[9px] uppercase tracking-[0.16em] text-(--color-muted)">
                Full-stack · 2026
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-(--color-accent)">
              How I build
            </p>

            <div className="mt-5">
              {about.approach.map((item, index) => (
                <div
                  key={item}
                  className="group flex gap-5 border-t border-(--color-border) py-5 first:border-t-0 first:pt-0"
                >
                  <span className="shrink-0 font-mono text-[10px] tracking-[0.16em] text-(--color-accent)/60">
                    0{index + 1}
                  </span>

                  <p className="leading-7 text-(--color-text-muted) transition-colors duration-200 group-hover:text-white">
                    {item}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-(--color-accent)/15 bg-(--color-accent-soft) p-5 md:p-6">
              <p className="text-xs font-medium uppercase tracking-widest text-(--color-accent)">
                Current focus
              </p>

              <p className="mt-3 leading-7 text-(--color-text-muted)">
                {about.currentFocus}
              </p>

              <div className="mt-5 flex items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-(--color-accent)">
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-(--color-accent) shadow-[0_0_10px_rgba(183,255,90,0.7)]" />
                In progress
              </div>
            </div>
          </div>
        </div>

        
        <div className="mt-12 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-(--color-text-muted)">
          <span>Think / Build / Improve</span>
          <span>04 / 04</span>
        </div>
      </div>
    </section>
  );
}

export default About;