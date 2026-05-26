"use client";
import type { ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "motion/react";
import { fadeUp, fadeIn, zoomIn, pixelAttach, stagger } from "@/lib/motion";

type Variant = "fadeUp" | "fadeIn" | "zoomIn" | "pixelAttach";

const map: Record<Variant, Variants> = {
  fadeUp,
  fadeIn,
  zoomIn,
  pixelAttach,
};

interface RevealProps {
  children: ReactNode;
  variant?: Variant;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "li" | "span" | "article" | "h1" | "h2" | "h3" | "p";
  once?: boolean;
  amount?: number;
}

export function Reveal({
  children,
  variant = "fadeUp",
  delay = 0,
  className = "",
  as = "div",
  once = true,
  amount = 0.2,
}: RevealProps) {
  const reduce = useReducedMotion();
  const variants = reduce ? fadeIn : map[variant];
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once, amount }}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerProps {
  children: ReactNode;
  gap?: number;
  delay?: number;
  className?: string;
  amount?: number;
  as?: "div" | "ul" | "ol" | "section";
}

export function Stagger({
  children,
  gap = 0.06,
  delay = 0,
  className = "",
  amount = 0.2,
  as = "div",
}: StaggerProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag
      className={className}
      variants={reduce ? fadeIn : stagger(gap, delay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount }}
    >
      {children}
    </MotionTag>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  as?: "div" | "li" | "span" | "article" | "p" | "tr";
}

export function StaggerItem({
  children,
  variant = "fadeUp",
  className = "",
  as = "div",
}: StaggerItemProps) {
  const reduce = useReducedMotion();
  const MotionTag = motion[as] as typeof motion.div;
  return (
    <MotionTag className={className} variants={reduce ? fadeIn : map[variant]}>
      {children}
    </MotionTag>
  );
}
