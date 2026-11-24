
import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#123D2B] text-white">

      {/* Main Footer */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-9 px-5 py-12 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:gap-10 lg:px-8 lg:py-14">

        {/* Brand */}
        <div>
          <Link href="/" className="mb-5 inline-flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#123D2B]">
              <span className="text-lg font-bold">AR</span>
            </div>

            <div>
              <h2 className="text-lg font-bold">AL-RAZI</h2>
              <p className="text-[10px] font-medium tracking-wider text-[#A5C9A9]">
                SCHOOL & UNIVERSITY
              </p>
            </div>
          </Link>

          <p className="max-w-xs text-sm leading-7 text-[#E5F0E5]">
            We are committed to providing quality education and
            creating opportunities for students to learn, grow
            and achieve their dreams.
          </p>

          {/* Social Links */}
          <div className="mt-5 flex items-center gap-3">

            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full bg-white/10 p-3 transition hover:bg-[#43865B]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.5 1.6-1.5h1.7V4c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V10H7v3h2.8v8h3.7Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full bg-white/10 p-3 transition hover:bg-[#43865B]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8">
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="rounded-full bg-white/10 p-3 transition hover:bg-[#43865B]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M5.2 3.5a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4ZM3.3 9.5h3.8V21H3.3V9.5Zm6.2 0h3.6v1.6h.1c.5-.9 1.7-2 3.5-2 3.7 0 4.4 2.4 4.4 5.5V21h-3.8v-5.7c0-1.4 0-3.1-1.9-3.1s-2.2 1.5-2.2 3V21H9.5V9.5Z" />
              </svg>
            </a>

            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="rounded-full bg-white/10 p-3 transition hover:bg-[#43865B]"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
                <path d="M23 7.1a3 3 0 0 0-2.1-2.1C19.1 4.5 12 4.5 12 4.5s-7.1 0-8.9.5A3 3 0 0 0 1 7.1 31 31 0 0 0 .5 12s0 3.1.5 4.9a3 3 0 0 0 2.1 2.1c1.8.5 8.9.5 8.9.5s7.1 0 8.9-.5a3 3 0 0 0 2.1-2.1c.5-1.8.5-4.9.5-4.9s0-3.1-.5-4.9ZM9.7 15.3V8.7l5.8 3.3-5.8 3.3Z" />
              </svg>
            </a>

          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">Quick Links</h3>

          <ul className="space-y-3 text-sm text-[#E5F0E5]">
            <li><Link href="/" className="transition hover:text-white">Home</Link></li>
            <li><Link href="/about" className="transition hover:text-white">About Us</Link></li>
            <li><Link href="/academics" className="transition hover:text-white">Academics</Link></li>
            <li><Link href="/admissions" className="transition hover:text-white">Admissions</Link></li>
            <li><Link href="/faculty" className="transition hover:text-white">Our Faculty</Link></li>
            <li><Link href="/contact" className="transition hover:text-white">Contact Us</Link></li>
          </ul>
        </div>

        {/* Education */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">Our Education</h3>

          <ul className="space-y-3 text-sm text-[#E5F0E5]">
            <li><Link href="/academics" className="transition hover:text-white">School Education</Link></li>
            <li><Link href="/academics" className="transition hover:text-white">Primary Education</Link></li>
            <li><Link href="/academics" className="transition hover:text-white">Secondary Education</Link></li>
            <li><Link href="/academics" className="transition hover:text-white">Bachelor&apos;s Programs</Link></li>
            <li><Link href="/academics" className="transition hover:text-white">Master&apos;s Programs</Link></li>
            <li><Link href="/courses" className="transition hover:text-white">All Courses</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">Contact Us</h3>

          <ul className="space-y-5 text-sm text-[#E5F0E5]">

            <li className="flex items-start gap-3">
              <MapPin size={19} className="mt-1 shrink-0 text-[#A5C9A9]" />
              <span>Visit our Contact page for location details.</span>
            </li>

            <li className="flex items-start gap-3">
              <Phone size={19} className="shrink-0 text-[#A5C9A9]" />
              <Link href="/contact" className="transition hover:text-white">
                Contact Information
              </Link>
            </li>

            <li className="flex items-start gap-3">
              <Mail size={19} className="shrink-0 text-[#A5C9A9]" />
              <Link href="/contact" className="transition hover:text-white">
                Email & Enquiries
              </Link>
            </li>

          </ul>

          <Link
            href="/contact"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-[#A5C9A9] transition hover:text-white"
          >
            Get in Touch <ArrowRight size={16} />
          </Link>
        </div>

      </div>

      {/* Copyright */}
      <div className="border-t border-white/15">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-5 py-5 text-center text-xs text-[#A5C9A9] sm:px-6 md:flex-row lg:px-8">

          <p>
            © 2026 AL-RAZI School & University. All Rights Reserved.
          </p>

          <p>Learn Today. Lead Tomorrow.</p>

        </div>
      </div>

    </footer>
  );
}
