"use client";

import { cn } from "@/lib/utils";
import { VariableFontHover } from "@/components/ui/variable-font-hover";

type NavLink = {
  emphasis?: boolean;
  href: string;
  label: string;
};

type VariableFontHoverNavProps = {
  className?: string;
  links?: NavLink[];
  onNavigate?: () => void;
};

const defaultNavLinks: NavLink[] = [
  { label: "Academy", href: "#academy" },
  { label: "Shop", href: "#shop" },
  { label: "Rent", href: "#rent" },
  { label: "Enroll Now", href: "#contact", emphasis: true },
];

export default function VariableFontHoverNav({
  className,
  links = defaultNavLinks,
  onNavigate,
}: VariableFontHoverNavProps) {
  return (
    <nav className={cn("site-variable-nav", className)} aria-label="Primary navigation">
      {links.map((link) => (
        <a
          className={cn("site-variable-nav__link", link.emphasis && "is-emphasis")}
          href={link.href}
          key={link.label}
          onClick={onNavigate}
        >
          <VariableFontHover
            fromFontVariationSettings="'wght' 500"
            label={link.label}
            staggerDuration={0.025}
            staggerFrom="center"
            toFontVariationSettings="'wght' 780"
          />
        </a>
      ))}
    </nav>
  );
}
