import { createFileRoute } from "@tanstack/react-router";
import { ArrowUpRight, Github, GitFork, Star, Scale, Code2 } from "lucide-react";
import { Page, Section, Eyebrow } from "@/components/lowkey/Page";
import { Reveal, Stagger, StaggerItem } from "@/components/lowkey/Reveal";
import { GITHUB_URL } from "@/lib/lowkey";

const TITLE = "Open source — Lowkey is built in the open";
const DESC =
  "Lowkey is MIT-licensed and developed entirely on GitHub. Read it, fork it, ship it.";

export const Route = createFileRoute("/open-source")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/open-source" },
    ],
    links: [{ rel: "canonical", href: "/open-source" }],
  }),
  component: OssPage,
});

function OssPage() {
  return (
    <Page>
      <Section className="border-b border-border py-24 md:py-32">
        <Reveal variant="fadeUp">
          <Eyebrow>open source · mit</Eyebrow>
        </Reveal>
        <Reveal variant="pixelAttach" delay={0.1}>
          <h1 className="lk-display mt-6 max-w-4xl text-6xl md:text-8xl">
            Read the code.
            <br />
            <span className="italic">Send a patch.</span>
          </h1>
        </Reveal>
        <Reveal variant="fadeUp" delay={0.25}>
          <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
            No closed core. No premium tier. No telemetry. Lowkey is built in
            the open on GitHub under the MIT license — fork it, ship it, sell
            it. We just ask you credit the project.
          </p>
        </Reveal>
        <Reveal variant="fadeUp" delay={0.35}>
          <div className="mt-10">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noreferrer noopener"
              className="lk-accent-bg lk-mono inline-flex items-center gap-2 px-5 py-3 text-xs font-medium text-black transition-opacity hover:opacity-90"
            >
              <Github className="h-4 w-4" />
              github.com/GitAvaneesh/lowkey
              <ArrowUpRight className="h-3.5 w-3.5" />
            </a>
          </div>
        </Reveal>
      </Section>

      <Section className="border-b border-border py-16">
        <Stagger as="div" gap={0.06} className="grid gap-0 border border-border md:grid-cols-4">
          {[
            { icon: Scale, label: "License", value: "MIT" },
            { icon: Code2, label: "Stack", value: "Rust + TS" },
            { icon: Star, label: "Repo", value: "GitAvaneesh/lowkey" },
            { icon: GitFork, label: "Forks", value: "always welcome" },
          ].map((s, i) => (
            <StaggerItem
              key={s.label}
              variant="pixelAttach"
              className={`p-8 ${i < 3 ? "md:border-r" : ""} border-border`}
            >
              <s.icon className="h-5 w-5 text-foreground/70" />
              <div className="lk-mono-caps mt-4 text-muted-foreground">{s.label}</div>
              <div className="mt-1 text-lg font-semibold">{s.value}</div>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="border-b border-border py-20 md:py-28">
        <Reveal variant="fadeUp">
          <Eyebrow>how to help</Eyebrow>
          <h2 className="lk-display mt-6 max-w-3xl text-4xl md:text-5xl italic">
            Pick a thread. Pull it.
          </h2>
        </Reveal>

        <Stagger as="div" gap={0.08} className="mt-12 grid gap-0 border border-border md:grid-cols-3">
          {[
            {
              title: "File an issue",
              body: "Bugs, ideas, design feedback — drop them on the tracker.",
              cta: "Open issues",
              href: `${GITHUB_URL}/issues`,
            },
            {
              title: "Send a PR",
              body: "Pick anything tagged good-first-issue. The bar is lower than you think.",
              cta: "Pull requests",
              href: `${GITHUB_URL}/pulls`,
            },
            {
              title: "Star the repo",
              body: "It costs nothing and helps more people find Lowkey.",
              cta: "Repo",
              href: GITHUB_URL,
            },
          ].map((c, i) => (
            <StaggerItem
              key={c.title}
              variant="pixelAttach"
              className={`lk-tile ${i < 2 ? "md:border-r" : ""} border-border`}
            >
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex h-full flex-col gap-5 p-10"
              >
                <h3 className="lk-display text-3xl">{c.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                <div className="lk-mono lk-accent mt-auto flex items-center gap-2 pt-4 text-xs">
                  {c.cta}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </div>
              </a>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      <Section className="py-24">
        <Reveal variant="fadeUp">
          <div className="border border-border p-12 md:p-16">
            <Eyebrow>built on</Eyebrow>
            <h2 className="lk-display mt-6 text-4xl md:text-6xl">
              Rust at the core. <span className="italic">TypeScript at the surface.</span>
            </h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              The systems layer is Rust + Tauri so the app stays fast and
              tiny. The interface is TypeScript so it stays easy to hack on.
              That's the whole stack.
            </p>
          </div>
        </Reveal>
      </Section>
    </Page>
  );
}
