
import {
  Microscope,
  Brain,
  Award,
  BookMarked,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const masterFeatures = [
  {
    icon: Brain,
    title: "Advanced Knowledge",
    description:
      "Develop deeper subject understanding through advanced academic study.",
  },
  {
    icon: Microscope,
    title: "Research & Discovery",
    description:
      "Explore research interests, investigate ideas, and develop analytical skills.",
  },
  {
    icon: BookMarked,
    title: "Specialized Learning",
    description:
      "Focus on advanced areas of study and expand academic expertise.",
  },
];

export default function MastersPrograms() {
  return (
    <section
      id="masters-programs"
      className="bg-white px-5 py-20 sm:py-24 lg:py-28"
    >
      <main className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#dce9df] bg-[#edf5ee] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#24734f]" />
            <p className="text-xs font-medium text-[#285c43]">
              POSTGRADUATE EDUCATION
            </p>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#123e30] sm:text-4xl lg:text-5xl">
            Go beyond knowledge.
            <br />
            <span className="text-[#2c7953]">
              Explore new possibilities.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Postgraduate education encourages advanced learning,
            deeper exploration, and research. It offers an opportunity
            to expand expertise and pursue new academic interests.
          </p>

        </div>

        {/* Main Content */}
        <div className="mt-12 grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">

          {/* Left Highlight */}
          <div className="relative overflow-hidden rounded-2xl bg-[#123e30] p-7 sm:p-9 lg:col-span-2">
            <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full border-[25px] border-white/5" />

            <div className="relative">
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white/10 text-[#a5c9a9]">
                <Award size={29} />
              </div>

              <p className="mt-8 text-xs font-semibold tracking-[2px] text-[#a5c9a9]">
                ADVANCED ACADEMIC JOURNEY
              </p>

              <h3 className="mt-4 text-2xl font-extrabold leading-snug text-white sm:text-3xl">
                Knowledge that opens new doors.
              </h3>

              <p className="mt-5 text-sm leading-7 text-[#d5e5d8]">
                Continue your educational journey through advanced
                academic exploration, specialized learning, and
                intellectual development.
              </p>

              <Link
                href="/contact"
                className="mt-8 inline-flex items-center gap-2 rounded-md bg-white px-5 py-3 text-sm font-semibold text-[#185b43] transition hover:bg-[#e9f3eb]"
              >
                Get more information
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          {/* Right Features */}
          <div className="space-y-4 lg:col-span-3">

            {masterFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex items-start gap-4 rounded-2xl border border-[#e3ebe4] bg-[#f7faf7] p-5 transition duration-300 hover:border-[#a5c9a9] hover:bg-white hover:shadow-lg sm:gap-5 sm:p-7"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e5f0e5] text-[#185b43] transition group-hover:bg-[#185b43] group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-base font-bold text-[#123e30] sm:text-lg">
                        {item.title}
                      </h3>

                      <span className="text-xs font-bold text-[#a5c9a9]">
                        0{index + 1}
                      </span>
                    </div>

                    <p className="mt-2 text-sm leading-7 text-gray-600">
                      {item.description}
                    </p>
                  </div>

                </div>
              );
            })}

          </div>

        </div>
      </main>
    </section>
  );
}
