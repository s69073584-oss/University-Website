
import {
  GraduationCap,
  BookOpen,
  Lightbulb,
  Users,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";

const bachelorFeatures = [
  {
    icon: BookOpen,
    title: "Academic Learning",
    description:
      "Develop subject knowledge through structured academic learning and study.",
  },
  {
    icon: Lightbulb,
    title: "Critical Thinking",
    description:
      "Explore ideas, solve problems, and develop independent thinking skills.",
  },
  {
    icon: Users,
    title: "Collaborative Growth",
    description:
      "Learn through interaction, teamwork, and shared academic experiences.",
  },
];

export default function BachelorsPrograms() {
  return (
    <section
      id="bachelors-programs"
      className="bg-[#f7faf7] px-5 py-20 sm:py-24 lg:py-28"
    >
      <main className="mx-auto max-w-7xl">

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20">

          {/* Left Content */}
          <div className="max-w-xl">

            <div className="inline-flex items-center gap-2 rounded-full border border-[#dce9df] bg-[#edf5ee] px-4 py-2">
              <span className="h-2 w-2 rounded-full bg-[#24734f]" />
              <p className="text-xs font-medium text-[#285c43]">
                UNDERGRADUATE EDUCATION
              </p>
            </div>

            <h2 className="mt-6 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#123e30] sm:text-4xl lg:text-5xl">
              Discover your potential.
              <br />
              <span className="text-[#2c7953]">
                Shape your future.
              </span>
            </h2>

            <p className="mt-6 text-sm leading-7 text-gray-600 sm:text-base">
              Undergraduate education is an important step toward
              academic and professional development. It provides
              learners with opportunities to deepen their knowledge,
              explore their interests, and build skills for the future.
            </p>

            <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
              At AL-RAZI, our higher education vision focuses on
              encouraging independent thinking, academic exploration,
              and meaningful learning experiences.
            </p>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-md bg-[#185b43] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10432f]"
              >
                Contact for program details
                <ArrowRight size={16} />
              </Link>
            </div>

          </div>

          {/* Right Side */}
          <div className="space-y-4">

            {bachelorFeatures.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="group flex gap-4 rounded-2xl border border-[#e3ebe4] bg-white p-5 transition duration-300 hover:border-[#a5c9a9] hover:shadow-lg sm:gap-5 sm:p-6"
                >

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e9f3eb] text-[#185b43] transition group-hover:bg-[#185b43] group-hover:text-white">
                    <Icon size={23} />
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base font-bold text-[#123e30] sm:text-lg">
                        {item.title}
                      </h3>

                      <span className="text-xs font-semibold text-[#a5c9a9]">
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

            {/* Bottom Card */}
            <div className="flex items-center gap-4 rounded-2xl bg-[#123e30] p-6">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/10 text-[#a5c9a9]">
                <GraduationCap size={27} />
              </div>

              <div>
                <h3 className="text-base font-bold text-white">
                  Your next academic chapter
                </h3>
                <p className="mt-1 text-xs leading-5 text-[#d5e5d8]">
                  Explore the opportunities ahead.
                </p>
              </div>
            </div>

          </div>

        </div>
      </main>
    </section>
  );
}
