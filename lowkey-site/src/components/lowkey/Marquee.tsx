interface MarqueeProps {
  items: string[];
  speed?: number; // seconds per loop
  className?: string;
}

export function Marquee({ items, speed = 35, className = "" }: MarqueeProps) {
  const doubled = [...items, ...items];
  return (
    <div
      className={`group relative overflow-hidden border-y border-border bg-black/40 ${className}`}
      aria-hidden
    >
      <div
        className="flex w-max gap-12 whitespace-nowrap py-3 [animation:lk-marquee_var(--lk-speed)_linear_infinite] group-hover:[animation-play-state:paused]"
        style={{ ["--lk-speed" as never]: `${speed}s` }}
      >
        {doubled.map((t, i) => (
          <span
            key={i}
            className="lk-mono-caps flex items-center gap-3 text-muted-foreground"
          >
            <span className="lk-accent-bg h-1 w-1" />
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}
