import { GITHUB_URL, SITE_NAME } from "@/lib/lowkey";

export function Footer() {
  return (
    <footer className="mt-32 border-t border-border">
      <div className="mx-auto flex max-w-[1400px] flex-col items-start justify-between gap-3 px-4 py-8 text-[10px] uppercase tracking-[0.22em] text-muted-foreground sm:flex-row sm:items-center sm:px-6">
        <div className="flex items-center gap-3">
          <span className="lk-accent-bg h-1.5 w-1.5" />
          <span>{SITE_NAME.toLowerCase()} — built in the open</span>
        </div>
        <div className="flex items-center gap-5">
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-foreground"
          >
            github.com/GitAvaneesh/lowkey
          </a>
          <span>mit</span>
          <span>© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}
