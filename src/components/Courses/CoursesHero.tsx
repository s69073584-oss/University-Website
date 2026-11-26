
import Link from "next/link";

export default function CoursesHero() {
  return (
    <section className="bg-[#f7faf7] px-5 pt-12 pb-7 sm:pt-16 sm:pb-8">
      <main className="mx-auto max-w-7xl">

        {/* Breadcrumb */}
        <div className="mb-10 flex items-center gap-2 text-xs text-gray-500">
          <Link
            href="/"
            className="transition hover:text-[#185b43]"
          >
            Home
          </Link>

          <span>/</span>

          <span className="font-medium text-[#285c43]">
            Courses
          </span>
        </div>

        {/* Heading */}
        <div className="max-w-2xl">

          <p className="text-[10px] font-bold tracking-[2px] text-[#43865b] sm:text-xs">
            FIND YOUR DIRECTION
          </p>

          <h1 className="mt-3 text-3xl font-extrabold leading-tight tracking-tight text-[#123e30] sm:text-4xl">
            Big ambitions start here.
          </h1>

          <p className="mt-3 text-xs leading-6 text-gray-600 sm:text-sm">
            Explore our academic offerings and find a path
            that fits your curiosity.
          </p>

        </div>

      </main>
    </section>
  );
}
