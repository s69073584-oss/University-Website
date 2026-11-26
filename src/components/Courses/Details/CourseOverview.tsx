
import type { CourseDetails } from "@/data/courseDetails";

interface CourseOverviewProps {
  details: CourseDetails;
}

export default function CourseOverview({
  details,
}: CourseOverviewProps) {
  return (
    <section className="bg-[#f7faf7] px-5 pb-7">
      <main className="mx-auto max-w-7xl">

        <div className="max-w-4xl">
          <h2 className="text-xl font-bold tracking-tight text-[#123e30]">
            {details.overviewTitle}
          </h2>

          <p className="mt-3 text-xs leading-6 text-gray-600 sm:text-sm">
            {details.overview}
          </p>
        </div>

      </main>
    </section>
  );
}
