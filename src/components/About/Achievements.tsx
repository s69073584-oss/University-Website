
import {
  GraduationCap,
  BookOpen,
  Award,
  Users,
  ArrowUpRight,
} from "lucide-react";

const achievements = [
  {
    number: "01",
    icon: BookOpen,
    title: "School Education",
    description:
      "Building strong academic foundations through learning opportunities from Classes 1 to 12.",
    tag: "Classes 1–12",
  },
  {
    number: "02",
    icon: GraduationCap,
    title: "Higher Education",
    description:
      "Creating pathways for undergraduate learning and academic development.",
    tag: "Bachelor's",
  },
  {
    number: "03",
    icon: Award,
    title: "Advanced Learning",
    description:
      "Encouraging deeper knowledge, research, and continued academic growth.",
    tag: "Master's",
  },
];

export default function Achievements() {
  return (
    <section className="bg-[#f7faf7] px-5 py-20 sm:py-24 lg:py-28">
      <main className="mx-auto max-w-7xl">

        {/* Section Heading */}
        {/* Section Heading */}
<div className="max-w-2xl">

  <div className="inline-flex items-center gap-2 rounded-full border border-[#dce9df] bg-[#edf5ee] px-4 py-2">
    <span className="h-2 w-2 rounded-full bg-[#24734f]" />
    <p className="text-xs font-medium text-[#285c43]">
      OUR ACHIEVEMENTS
    </p>
  </div>

  <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#123e30] sm:text-4xl lg:text-5xl">
    Every milestone.
    <br />
    <span className="text-[#2c7953]">
      A brighter future.
    </span>
  </h2>

  <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
    Our commitment to education brings together different
    learning stages, creating opportunities for students
    to discover their potential and move forward with confidence.
  </p>

</div>

        {/* Achievement Cards */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3">

          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group relative overflow-hidden rounded-2xl border border-[#e3ebe4] bg-white p-7 transition-all duration-300 hover:-translate-y-2 hover:border-[#a5c9a9] hover:shadow-xl sm:p-8"
              >

                {/* Card Top */}
                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e9f3eb] text-[#185b43] transition-colors duration-300 group-hover:bg-[#185b43] group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <span className="text-4xl font-extrabold text-[#edf3ed]">
                    {item.number}
                  </span>

                </div>

                {/* Card Content */}
                <h3 className="mt-8 text-xl font-bold text-[#123e30]">
                  {item.title}
                </h3>

                <p className="mt-3 min-h-[84px] text-sm leading-7 text-gray-600">
                  {item.description}
                </p>

                {/* Bottom Tag */}
                <div className="mt-6 flex items-center justify-between border-t border-[#edf1ed] pt-5">

                  <span className="rounded-full bg-[#edf5ee] px-3 py-1.5 text-xs font-semibold text-[#285c43]">
                    {item.tag}
                  </span>

                  <ArrowUpRight
                    size={19}
                    className="text-[#43865b] transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
                  />

                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Highlight */}
        <div className="mt-8 flex flex-col items-center justify-between gap-5 rounded-2xl bg-[#123e30] px-7 py-8 text-center sm:flex-row sm:px-10 sm:text-left">

          <div>
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <Users size={18} className="text-[#a5c9a9]" />
              <p className="text-xs font-semibold tracking-wider text-[#a5c9a9]">
                THE AL-RAZI COMMUNITY
              </p>
            </div>

            <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
              Learning together. Growing together.
            </h3>
          </div>

          <p className="max-w-xs text-sm leading-6 text-[#d5e5d8]">
            Every stage of education is an opportunity to move forward.
          </p>

        </div>

      </main>
    </section>
  );
}
