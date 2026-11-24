
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, GraduationCap } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Academics", href: "/academics" },
  { name: "Courses", href: "/courses" },
  { name: "Admissions", href: "/admissions" },
  { name: "Faculty", href: "/faculty" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 w-full bg-white shadow-sm">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">

        {/* Logo */}
        <Link
          href="/"
          onClick={() => setIsOpen(false)}
          className="flex items-center gap-2 sm:gap-3"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[#123D2B] text-[#123D2B] sm:h-12 sm:w-12">
            <GraduationCap size={25} />
          </div>

          <div>
            <h1 className="text-lg font-bold leading-tight tracking-wide text-[#123D2B] sm:text-2xl">
              AL-RAZI
            </h1>

            <p className="text-[9px] font-semibold tracking-wider text-gray-600 sm:text-xs">
              SCHOOL & UNIVERSITY
            </p>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">

          <ul className="flex items-center gap-5 text-sm font-medium text-gray-700 xl:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="transition hover:text-[#43865B]"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Buttons */}
          <div className="flex items-center gap-3">
            <Link
              href="/login"
              className="px-3 py-2 text-sm font-semibold text-[#123D2B] transition hover:text-[#43865B]"
            >
              Login
            </Link>

            <Link
              href="/apply"
              className="rounded-md bg-[#123D2B] px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-[#1D563C]"
            >
              Apply Now
            </Link>
          </div>

        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          className="flex h-10 w-10 items-center justify-center rounded-md text-[#123D2B] transition hover:bg-gray-100 lg:hidden"
        >
          {isOpen ? <X size={25} /> : <Menu size={25} />}
        </button>

      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          id="mobile-navigation"
          className="absolute left-0 top-full w-full border-t border-gray-100 bg-white shadow-lg lg:hidden"
        >
          <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6">

            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href} className="border-b border-gray-100">
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-3 text-sm font-medium text-gray-700 transition hover:pl-2 hover:text-[#43865B]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Action Buttons */}
            <div className="mt-4 flex flex-col gap-3">

              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="rounded-md border border-[#123D2B] px-4 py-2.5 text-center text-sm font-semibold text-[#123D2B] transition hover:bg-gray-50"
              >
                Login
              </Link>

              <Link
                href="/apply"
                onClick={() => setIsOpen(false)}
                className="rounded-md bg-[#123D2B] px-4 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-[#1D563C]"
              >
                Apply Now
              </Link>

            </div>

          </div>
        </div>
      )}

    </nav>
  );
}
