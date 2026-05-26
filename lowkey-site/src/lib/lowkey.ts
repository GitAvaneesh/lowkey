// Asset resolution: glob so missing user files don't break the build.
// Drop your PNGs or SVGs into src/assets/ with these exact names and they appear automatically.
const assetModules = import.meta.glob("../assets/*.{png,svg}", {
  eager: true,
  query: "?url",
  import: "default",
}) as Record<string, string>;

function asset(name: string): string | undefined {
  // Try PNG first, then SVG
  return assetModules[`../assets/${name}.png`] || assetModules[`../assets/${name}.svg`];
}

export const GITHUB_URL = "https://github.com/GitAvaneesh/lowkey";
export const SITE_NAME = "Lowkey";
export const TAGLINE = "Mission control for software engineers.";

export const ASSETS = {
  logoDark: asset("logo_dark"),
  logoLight: asset("logo_light"),
  colorsDark: asset("colors_dark"),
  colorsLight: asset("colors_light"),
  dashDark: asset("dashai_dark") || asset("dash_dark"),
  dashLight: asset("dashai_light") || asset("dash_light"),
  globeDark: asset("globe_dark"),
  globeLight: asset("globe_light"),
  discord: asset("discord"),
};

export type ModuleKey = "colors" | "dash" | "globe" | "discord";

export const MODULES: Record<
  ModuleKey,
  {
    slug: string;
    name: string;
    headline: string;
    blurb: string;
    accent: string;
    icon?: string;
  }
> = {
  colors: {
    slug: "/colors",
    name: "Colors",
    headline: "An editor that disappears.",
    blurb:
      "Open a 50k-line file. Jump to any symbol in one keystroke. A terminal that never stutters. A theme that doesn't burn your eyes at 2am.",
    accent: "#F5C842",
    icon: ASSETS.colorsDark,
  },
  dash: {
    slug: "/dash",
    name: "Dash",
    headline: "One sidebar. Every model.",
    blurb:
      "Free out of the box. Bring your own keys for Claude, GPT, Gemini, Grok. The whole window shifts color so you always know which brain is reading your code.",
    accent: "#F5C842",
    icon: ASSETS.dashDark,
  },
  globe: {
    slug: "/globe",
    name: "Globe",
    headline: "Pair without a Zoom call.",
    blurb:
      "Drop a friend into your editor. See their cursor. Hear their voice. Close the room and it's gone — nothing stored, nothing logged.",
    accent: "#0D9488",
    icon: ASSETS.globeDark,
  },
  discord: {
    slug: "/discord",
    name: "Discord",
    headline: "Your team's chat, right next to your code.",
    blurb:
      "Channels, mentions, and slash commands without leaving the keyboard. The notification dot lives in the corner of your editor — not on a tab in a browser you closed three hours ago.",
    accent: "#5865F2",
    icon: ASSETS.discord,
  },
};

export const DASH_COLOR_MATRIX: Array<{
  hex: string;
  label: string;
  trigger: string;
}> = [
  { hex: "#F5C842", label: "Standard Yellow", trigger: "Dash base — free, always on" },
  { hex: "#EF4444", label: "Stark Red", trigger: "Local model — offline, private" },
  { hex: "#D97706", label: "Amber Orange", trigger: "Claude — your Anthropic key" },
  { hex: "#2563EB", label: "Electric Blue", trigger: "Gemini — your Google key" },
  { hex: "#1E293B", label: "Deep Slate", trigger: "GPT — your OpenAI key" },
  { hex: "#FFFFFF", label: "Stark White", trigger: "Grok — your xAI key" },
  { hex: "#0D9488", label: "Minimal Cyan", trigger: "Perplexity — your research key" },
  { hex: "#1D4ED8", label: "Midnight Blue", trigger: "Llama — Meta API" },
  { hex: "#EAB308", label: "Custom Yellow", trigger: "Custom endpoint — your proxy" },
];

export const NAV_LINKS = [
  { to: "/colors", label: "Colors" },
  { to: "/dash", label: "Dash" },
  { to: "/globe", label: "Globe" },
  { to: "/discord", label: "Discord" },
  { to: "/download", label: "Download" },
  { to: "/open-source", label: "Open Source" },
] as const;
