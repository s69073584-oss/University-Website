import { BookOpen } from "lucide-react";
import { Faculty } from "@/types/faculty";

interface Props {
  teacher: Faculty;
}

export default function FacultyAbout({ teacher }: Props) {
  return (
    <section className="bg-white py-14">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 md:grid-cols-[1.5fr_1fr] lg:px-8">
        <div>
          <h2 className="text-2xl font-bold text-[#123e30]">
            About Teacher
          </h2>

          <div className="mt-4 h-1 w-14 rounded-full bg-[#43865b]" />

          <p className="mt-6 leading-8 text-gray-600">{teacher.about}</p>
        </div>

        <div className="rounded-xl bg-[#edf5ee] p-6">
          <BookOpen size={28} className="text-[#185b43]" />

          <h3 className="mt-4 text-xl font-bold text-[#123e30]">
            Teaching Philosophy
          </h3>

          <p className="mt-3 leading-7 text-gray-600">
            Add information about the teacher's teaching philosophy,
            classroom approach, and commitment to student learning.
          </p>
        </div>
      </div>
    </section>
  );
}
