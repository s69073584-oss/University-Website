
import Image from "next/image";
import { ArrowRight, BookOpen, GraduationCap } from "lucide-react";
import Link from "next/link";

export default function OurStory() {
  return (
    <section className="bg-white px-5 py-20 sm:py-24 lg:py-28">
      <main className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">

        {/* Left Content */}
        <div className="max-w-xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#dce9df] bg-[#edf5ee] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#24734f]" />
            <p className="text-xs font-medium text-[#285c43]">
              OUR STORY
            </p>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#123e30] sm:text-4xl lg:text-5xl">
            Every great journey
            <br />
            begins with{" "}
            <span className="text-[#2c7953]">education.</span>
          </h2>

          <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base">
            AL-RAZI brings school and university education together
            in one connected learning community. We believe that
            education is more than acquiring knowledge; it is about
            developing character, discovering potential, and preparing
            for a meaningful future.
          </p>

          <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
            Through different stages of academic learning, we aim to
            create an environment where students are encouraged to
            think independently, explore new ideas, and grow with confidence.
          </p>

          <Link
            href="/academics"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-[#185b43] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10432f]"
          >
            Explore academics
            <ArrowRight size={16} />
          </Link>

        </div>

        {/* Right Side */}
        <div className="grid grid-cols-2 gap-4">

          <div className="relative col-span-2 flex items-center gap-4 overflow-hidden rounded-2xl bg-[#f7faf7] p-6 sm:p-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-[#e5f0e5] text-[#185b43]">
              <BookOpen size={28} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-[#123e30]">
                A Foundation for Learning
              </h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Encouraging curiosity, knowledge, and a lifelong love of learning.
              </p>
            </div>
          </div>

          <div className="relative col-span-2 flex items-center gap-4 overflow-hidden rounded-2xl bg-[#123e30] p-6 sm:p-8">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#a5c9a9]">
              <GraduationCap size={30} />
            </div>

            <div>
              <h3 className="text-lg font-bold text-white">
                A Future of Possibilities
              </h3>
              <p className="mt-2 text-sm leading-6 text-[#d5e5d8]">
                Supporting learners as they develop their abilities
                and pursue new opportunities.
              </p>
            </div>
          </div>

        </div>

      </main>
    </section>
  );
}
