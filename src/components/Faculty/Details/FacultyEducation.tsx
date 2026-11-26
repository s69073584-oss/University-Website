import { GraduationCap } from "lucide-react";
import { Faculty } from "@/types/faculty";

interface Props {
  teacher: Faculty;
}

export default function FacultyEducation({ teacher }: Props) {
  if (!teacher.education.length) return null;

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#123e30] md:text-3xl">
          Education & Qualifications
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {teacher.education.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#dce9df] p-6 transition hover:shadow-md"
            >
              <GraduationCap size={28} className="text-[#185b43]" />

              <h3 className="mt-4 text-lg font-bold text-[#123e30]">
                {item.degree}
              </h3>

              <p className="mt-2 text-gray-600">{item.institution}</p>

              <p className="mt-2 text-sm font-medium text-[#43865b]">
                {item.year}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
