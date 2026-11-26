
import Link from "next/link";
import { Clock3, ArrowRight } from "lucide-react";
import type { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  const Icon = course.icon;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-lg border border-[#e6ebe6] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#c6d9c9] hover:shadow-lg">

      {/* Card Image / Icon Area */}
      <div
        className={`relative flex h-[155px] items-center justify-center ${course.theme}`}
      >

        {/* Category Badge */}
        <span className="absolute left-3 top-3 rounded-md border border-white/70 bg-white/90 px-2.5 py-1 text-[9px] font-semibold text-[#285c43] shadow-sm">
          {course.category}
        </span>

        {/* Icon Background */}
        <div className="flex h-[62px] w-[62px] rotate-[-8deg] items-center justify-center rounded-xl border border-white/80 bg-white/75 shadow-sm transition duration-300 group-hover:rotate-0 group-hover:scale-110">
          <Icon
            size={28}
            strokeWidth={1.8}
            className="text-[#185b43]"
          />
        </div>

      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-4">

        {/* School Name */}
        <p className="text-[10px] font-medium text-[#829087]">
          {course.school}
        </p>

        {/* Course Title */}
        <h3 className="mt-2 text-base font-bold leading-snug text-[#123e30] transition group-hover:text-[#2c7953]">
          {course.title}
        </h3>

        {/* Description */}
        <p className="mt-2 min-h-[58px] text-xs leading-5 text-gray-600">
          {course.description}
        </p>

        {/* Footer */}
        <div className="mt-auto flex items-center justify-between gap-2 border-t border-[#edf0ed] pt-4">

          <div className="flex items-center gap-1.5 text-gray-500">
            <Clock3 size={13} />
            <span className="text-[10px] font-medium whitespace-nowrap">
              {course.duration}
            </span>
          </div>

          <Link
            href={`/courses/${course.slug}`}
            className="inline-flex items-center gap-1 text-[10px] font-semibold text-[#285c43] transition hover:text-[#123e30]"
          >
            View course
            <ArrowRight
              size={13}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>
      </div>

    </article>
  );
}
