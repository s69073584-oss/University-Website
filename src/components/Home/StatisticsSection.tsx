
import {
  GraduationCap,
  BookOpen,
  Users,
  Award,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const statistics = [
  {
    number: "5,000+",
    label: "Students Enrolled",
    description: "Learners building their future",
    icon: GraduationCap,
  },
  {
    number: "120+",
    label: "Courses Available",
    description: "Knowledge across disciplines",
    icon: BookOpen,
  },
  {
    number: "80+",
    label: "Expert Instructors",
    description: "Guidance from experienced mentors",
    icon: Users,
  },
  {
    number: "95%",
    label: "Student Satisfaction",
    description: "A community that inspires growth",
    icon: Award,
  },
];

export default function StatisticsSection() {
  return (
    <section className="relative isolate overflow-hidden bg-[#103e2e] px-5 py-16 text-white sm:px-8 lg:py-24">

      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-32 -top-32 -z-10 h-80 w-80 rounded-full bg-emerald-400/10 blur-[100px]" />

      <div className="pointer-events-none absolute -bottom-40 -right-20 -z-10 h-96 w-96 rounded-full bg-lime-300/10 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-12 max-w-2xl text-center">

          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2">
            <Sparkles size={13} className="text-[#c5e4c9]" />

            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#c5e4c9]">
              Our Impact
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Numbers That
            <span className="text-[#c5e4c9]"> Inspire.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/65 sm:text-base">
            A growing community, creating opportunities and shaping
            brighter futures through knowledge, innovation, and education.
          </p>

        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {statistics.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.06] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#c5e4c9]/40 hover:bg-white/[0.10] hover:shadow-xl hover:shadow-black/10"
              >

                {/* Decorative Number */}
                <span className="absolute -right-2 -top-5 text-7xl font-bold text-white/[0.035]">
                  0{index + 1}
                </span>

                {/* Icon */}
                <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-[#c5e4c9]/10 text-[#c5e4c9] transition-all duration-300 group-hover:bg-[#c5e4c9] group-hover:text-[#103e2e]">
                  <Icon size={23} strokeWidth={1.8} />
                </div>

                {/* Number */}
                <h3 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  {item.number}
                </h3>

                {/* Label */}
                <p className="mt-2 text-sm font-semibold text-[#c5e4c9]">
                  {item.label}
                </p>

                {/* Description */}
                <p className="mt-2 text-xs leading-6 text-white/50">
                  {item.description}
                </p>

                {/* Bottom Line */}
                <div className="mt-6 h-[2px] w-10 rounded-full bg-[#c5e4c9]/50 transition-all duration-300 group-hover:w-full" />

              </div>
            );
          })}

        </div>

        {/* Bottom Message */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2 text-center">

          <p className="text-sm text-white/65">
            Every number represents a story of growth and achievement.
          </p>

          <Sparkles size={14} className="text-[#c5e4c9]" />

        </div>

      </div>
    </section>
  );
}
