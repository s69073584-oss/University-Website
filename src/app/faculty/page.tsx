"use client"

import FacultyHero from "@/components/Faculty/FacultyHero";
import FacultyGrid from "@/components/Faculty/FacultyGrid";
import FacultyCTA from "@/components/Faculty/FacultyCta";

export default function FacultyPage() {
  return (
    <main className="min-h-screen bg-[#f7f9f6]">

      {/* Faculty Hero */}
      <FacultyHero />

      {/* Faculty Members */}
      <FacultyGrid />

      {/* Departments, Research & Join Faculty */}
      <FacultyCTA />

    </main>
  );
}
