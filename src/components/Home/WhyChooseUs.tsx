
import Link from "next/link";
import {
  Check,
  ArrowUpRight,
  ArrowRight,
  GraduationCap,
  BookOpen,
  Users,
  Sparkles,
} from "lucide-react";

const features = [
  {
    title: "Inspiring People",
    description:
      "Learn alongside passionate educators who recognize your potential and encourage you to grow.",
    icon: Users,
  },
  {
    title: "Space to Discover",
    description:
      "Explore modern learning spaces, practical resources, and opportunities to discover new ideas.",
    icon: BookOpen,
  },
  {
    title: "Support at Every Step",
    description:
      "Get the guidance, encouragement, and support you need throughout your learning journey.",
    icon: GraduationCap,
  },
];

const highlights = [
  {
    number: "01",
    title: "Student First",
    description: "Your growth matters.",
  },
  {
    number: "02",
    title: "Future Focused",
    description: "Skills for tomorrow.",
  },
  {
    number: "03",
    title: "Built on Values",
    description: "Learning with purpose.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#f5f8f5] px-5 py-16 sm:px-8 lg:py-24">

      <div className="mx-auto max-w-7xl">

        {/* Main Content */}
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Image */}
          <div className="group relative">

            <div className="relative h-[300px] overflow-hidden rounded-xl sm:h-[400px] lg:h-[490px]">

              <img
                src="/images/school.jpg"
                alt="Beautiful university campus"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#103e2e]/40 via-transparent to-transparent" />

              {/* Image Label */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between gap-3 rounded-lg border border-white/20 bg-white/90 p-4 shadow-lg backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6">

                <div>
                  <span className="text-[9px] font-bold uppercase tracking-[0.18em] text-[#39805d]">
                    A Place to Grow
                  </span>

                  <h3 className="mt-1 text-sm font-bold text-[#183b2e] sm:text-base">
                    Building Brighter Futures
                  </h3>
                </div>

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e4eee5] text-[#286344]">
                  <GraduationCap size={21} />
                </div>

              </div>
            </div>

            {/* Decorative Element */}
            <div className="absolute -bottom-4 -right-4 -z-0 h-24 w-24 rounded-xl border-2 border-[#b9d4be] sm:-bottom-5 sm:-right-5" />

          </div>

          {/* Right Content */}
          <div className="relative z-10">

            {/* Eyebrow */}
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-6 bg-[#4b966b]" />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#34775c]">
                The AL-RAZI Difference
              </span>
            </div>

            {/* Heading */}
            <h2 className="max-w-xl text-3xl font-bold leading-[1.2] tracking-tight text-[#183b2e] sm:text-4xl lg:text-[42px]">
              More than an education.
              <span className="text-[#4b966b]">
                {" "}A foundation for life.
              </span>
            </h2>

            {/* Description */}
            <p className="mt-5 max-w-xl text-sm leading-7 text-[#718078]">
              We bring together academic ambition, a caring community,
              and the freedom to discover who you can become.
              Your journey towards a brighter future starts here.
            </p>

            {/* Features */}
            <div className="mt-8 space-y-6">

              {features.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div
                    key={feature.title}
                    className="group flex gap-4"
                  >

                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#e4eee5] text-[#34775c] transition-all duration-300 group-hover:bg-[#245c42] group-hover:text-white">
                      <Icon size={18} strokeWidth={1.8} />
                    </div>

                    <div>
                      <h3 className="text-sm font-bold text-[#183b2e]">
                        {feature.title}
                      </h3>

                      <p className="mt-1 max-w-md text-xs leading-6 text-[#78867d]">
                        {feature.description}
                      </p>
                    </div>

                  </div>
                );
              })}

            </div>

            {/* CTA */}
            <div className="mt-8">
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-md border border-[#d9e5dc] bg-white px-5 py-3 text-xs font-semibold text-[#245c42] shadow-sm transition-all duration-300 hover:border-[#245c42] hover:bg-[#245c42] hover:text-white"
              >
                Get to Know AL-RAZI

                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </Link>
            </div>

          </div>
        </div>

        {/* Bottom Highlights */}
        <div className="mt-16 grid grid-cols-1 gap-4 border-t border-[#dfe9e1] pt-8 sm:grid-cols-3 sm:gap-8">

          {highlights.map((item) => (
            <div
              key={item.number}
              className="flex items-center gap-4"
            >
              <span className="text-2xl font-light text-[#9db9a3]">
                {item.number}
              </span>

              <div>
                <h3 className="text-sm font-bold text-[#183b2e]">
                  {item.title}
                </h3>

                <p className="mt-1 text-xs text-[#859188]">
                  {item.description}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
