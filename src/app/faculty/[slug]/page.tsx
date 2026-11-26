
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { facultyDetails } from "@/data/facultyDetails";
import FacultyProfileHero from "@/components/Faculty/Details/FacultyProfileHero";
import FacultyAbout from "@/components/Faculty/Details/FacultyAbout";
import FacultyExperience from "@/components/Faculty/Details/FacultyExperience";
import FacultyEducation from "@/components/Faculty/Details/FacultyEducation";
import FacultyExpertise from "@/components/Faculty/Details/FacultyExpertise";
import FacultyResearch from "@/components/Faculty/Details/FacultyResearch";
import FacultyCourses from "@/components/Faculty/Details/FacultyCourses";

export default function FacultyProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-[60vh] items-center justify-center bg-[#f7faf7]">
          <p className="text-sm text-[#285c43]">
            Loading faculty profile...
          </p>
        </div>
      }
    >
      <FacultyContent params={params} />
    </Suspense>
  );
}

async function FacultyContent({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const teacher = facultyDetails.find((item) => item.slug === slug);

  if (!teacher) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f7faf7]">
      <FacultyProfileHero teacher={teacher} />
      <FacultyAbout teacher={teacher} />
      <FacultyExperience teacher={teacher} />
      <FacultyEducation teacher={teacher} />
      <FacultyExpertise teacher={teacher} />
      <FacultyResearch teacher={teacher} />
      <FacultyCourses teacher={teacher} />
    </main>
  );
}
