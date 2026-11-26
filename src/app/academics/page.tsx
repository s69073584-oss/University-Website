"use client"

import AcademicsHero from "@/components/Academics/AcademicsHero"
import BachelorsPrograms from "@/components/Academics/BachelorsPrograms"
import MastersPrograms from "@/components/Academics/MastersPrograms"
import SchoolEducation from "@/components/Academics/SchoolEducation"


export default function AcademicsPage() {
    return (
        <div>
      <AcademicsHero />
      <SchoolEducation />
      <BachelorsPrograms />
      <MastersPrograms />
        </div>
    )
}