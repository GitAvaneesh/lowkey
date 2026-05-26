import type { ReactNode } from "react";
import { useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface PageProps {
  children: ReactNode;
  accent?: string;
}

export function Page({ children, accent }: PageProps) {
  useEffect(() => {
    if (typeof document === "undefined") return;
    const root = document.documentElement;
    if (accent) root.style.setProperty("--page-accent", accent);
    else root.style.removeProperty("--page-accent");
    return () => {
      root.style.removeProperty("--page-accent");
    };
  }, [accent]);

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export function Section({
  children,
  className = "",
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`mx-auto max-w-[1400px] px-4 sm:px-6 ${className}`}>
      {children}
    </section>
  );
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="lk-mono-caps flex items-center gap-2 text-muted-foreground">
      <span className="lk-accent-bg h-1.5 w-1.5" />
      {children}
    </div>
  );
}
