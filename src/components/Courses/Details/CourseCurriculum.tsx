
import { ChevronRight } from "lucide-react";
import type { CourseDetails } from "@/data/courseDetails";

interface CourseCurriculumProps {
  details: CourseDetails;
}

export default function CourseCurriculum({
  details,
}: CourseCurriculumProps) {
  return (
    <section className="bg-[#f7faf7] px-5 pb-20">
      <main className="mx-auto max-w-7xl">

        <div className="max-w-4xl">

          <h2 className="mb-4 text-base font-bold text-[#123e30]">
            What you'll learn
          </h2>

          <div className="space-y-2">

            {details.modules.map((module, index) => (
              <div
                key={index}
                className="group flex items-center justify-between gap-3 rounded-lg border border-[#e8ede8] bg-white px-4 py-4 transition hover:border-[#c8dccb] hover:shadow-sm"
              >

                <div className="flex items-center gap-3">
                  <span className="text-[10px] font-semibold text-[#43865b]">
                    Module {index + 1}
                  </span>

                  <span className="text-xs text-[#53685b]">
                    {module}
                  </span>
                </div>

                <ChevronRight
                  size={15}
                  className="shrink-0 text-gray-400 transition group-hover:translate-x-1 group-hover:text-[#185b43]"
                />

              </div>
            ))}

          </div>

        </div>

      </main>
    </section>
  );
}
