
import Link from "next/link";

export default function ContactInfo() {
  return (
    <section className="flex h-full flex-col rounded-xl border border-[#39735a] bg-[#124632] p-5 text-white shadow-sm md:p-6">

      <h2 className="text-lg font-bold">
        Get in touch
      </h2>

      {/* Email */}
      <div className="mt-6">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a8cfb1]">
          Email
        </p>

        <Link
          href="mailto:admissions@alrazi.example"
          className="mt-2 inline-block text-xs font-medium text-white underline-offset-4 hover:underline"
        >
          admissions@alrazi.example
        </Link>
      </div>

      {/* Phone */}
      <div className="mt-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a8cfb1]">
          Phone
        </p>

        <Link
          href="tel:+001234567890"
          className="mt-2 inline-block text-xs font-medium text-white hover:underline"
        >
          +00 123 456 7890
        </Link>
      </div>

      {/* Address */}
      <div className="mt-5">
        <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#a8cfb1]">
          Visit
        </p>

        <p className="mt-2 text-xs font-medium leading-5 text-white">
          University Avenue, Education District
        </p>
      </div>

      {/* Location Placeholder */}
      <div className="mt-6 flex min-h-[112px] flex-1 items-center justify-center rounded-lg border border-[#39765a] bg-[#205b43] p-4">

        <div className="flex items-center gap-2 text-center">

          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
          </svg>

          <span className="text-[10px] font-semibold">
            Illustrative campus location
          </span>

        </div>
      </div>

      {/* Note */}
      <p className="mt-4 text-[9px] leading-4 text-[#c4d9ca]">
        Sample contact details · not a live institution.
      </p>

    </section>
  );
}
