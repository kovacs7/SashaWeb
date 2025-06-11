"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Render static version during SSR to prevent hydration mismatch
  if (!mounted) {
    return (
      <button
        className="relative w-10 h-10 flex flex-col justify-center items-center z-[70] md:hidden"
        aria-label="Toggle menu"
        disabled
      >
        <span className="block absolute h-0.5 w-6 bg-[#FB930Bff] rounded -translate-y-2" />
        <span className="block absolute h-0.5 w-6 bg-[#FB930Bff] rounded opacity-100" />
        <span className="block absolute h-0.5 w-6 bg-[#FB930Bff] rounded translate-y-2" />
      </button>
    );
  }

  return (
    <>
      {/* Hamburger Icon */}
      <button
        className="relative w-10 h-10 flex flex-col justify-center items-center z-[70] md:hidden"
        aria-label="Toggle menu"
        onClick={() => setOpen(!open)}
      >
        <span
          className={`block absolute h-0.5 w-6 bg-[#FB930Bff] rounded transition-all duration-300 ease-in-out ${
            open ? "rotate-45 translate-y-0" : "-translate-y-2"
          }`}
        />
        <span
          className={`block absolute h-0.5 w-6 bg-[#FB930Bff] rounded transition-all duration-300 ease-in-out ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <span
          className={`block absolute h-0.5 w-6 bg-[#FB930Bff] rounded transition-all duration-300 ease-in-out ${
            open ? "-rotate-45 translate-y-0" : "translate-y-2"
          }`}
        />
      </button>

      {/* Backdrop Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Dropdown Menu */}
      <nav
        className={`fixed top-0 right-0 w-80 max-w-[85vw] h-screen bg-white dark:bg-gray-900 shadow-2xl z-[65] transform transition-transform duration-300 ease-in-out md:hidden overflow-hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex-shrink-0">
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            Menu
          </span>
        </div>

        {/* Menu Items Container */}
        <div className="flex-1 overflow-y-auto bg-white dark:bg-gray-900">
          <ul className="flex flex-col py-6">
            <li>
              <Link
                href="#features"
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#FB930Bff] transition-colors font-medium"
              >
                Features
              </Link>
            </li>
            <li>
              <Link
                href="#how-it-works"
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#FB930Bff] transition-colors font-medium"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                href="#use-cases"
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#FB930Bff] transition-colors font-medium"
              >
                Use Cases
              </Link>
            </li>
            <li>
              <Link
                href="#about"
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#FB930Bff] transition-colors font-medium"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                href="#contact"
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#FB930Bff] transition-colors font-medium"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
