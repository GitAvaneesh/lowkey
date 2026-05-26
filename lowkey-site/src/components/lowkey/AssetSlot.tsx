interface AssetSlotProps {
  src?: string;
  alt: string;
  size?: number;
  className?: string;
}

export function AssetSlot({ src, alt, size = 64, className = "" }: AssetSlotProps) {
  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        width={size}
        height={size}
        loading="lazy"
        className={`object-contain ${className}`}
        style={{ width: size, height: size }}
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative grid place-items-center border border-border-strong bg-card text-[9px] uppercase tracking-[0.2em] text-muted-foreground ${className}`}
      style={{ width: size, height: size }}
    >
      <span className="lk-accent-bg absolute left-0 top-0 h-px w-3" aria-hidden />
      <span className="lk-accent-bg absolute bottom-0 right-0 h-px w-3" aria-hidden />
      <span>asset</span>
    </div>
  );
}
