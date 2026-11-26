
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  PlayCircle,
  GraduationCap,
  Star,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="overflow-hidden bg-[#f7faf7] px-5 py-16 sm:py-20 lg:py-24">
      <main className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-16">

        {/* Left Side */}
        <div className="max-w-xl">

          {/* Welcome Message */}
          <div className="inline-flex items-center gap-2 rounded-full border border-[#dce9df] bg-[#edf5ee] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#24734f]" />
            <p className="text-xs font-medium text-[#285c43]">
              A legacy of learning. A future of possibilities.
            </p>
          </div>

          {/* Main Heading */}
          <div className="mt-6">
            <h1 className="text-4xl font-extrabold leading-[1.12] tracking-tight text-[#123e30] sm:text-5xl lg:text-6xl">
              Great minds.
              <br />
              Brighter{" "}
              <span className="text-[#2c7953]">futures.</span>
            </h1>

            <p className="mt-6 max-w-lg text-sm leading-7 text-gray-600 sm:text-base">
              From the first day of school to the next big discovery,
              AL-RAZI nurtures curious minds and empowers the leaders
              of tomorrow.
            </p>
          </div>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/courses"
              className="inline-flex items-center gap-2 rounded-md bg-[#185b43] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10432f]"
            >
              Explore programs
              <ArrowRight size={16} />
            </Link>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-md border border-[#d6e2d8] bg-white px-5 py-3 text-sm font-semibold text-[#244b39] transition hover:bg-[#edf5ee]"
            >
              <PlayCircle size={17} />
              Discover AL-RAZI
            </Link>
          </div>

          {/* Student Reviews */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <div className="flex -space-x-2">
              {["AK", "OH", "SA", "IA"].map((initial, index) => (
                <div
                  key={index}
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#f7faf7] bg-[#dce9df] text-[10px] font-bold text-[#185b43]"
                >
                  {initial}
                </div>
              ))}
            </div>

            <div>
              <div className="flex items-center gap-0.5 text-[#b58a35]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={12} fill="currentColor" />
                ))}
              </div>
              <p className="mt-1 text-xs text-gray-600">
                A community built on possibility.
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="relative mx-auto w-full max-w-xl">

          {/* Campus Image */}
          <div className="relative h-[340px] overflow-hidden rounded-[35px] sm:h-[420px]">
            <Image
              src="/images/School.jpg"
              alt="AL-RAZI University Campus"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Image Heading */}
          <div className="absolute right-4 top-4 rounded-full border border-white/70 bg-white/90 px-4 py-2 shadow-sm backdrop-blur-sm sm:right-5">
            <p className="text-[10px] font-semibold text-[#285c43] sm:text-xs">
              ✦ A place to belong. A space to grow.
            </p>
          </div>

          {/* Campus Image Text */}
          <div className="absolute -bottom-6 left-3 flex max-w-[90%] items-center gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-lg sm:left-6">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#e9f3eb] text-[#185b43]">
              <GraduationCap size={23} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#123e30]">
                One institution. Endless possibilities.
              </h3>
              <p className="mt-1 text-[10px] text-gray-500">
                School · Undergraduate · Postgraduate
              </p>
            </div>
          </div>

        </div>
      </main>
    </section>
  );
}
