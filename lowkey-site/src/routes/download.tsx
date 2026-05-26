import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, Apple, Monitor, Terminal } from "lucide-react";
import { Page, Section, Eyebrow } from "@/components/lowkey/Page";
import { Reveal, Stagger, StaggerItem } from "@/components/lowkey/Reveal";
import { GITHUB_URL } from "@/lib/lowkey";

const TITLE = "Download Lowkey — macOS, Windows, Linux";
const DESC =
  "Get Lowkey for your machine. Free, open, MIT-licensed. No account.";

export const Route = createFileRoute("/download")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/download" },
    ],
    links: [{ rel: "canonical", href: "/download" }],
  }),
  component: DownloadPage,
});

const RELEASES = `${GITHUB_URL}/releases`;

const PLATFORMS = [
  { icon: Apple, name: "macOS", detail: "Universal · 12+", file: "Lowkey.dmg" },
  { icon: Monitor, name: "Windows", detail: "x64 · 10 / 11", file: "Lowkey-Setup.exe" },
  { icon: Terminal, name: "Linux", detail: ".AppImage / .deb / .rpm", file: "Lowkey.AppImage" },
];

function DownloadPage() {
  return (
    <Page>
      <Section className="border-b border-border py-24 md:py-32">
        <Reveal variant="fadeUp">
          <Eyebrow>download · v0.1 pre-release</Eyebrow>
        </Reveal>
        <Reveal variant="pixelAttach" delay={0.1}>
          <h1 className="lk-display mt-6 max-w-4xl text-6xl md:text-8xl">
            Get <span className="lk-accent">lowkey</span>
            <br />
            <span className="italic">on your machine.</span>
          </h1>
        </Reveal>
        <Reveal variant="fadeUp" delay={0.25}>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            One download. No account. Opens in under a second.
          </p>
        </Reveal>
      </Section>

      <Section className="border-b border-border py-20">
        <Stagger as="div" gap={0.08} className="grid gap-0 border border-border md:grid-cols-3">
          {PLATFORMS.map((p, i) => (
            <StaggerItem
              key={p.name}
              variant="pixelAttach"
              className={`lk-tile ${i < 2 ? "md:border-r" : ""} border-border`}
            >
              <a
                href={RELEASES}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex h-full flex-col gap-5 p-10"
              >
                <p.icon className="h-10 w-10 text-foreground/80 transition-transform group-hover:scale-110" />
                <div>
                  <h2 className="lk-display text-4xl">{p.name.toLowerCase()}</h2>
                  <p className="mt-2 text-xs text-muted-foreground lk-mono">{p.detail}</p>
                </div>
                <code className="lk-mono text-xs text-foreground/50">{p.file}</code>
                <div className="lk-mono lk-accent mt-auto flex items-center gap-2 pt-6 text-xs">
                  latest release
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="border-b border-border py-20 md:py-28">
        <Reveal variant="fadeUp">
          <Eyebrow>or build it yourself</Eyebrow>
          <h2 className="lk-display mt-6 max-w-3xl text-4xl md:text-5xl italic">
            One command.
          </h2>
        </Reveal>
        <Reveal variant="pixelAttach" delay={0.1}>
          <pre className="lk-mono mt-12 overflow-x-auto border border-border bg-card p-8 text-xs leading-relaxed text-foreground/85">
            <span className="lk-accent">$</span> git clone {GITHUB_URL}
            <br />
            <span className="lk-accent">$</span> cd lowkey
            <br />
            <span className="lk-accent">$</span> cargo tauri dev
            <span className="text-muted-foreground">       # run locally</span>
            <br />
            <span className="lk-accent">$</span> cargo tauri build
            <span className="text-muted-foreground">     # produce a release binary</span>
          </pre>
        </Reveal>
      </Section>

      <Section className="py-24">
        <Reveal variant="fadeUp">
          <div className="border border-border p-12 md:p-16">
            <Eyebrow>source</Eyebrow>
            <h2 className="lk-display mt-6 text-4xl md:text-6xl">
              Reproducible from the repo.
            </h2>
            <div className="mt-10">
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noreferrer noopener"
                className="lk-accent-bg lk-mono inline-flex items-center gap-2 px-5 py-3 text-xs font-medium text-black transition-opacity hover:opacity-90"
              >
                <Github className="h-4 w-4" />
                open on github
                <ArrowUpRight className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </Reveal>
      </Section>
    </Page>
  );
}
