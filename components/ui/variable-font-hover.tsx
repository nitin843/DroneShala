"use client";

import { cn } from "@/lib/utils";
import { useMemo, useState } from "react";

type StaggerFrom = "start" | "center" | "end" | "random";

type VariableFontHoverProps = {
  className?: string;
  fromFontVariationSettings?: string;
  label: string;
  staggerDuration?: number;
  staggerFrom?: StaggerFrom;
  toFontVariationSettings?: string;
};

function getDistance(index: number, length: number, staggerFrom: StaggerFrom) {
  if (staggerFrom === "end") return length - index - 1;
  if (staggerFrom === "center") return Math.abs(index - (length - 1) / 2);
  if (staggerFrom === "random") return Math.abs(Math.sin(index * 12.9898) * length);
  return index;
}

export function VariableFontHover({
  className,
  fromFontVariationSettings = "'wght' 400",
  label,
  staggerDuration = 0.03,
  staggerFrom = "start",
  toFontVariationSettings = "'wght' 700",
}: VariableFontHoverProps) {
  const [hovered, setHovered] = useState(false);
  const letters = useMemo(() => Array.from(label), [label]);

  return (
    <span
      aria-label={label}
      className={cn("inline-flex items-center whitespace-nowrap", className)}
      data-hovered={hovered ? "true" : "false"}
      data-variable-font-hover=""
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {letters.map((letter, index) => (
        <span
          aria-hidden="true"
          className="inline-block transition-[font-variation-settings,color,transform] duration-300 ease-out"
          key={`${letter}-${index}`}
          style={{
            fontVariationSettings: hovered ? toFontVariationSettings : fromFontVariationSettings,
            transform: hovered ? "translateY(-2px)" : "translateY(0)",
            transitionDelay: `${getDistance(index, letters.length, staggerFrom) * staggerDuration}s`,
          }}
        >
          {letter === " " ? "\u00A0" : letter}
        </span>
      ))}
    </span>
  );
}
