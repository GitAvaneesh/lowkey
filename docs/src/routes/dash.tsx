import { createFileRoute } from "@tanstack/react-router";
import { ModuleLayout, FeatureGrid } from "@/components/lowkey/ModuleLayout";
import { Section, Eyebrow } from "@/components/lowkey/Page";
import { Reveal, Stagger, StaggerItem } from "@/components/lowkey/Reveal";
import { DASH_COLOR_MATRIX, MODULES } from "@/lib/lowkey";

const M = MODULES.dash;
const TITLE = "Dash — one sidebar, every model";
const DESC =
  "Talk to Claude, GPT, Gemini, Grok, or a local model from a single sidebar. Bring your own keys. The room changes color so you always know which brain is on.";

export const Route = createFileRoute("/dash")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:url", content: "/dash" },
    ],
    links: [{ rel: "canonical", href: "/dash" }],
  }),
  component: DashPage,
});

function DashPage() {
  return (
    <ModuleLayout
      eyebrow="module 02 — dash"
      name={M.name}
      headline={M.headline}
      blurb={M.blurb}
      accent={M.accent}
      icon={M.icon}
    >
      {/* Three modes */}
      <Section className="border-b border-border py-20 md:py-28">
        <Reveal variant="fadeUp">
          <Eyebrow>three ways to use it</Eyebrow>
          <h2 className="lk-display mt-6 max-w-3xl text-4xl md:text-5xl">
            Free. <span className="italic">Private.</span> Or with your own keys.
          </h2>
        </Reveal>

        <Stagger as="div" gap={0.08} className="mt-12 grid gap-0 border border-border md:grid-cols-3">
          {[
            {
              tier: "free",
              color: "#F5C842",
              title: "Out of the box",
              body: "Open the app, ask a question. No signup, no card. Good enough for most of the day.",
            },
            {
              tier: "private",
              color: "#EF4444",
              title: "Offline mode",
              body: "Run a local model. Nothing leaves your machine. The whole window snaps red so you can see it.",
            },
            {
              tier: "byok",
              color: "#2563EB",
              title: "Your keys, your bills",
              body: "Paste your Claude, GPT, Gemini or Grok key. Full context, no middleman, no surprise quota.",
            },
          ].map((t, i) => (
            <StaggerItem
              key={t.tier}
              variant="pixelAttach"
              className={`lk-tile p-10 ${i < 2 ? "md:border-r" : ""} border-border`}
            >
              <div className="flex items-center gap-3 lk-mono-caps text-muted-foreground">
                <span className="h-2.5 w-2.5" style={{ background: t.color }} />
                {t.tier}
              </div>
              <h3 className="lk-display mt-4 text-3xl" style={{ color: t.color }}>
                {t.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Color matrix */}
      <Section className="border-b border-border py-20 md:py-28">
        <Reveal variant="fadeUp">
          <Eyebrow>the room reflects the brain</Eyebrow>
          <h2 className="lk-display mt-6 max-w-3xl text-4xl md:text-5xl">
            Glance at the corner. <span className="italic">Know who's reading.</span>
          </h2>
          <p className="mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Every model gets a color. Switch routes and the editor's borders,
            cursor, and focus ring all snap to it. No menus, no doubt.
          </p>
        </Reveal>

        <Stagger as="div" gap={0.04} className="mt-12 border border-border">
          {DASH_COLOR_MATRIX.map((row) => (
            <StaggerItem
              key={row.hex}
              className="group grid grid-cols-[auto_1fr_2fr] items-center gap-x-6 border-b border-border px-6 py-4 text-xs transition-colors last:border-b-0 hover:bg-card/40"
            >
              <div className="flex items-center gap-3">
                <span
                  className="h-5 w-5 border border-border-strong transition-transform group-hover:scale-110"
                  style={{ background: row.hex }}
                />
                <code className="lk-mono text-muted-foreground">{row.hex}</code>
              </div>
              <span className="text-foreground">{row.label}</span>
              <span className="text-muted-foreground">{row.trigger}</span>
            </StaggerItem>
          ))}
        </Stagger>
      </Section>

      {/* Features */}
      <Section className="py-24">
        <Reveal variant="fadeUp">
          <Eyebrow>what it does</Eyebrow>
          <h2 className="lk-display mt-6 max-w-3xl text-4xl md:text-5xl italic">
            All your AI, in one place you already are.
          </h2>
        </Reveal>
        <div className="mt-12">
          <FeatureGrid
            items={[
              {
                title: "Talk about the code you're looking at",
                body: "Highlight a function and ask. Dash sees the selection, the imports, the file — without copy-paste.",
              },
              {
                title: "Your keys, on your machine",
                body: "Keys live in your OS keychain. Never on a server, never logged. Delete the app, delete the keys.",
              },
              {
                title: "Switch brains mid-thought",
                body: "Hot-swap from Claude to GPT to a local model without losing the conversation.",
              },
              {
                title: "Presets that stick",
                body: "Save your favorite prompts as one-key shortcuts. \"Explain this stacktrace.\" \"Write a test for the selection.\"",
              },
            ]}
          />
        </div>
      </Section>
    </ModuleLayout>
  );
}
