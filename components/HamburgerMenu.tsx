"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function HamburgerMenu() {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent body scroll when menu is open and maintain scroll position
  useEffect(() => {
    if (open) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || "0") * -1);
      }
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [open]);

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
      {/* Hamburger Icon - Always visible, fixed positioning */}
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
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[80] md:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Dropdown Menu */}
      <nav
        className={`fixed top-0 right-0 w-80 max-w-[85vw] h-screen bg-white dark:bg-gray-900 shadow-2xl z-[85] transition-transform duration-300 ease-in-out md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        style={{
          position: "fixed",
          top: 0,
          right: 0,
          height: "100vh",
          overflowY: "auto",
          overflowX: "hidden",
        }}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 flex-shrink-0 sticky top-0">
          <span className="text-lg font-semibold text-gray-900 dark:text-white">
            Menu
          </span>
          {/* <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-5 h-5 text-gray-500 dark:text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button> */}
        </div>

        {/* Menu Items Container */}
        <div
          className="flex-1 bg-white dark:bg-gray-900"
          style={{
            overflowY: "auto",
            maxHeight: "calc(100vh - 80px)",
            WebkitOverflowScrolling: "touch",
          }}
        >
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
                href="#grants"
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#FB930Bff] transition-colors font-medium"
              >
                Grants
              </Link>
            </li>
            <li>
              <Link
                href="#team"
                onClick={() => setOpen(false)}
                className="block px-6 py-4 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 hover:text-[#FB930Bff] transition-colors font-medium"
              >
                Team
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
