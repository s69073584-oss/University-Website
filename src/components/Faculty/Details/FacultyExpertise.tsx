import { CheckCircle2 } from "lucide-react";
import { Faculty } from "@/types/faculty";

interface Props {
  teacher: Faculty;
}

export default function FacultyExpertise({ teacher }: Props) {
  if (!teacher.expertise.length) return null;

  return (
    <section className="bg-[#f7faf7] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#123e30] md:text-3xl">
          Areas of Expertise
        </h2>

        <div className="mt-7 flex flex-wrap gap-3">
          {teacher.expertise.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center gap-2 rounded-full border border-[#dce9df] bg-white px-5 py-3 text-sm font-medium text-[#185b43]"
            >
              <CheckCircle2 size={17} />
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
