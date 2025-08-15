"use client";

import Link from "next/link";

import { Logo, LogoWordmark } from "@/assets/logo";

import { useMobileMenu } from "@/hooks/use-mobile-menu";

import { Button } from "../ui/button";
import { NavLinks } from "./ui/nav-links";

export const Navbar = () => {
  const { isOpen: isMobileMenuOpen, toggle: toggleMobileMenu, close: closeMobileMenu } = useMobileMenu();

  return (
    <header className="-translate-x-1/2 fixed top-1.5 left-1/2 z-999 mx-auto min-w-full sm:top-3 lg:min-w-3xl">
      <nav
        aria-label="Main navigation"
        className="rounded-[calc(var(--radius)+var(--spacing)_*_1)] border-card border-b bg-background/80 p-1 shadow-primary-foreground/10 shadow-xl backdrop-blur-2xl"
        role="navigation"
      >
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex-shrink-0">
            <Link
              aria-label="Direct Logic Systems - Home"
              className="flex items-center gap-2 rounded-md transition-opacity hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              href="/"
            >
              <Logo />
              <LogoWordmark />
            </Link>
          </div>

          {/* Desktop Navigation */}

          <NavLinks />

          <Button asChild className="hidden md:inline-flex" size="lg" variant="primary">
            <Link aria-label="Contact us" href="/contact">
              Contact
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
              aria-label="Toggle mobile menu"
              className="inline-flex items-center justify-center rounded-md p-2 text-foreground transition-colors hover:bg-background/80 hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset"
              onClick={toggleMobileMenu}
              type="button"
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger Icon */}
              <svg
                aria-hidden="true"
                className={`${isMobileMenuOpen ? "hidden" : "block"} h-6 w-6`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
              {/* Close Icon */}
              <svg
                aria-hidden="true"
                className={`${isMobileMenuOpen ? "block" : "hidden"} h-6 w-6`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M6 18L18 6M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          aria-label="Mobile navigation menu"
          className={`${isMobileMenuOpen ? "block" : "hidden"} md:hidden`}
          id="mobile-menu"
          role="menu"
        >
          <div className="space-y-1 rounded-lg border border-border bg-background/95 px-2 pt-2 pb-3 shadow-lg backdrop-blur-xl">
            <div className="flex flex-col space-y-2">
              <NavLinks mobile />
            </div>
            <div className="border-border border-t pt-4">
              <Button asChild className="w-full justify-center" size="lg" variant="primary">
                <Link aria-label="Contact us" href="/contact" onClick={closeMobileMenu}>
                  Contact
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
