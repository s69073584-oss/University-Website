
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function AdmissionCta() {
  return (
    <section className="bg-[#123D2B] text-white">

      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-5 py-10 text-center sm:px-6 md:flex-row md:py-12 md:text-left lg:px-8">

        {/* CTA Content */}
        <div>
          <h2 className="text-2xl font-bold sm:text-3xl">
            Ready to Start Your Journey?
          </h2>

          <p className="mt-2 text-sm leading-6 text-[#E5F0E5] sm:text-base">
            Take the next step towards a brighter future with AL-RAZI.
          </p>
        </div>

        {/* CTA Button */}
        <Link
          href="/admissions"
          className="inline-flex w-full items-center justify-center gap-2 rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#123D2B] transition hover:bg-[#E5F0E5] sm:w-auto"
        >
          Apply for Admission
          <ArrowRight size={17} />
        </Link>

      </div>

    </section>
  );
}
