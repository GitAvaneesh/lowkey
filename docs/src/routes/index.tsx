import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, Github } from "lucide-react";
import { Page, Section, Eyebrow } from "@/components/lowkey/Page";
import { Reveal, Stagger, StaggerItem } from "@/components/lowkey/Reveal";
import { CursorSpotlight } from "@/components/lowkey/CursorSpotlight";
import { Marquee } from "@/components/lowkey/Marquee";
import { AssetSlot } from "@/components/lowkey/AssetSlot";
import {
  DASH_COLOR_MATRIX,
  GITHUB_URL,
  MODULES,
  SITE_NAME,
  TAGLINE,
} from "@/lib/lowkey";

const TITLE = "Lowkey — Mission control for software engineers";
const DESCRIPTION =
  "A pitch-black, local-first command center for developers. Editor, terminal, AI, live pairing, and chat — one native window. Free and open source.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: SITE_NAME,
          applicationCategory: "DeveloperApplication",
          operatingSystem: "macOS, Windows, Linux",
          description: DESCRIPTION,
          license: "https://opensource.org/licenses/MIT",
          codeRepository: GITHUB_URL,
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
  component: Index,
});

const STOP_DOING = [
  "Stop alt-tabbing between five apps.",
  "Stop pasting code into a browser to ask a question.",
  "Stop hunting through tabs for the right model.",
  "Stop scheduling a call to fix one line.",
  "Stop missing the Discord ping while you're in the zone.",
];

const COMMAND_TICKER = [
  "dash route claude",
  "globe peer attach @sam",
  "colors split right",
  "discord channel #frontend",
  "dash key set openai",
  "globe room ephemeral",
  "colors theme noir",
  "dash route local",
];

