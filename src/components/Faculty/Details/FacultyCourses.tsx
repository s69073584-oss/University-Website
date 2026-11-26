import Link from "next/link";
import { BookOpen, ArrowRight } from "lucide-react";
import { Faculty } from "@/types/faculty";

interface Props {
  teacher: Faculty;
}

export default function FacultyCourses({ teacher }: Props) {
  if (!teacher.courses.length) return null;

  return (
    <section className="bg-[#f7faf7] py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-[#123e30] md:text-3xl">
          Courses Taught
        </h2>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {teacher.courses.map((course, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-xl border border-[#dce9df] bg-white p-5"
            >
              <div className="flex items-center gap-3">
                <BookOpen className="shrink-0 text-[#185b43]" size={22} />
                <span className="font-medium text-[#123e30]">
                  {course}
                </span>
              </div>

              <ArrowRight size={18} className="text-[#43865b]" />
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/courses"
            className="inline-flex items-center gap-2 font-semibold text-[#185b43] hover:text-[#10432f]"
          >
            Explore All Courses
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
