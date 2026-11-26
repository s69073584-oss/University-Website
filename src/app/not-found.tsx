"use client";
import Link from "next/link";
import { Home, ArrowLeft, SearchX } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex min-h-[75vh] items-center justify-center bg-[#f7faf7] px-4 py-16">
      <div className="mx-auto w-full max-w-2xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-[#edf5ee]">
          <SearchX size={38} className="text-[#185b43]" />
        </div>

        <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[#43865b]">
          Page Not Found
        </p>

        <h1 className="mt-3 text-7xl font-extrabold text-[#123e30] sm:text-8xl">
          404
        </h1>

        <h2 className="mt-5 text-2xl font-bold text-[#123e30] sm:text-3xl">
          Oops! This Page Doesn't Exist
        </h2>

        <p className="mx-auto mt-4 max-w-lg leading-7 text-gray-600">
          The page you are looking for may have been moved, deleted, or is
          temporarily unavailable. Let's help you get back on track.
        </p>

        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-[#185b43] px-6 py-3 font-semibold text-white transition hover:bg-[#10432f]"
          >
            <Home size={19} />
            Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-[#dce9df] bg-white px-6 py-3 font-semibold text-[#185b43] transition hover:bg-[#edf5ee]"
          >
            <ArrowLeft size={19} />
            Go Back
          </button>
        </div>

        <div className="mt-12 border-t border-[#dce9df] pt-6">
          <p className="text-sm text-gray-500">
            Need help? Explore our website.
          </p>

          <div className="mt-4 flex flex-wrap justify-center gap-x-6 gap-y-3 text-sm font-medium text-[#185b43]">
            <Link href="/about" className="hover:underline">
              About Us
            </Link>
            <Link href="/academics" className="hover:underline">
              Academics
            </Link>
            <Link href="/courses" className="hover:underline">
              Courses
            </Link>
            <Link href="/faculty" className="hover:underline">
              Our Faculty
            </Link>
            <Link href="/contact" className="hover:underline">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
