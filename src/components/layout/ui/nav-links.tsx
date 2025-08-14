"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { motion } from "motion/react";

import { NAV_LINKS } from "@/data/constant";
import { cn } from "@/lib/utils";

export const NavLinks = () => {
  const pathname = usePathname();

  return (
    <ul className="flex shrink-0 items-center gap-2">
      {NAV_LINKS.map((link) => {
        const isActive = pathname.startsWith(link.href);

        return (
          <li className="relative" key={link.id}>
            <Link
              className={cn(
                "relative z-10 block shrink-0 px-3 py-2 font-medium text-foreground/70 text-sm transition-colors hover:text-foreground",
                isActive && "text-foreground"
              )}
              href={link.href}
            >
              <span className="relative z-10">{link.label}</span>
              {isActive && (
                <motion.span
                  className="absolute inset-0 z-0 rounded-md bg-card/80 shadow-md shadow-primary-background/5"
                  layoutId="pill-tab"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};
