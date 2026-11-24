
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  GraduationCap,
} from "lucide-react";

const faculty = [
  {
    name: "Dr. Sarah Ahmed",
    designation: "Senior Professor",
    subject: "Computer Science",
    image:
      "/images/teacher1.jpg",
    experience: "12+ Years Experience",
  },
  {
    name: "Prof. James Wilson",
    designation: "Associate Professor",
    subject: "Mathematics",
    image:
      "/images/teacher2.jpg",
    experience: "10+ Years Experience",
  },
  {
    name: "Dr. Emily Carter",
    designation: "Senior Lecturer",
    subject: "Natural Sciences",
    image:
      "/images/teacher3.jpg",
    experience: "8+ Years Experience",
  },
  {
    name: "Prof. Michael Brown",
    designation: "Faculty Member",
    subject: "Business Studies",
    image:
      "/images/teacher4.jpg",
    experience: "9+ Years Experience",
  },
];

export default function FacultySection() {
  return (
    <section className="bg-white px-5 py-16 sm:px-8 lg:py-24">

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">

          <div className="max-w-2xl">

            <div className="mb-4 flex items-center gap-2">
              <GraduationCap size={16} className="text-[#438064]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#438064]">
                Meet Our Educators
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#183b2e] sm:text-4xl lg:text-5xl">
              Learn from those
              <span className="text-[#4b966b]">
                {" "}who inspire.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#78867d]">
              Meet the passionate educators who bring knowledge,
              experience, and dedication into every learning experience.
            </p>

          </div>

          <Link
            href="/faculty"
            className="group inline-flex items-center gap-2 rounded-md border border-[#d9e5dc] px-4 py-3 text-xs font-semibold text-[#245c42] transition hover:bg-[#245c42] hover:text-white"
          >
            View All Faculty

            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* Faculty Cards */}
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {faculty.map((teacher) => (
            <div
              key={teacher.name}
              className="group overflow-hidden rounded-xl border border-[#e6ece6] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#cbdacb] hover:shadow-xl"
            >

              {/* Teacher Image */}
              <div className="relative h-[280px] overflow-hidden bg-[#e6f0e5]">

                <img
                  src={teacher.image}
                  alt={teacher.name}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Image Badge */}
                <div className="absolute bottom-3 left-3 rounded-md border border-white/30 bg-white/90 px-3 py-1.5 backdrop-blur-sm">
                  <span className="text-[10px] font-semibold text-[#245c42]">
                    {teacher.subject}
                  </span>
                </div>

                {/* Hover Arrow */}
                <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white text-[#245c42] opacity-0 shadow-sm transition-all duration-300 group-hover:opacity-100">
                  <ArrowUpRight size={16} />
                </div>

              </div>

              {/* Teacher Details */}
              <div className="p-5">

                <h3 className="text-base font-bold text-[#183b2e]">
                  {teacher.name}
                </h3>

                <p className="mt-1 text-xs font-medium text-[#438064]">
                  {teacher.designation}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-[#edf1ed] pt-4">

                  <span className="text-[10px] text-[#859188]">
                    {teacher.experience}
                  </span>

                  <Link
                    href="/faculty"
                    aria-label={`View ${teacher.name}'s profile`}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-[#e6f0e5] text-[#34775c] transition hover:bg-[#245c42] hover:text-white"
                  >
                    <ArrowUpRight size={15} />
                  </Link>

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
