import { useEffect, useState } from "react";
import { IconMenu2, IconX } from "@tabler/icons-react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Projects", href: "#projects" },
  { label: "Builder's Lab", href: "#builders-lab" },
  { label: "Build Log", href: "#build-log" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (!isMenuOpen) return
    const onEsc = (e: KeyboardEvent) => e.key === 'Escape' && setIsMenuOpen(false)
    const onClickOutside = (e: MouseEvent) => {
      const header = document.querySelector('header')
      if (header &&!header.contains(e.target as Node)) setIsMenuOpen(false)
    }

    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', onEsc)

    window.addEventListener('mousedown', onClickOutside)

      return () => {
        document.body.style.overflow = ''
        window.removeEventListener('keydown', onEsc)
        window.removeEventListener('mousedown', onClickOutside)
      }
  }, [isMenuOpen])

  useEffect(() => {
    const sections = navItems
        .map((item) => document.querySelector(item.href))
        .filter((section): section is Element => section !== null);

    const observer = new IntersectionObserver(
            (entries) => {
            const visibleSections = entries.filter(
                (entry) => entry.isIntersecting,
            );

            if (visibleSections.length > 0) {
                const mostVisible = entries
                  .filter(e => e.isIntersecting)
                  .sort((a,b) => a.boundingClientRect.top - b.boundingClientRect.top)[0]
                
                if (mostVisible) setActiveSection(mostVisible.target.id)

                setActiveSection(mostVisible.target.id);
            }
            },
            {
            rootMargin: "-20% 0px -50% 0px",
            threshold: [0, 0.25, 0.5, 0.75, 1],
            },
        );

        sections.forEach((section) => observer.observe(section));

        return () => observer.disconnect();
    }, []);

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
  <header className="sticky top-0 z-50 
                    border-b border-(--color-border) 
                    bg-(--color-bg)/85 backdrop-blur-xl">
    <nav className="mx-auto flex h-16 max-w-7xl 
                    items-center justify-between 
                    px-4 md:h-18 md:px-6">
      <a
        href="#home"
        onClick={handleNavClick}
        className="font-mono text-sm font-bold tracking-[0.18em] text-white">
        LADOSKY<span className="text-(--color-accent) text-base">.</span>
      </a>

      <div className="hidden items-center gap-1 
                      rounded-full border border-(--color-border) 
                      bg-(--color-surface) p-1 md:flex">
        {navItems.map((item) => {
          const sectionId = item.href.replace("#", "");
          const isActive = activeSection === sectionId;

          return (
            <a
              key={item.href}
              href={item.href}
              className={`rounded-full px-4 py-2 text-sm transition-colors ${
                isActive
                  ? "border border-(--color-accent)/30 bg-(--color-accent-soft) text-(--color-accent)"
                  : "border border-transparent text-(--color-text-muted) hover:text-white"
              }`}>
              {item.label}
            </a>
          );
        })}
      </div>

      <a
        href="#contact"
        onClick={handleNavClick}
        className="hidden items-center gap-2 
                  rounded-full border border-(--color-accent)/50 
                  px-4 py-2 text-sm font-medium text-(--color-accent) 
                  transition-colors hover:bg-(--color-accent) hover:text-black md:flex">
        Get in touch
        <span aria-hidden="true">→</span>
      </a>

      <button
        type="button"
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((previous) => !previous)}
        className="rounded-full border border-(--color-border) 
                  bg-(--color-surface) p-2 text-white transition-colors 
                  hover:text-(--color-accent) md:hidden">
        {isMenuOpen ? (
          <IconX size={21} stroke={1.8} />
        ) : (
          <IconMenu2 size={21} stroke={1.8} />
        )}
      </button>
    </nav>

    {isMenuOpen && (
      <div className="absolute left-4 right-4 top-full mt-3 md:hidden">
        <div className="rounded-2xl border border-(--color-border) 
                        bg-(--color-surface)/95 p-3 shadow-2xl backdrop-blur-xl">
          <p className="px-3 pb-2 pt-1 font-mono text-[10px] tracking-[0.18em] text-(--color-text-muted)">
            NAVIGATION
          </p>

          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace("#", "");
              const isActive = activeSection === sectionId;

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={handleNavClick}
                  className={`flex items-center justify-between rounded-xl px-4 py-3 text-sm transition-colors ${
                    isActive
                      ? "bg-(--color-accent-soft) text-(--color-accent)"
                      : "text-(--color-text-muted) hover:bg-white/5 hover:text-white"
                  }`}
                >
                  {item.label}
                  <span aria-hidden="true">→</span>
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            onClick={handleNavClick}
            className="mt-2 flex items-center justify-center gap-2 
                      rounded-xl bg-(--color-accent) px-4 py-3 text-sm 
                      font-semibold text-black transition-opacity hover:opacity-90">
            Get in touch
            <span aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    )}
  </header>
);
}

export default Navbar;