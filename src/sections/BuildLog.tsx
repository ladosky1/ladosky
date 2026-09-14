import { IconArrowUpRight } from "@tabler/icons-react";
import { projects } from "../data/projects";
import { buildLog } from "../data/buildlog";

function BuildLog() {
  return (
    <section
      id="build-log"
      className="relative overflow-hidden px-6 pb-8 pt-10 md:pb-8 md:pt-8"
    >
      <div
        className="pointer-events-none absolute -right-40 top-20 h-110 w-110 rounded-full bg-(--color-accent)/5 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -left-48 top-[45%] h-100 w-100 rounded-full bg-(--color-accent)/4 blur-[120px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative mb-10 md:mb-14">
          <p className="text-sm font-medium uppercase tracking-widest text-(--color-accent)">
            The journey
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold text-white md:text-5xl">
            Build Log
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-(--color-text-muted)">
            A record of the problems, milestones, and progress behind the
            products.
          </p>

          <span
            className="pointer-events-none absolute -right-2 -top-8 select-none font-mono text-[100px] font-medium leading-none tracking-[-0.08em] text-white/2.5 drop-shadow-[0_0_40px_rgba(183,255,90,0.08)] md:-right-4 md:-top-12 md:text-[150px]"
            aria-hidden="true"
          >
            03
          </span>
        </div>

        
        <div className="relative">
          <div
            className="absolute bottom-0 left-1.25 top-0 w-px bg-linear-to-b from-(--color-accent)/40 via-(--color-border) to-transparent md:left-36"
            aria-hidden="true"
          />

          <div className="space-y-10 md:space-y-12">
            {buildLog.map((entry) => {
              const project = projects.find(
                (item) => item.id === entry.projectId,
              );

              return (
                <article
                  key={entry.id}
                  className="relative grid gap-5 pl-8 md:grid-cols-[9rem_1fr] md:gap-10 md:pl-0"
                >
                  <span
                    className="absolute left-0 top-1.5 flex h-3 w-3 items-center justify-center rounded-full border border-(--color-accent)/50 bg-(--color-bg) md:left-35.25"
                    aria-hidden="true"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-(--color-accent) shadow-[0_0_10px_rgba(183,255,90,0.7)]" />
                  </span>

                  <div className="pt-0.5 font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-text-muted) md:text-right md:pr-8">
                    {entry.date}
                  </div>

                  <div className="rounded-2xl border border-(--color-border) bg-(--color-surface)/70 p-5 backdrop-blur-sm transition-colors duration-300 hover:border-white/15 md:p-6">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <p className="font-mono text-[10px] font-medium uppercase tracking-[0.16em] text-(--color-accent)">
                        {project?.name}
                      </p>

                      <span className="font-mono text-[9px] uppercase tracking-[0.14em] text-white/25">
                        Build {entry.id}
                      </span>
                    </div>

                    <h3 className="mt-3 font-serif text-2xl font-semibold text-white md:text-3xl">
                      {entry.title}
                    </h3>

                    <p className="mt-3 max-w-3xl leading-7 text-(--color-text-muted)">
                      {entry.description}
                    </p>

                    {entry.xUrl && (
                      <a
                        href={entry.xUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-(--color-accent) transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-(--color-accent) focus-visible:outline-offset-4"
                      >
                        View on X
                        <IconArrowUpRight size={16} stroke={1.8} />
                      </a>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-(--color-text-muted) md:mt-12">
          <span>Learn / Build / Repeat</span>
          <span>03 / 04</span>
        </div>
      </div>
    </section>
  );
}

export default BuildLog;