
import Link from "next/link";

export default function AdmissionsHero() {
  return (
    <section className="w-full bg-[#f7f9f6]">
      <div className="mx-auto max-w-[1120px] px-6 pt-10 pb-5 md:px-10">

        {/* Breadcrumb */}
        <nav
          aria-label="Breadcrumb"
          className="mb-7 flex items-center gap-2 text-[11px] text-gray-500"
        >
          <Link
            href="/"
            className="transition-colors hover:text-[#18563e]"
          >
            Home
          </Link>

          <span>/</span>

          <span className="text-[#18563e]">
            Admissions
          </span>
        </nav>

        {/* Small Heading */}
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#43866a]">
          Your future starts with a step
        </p>

        {/* Main Heading */}
        <h1 className="max-w-2xl text-3xl font-bold tracking-tight text-[#153f32] md:text-[40px]">
          Make room for possibility.
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-[570px] text-[13px] leading-6 text-gray-600">
          Explore your options, get to know us, and begin your
          application. Our team is here to help you find your way.
        </p>

      </div>
    </section>
  );
}
