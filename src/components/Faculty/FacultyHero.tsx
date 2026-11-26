
import Link from "next/link";

export default function FacultyHero() {
  return (
    <section className="bg-[#f7f9f6]">
      <div className="mx-auto max-w-[1120px] px-6 pb-6 pt-12 md:px-10">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-7 flex items-center gap-2 text-[11px] text-gray-500"
        >
          <Link href="/" className="transition hover:text-[#18563e]">
            Home
          </Link>

          <span>/</span>

          <span className="text-[#18563e]">
            Faculty
          </span>
        </nav>

        {/* Small Heading */}
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#43866a]">
          The people behind the possibilities
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl font-bold tracking-tight text-[#153f32] md:text-[40px]">
          Great educators. Lasting inspiration.
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-[600px] text-[13px] leading-6 text-gray-600">
          Meet a sample of the passionate mentors who bring our learning
          community to life.
        </p>

      </div>
    </section>
  );
}
