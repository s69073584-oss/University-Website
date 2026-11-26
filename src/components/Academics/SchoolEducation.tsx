
import {
  BookOpen,
  PencilRuler,
  GraduationCap,
  School,
  ArrowUpRight,
} from "lucide-react";

const schoolStages = [
  {
    number: "01",
    icon: BookOpen,
    title: "Primary Education",
    classes: "Classes 1–5",
    description:
      "Building strong foundations through essential knowledge, creativity, and early learning experiences.",
  },
  {
    number: "02",
    icon: PencilRuler,
    title: "Middle Education",
    classes: "Classes 6–8",
    description:
      "Developing critical thinking, confidence, and a deeper understanding of different subjects.",
  },
  {
    number: "03",
    icon: School,
    title: "Secondary Education",
    classes: "Classes 9–10",
    description:
      "Strengthening subject knowledge and preparing students for important academic milestones.",
  },
  {
    number: "04",
    icon: GraduationCap,
    title: "Higher Secondary",
    classes: "Classes 11–12",
    description:
      "Supporting advanced academic learning and preparation for future higher education.",
  },
];

export default function SchoolEducation() {
  return (
    <section
      id="school-education"
      className="bg-white px-5 py-20 sm:py-24 lg:py-28"
    >
      <main className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#dce9df] bg-[#edf5ee] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#24734f]" />
            <p className="text-xs font-medium text-[#285c43]">
              SCHOOL EDUCATION
            </p>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#123e30] sm:text-4xl lg:text-5xl">
            Strong foundations.
            <br />
            <span className="text-[#2c7953]">
              Brighter beginnings.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Every stage of school education plays an important
            role in shaping a learner's future. Our academic
            journey supports students as they develop knowledge,
            confidence, and essential skills.
          </p>

        </div>

        {/* School Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {schoolStages.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group rounded-2xl border border-[#e3ebe4] bg-[#f7faf7] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#a5c9a9] hover:bg-white hover:shadow-xl sm:p-7"
              >

                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5f0e5] text-[#185b43] transition duration-300 group-hover:bg-[#185b43] group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <span className="text-3xl font-extrabold text-[#dce9df]">
                    {item.number}
                  </span>
                </div>

                <h3 className="mt-7 text-lg font-bold text-[#123e30]">
                  {item.title}
                </h3>

                <p className="mt-2 inline-flex rounded-full bg-[#edf5ee] px-3 py-1.5 text-xs font-semibold text-[#285c43]">
                  {item.classes}
                </p>

                <p className="mt-4 min-h-[105px] text-sm leading-7 text-gray-600">
                  {item.description}
                </p>

                <div className="mt-5 border-t border-[#e5ece6] pt-4">
                  <span className="flex items-center gap-2 text-xs font-semibold text-[#185b43]">
                    Academic journey
                    <ArrowUpRight
                      size={15}
                      className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
                    />
                  </span>
                </div>

              </div>
            );
          })}

        </div>

        {/* Bottom Highlight */}
        <div className="mt-8 flex flex-col gap-3 rounded-2xl bg-[#123e30] p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
          <div>
            <p className="text-xs font-semibold tracking-wider text-[#a5c9a9]">
              THE SCHOOL JOURNEY
            </p>
            <h3 className="mt-2 text-xl font-bold text-white sm:text-2xl">
              Every step builds a stronger future.
            </h3>
          </div>

          <BookOpen
            size={42}
            className="hidden text-[#a5c9a9] sm:block"
          />
        </div>

      </main>
    </section>
  );
}
