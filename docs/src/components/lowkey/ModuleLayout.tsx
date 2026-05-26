import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { Page, Section, Eyebrow } from "./Page";
import { Reveal, Stagger, StaggerItem } from "./Reveal";
import { AssetSlot } from "./AssetSlot";
import { GITHUB_URL } from "@/lib/lowkey";

interface ModuleLayoutProps {
  eyebrow: string;
  name: string;
  headline: string;
  blurb: string;
  accent: string;
  icon?: string;
  children: ReactNode;
}

export function ModuleLayout({
  eyebrow,
  name,
  headline,
  blurb,
  accent,
  icon,
  children,
}: ModuleLayoutProps) {
  return (
    <Page accent={accent}>
      <Section className="border-b border-border py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal variant="fadeUp">
              <Eyebrow>{eyebrow}</Eyebrow>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.08}>
              <h1 className="lk-display mt-6 text-6xl md:text-8xl">{name.toLowerCase()}.</h1>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.16}>
              <p className="lk-accent mt-6 text-xl md:text-2xl">{headline}</p>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.24}>
              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                {blurb}
              </p>
            </Reveal>
            <Reveal variant="fadeUp" delay={0.32}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="lk-accent-bg lk-mono inline-flex items-center gap-2 px-5 py-3 text-xs font-medium text-black transition-opacity hover:opacity-90"
                >
                  read the source
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <Link
                  to="/download"
                  className="lk-mono inline-flex items-center gap-2 border border-border bg-card/50 px-5 py-3 text-xs text-foreground transition-colors hover:border-foreground"
                >
                  download lowkey
                </Link>
              </div>
            </Reveal>
          </div>
          <Reveal variant="zoomIn" delay={0.2} className="hidden justify-self-end md:block">
            <div className="lk-accent-border relative border p-6">
              <span className="lk-accent-bg absolute -left-px -top-px h-2 w-2" />
              <span className="lk-accent-bg absolute -right-px -bottom-px h-2 w-2" />
              <AssetSlot src={icon} alt={`${name} icon`} size={208} />
            </div>
          </Reveal>
        </div>
      </Section>

      {children}
    </Page>
  );
}

export function FeatureGrid({
  items,
}: {
  items: Array<{ title: string; body: string }>;
}) {
  return (
    <Stagger as="div" gap={0.05} className="grid gap-0 border-x border-b border-border md:grid-cols-2">
      {items.map((it, i) => (
        <StaggerItem
          key={it.title}
          className={`lk-tile border-t border-border p-8 ${
            i % 2 === 0 ? "md:border-r" : ""
          }`}
        >
          <div className="flex items-start gap-4">
            <span className="lk-mono lk-accent mt-1 text-xs">0{i + 1}</span>
            <div>
              <h3 className="text-lg font-semibold tracking-tight text-foreground">{it.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{it.body}</p>
            </div>
          </div>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
