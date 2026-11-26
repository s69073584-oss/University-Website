
import Link from "next/link";
import { Clock3, GraduationCap, Code2 } from "lucide-react";
import type { Course } from "@/data/courses";
import type { CourseDetails } from "@/data/courseDetails";

interface CourseDetailHeroProps {
  course: Course;
  details: CourseDetails;
}

export default function CourseDetailHero({
  course,
  details,
}: CourseDetailHeroProps) {
  const Icon = course.icon;

  return (
    <section className="bg-[#f7faf7] px-5 pt-12 pb-8 sm:pt-16">
      <main className="mx-auto max-w-7xl">

        {/* Breadcrumb */}
        <div className="mb-10 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="hover:text-[#185b43]">
            Home
          </Link>
          <span>/</span>
          <Link href="/courses" className="hover:text-[#185b43]">
            Courses
          </Link>
          <span>/</span>
          <span className="font-medium text-[#285c43]">
            Course Details
          </span>
        </div>

        {/* Main Grid */}
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-10">

          {/* Left Content */}
          <div className="lg:col-span-9">

            {/* Course Category */}
            <p className="text-[10px] font-bold tracking-[1.5px] text-[#43865b]">
              {course.category.toUpperCase()} · {course.school.toUpperCase()}
            </p>

            {/* Course Title */}
            <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-[#123e30] sm:text-4xl">
              {course.title}
            </h1>

            <p className="mt-3 text-xs leading-6 text-gray-600 sm:text-sm">
              {course.description}
            </p>

            {/* Course Visual */}
            <div className="mt-6 flex h-[280px] w-full items-center justify-center overflow-hidden rounded-xl bg-[#e4efe5] sm:h-[340px] lg:h-[380px] lg:w-[90%]">
              <Icon
                size={58}
                strokeWidth={1.7}
                className="text-[#43865b]"
              />
            </div>

          </div>

          {/* Right Information Card */}
          <aside className="lg:col-span-3">
            <div className="rounded-xl border border-[#e6ebe6] bg-white p-5 shadow-sm">

              <h2 className="text-sm font-bold text-[#123e30]">
                Your next chapter
              </h2>

              {/* Duration */}
              <div className="mt-5">
                <p className="text-[10px] text-gray-400">
                  Duration
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <Clock3 size={13} className="text-[#43865b]" />
                  <p className="text-xs font-medium text-[#285c43]">
                    {details.duration}
                  </p>
                </div>
              </div>

              {/* Format */}
              <div className="mt-5">
                <p className="text-[10px] text-gray-400">
                  Format
                </p>
                <p className="mt-1 text-xs text-[#244b39]">
                  {details.format}
                </p>
              </div>

              {/* Requirements */}
              <div className="mt-5">
                <p className="text-[10px] text-gray-400">
                  Entry requirements
                </p>
                <p className="mt-1 text-xs text-[#244b39]">
                  {details.requirements}
                </p>
              </div>

              {/* Instructor */}
              <div className="mt-5">
                <p className="text-[10px] text-gray-400">
                  Instructor
                </p>
                <div className="mt-1 flex items-center gap-2">
                  <GraduationCap size={14} className="text-[#43865b]" />
                  <p className="text-xs text-[#244b39]">
                    {details.instructor}
                  </p>
                </div>
              </div>

              {/* Apply Button */}
              <Link
                href={`/contact?course=${course.slug}`}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-[#185b43] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#10432f]"
              >
                Start your application
                <span>→</span>
              </Link>

              <p className="mt-3 text-[10px] leading-5 text-gray-500">
                Sample programs. Official offerings and eligibility
                require institutional verification.
              </p>

            </div>
          </aside>

        </div>
      </main>
    </section>
  );
}
