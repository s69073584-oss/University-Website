
import Link from "next/link";
import {
  BookOpen,
  GraduationCap,
  Globe,
  ArrowRight,
} from "lucide-react";

const educationLevels = [
  {
    number: "01",
    title: "School Education",
    description: "A strong start. A lifetime of curiosity.",
    program: "Classes 1-12",
    icon: BookOpen,
    href: "/admissions",
    highlighted: false,
  },
  {
    number: "02",
    title: "Undergraduate",
    description: "Find your passion. Shape your path.",
    program: "Bachelor's programs",
    icon: GraduationCap,
    href: "/courses",
    highlighted: true,
  },
  {
    number: "03",
    title: "Postgraduate",
    description: "Go deeper. Think bigger. Lead further.",
    program: "Master's programs",
    icon: Globe,
    href: "/academics",
    highlighted: false,
  },
];

export default function EducationLevels() {
  return (
    <section className="bg-[#f7f9f5] px-5 py-16 sm:py-20">
      <main className="mx-auto max-w-7xl">

        {/* Heading Section */}
        <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">

          <div>
            <p className="mb-3 text-[10px] font-bold uppercase tracking-[2px] text-[#56866b]">
              Your journey, your possibilities
            </p>

            <h2 className="text-2xl font-bold tracking-tight text-[#123e30] sm:text-3xl">
              Every stage. Every ambition.
            </h2>

            <p className="mt-3 text-xs leading-6 text-gray-500">
              An education that grows with you, from strong foundations
              to new frontiers.
            </p>
          </div>

          {/* Explore Link */}
          <Link
            href="/academics"
            className="group inline-flex w-fit items-center gap-2 text-xs font-semibold text-[#285c43] transition hover:text-[#123e30]"
          >
            Explore all academics
            <ArrowRight
              size={15}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>

        {/* Education Levels Cards */}
        
{/* Education Levels Cards */}
<div className="grid grid-cols-1 gap-5 md:grid-cols-3">

  {educationLevels.map((level) => {
    const Icon = level.icon;

    return (
      <Link
        key={level.number}
        href={level.href}
        className={`group relative flex min-h-[220px] flex-col justify-between overflow-hidden rounded-xl border p-6 transition-all duration-300 ease-out hover:-translate-y-2 hover:shadow-xl ${
          level.highlighted
            ? "border-[#174d38] bg-[#104b37] text-white shadow-md hover:border-[#2c7953] hover:shadow-[#104b37]/20"
            : "border-[#e4e9df] bg-[#f0f3eb] text-[#123e30] hover:border-[#8eaf96] hover:bg-white hover:shadow-[#123e30]/10"
        }`}
      >
        {/* Card Top */}
        <div>
          <div className="flex items-center justify-between">
            <div
              className={`flex h-11 w-11 items-center justify-center rounded-lg transition-all duration-300 group-hover:scale-110 ${
                level.highlighted
                  ? "bg-white/10 text-[#c0ddc7] group-hover:bg-white/20"
                  : "bg-[#e2ecdf] text-[#5d9171] group-hover:bg-[#d5e7d5]"
              }`}
            >
              <Icon size={22} strokeWidth={1.7} />
            </div>

            <span
              className={`text-xs font-semibold ${
                level.highlighted
                  ? "text-white/50"
                  : "text-gray-400"
              }`}
            >
              {level.number}
            </span>
          </div>

          {/* Card Content */}
          <h3 className="mt-7 text-lg font-bold transition-colors">
            {level.title}
          </h3>

          <p
            className={`mt-2 text-xs leading-6 ${
              level.highlighted
                ? "text-white/75"
                : "text-gray-500"
            }`}
          >
            {level.description}
          </p>
        </div>

        {/* Card Bottom */}
        <div
          className={`mt-7 flex items-center justify-between border-t pt-4 ${
            level.highlighted
              ? "border-white/15"
              : "border-[#dfe5da]"
          }`}
        >
          <span className="text-xs font-semibold">
            {level.program}
          </span>

          <ArrowRight
            size={17}
            className="transition-transform duration-300 group-hover:translate-x-2"
          />
        </div>
      </Link>
    );
  })}

</div>

      </main>
    </section>
  );
}
