import { useEffect, useState } from "react";
import { navLinks, profile } from "../data";
import Button from "./Button";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Stop the page from scrolling behind the open menu
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className="sticky top-0 z-40 bg-paper/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-4 md:px-8">
          {/* Logo */}
          <a
            href="#home"
            className="-rotate-2 rounded-[48%_52%_45%_55%/60%_50%_55%_45%] bg-deep px-5 py-3 font-display text-sm font-semibold text-peach"
          >
            {profile.name}
          </a>

          {/* Desktop links */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-10 font-bold text-deep">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="transition hover:text-teal">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden md:block">
            <Button href="#contact">Hire Me</Button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
            className="flex flex-col gap-1.5 p-2 md:hidden"
          >
            <span className="block h-[3px] w-8 rounded bg-deep" />
            <span className="block h-[3px] w-5 rounded bg-deep" />
          </button>
        </div>
      </header>

      {/* Mobile menu, outside the header so it covers the whole screen */}
      {open && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-deep md:hidden">
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="absolute right-5 top-4 text-3xl leading-none text-peach"
          >
            ×
          </button>

          <nav>
            <ul className="flex flex-col items-center gap-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-xl font-semibold text-peach"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="tape mt-2 inline-flex h-10 items-center rounded-xl bg-tangerine px-5 font-display text-sm font-semibold text-deep"
          >
            Hire Me
          </a>
        </div>
      )}
    </>
  );
}
