import { BriefcaseBusiness } from "lucide-react";
import { Faculty } from "@/types/faculty";

interface Props {
  teacher: Faculty;
}

export default function FacultyExperience({ teacher }: Props) {
  if (!teacher.experienceDetails.length) return null;

  return (
    <section className="bg-[#f7faf7] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#43865b]">
            Professional Background
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#123e30] md:text-3xl">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-6">
          {teacher.experienceDetails.map((item, index) => (
            <div
              key={index}
              className="flex gap-4 rounded-xl border border-[#dce9df] bg-white p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#edf5ee]">
                <BriefcaseBusiness className="text-[#185b43]" size={22} />
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#123e30]">
                  {item.position}
                </h3>

                <p className="mt-1 font-medium text-[#185b43]">
                  {item.institution}
                </p>

                <p className="mt-1 text-sm text-gray-500">
                  {item.duration}
                </p>

                <p className="mt-3 leading-7 text-gray-600">
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
