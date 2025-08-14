import Link from "next/link";

import { Logo, LogoWordmark } from "@/assets/logo";

import { Button } from "../ui/button";
import { NavLinks } from "./ui/nav-links";

export const Navbar = () => {
  return (
    <nav className="-translate-x-1/2 fixed top-1.5 left-1/2 z-999 mx-auto min-w-full sm:top-3 lg:min-w-3xl">
      <div className="flex items-center justify-between rounded-lg border border-white bg-background/80 p-1.5 backdrop-blur-2xl">
        <Link className="flex items-center gap-2" href="/">
          <Logo />
          <LogoWordmark />
        </Link>

        <NavLinks />

        <Button size="lg" variant="primary">
          <Link className="" href="/contact">
            Contact
          </Link>
        </Button>
      </div>
    </nav>
  );
};
