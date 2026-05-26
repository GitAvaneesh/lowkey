"use client";
import { useEffect, useRef } from "react";

interface Props {
  className?: string;
  color?: string;
  size?: number;
}

export function CursorSpotlight({
  className = "",
  color = "rgba(245, 200, 66, 0.10)",
  size = 520,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: PointerEvent) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      el.style.setProperty("--lk-mx", `${x}px`);
      el.style.setProperty("--lk-my", `${y}px`);
    };
    el.addEventListener("pointermove", onMove);
    return () => el.removeEventListener("pointermove", onMove);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className}`}
      style={{
        background: `radial-gradient(${size}px circle at var(--lk-mx, 50%) var(--lk-my, 30%), ${color}, transparent 65%)`,
        transition: "background 0.15s linear",
      }}
    />
  );
}