function Index() {
  return (
    <Page>
      {/* HERO */}
      <Section className="relative overflow-hidden border-b border-border pb-20 pt-24 md:pb-28 md:pt-36">
        <CursorSpotlight />
        <div className="lk-grid-divider absolute inset-0 opacity-[0.08]" aria-hidden />

        <div className="relative grid items-center gap-12 md:grid-cols-[1.5fr_1fr]">
          <div>
            <Reveal variant="fadeUp">
              <Eyebrow>v0.1 — open source · macos · windows · linux</Eyebrow>
            </Reveal>

            <Reveal variant="pixelAttach" delay={0.1}>
              <h1 className="lk-display mt-8 text-7xl md:text-9xl lg:text-[11rem]">
                {SITE_NAME.toLowerCase()}
                <span className="lk-accent">.</span>
              </h1>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.25}>
              <p className="lk-display mt-6 max-w-2xl text-2xl italic text-foreground/95 md:text-3xl">
                {TAGLINE}
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.35}>
              <p className="mt-6 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base">
                Editor. Terminal. AI. Live pairing. Team chat. Collapsed into a
                single pitch-black window that opens in under a second and stays
                out of your way the rest of the day.
              </p>
            </Reveal>

            <Reveal variant="fadeUp" delay={0.45}>
              <div className="mt-10 flex flex-wrap gap-3">
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="lk-accent-bg lk-mono group inline-flex items-center gap-2 px-5 py-3 text-xs font-medium text-black transition-all hover:gap-3"
                >
                  <Github className="h-4 w-4" />
                  star on github
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
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

          <Reveal variant="zoomIn" delay={0.3} className="relative flex items-center justify-center">
            <div className="lk-accent-border relative border p-10">
              <span className="lk-accent-bg absolute -left-px -top-px h-2 w-2" />
              <span className="lk-accent-bg absolute -right-px -top-px h-2 w-2" />
              <span className="lk-accent-bg absolute -left-px -bottom-px h-2 w-2" />
              <span className="lk-accent-bg absolute -right-px -bottom-px h-2 w-2" />
              <AssetSlot
                src={ASSETS.logoDark}
                alt="Lowkey logo"
                size={240}
              />
            </div>
          </Reveal>
        </div>
      </Section>

      <Marquee items={COMMAND_TICKER} speed={45} />

      {/* STOP DOING */}
      <Section className="border-b border-border py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_2fr]">
          <Reveal variant="fadeUp">
            <Eyebrow>what you stop doing</Eyebrow>
            <h2 className="lk-display mt-6 text-4xl md:text-5xl">
              The window opens.
              <br />
              The friction ends.
            </h2>
          </Reveal>

          <Stagger as="ul" className="space-y-0 border-l border-border" gap={0.08}>
            {STOP_DOING.map((line, i) => (
              <StaggerItem
                key={line}
                as="li"
                className="group flex items-baseline gap-6 border-b border-border py-5 pl-6 transition-colors hover:bg-card/40 last:border-b-0"
              >
                <span className="lk-mono lk-accent text-xs">0{i + 1}</span>
                <span className="text-xl text-foreground md:text-2xl">{line}</span>
                <ArrowUpRight className="ml-auto h-4 w-4 -translate-x-2 text-muted-foreground opacity-0 transition-all group-hover:translate-x-0 group-hover:text-foreground group-hover:opacity-100" />
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* MODULES */}
      <Section className="border-b border-border py-24 md:py-32">
        <Reveal variant="fadeUp">
          <Eyebrow>four modules · one window</Eyebrow>
          <h2 className="lk-display mt-6 max-w-3xl text-4xl md:text-6xl">
            Everything you open all day,
            <br />
            <span className="italic">rebuilt as one tool.</span>
          </h2>
        </Reveal>

        <Stagger as="div" gap={0.08} className="mt-14 grid gap-0 border border-border md:grid-cols-2">
          {(Object.keys(MODULES) as Array<keyof typeof MODULES>).map((key, i) => {
            const m = MODULES[key];
            return (
              <StaggerItem
                key={key}
                variant="pixelAttach"
                className={`lk-tile ${i < 2 ? "md:border-b" : ""} ${
                  i % 2 === 0 ? "md:border-r" : ""
                } border-border`}
              >
                <Link
                  to={m.slug}
                  className="group flex h-full flex-col gap-6 p-8 md:p-10"
                  style={{ ["--page-accent" as never]: m.accent }}
                >
                  <div className="flex items-center justify-between">
                    <div className="lk-mono-caps text-muted-foreground">
                      0{i + 1} — {m.name.toLowerCase()}
                    </div>
                    <span
                      className="h-2 w-2 transition-transform group-hover:scale-150"
                      style={{ background: m.accent }}
                      aria-hidden
                    />
                  </div>

                  <div className="flex items-start gap-5">
                    <AssetSlot src={m.icon} alt={`${m.name} icon`} size={72} />
                    <div>
                      <h3 className="lk-display text-3xl md:text-4xl">
                        {m.name.toLowerCase()}
                      </h3>
                      <p
                        className="mt-1 text-sm md:text-base"
                        style={{ color: m.accent }}
                      >
                        {m.headline}
                      </p>
                    </div>
                  </div>

                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {m.blurb}
                  </p>

                  <div className="lk-mono mt-auto flex items-center gap-2 pt-4 text-xs text-foreground/70 transition-colors group-hover:text-foreground">
                    explore
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                  </div>
                </Link>
              </StaggerItem>
            );
          })}
        </Stagger>
      </Section>

      {/* DASH MATRIX — reframed as a feature */}
      <Section className="border-b border-border py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-[1fr_1.6fr]">
          <Reveal variant="fadeUp">
            <Eyebrow>color = context</Eyebrow>
            <h2 className="lk-display mt-6 text-4xl md:text-5xl">
              You always know which brain is reading your code.
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              The borders, the cursor, the focus ring — all of it shifts the
              instant you switch models. Glance at the corner of your screen and
              you know what you're talking to. No menus, no dropdowns, no doubt.
            </p>
          </Reveal>

          <Stagger as="div" gap={0.04} className="border border-border">
            <div className="lk-mono-caps grid grid-cols-[auto_1fr_2fr] items-center gap-x-6 border-b border-border bg-card/60 px-5 py-3 text-muted-foreground">
              <span>hex</span>
              <span>state</span>
              <span>when</span>
            </div>
            {DASH_COLOR_MATRIX.map((row) => (
              <StaggerItem
                key={row.hex}
                className="group grid grid-cols-[auto_1fr_2fr] items-center gap-x-6 border-b border-border px-5 py-3 text-xs transition-colors last:border-b-0 hover:bg-card/40"
              >
                <div className="flex items-center gap-3">
                  <span
                    className="h-4 w-4 border border-border-strong transition-transform group-hover:scale-110"
                    style={{ background: row.hex }}
                    aria-hidden
                  />
                  <code className="lk-mono text-muted-foreground">{row.hex}</code>
                </div>
                <span className="text-foreground">{row.label}</span>
                <span className="text-muted-foreground">{row.trigger}</span>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </Section>

      {/* CLOSING BAND */}
      <Section className="py-32">
        <Reveal variant="fadeUp">
          <div className="border border-border p-12 md:p-20">
            <Eyebrow>free · forever · yours</Eyebrow>
            <h2 className="lk-display mt-8 text-5xl md:text-7xl">
              No telemetry.
              <br />
              <span className="italic">No account.</span>
              <br />
              <span className="lk-accent">Just the tool.</span>
            </h2>
            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
              Lowkey is free and open source under MIT. Star the repo, file
              issues, send patches — or just download it and get back to work.
            </p>
            <div className="mt-12 flex flex-wrap gap-3">
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
              <Link
                to="/download"
                className="lk-mono inline-flex items-center gap-2 border border-border bg-card/50 px-5 py-3 text-xs text-foreground transition-colors hover:border-foreground"
              >
                download
              </Link>
            </div>
          </div>
        </Reveal>
      </Section>
    </Page>
  );
}
