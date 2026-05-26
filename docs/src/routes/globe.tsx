import { createFileRoute } from "@tanstack/react-router";
import { ModuleLayout, FeatureGrid } from "@/components/lowkey/ModuleLayout";
import { Section, Eyebrow } from "@/components/lowkey/Page";
import { Reveal } from "@/components/lowkey/Reveal";
import { MODULES } from "@/lib/lowkey";

const M = MODULES.globe;
const TITLE = "Globe — pair without a Zoom call";
const DESC =
  "Drop a friend into your editor. See their cursor. Hear their voice. Close the room and it's gone — nothing stored, nothing logged.";

export const Route = createFileRoute("/globe")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/globe" },
    ],
    links: [{ rel: "canonical", href: "/globe" }],
  }),
  component: GlobePage,
});

function GlobePage() {
  return (
    <ModuleLayout
      eyebrow="module 03 — globe"
      name={M.name}
      headline={M.headline}
      blurb={M.blurb}
      accent={M.accent}
      icon={M.icon}
    >
      {/* Soft visual — two cursors on a code surface */}
      <Section className="border-b border-border py-20 md:py-28">
        <Reveal variant="fadeUp">
          <Eyebrow>live pairing</Eyebrow>
          <h2 className="lk-display mt-6 max-w-3xl text-4xl md:text-5xl">
            Two people, one file, <span className="italic">no screen share.</span>
          </h2>
        </Reveal>

        <Reveal variant="pixelAttach" delay={0.15}>
          <div className="mt-12 overflow-hidden border border-border bg-card/40">
            <div className="flex items-center justify-between border-b border-border bg-black/60 px-4 py-2 lk-mono-caps text-muted-foreground">
              <span>room · ephemeral · 2 connected</span>
              <span className="lk-accent flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--page-accent)]" />
                28ms
              </span>
            </div>
            <div className="relative p-8 lk-mono text-sm">
              <div className="space-y-2 text-foreground/90">
                <div>
                  <span className="text-muted-foreground">12</span>{" "}
                  <span>function buildIndex(items) {"{"}</span>
                </div>
                <div className="relative">
                  <span className="text-muted-foreground">13</span>{" "}
                  <span>{"  return items.reduce((acc, it) => {"}</span>
                  <span className="absolute -top-5 left-[180px] rounded-sm bg-[var(--page-accent)] px-2 py-0.5 text-[10px] font-medium text-black">
                    sam
                  </span>
                  <span className="absolute left-[178px] top-0 h-5 w-px bg-[var(--page-accent)]" />
                </div>
                <div className="relative">
                  <span className="text-muted-foreground">14</span>{" "}
                  <span>    acc[it.id] = it;</span>
                  <span className="absolute -top-5 left-[120px] rounded-sm bg-[#5865F2] px-2 py-0.5 text-[10px] font-medium text-white">
                    you
                  </span>
                  <span className="absolute left-[118px] top-0 h-5 w-px bg-[#5865F2]" />
                </div>
                <div>
                  <span className="text-muted-foreground">15</span>{" "}
                  <span>    return acc;</span>
                </div>
                <div>
                  <span className="text-muted-foreground">16</span>{" "}
                  <span>  {"}"}, {"{}"});</span>
                </div>
                <div>
                  <span className="text-muted-foreground">17</span>{" "}
                  <span>{"}"}</span>
                </div>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-[var(--page-accent)]" /> sam · talking
                <span className="ml-4 h-2 w-2 rounded-full bg-[#5865F2]" /> you · muted
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Features — user-outcome focused */}
      <Section className="border-b border-border py-20 md:py-28">
        <Reveal variant="fadeUp">
          <Eyebrow>what it gives you</Eyebrow>
          <h2 className="lk-display mt-6 max-w-3xl text-4xl md:text-5xl italic">
            Pair like you're sitting at the same desk.
          </h2>
        </Reveal>
        <div className="mt-12">
          <FeatureGrid
            items={[
              {
                title: "See their cursor",
                body: "Live cursors, live selections, live edits. The other person's name floats above the line they're touching.",
              },
              {
                title: "Hear their voice",
                body: "Voice chat built into the room. No tab to find, no link to send. Push to talk or always-on.",
              },
              {
                title: "Ephemeral by default",
                body: "Close the room and everything is gone. No logs, no recordings, no \"this meeting is being summarized.\"",
              },
              {
                title: "Comment on a line",
                body: "Right-click any line to start a thread. Conversations sit next to the code they're about, not in a Slack DM you'll never find.",
              },
              {
                title: "Share for ten seconds",
                body: "Send a link. They open it. You're paired. No screen share, no \"can you see my screen?\"",
              },
              {
                title: "It just feels close",
                body: "Latency under a fingertip. No frame drops. No video overlay covering the code you're trying to read.",
              },
            ]}
          />
        </div>
      </Section>
    </ModuleLayout>
  );
}
