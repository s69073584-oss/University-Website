
import Link from "next/link";

export default function ContactHero() {
  return (
    <section className="bg-[#f7f9f6]">
      <div className="mx-auto max-w-[1120px] px-6 pb-5 pt-12 md:px-10">

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
            Contact
          </span>
        </nav>

        {/* Small Heading */}
        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#43866a]">
          Let's start a conversation
        </p>

        {/* Main Heading */}
        <h1 className="text-3xl font-bold tracking-tight text-[#153f32] md:text-[40px]">
          We're here for your next step.
        </h1>

        {/* Description */}
        <p className="mt-3 max-w-[600px] text-[13px] leading-6 text-gray-600">
          Have a question about programs, admissions, or campus life?
          We'd love to help you explore the possibilities.
        </p>

      </div>
    </section>
  );
}
