
import { Suspense } from "react";
import { notFound } from "next/navigation";

import { courses } from "@/data/courses";
import { courseDetails } from "@/data/courseDetails";

import CourseDetailHero from "@/components/Courses/Details/CourseDetailHero";
import CourseOverview from "@/components/Courses/Details/CourseOverview";
import CourseCurriculum from "@/components/Courses/Details/CourseCurriculum";

interface CoursePageProps {
  params: Promise<{
    slug: string;
  }>;
}

// Main Page
export default function CourseDetailPage({
  params,
}: CoursePageProps) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center bg-[#f7faf7]">
          <p className="text-sm text-[#285c43]">
            Loading course details...
          </p>
        </div>
      }
    >
      <CourseContent params={params} />
    </Suspense>
  );
}

// Course Content
async function CourseContent({
  params,
}: CoursePageProps) {
  const { slug } = await params;

  const course = courses.find(
    (item) => item.slug === slug
  );

  const details =
    courseDetails[slug as keyof typeof courseDetails];

  if (!course || !details) {
    notFound();
  }

  return (
    <main>
      <CourseDetailHero
        course={course}
        details={details}
      />

      <CourseOverview details={details} />

      <CourseCurriculum details={details} />
    </main>
  );
}
