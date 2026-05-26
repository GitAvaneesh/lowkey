import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Github, Star } from "lucide-react";
import { GITHUB_URL, NAV_LINKS, SITE_NAME } from "@/lib/lowkey";

export function Header() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-border bg-background/85 backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-14 max-w-[1400px] items-center gap-6 px-4 sm:px-6">
        <Link to="/" className="group flex items-center gap-2.5">
          <span className="lk-accent-bg h-2 w-2 transition-transform group-hover:scale-150" />
          <span className="lk-mono text-sm font-semibold tracking-tight">
            {SITE_NAME.toLowerCase()}
            <span className="lk-accent">.</span>
          </span>
        </Link>

        <nav className="hidden flex-1 items-center gap-0 md:flex">
          {NAV_LINKS.map((l) => {
            const active = path === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative px-3 py-1.5 text-xs lk-mono transition-colors ${
                  active ? "text-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label.toLowerCase()}
                <span
                  className={`lk-accent-bg absolute bottom-0 left-3 right-3 h-px origin-left transition-transform duration-300 ${
                    active ? "scale-x-100" : "scale-x-0"
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="group inline-flex items-center gap-2 border border-border bg-card/50 px-3 py-1.5 text-xs lk-mono text-foreground transition-all hover:border-foreground hover:bg-card"
          >
            <Github className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">github</span>
            <span className="flex items-center gap-1 border-l border-border pl-2 text-muted-foreground group-hover:text-foreground">
              <Star className="h-3 w-3" />
              <span>star</span>
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
