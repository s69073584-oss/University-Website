import { BookOpen } from "lucide-react";
import { Faculty } from "@/types/faculty";

interface Props {
  teacher: Faculty;
}

export default function FacultyResearch({ teacher }: Props) {
  if (!teacher.research.length) return null;

  return (
    <section className="bg-white py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#123e30] md:text-3xl">
          Research & Publications
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {teacher.research.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-[#dce9df] p-6"
            >
              <BookOpen size={26} className="text-[#185b43]" />

              <h3 className="mt-4 text-lg font-bold text-[#123e30]">
                {item.title}
              </h3>

              <p className="mt-3 leading-7 text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
