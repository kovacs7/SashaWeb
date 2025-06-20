"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // ... (rest of your useEffect logic remains the same)

  if (!mounted) {
    return (
      <button
        className="relative w-10 h-10 flex flex-col justify-center items-center z-[70] md:hidden"
        aria-label="Toggle menu"
        disabled
      >
        {/* CHANGED: bg-primary instead of hardcoded color */}
        <span className="block absolute h-0.5 w-6 bg-primary rounded -translate-y-2" />
        <span className="block absolute h-0.5 w-6 bg-primary rounded opacity-100" />
        <span className="block absolute h-0.5 w-6 bg-primary rounded translate-y-2" />
      </button>
    );
  }

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="w-10 h-10 flex flex-col justify-center items-center z-[90] md:hidden fixed top-4 right-4"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          top: "1rem",
          right: "1rem",
        }}
      >
        {/* CHANGED: All lines use bg-primary */}
        <span
          className={`block absolute h-0.5 w-6 bg-primary rounded transition-all duration-300 ease-in-out ${
            open ? "rotate-45 translate-y-0" : "-translate-y-2"
          }`}
        />
        <span
          className={`block absolute h-0.5 w-6 bg-primary rounded transition-all duration-300 ease-in-out ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block absolute h-0.5 w-6 bg-primary rounded transition-all duration-300 ease-in-out ${
            open ? "-rotate-45 translate-y-0" : "translate-y-2"
          }`}
        />
      </button>

      {/* ... (rest of your component remains the same) */}

      {/* Dropdown Menu */}
      <nav
        className={`fixed top-0 right-0 w-80 max-w-[85vw] h-screen bg-white dark:bg-card shadow-2xl z-[85] transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{ /* ... */ }}
      >
        {/* ... */}

        {/* Menu Items Container */}
        <div className="flex-1 bg-white dark:bg-card" style={{ /* ... */ }}>
          <ul className="flex flex-col py-6">
            <li>
              <Link
                href="#features"
                onClick={() => setOpen(false)}
                // CHANGED: hover:text-primary instead of hardcoded color
                className="block px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-primary transition-colors font-medium"
              >
                Features
              </Link>
            </li>
            {/* REPEAT THE SAME CHANGE FOR ALL MENU ITEMS: */}
            {/* Change hover:text-[#FB930Bff] to hover:text-primary */}
            <li>{/* ... */}</li>
            <li>{/* ... */}</li>
            <li>{/* ... */}</li>
            <li>{/* ... */}</li>
          </ul>
        </div>
      </nav>
    </>
  );
}
