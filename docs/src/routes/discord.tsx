import { createFileRoute } from "@tanstack/react-router";
import { Hash } from "lucide-react";
import { ModuleLayout, FeatureGrid } from "@/components/lowkey/ModuleLayout";
import { Section, Eyebrow } from "@/components/lowkey/Page";
import { Reveal, Stagger, StaggerItem } from "@/components/lowkey/Reveal";
import { MODULES } from "@/lib/lowkey";

const M = MODULES.discord;
const TITLE = "Discord — your team's chat, in the same window";
const DESC =
  "Channels, mentions, and slash commands without leaving the editor. Ambient by default. Loud only when it matters.";

export const Route = createFileRoute("/discord")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/discord" },
    ],
    links: [{ rel: "canonical", href: "/discord" }],
  }),
  component: DiscordPage,
});

const CHANNELS = [
  { name: "general", unread: 0 },
  { name: "frontend", unread: 3 },
  { name: "deploys", unread: 12 },
  { name: "design", unread: 0 },
  { name: "ship-it", unread: 1 },
];

function DiscordPage() {
  return (
    <ModuleLayout
      eyebrow="module 04 — discord"
      name={M.name}
      headline={M.headline}
      blurb={M.blurb}
      accent={M.accent}
    >
      {/* Mock chat panel */}
      <Section className="border-b border-border py-20 md:py-28">
        <div className="grid items-start gap-12 md:grid-cols-[1fr_1.3fr]">
          <Reveal variant="fadeUp">
            <Eyebrow>ambient by default</Eyebrow>
            <h2 className="lk-display mt-6 text-4xl md:text-5xl">
              Quiet when you're heads-down. <span className="italic">Loud when it matters.</span>
            </h2>
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              The channel list lives in the corner. Unread counts stay small.
              A mention or a build break gets a single, deliberate pulse —
              never a wall of notifications.
            </p>
          </Reveal>

          <Reveal variant="pixelAttach" delay={0.15}>
            <div className="overflow-hidden border border-border bg-card/40">
              <div className="flex items-center gap-2 border-b border-border bg-black/60 px-4 py-2 lk-mono-caps text-muted-foreground">
                <span style={{ color: M.accent }}>#</span>
                <span>frontend</span>
                <span className="ml-auto">3 unread</span>
              </div>
              <div className="grid grid-cols-[140px_1fr] text-xs">
                <aside className="border-r border-border bg-black/30 p-3 lk-mono">
                  <Stagger as="ul" gap={0.04} className="space-y-1.5">
                    {CHANNELS.map((c) => (
                      <StaggerItem
                        key={c.name}
                        className="group flex items-center justify-between text-muted-foreground hover:text-foreground"
                      >
                        <span className="flex items-center gap-2">
                          <Hash className="h-3 w-3" />
                          {c.name}
                        </span>
                        {c.unread > 0 && (
                          <span
                            className="rounded-full px-1.5 text-[9px] font-medium text-black"
                            style={{ background: M.accent }}
                          >
                            {c.unread}
                          </span>
                        )}
                      </StaggerItem>
                    ))}
                  </Stagger>
                </aside>
                <div className="space-y-3 p-4 lk-mono text-foreground/90">
                  <div>
                    <span style={{ color: M.accent }}>@avaneesh</span> pushed{" "}
                    <code className="text-foreground/70">a8c1f2</code> to main
                  </div>
                  <div>
                    <span className="text-foreground">sam</span> · can you peek at
                    the index reducer?
                  </div>
                  <div>
                    <span className="text-foreground">build</span> ·{" "}
                    <span style={{ color: M.accent }}>passed</span> in 4.21s
                  </div>
                  <div className="mt-4 flex items-center gap-2 border-t border-border pt-3 text-muted-foreground">
                    <span style={{ color: M.accent }}>/</span>
                    <span>reply</span>
                    <span className="lk-cursor" />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Features */}
      <Section className="py-24">
        <Reveal variant="fadeUp">
          <Eyebrow>what it gives you</Eyebrow>
          <h2 className="lk-display mt-6 max-w-3xl text-4xl md:text-5xl italic">
            Chat that respects flow.
          </h2>
        </Reveal>
        <div className="mt-12">
          <FeatureGrid
            items={[
              {
                title: "Reply without context-switching",
                body: "Hit a hotkey, drop a line, get back to your editor. Your fingers never leave the home row.",
              },
              {
                title: "Mentions surface in your peripheral",
                body: "A single soft pulse in the corner. No badge counts climbing into the dozens, no red dot anxiety.",
              },
              {
                title: "Build pings, not noise",
                body: "CI passes, deploys go out, milestones close — the ones you care about show up. The rest stay in the channel.",
              },
              {
                title: "Slash commands, fully wired",
                body: "Run any of your team's slash commands without leaving the chat box. Autocomplete is local and instant.",
              },
            ]}
          />
        </div>
      </Section>
    </ModuleLayout>
  );
}
