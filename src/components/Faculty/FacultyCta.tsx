
import Link from "next/link";

const departments = [
  {
    number: "01",
    name: "Computer Science",
    description: "Technology, programming and computing education.",
  },
  {
    number: "02",
    name: "Business Administration",
    description: "Business, management and leadership studies.",
  },
  {
    number: "03",
    name: "Natural Sciences",
    description: "Scientific learning, discovery and research.",
  },
  {
    number: "04",
    name: "Data Science & Analytics",
    description: "Data analysis, statistics and intelligent systems.",
  },
];

export default function FacultyCTA() {
  return (
    <>
      {/* Academic Departments */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-[1120px] px-6 md:px-10">

          <div className="mb-9 max-w-xl">
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#43866a]">
              Explore our academics
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#153f32]">
              Academic departments
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Discover the academic departments that support our
              students through learning and research.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {departments.map((department) => (
              <div
                key={department.number}
                className="rounded-xl border border-[#e5ebe5] bg-[#f8faf7] p-5 transition hover:border-[#a9c9b2]"
              >
                <span className="text-xs font-bold text-[#43866a]">
                  {department.number}
                </span>

                <h3 className="mt-4 text-sm font-semibold text-[#153f32]">
                  {department.name}
                </h3>

                <p className="mt-2 text-xs leading-6 text-gray-500">
                  {department.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Research and Achievements */}
      <section className="bg-[#f7f9f6] py-16">
        <div className="mx-auto grid max-w-[1120px] gap-8 px-6 md:grid-cols-2 md:items-center md:px-10">

          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#43866a]">
              Knowledge in action
            </p>

            <h2 className="mt-2 text-2xl font-bold text-[#153f32]">
              Research & achievements
            </h2>

            <p className="mt-4 text-sm leading-7 text-gray-500">
              Our faculty members contribute to academic growth through
              research, innovation, collaboration and a commitment to
              lifelong learning.
            </p>

            <p className="mt-3 text-sm leading-7 text-gray-500">
              We encourage students to learn from experienced educators
              and explore new ideas through academic activities.
            </p>
          </div>

          <div className="rounded-xl border border-[#e1e9e1] bg-white p-7">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-[#e5f0e5] text-xl text-[#286044]">
              ✦
            </div>

            <h3 className="text-lg font-bold text-[#153f32]">
              Learning beyond the classroom
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Discover an academic environment where teaching,
              research and new perspectives come together.
            </p>
          </div>

        </div>
      </section>

      {/* Join Our Faculty */}
      <section className="bg-[#194f3a] py-16">
        <div className="mx-auto max-w-[900px] px-6 text-center md:px-10">

          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#b8d7bd]">
            Become part of our community
          </p>

          <h2 className="mt-3 text-2xl font-bold text-white md:text-3xl">
            Join our faculty
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-[#d6e5dc]">
            Are you passionate about teaching, research and inspiring
            future generations? We welcome talented educators who want
            to make a difference.
          </p>

          <Link
            href="/contact"
            className="mt-7 inline-flex items-center gap-2 rounded-md bg-white px-6 py-3 text-xs font-semibold text-[#194f3a] transition hover:bg-[#e7f1e6]"
          >
            Contact us
            <span>→</span>
          </Link>

        </div>
      </section>
    </>
  );
}
