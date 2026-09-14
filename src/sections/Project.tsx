import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section id="projects" className="relative px-6 pb-8 pt-8 md:pb-6 md:pt-8">
      <div
        className="pointer-events-none absolute -right-56 top-24 h-130 w-130 rounded-full bg-(--color-accent)/5 blur-[140px]"
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 75%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 75%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-8 md:mb-10">
          <div className="flex items-end justify-between gap-6">
            <div>
              <p className="text-sm font-medium uppercase tracking-widest text-(--color-accent)">
                Selected work
              </p>

              <h2 className="mt-3 font-serif text-4xl font-semibold text-white md:text-5xl">
                Projects
              </h2>
            </div>

            <div className="mb-1 flex shrink-0 items-center gap-2 font-mono text-[9px] uppercase tracking-[0.16em] text-(--color-text-muted) md:hidden">
              <span>Swipe</span>
              <span className="text-(--color-accent)">→</span>
            </div>
          </div>
        </div>

        <div
          className="pointer-events-none absolute -right-2 -top-7.5 select-none font-mono text-[100px] font-medium leading-none tracking-[-0.08em] text-white/2.5 md:-right-4 md:-top-11.25 md:text-[150px]"
          aria-hidden="true"
        >
          01
        </div>

        <div className="scrollbar-none flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:pb-0">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-8 hidden items-center justify-between border-t border-(--color-border)/50 pt-4 md:flex">
          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-(--color-text-muted)">
            Selected work
          </span>

          <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-(--color-text-muted)">
            01 / 04
          </span>
        </div>
      </div>
    </section>
  );
}

export default Projects;