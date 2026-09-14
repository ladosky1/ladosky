import {
  IconArrowLeft,
  IconArrowUpRight,
  IconBrandGithub,
  IconExternalLink,
} from "@tabler/icons-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

function ProjectDetail() {
  const { projectId } = useParams();

  const project = projects.find((item) => item.id === projectId);

  if (!project) {
    return (
      <main className="min-h-screen px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-mono text-xs uppercase tracking-[0.16em] text-(--color-text-muted)">
            Project not found
          </p>

          <Link
            to="/"
            className="mt-5 inline-flex items-center gap-2 text-sm text-(--color-accent)"
          >
            <IconArrowLeft size={17} stroke={1.8} />
            Back to portfolio
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden px-6 pb-20 pt-8 md:pt-10">
      <div
        className="pointer-events-none absolute -right-56 
                  top-20 h-130 w-130 rounded-full 
                  bg-(--color-accent)/5 blur-[140px]"
        aria-hidden="true"/>

      <div
        className="pointer-events-none absolute -left-56 
                  top-[35%] h-120 w-120 rounded-full 
                  bg-(--color-accent)/4 blur-[130px]"
        aria-hidden="true"/>

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.22) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "linear-gradient(to bottom, black 0%, transparent 55%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, transparent 55%)",
        }}
        aria-hidden="true"
      />

      <div className="relative mx-auto max-w-6xl">
        <Link
          to="/#projects"
          className="inline-flex items-center gap-2 font-mono 
                    text-[10px] uppercase tracking-[0.16em] text-(--color-text-muted) 
                    transition-colors hover:text-white">
          <IconArrowLeft size={15} stroke={1.8} />
          Back to projects
        </Link>

        <header className="relative mt-10 max-w-4xl md:mt-12">
          <div className="flex flex-wrap items-center gap-3 
                          font-mono text-[10px] uppercase tracking-[0.16em]">
            <span className="rounded-full border border-(--color-accent)/20 
                              bg-(--color-accent-soft) px-3 py-1.5 text-(--color-accent)">
              {project.currentVersion}
            </span>

            {project.status.map((status) => (
              <span
                key={status}
                className={
                  status.toLowerCase() === "shipped"
                    ? "text-(--color-accent)"
                    : status.toLowerCase() === "offline"
                      ? "text-red-400/80"
                      : "text-sky-300/80"
                }>
                {status}
              </span>
            ))}
          </div>

          <h1 className="mt-6 font-serif text-5xl font-semibold leading-[0.95] 
                        tracking-tight text-white md:text-7xl">
            {project.name}
          </h1>

          <p className="mt-5 text-lg font-medium text-(--color-accent) md:text-xl">
            {project.tagline}
          </p>

          <p className="mt-6 max-w-3xl text-base leading-8 text-(--color-text-muted) md:text-lg">
            {project.description}
          </p>
        </header>

        <div className="mt-12 md:mt-16">
          <div className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-2 md:p-3">
            <div className="relative overflow-hidden rounded-xl 
                            border border-(--color-border) bg-[#0A0A0A]">
              <div
                className="pointer-events-none absolute -inset-16 bg-[radial-gradient(circle_at_50%_0%,rgba(183,255,90,0.12),transparent_60%)] blur-2xl"
                aria-hidden="true"/>

              {project.image ? (
                <img
                  src={project.image}
                  alt={`${project.name} screenshot`}
                  className="relative z-10 block h-auto w-full object-contain"/>
              ) : (
                <div className="flex aspect-video items-center justify-center">
                  <span className="font-mono text-xs uppercase tracking-[0.18em] text-(--color-text-muted)">
                    Project screenshot
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        <section className="mt-20 md:mt-28">
          <div className="grid gap-8 md:grid-cols-[0.3fr_1fr] md:gap-16">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-accent)">
                01 · Overview
              </p>
            </div>

            <div>
              <p className="max-w-3xl text-lg leading-8 text-white md:text-xl md:leading-9">
                {project.description}
              </p>
            </div>
          </div>
        </section>

        <section className="mt-20 md:mt-28">
          <div className="grid gap-8 md:grid-cols-[0.3fr_1fr] md:gap-16">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-accent)">
                02 · Evolution
              </p>
            </div>

            <div className="relative">
              <div
                className="absolute bottom-4 left-1.25 top-4 w-px bg-linear-to-b from-(--color-accent)/50 via-(--color-border) to-transparent"
                aria-hidden="true"/>

              <div className="space-y-10">
                {project.versions.map((version, index) => (
                  <article
                    key={version.label}
                    className="relative pl-8"
                  >
                    <span
                      className="absolute left-0 top-1 flex h-3 w-3 items-center justify-center rounded-full border border-(--color-accent)/50 bg-(--color-bg)"
                      aria-hidden="true"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-(--color-accent)" />
                    </span>

                    <p className="font-mono text-[9px] uppercase tracking-[0.16em] text-(--color-text-muted)">
                      Version {index + 1}
                    </p>

                    <h3 className="mt-2 font-serif text-2xl font-semibold text-white">
                      {version.label}
                    </h3>

                    <p className="mt-3 max-w-3xl leading-8 text-(--color-text-muted)">
                      {version.description}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="mt-20 md:mt-28">
          <div className="grid gap-8 md:grid-cols-[0.3fr_1fr] md:gap-16">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-accent)">
                03 · Stack
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-(--color-border) bg-(--color-surface) px-3.5 py-2 font-mono text-[10px] uppercase tracking-[0.08em] text-(--color-text-muted)"
                >
                  {technology}
                </span>
              ))}
            </div>
          </div>
        </section>

        <section className="mt-20 md:mt-28">
          <div className="grid gap-5 md:grid-cols-2">
            <article className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 md:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-accent)">
                04 · What I learned
              </p>

              <ul className="mt-6 space-y-4">
                {project.whatILearned.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 leading-7 text-(--color-text-muted)"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-accent)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-(--color-accent)/15 bg-(--color-accent-soft) p-6 md:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-accent)">
                05 · What's next
              </p>

              <ul className="mt-6 space-y-4">
                {project.futureImprovements.map((item) => (
                  <li
                    key={item}
                    className="flex gap-3 leading-7 text-(--color-text-muted)"
                  >
                    <span className="mt-3 h-1.5 w-1.5 shrink-0 rounded-full bg-(--color-accent)" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section className="mt-20 md:mt-28">
          <div className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 md:p-7">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-accent)">
                  Project links
                </p>

                <p className="mt-2 text-sm text-(--color-text-muted)">
                  Explore the project and its source.
                </p>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {project.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-(--color-border) px-4 py-2.5 text-sm text-(--color-text-muted) transition-colors hover:border-white/20 hover:text-white"
                  >
                    {link.label.toLowerCase().includes("github") ? (
                      <IconBrandGithub size={17} stroke={1.8} />
                    ) : (
                      <IconExternalLink size={17} stroke={1.8} />
                    )}

                    {link.label}

                    <IconArrowUpRight size={15} stroke={1.8} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {project.posts.length > 0 && (
          <section className="mt-12 md:mt-16">
            <div className="grid gap-8 md:grid-cols-[0.3fr_1fr] md:gap-16">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-(--color-accent)">
                  06 · Build Log
                </p>
              </div>

              <div className="space-y-3">
                {project.posts.map((post) => (
                  <a
                    key={post.href}
                    href={post.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center justify-between gap-4 rounded-xl border border-(--color-border) bg-(--color-surface) px-4 py-4 text-sm text-(--color-text-muted) transition-colors hover:border-white/15 hover:text-white"
                  >
                    <span>{post.title}</span>

                    <IconArrowUpRight
                      size={17}
                      stroke={1.8}
                      className="shrink-0 text-(--color-accent) transition-transform duration-200 group-hover:translate-x-0.5"
                    />
                  </a>
                ))}
              </div>
            </div>
          </section>
        )}

        <div className="mt-16 border-t border-(--color-border) pt-6 md:mt-20">
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-(--color-text-muted) transition-colors hover:text-white"
          >
            <IconArrowLeft size={15} stroke={1.8} />
            Back to all projects
          </Link>
        </div>
      </div>
    </main>
  );
}

export default ProjectDetail;