import type { Variants, Transition } from "motion/react";

const EASE: Transition["ease"] = [0.22, 1, 0.36, 1];

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.4, ease: EASE } },
};

export const zoomIn: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

// Pixel attach: clip-path mosaic that "snaps" inward.
// We animate clip-path between two polygons to fake a pixelated reveal,
// combined with opacity + a 1-frame border flash via CSS class.
export const pixelAttach: Variants = {
  hidden: {
    opacity: 0,
    clipPath: "inset(8% 8% 8% 8%)",
    filter: "blur(2px)",
  },
  show: {
    opacity: 1,
    clipPath: "inset(0% 0% 0% 0%)",
    filter: "blur(0px)",
    transition: { duration: 0.65, ease: EASE },
  },
  exit: {
    opacity: 0,
    clipPath: "inset(8% 8% 8% 8%)",
    filter: "blur(2px)",
    transition: { duration: 0.35, ease: EASE },
  },
};

export const stagger = (gap = 0.06, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: gap, delayChildren: delay },
  },
});

export const slideRight: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5, ease: EASE } },
};
