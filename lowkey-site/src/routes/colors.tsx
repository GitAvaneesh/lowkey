import { createFileRoute } from "@tanstack/react-router";
import { ModuleLayout, FeatureGrid } from "@/components/lowkey/ModuleLayout";
import { Section, Eyebrow } from "@/components/lowkey/Page";
import { Reveal, Stagger, StaggerItem } from "@/components/lowkey/Reveal";
import { MODULES } from "@/lib/lowkey";

const M = MODULES.colors;
const TITLE = "Colors — the editor that disappears";
const DESC =
  "An editor built around focus. Open huge files instantly, jump to any symbol in one keystroke, and never wait on a terminal again.";

export const Route = createFileRoute("/colors")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/colors" },
    ],
    links: [{ rel: "canonical", href: "/colors" }],
  }),
  component: ColorsPage,
});

const FAKE_EDITOR_LINES = [
  { n: 1, t: "export async function main() {" },
  { n: 2, t: "  const buf = await read(input);" },
  { n: 3, t: "  const ast = parse(buf);" },
  { n: 4, t: "  return ast.children.map(transform);" },
  { n: 5, t: "}" },
];

function ColorsPage() {
  return (
    <ModuleLayout
      eyebrow="module 01 — colors"
      name={M.name}
      headline={M.headline}
      blurb={M.blurb}
      accent={M.accent}
      icon={M.icon}
    >
      {/* Editor mock — soft visual instead of ASCII */}
      <Section className="border-b border-border py-20 md:py-28">
        <Reveal variant="fadeUp">
          <Eyebrow>the workspace</Eyebrow>
          <h2 className="lk-display mt-6 max-w-3xl text-4xl md:text-5xl">
            Folders, files, and the terminal — <span className="italic">one frame.</span>
          </h2>
        </Reveal>

        <Reveal variant="pixelAttach" delay={0.15}>
          <div className="mt-12 overflow-hidden border border-border bg-card/40">
            <div className="flex items-center gap-2 border-b border-border bg-black/60 px-4 py-2 lk-mono-caps text-muted-foreground">
              <span className="h-2.5 w-2.5 rounded-full bg-[#1f1f1f]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#1f1f1f]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#1f1f1f]" />
              <span className="ml-4">main.ts — lowkey</span>
              <span className="ml-auto lk-accent">●</span>
            </div>
            <div className="grid grid-cols-[200px_1fr] text-xs">
              <aside className="border-r border-border bg-black/30 p-4 lk-mono">
                <div className="lk-mono-caps mb-3 text-muted-foreground">explorer</div>
                <ul className="space-y-1 text-muted-foreground">
                  <li>▾ src/</li>
                  <li className="pl-3">▸ components/</li>
                  <li className="pl-3 text-foreground">▾ lib/</li>
                  <li className="lk-accent pl-6">• main.ts</li>
                  <li className="pl-6">parser.ts</li>
                  <li>▸ docs/</li>
                  <li>package.json</li>
                </ul>
              </aside>
              <div className="p-4 lk-mono">
                {FAKE_EDITOR_LINES.map((l) => (
                  <div key={l.n} className="flex gap-4">
                    <span className="w-6 text-right text-muted-foreground">{l.n}</span>
                    <span className="text-foreground/90">{l.t}</span>
                  </div>
                ))}
                <div className="mt-4 border-t border-border pt-3 text-muted-foreground">
                  <span className="lk-accent">$</span> cargo build --release{" "}
                  <span className="lk-cursor" />
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      {/* Why it's fast — feature list */}
      <Section className="border-b border-border py-20 md:py-28">
        <Reveal variant="fadeUp">
          <Eyebrow>why it feels different</Eyebrow>
          <h2 className="lk-display mt-6 max-w-3xl text-4xl md:text-5xl">
            Built for the files that crash other editors.
          </h2>
        </Reveal>

        <div className="mt-12">
          <FeatureGrid
            items={[
              {
                title: "Open a 50k-line file in a blink",
                body: "No loading bar. No skeleton screen. The file is on screen before your finger leaves the trackpad.",
              },
              {
                title: "Jump anywhere, one keystroke",
                body: "Command palette, fuzzy search, go-to-symbol — all wired to the same hotkey muscle memory you already have.",
              },
              {
                title: "A terminal that doesn't stutter",
                body: "Run Docker, watchers, compilers. The UI never freezes. The cursor never lags.",
              },
              {
                title: "A theme made for the 2am session",
                body: "Pitch black. Carefully chosen syntax colors. Nothing burns your retinas at the end of a long night.",
              },
              {
                title: "Git, baked in",
                body: "Stage, commit, push, and review diffs without opening a separate app. Live status sits in the gutter.",
              },
              {
                title: "Preview anything",
                body: "Markdown, images, SVGs, JSON, even hex — all open inline without crashing on big blobs.",
              },
            ]}
          />
        </div>
      </Section>

      {/* Hotkeys mini-spec */}
      <Section className="py-24">
        <Reveal variant="fadeUp">
          <Eyebrow>your hands stay on the keyboard</Eyebrow>
          <h2 className="lk-display mt-6 max-w-3xl text-4xl md:text-5xl italic">
            Mouse optional.
          </h2>
        </Reveal>
        <Stagger as="ul" gap={0.04} className="mt-10 grid gap-px border border-border bg-border md:grid-cols-2">
          {[
            ["⌘ K", "Command palette"],
            ["⌘ P", "Jump to file"],
            ["⌘ ⇧ O", "Jump to symbol"],
            ["⌘ /", "Toggle terminal"],
            ["⌘ J", "Ask Dash"],
            ["⌘ G", "Open a Globe room"],
          ].map(([k, v]) => (
            <StaggerItem
              key={k}
              className="flex items-center justify-between bg-background px-6 py-5"
            >
              <kbd className="lk-mono lk-accent text-sm">{k}</kbd>
              <span className="text-sm text-muted-foreground">{v}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>
    </ModuleLayout>
  );
}
