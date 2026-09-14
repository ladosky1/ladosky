import { useEffect, useRef, useState } from "react";
import { IconArrowNarrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import type { Project } from "../data/projects";

type ProjectCardProps = {
  project: Project;
};

function ProjectCard({ project }: ProjectCardProps) {
  const techScrollRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number>(0);
  const lastTsRef = useRef<number>(0);
  const isPausedRef = useRef(false);
  const resumeTimeoutRef = useRef<number>(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const container = techScrollRef.current;
    const inner = innerRef.current;
    if (!container ||!inner) return;

    const checkOverflow = () => {
      setShouldAnimate(inner.scrollWidth > container.clientWidth + 8);
    };

    checkOverflow();
    const ro = new ResizeObserver(checkOverflow);
    ro.observe(container);
    ro.observe(inner);
    return () => ro.disconnect();
  }, [project.technologies]);

  useEffect(() => {
    const container = techScrollRef.current;
    if (!container ||!shouldAnimate) return;

    const speed = 0.3;

    const animate = (timestamp: number) => {
      if (!lastTsRef.current) lastTsRef.current = timestamp;
      const delta = timestamp - lastTsRef.current;
      lastTsRef.current = timestamp;

      if (!isPausedRef.current) {
        container.scrollLeft += (delta / 16.666) * speed;
        const loopPoint = container.scrollWidth / 2;
        if (container.scrollLeft >= loopPoint) {
          container.scrollLeft -= loopPoint;
        }
      }
      rafRef.current = requestAnimationFrame(animate);
    };

    rafRef.current = requestAnimationFrame(animate);

    const pause = () => { isPausedRef.current = true; };
    const resume = () => {
      window.clearTimeout(resumeTimeoutRef.current);
      lastTsRef.current = 0;
      isPausedRef.current = false;
    };
    const handleInteraction = () => {
      pause();
      window.clearTimeout(resumeTimeoutRef.current);
      resumeTimeoutRef.current = window.setTimeout(resume, 1200);
    };

    container.addEventListener("mouseenter", pause);
    container.addEventListener("mouseleave", resume);
    container.addEventListener("pointerdown", handleInteraction);
    container.addEventListener("wheel", handleInteraction, { passive: true } as AddEventListenerOptions);
    container.addEventListener("touchstart", handleInteraction, { passive: true } as AddEventListenerOptions);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.clearTimeout(resumeTimeoutRef.current);
      container.removeEventListener("mouseenter", pause);
      container.removeEventListener("mouseleave", resume);
      container.removeEventListener("pointerdown", handleInteraction);
      container.removeEventListener("wheel", handleInteraction);
      container.removeEventListener("touchstart", handleInteraction);
    };
  }, [shouldAnimate]);

  const techItems = shouldAnimate
  ? [...project.technologies,...project.technologies]
    : project.technologies;

  return (
    <article className="group flex h-full flex-[0_0_85vw] snap-start flex-col 
                        overflow-hidden rounded-2xl border border-(--color-border) 
                        bg-(--color-surface) transition-colors duration-300
                        hover:border-white/10 md:flex-[0_0_auto]">

      <div className="p-2.5">
        <div className="group/image relative h-33 
                        overflow-hidden rounded-xl border border-(--color-border)
                        bg-[#0A0A0A] md:h-29.5">
          <div className="pointer-events-none absolute 
                          -inset-8 bg-[radial-gradient(circle_at_50%_0%,rgba(183,255,90,0.14),transparent_60%)] 
                          blur- opacity-60" />
          <div className="pointer-events-none absolute 
                          inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(255,255,255,0.05),transparent_55%)]" />

          {project.image? (
            <div className="relative z-10 h-full w-full overflow-hidden">
              <img
                src={project.image}
                alt={`${project.name} project screenshot`}
                className="
                  absolute
                  left-0
                  top-0
                  w-full
                  max-w-none
                  h-auto
                  transition-transform
                  duration-700
                  ease-[cubic-bezier(0.16,1,0.3,1)]
                  will-change-transform
                  md:group-hover/image:translate-y-[-42%]
                "
                loading="lazy"
              />
            </div>
          ) : (
            <div className="relative z-10 flex h-full items-center justify-center">
              <span className="font-mono text- uppercase tracking-[0.2em] text-(--color-text-muted)">
                Project screenshot
              </span>
            </div>
          )}

          <div className="pointer-events-none absolute inset-0 
                          rounded-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]" />
        </div>
      </div>

      <div className="flex flex-1 flex-col px-5 pb-5 pt-2 md:px-6 md:pb-5">
        <h3 className="font-serif text- font-semibold leading-none tracking-tight text-white md:text-">
          {project.name}
        </h3>

        <p className="mt-2 text-[13.5px] font-medium leading-6 text-(--color-accent)">
          {project.tagline}
        </p>

        <p className="mt-3 line-clamp-3 text-[13.5px] leading-[1.6] text-(--color-text-muted)">
          {project.description}
        </p>

        <div className="relative mt-4">
          <div className="pointer-events-none absolute 
                          inset-y-0 left-0 z-10 w-6 
                          bg-linear-to-r from-(--color-surface) to-transparent" />
          <div className="pointer-events-none absolute 
                          inset-y-0 right-0 z-10 w-8 
                          bg-linear-to-l from-(--color-surface) to-transparent" />

          <div ref={techScrollRef} className="scrollbar-none overflow-x-auto">
            <div ref={innerRef} className="flex w-max gap-2 pr-8">
              {techItems.map((tech, idx) => (
                <span
                  key={`${tech}-${idx}`}
                  className="shrink-0 rounded-full border border-(--color-border) 
                            bg-(--color-surface-soft) px-3 py-1.5 text- text-(--color-text-muted)">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-4 border-t border-(--color-border)" />

        <div className="mt-4 flex items-center justify-between gap-3">
          <div className="flex shrink-0 items-center gap-2 
                          whitespace-nowrap font-mono text-[10px] 
                          uppercase tracking-wider md:text-xs">
            <span className="rounded-full border border-(--color-accent)/20 
                            bg-(--color-accent-soft) px-2.5 py-1 text-(--color-accent)">
              {project.currentVersion}
            </span>

            {project.status.map((status) => (
              <span
                key={status}
                className="flex items-center gap-2 whitespace-nowrap text-(--color-text-muted)">
                <span
                  className="h-px w-2 bg-(--color-border)"
                  aria-hidden="true"/>

                <span
                  className={
                    status.toLowerCase() === "shipped"
                      ? "text-(--color-accent)"
                      : status.toLowerCase() === "offline"
                        ? "text-red-400/80"
                        : "text-sky-300/80"
                  }>
                  {status}
                </span>
              </span>
            ))}
          </div>

          <Link
            to={`/projects/${project.id}`}
            className="inline-flex shrink-0 items-center gap-1 
                      text-[11px] font-medium text-(--color-accent) 
                      transition-colors hover:text-white 
                      focus-visible:outline-2 focus-visible:outline-(--color-accent) 
                      focus-visible:outline-offset-2 md:gap-1.5 md:text-sm">
            View project

            <IconArrowNarrowRight
              size={18}
              stroke={1.8}
              className="transition-transform duration-200 group-hover:translate-x-0.5"/>
          </Link>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;