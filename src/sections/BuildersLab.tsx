import { Link } from "react-router-dom";
import { buildersLab } from "../data/buildersLab";
import { projects } from "../data/projects";

function BuildIllustration() {
  return (
    <div className="relative flex min-h-70 items-center justify-center overflow-hidden rounded-2xl border border-(--color-border) bg-[#11141a] md:min-h-105">
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(--color-accent)/8 blur-[90px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
          backgroundSize: "42px 42px",
        }}
        aria-hidden="true"
      />

    <div className="relative z-10 h-55 w-[85%] max-w-95 md:h-70 md:max-w-110">
        <svg
          viewBox="0 0 440 280"
          className="h-full w-full overflow-visible"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M70 140 L145 80 L220 140 L295 75 L370 140"
            stroke="rgba(183,255,90,0.35)"
            strokeWidth="1.5"
            strokeDasharray="5 7"
            className="animate-[dash_5s_linear_infinite]"
          />

          <path
            d="M70 140 L145 200 L220 140 L295 205 L370 140"
            stroke="rgba(183,255,90,0.2)"
            strokeWidth="1.5"
            strokeDasharray="4 8"
          />

          <path
            d="M145 80 L145 200"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />

          <path
            d="M295 75 L295 205"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1"
          />


          <rect
            x="35"
            y="35"
            width="370"
            height="210"
            rx="18"
            stroke="rgba(255,255,255,0.08)"
          />

          {[
            [70, 140],
            [145, 80],
            [145, 200],
            [220, 140],
            [295, 75],
            [295, 205],
            [370, 140],
          ].map(([cx, cy], index) => (
            <g key={index}>
              <circle
                cx={cx}
                cy={cy}
                r="7"
                fill="#11141a"
                stroke="rgba(183,255,90,0.55)"
                strokeWidth="1.5"
              />

              <circle
                cx={cx}
                cy={cy}
                r="2.5"
                fill="rgba(183,255,90,0.9)"
              />

              {index === 3 && (
                <circle
                  cx={cx}
                  cy={cy}
                  r="13"
                  stroke="rgba(183,255,90,0.18)"
                  strokeWidth="1"
                  className="animate-ping"
                />
              )}
            </g>
          ))}
        </svg>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-8 text-center">
          <p className="font-mono text-[8px] uppercase tracking-[0.2em] text-white/40">
            Current system
          </p>

          <p className="mt-1 font-serif text-xl font-semibold text-white md:text-2xl">
            PulseHUB
          </p>
        </div>

        <div className="absolute left-0 top-0 rounded-full border border-(--color-border) bg-(--color-surface) px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-(--color-text-muted)">
          Real-time
        </div>

        <div className="absolute bottom-0 right-0 flex items-center gap-2 rounded-full border border-(--color-accent)/20 bg-(--color-surface) px-3 py-1.5 font-mono text-[8px] uppercase tracking-[0.16em] text-(--color-accent)">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-(--color-accent)" />
          Building V2
        </div>
      </div>
    </div>
  );
}

function BuildersLab() {
  return (
    <section
      id="builders-lab"
      className="relative overflow-hidden px-6 pb-8 pt-6 md:pb-10 md:pt-8">
      <div
        className="pointer-events-none absolute -left-40 top-20 h-105 w-105 rounded-full bg-(--color-accent)/5 blur-[120px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute -right-32 -top-8 h-130 w-130 rounded-full bg-(--color-accent)/7 blur-[130px]"
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="relative mb-8 md:mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-(--color-accent)">
            Current work
          </p>

          <h2 className="mt-3 font-serif text-4xl font-semibold text-white md:text-5xl">
            Builder's Lab
          </h2>

          <p className="mt-4 max-w-2xl leading-7 text-(--color-text-muted)">
            Where shipped products continue to evolve.
          </p>

          <span
            className="pointer-events-none absolute -right-2 -top-8 select-none font-mono text-[100px] font-medium leading-none tracking-[-0.08em] text-white/2.5 md:-right-4 md:-top-12 md:text-[150px]"
            aria-hidden="true"
          >
            02
          </span>
        </div>

        <div className="space-y-6">
          {buildersLab.map((item) => {
            const project = projects.find(
              (project) => project.id === item.projectId,
            );

            if (!project) return null;

            return (
              <article
                key={item.projectId}
                className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-5 md:p-6"
              >

                <div className="grid gap-8 md:grid-cols-[1.05fr_0.95fr] md:items-stretch md:gap-10">
                  <div className="flex flex-col">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-widest text-(--color-accent)">
                        {item.currentVersion} ·{" "}
                        {item.status.join(" · ").toUpperCase()}
                      </p>

                      <h3 className="mt-3 font-serif text-3xl font-semibold text-white md:text-4xl">
                        {project.name}
                      </h3>

                      <p className="mt-2 text-sm text-(--color-text-muted)">
                        {project.tagline}
                      </p>
                    </div>

                    <div className="mt-8">
                      <p className="text-xs font-medium uppercase tracking-widest text-(--color-accent)">
                        Current Focus
                      </p>

                      <p className="mt-3 max-w-3xl leading-7 text-(--color-text-muted)">
                        {item.currentFocus}
                      </p>
                    </div>

                    <div className="mt-8">
                      <p className="text-xs font-medium uppercase tracking-widest text-(--color-accent)">
                        Next
                      </p>

                      <ul className="mt-3 space-y-2 text-sm text-(--color-text-muted)">
                        {item.next.map((nextItem) => (
                          <li key={nextItem}>· {nextItem}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-(--color-border) pt-6 md:mt-auto md:pt-6">
                      <p className="text-sm text-(--color-text-muted)">
                        Next milestone:{" "}
                        <span className="text-white">
                          {item.nextMilestone}
                        </span>
                      </p>

                      <Link
                        to={`/projects/${project.id}`}
                        className="text-sm font-medium text-(--color-accent) transition-colors hover:text-white"
                      >
                        View project →
                      </Link>
                    </div>
                  </div>

                  <BuildIllustration />
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-8 flex items-center justify-between font-mono text-[9px] uppercase tracking-[0.18em] text-(--color-text-muted)">
          <span>Build / Iterate / Ship</span>
          <span>02 / 04</span>
        </div>
      </div>
    </section>
  );
}

export default BuildersLab;