
import Link from "next/link";
import {
  Code2,
  BriefcaseBusiness,
  FlaskConical,
  ChartNoAxesColumnIncreasing,
  Clock3,
  ArrowRight,
} from "lucide-react";

const programs = [
  {
    level: "Bachelor's",
    school: "School of Technology",
    title: "Computer Science",
    description:
      "Build the ideas, systems, and technologies that shape our world.",
    duration: "4 years",
    icon: Code2,
    color: "bg-[#e3ece0]",
  },
  {
    level: "Bachelor's",
    school: "School of Business",
    title: "Business Administration",
    description:
      "Develop the confidence to lead, innovate, and make an impact.",
    duration: "4 years",
    icon: BriefcaseBusiness,
    color: "bg-[#efede3]",
  },
  {
    level: "School",
    school: "School of Sciences",
    title: "Natural Sciences",
    description:
      "Turn curiosity into discovery through hands-on exploration.",
    duration: "Classes 9–12",
    icon: FlaskConical,
    color: "bg-[#e2ebea]",
  },
  {
    level: "Master's",
    school: "Graduate Studies",
    title: "Data Science & Analytics",
    description:
      "Find meaningful answers to tomorrow's biggest questions.",
    duration: "2 years",
    icon: ChartNoAxesColumnIncreasing,
    color: "bg-[#e9e9df]",
  },
];

export default function FeaturedCourses() {
  return (
    <section className="bg-[#f5f8f5] px-5 py-16 sm:px-8 lg:py-20">
      <div className="mx-auto max-w-7xl bg-white px-5 py-8 sm:px-8 lg:px-10 lg:py-12">

        {/* Section Heading */}
        <div className="mb-7 flex flex-wrap items-end justify-between gap-5">

          <div>
            <span className="mb-3 block text-[10px] font-bold uppercase tracking-[0.18em] text-[#34775c]">
              Learn With Purpose
            </span>

            <h2 className="text-2xl font-bold tracking-tight text-[#183b2e] sm:text-3xl">
              Discover what moves you.
            </h2>

            <p className="mt-2 max-w-xl text-xs leading-6 text-[#718078]">
              Explore a few of our illustrative programs, designed around a
              world of possibilities.
            </p>
          </div>

          <Link
            href="/programs"
            className="group mb-1 inline-flex items-center gap-1 text-[11px] font-semibold text-[#174b38] transition hover:text-[#39865f]"
          >
            View all programs
            <ArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* Program Cards */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <div
                key={program.title}
                className="group overflow-hidden rounded-lg border border-[#e5ebe6] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#cbd9cf] hover:shadow-lg"
              >

                {/* Card Image / Icon Area */}
                <div
                  className={`relative flex h-28 items-center justify-center ${program.color}`}
                >
                  <span className="absolute left-3 top-3 rounded-sm bg-white px-2 py-1 text-[9px] font-semibold text-[#365e4b] shadow-sm">
                    {program.level}
                  </span>

                  <div className="flex h-12 w-12 rotate-[-8deg] items-center justify-center rounded-xl bg-white/80 shadow-sm transition-transform duration-300 group-hover:rotate-0 group-hover:scale-110">
                    <Icon
                      size={25}
                      strokeWidth={1.8}
                      className="text-[#34755a]"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="flex min-h-[122px] flex-col px-3 py-3">

                  <span className="mb-1 text-[9px] font-medium text-[#83958b]">
                    {program.school}
                  </span>

                  <h3 className="text-[14px] font-bold leading-snug text-[#183b2e]">
                    {program.title}
                  </h3>

                  <p className="mt-1.5 text-[10px] leading-[1.7] text-[#77857d]">
                    {program.description}
                  </p>

                </div>

                {/* Card Footer */}
                <div className="mx-3 flex items-center justify-between border-t border-[#edf0ed] py-3">

                  <div className="flex items-center gap-1.5 text-[9px] font-medium text-[#78867d]">
                    <Clock3 size={11} />
                    {program.duration}
                  </div>

                  <Link
                    href="/programs"
                    className="group/link inline-flex items-center gap-1 text-[9px] font-semibold text-[#20583f] transition hover:text-[#4b966b]"
                  >
                    View course
                    <ArrowRight
                      size={11}
                      className="transition-transform group-hover/link:translate-x-1"
                    />
                  </Link>

                </div>

              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}
