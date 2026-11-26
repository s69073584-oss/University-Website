
import FacultyCard from "./FacultyCard";

const facultyMembers = [
  {
    image: "/images/teacher1.jpg",
    name: "Dr. Ayesha Khan",
    department: "Computer Science",
    description:
      "Educator, researcher, and mentor committed to student success.",
    slug: "ayesha-khan",
  },
  {
    image: "/images/teacher2.jpg",
    name: "Dr. Omar Hassan",
    department: "Business Administration",
    description:
      "Educator, researcher, and mentor committed to student success.",
    slug: "omar-hassan",
  },
  {
    image: "/images/teacher3.jpg",
    name: "Dr. Sara Ahmed",
    department: "Natural Sciences",
    description:
      "Educator, researcher, and mentor committed to student success.",
    slug: "sara-ahmed",
  },
  {
    image: "/images/teacher4.jpg",
    name: "Dr. Ibrahim Ali",
    department: "Data Science & Analytics",
    description:
      "Educator, researcher, and mentor committed to student success.",
    slug: "ibrahim-ali",
  },
];

export default function FacultyGrid() {
  return (
    <section className="bg-[#f7f9f6] pb-16">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">

          {facultyMembers.map((faculty) => (
            <FacultyCard
              key={faculty.slug}
              image={faculty.image}
              name={faculty.name}
              department={faculty.department}
              description={faculty.description}
              slug={faculty.slug}
            />
          ))}

        </div>

      </div>
    </section>
  );
}
