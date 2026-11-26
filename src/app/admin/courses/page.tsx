
"use client";

import { useMemo, useState } from "react";
import {
  Code2,
  BriefcaseBusiness,
  FlaskConical,
  ChartNoAxesColumnIncreasing,
  Calculator,
  Database,
  Palette,
  Atom,
  Globe,
  BookOpen,
  Brain,
  Monitor,
  Clock3,
  ArrowRight,
  Users,
  X,
} from "lucide-react";

type Course = {
  id: number;
  title: string;
  code: string;
  department: string;
  instructor: string;
  students: number;
  duration: string;
  category: string;
  level: string;
  status: "Active" | "Under review";
  description: string;
};

const courses: Course[] = [
  {
    id: 1,
    title: "Computer Science",
    code: "CS-101",
    department: "Computer Science",
    instructor: "Ayesha Khan",
    students: 45,
    duration: "4 years",
    category: "Technology",
    level: "Bachelor's",
    status: "Active",
    description:
      "Build the ideas, systems, and technologies that shape our world.",
  },
  {
    id: 2,
    title: "Business Administration",
    code: "BA-101",
    department: "Business Administration",
    instructor: "Omar Hassan",
    students: 40,
    duration: "4 years",
    category: "Business",
    level: "Bachelor's",
    status: "Active",
    description:
      "Develop the confidence to lead, innovate, and make an impact.",
  },
  {
    id: 3,
    title: "Natural Sciences",
    code: "SC-101",
    department: "Science & Mathematics",
    instructor: "Sara Ahmed",
    students: 35,
    duration: "Classes 9-12",
    category: "Science",
    level: "School",
    status: "Active",
    description:
      "Turn curiosity into discovery through hands-on exploration.",
  },
  {
    id: 4,
    title: "Data Science & Analytics",
    code: "DS-101",
    department: "Computer Science",
    instructor: "Hina Tariq",
    students: 32,
    duration: "2 years",
    category: "Technology",
    level: "Master's",
    status: "Active",
    description:
      "Find meaningful answers to tomorrow's biggest questions.",
  },
  {
    id: 5,
    title: "Web Development",
    code: "CS-102",
    department: "Computer Science",
    instructor: "Bilal Ahmed",
    students: 48,
    duration: "12 weeks",
    category: "Technology",
    level: "Certificate",
    status: "Active",
    description:
      "Learn to create modern, responsive and interactive websites.",
  },
  {
    id: 6,
    title: "Financial Accounting",
    code: "BA-102",
    department: "Business Administration",
    instructor: "Fatima Noor",
    students: 29,
    duration: "12 weeks",
    category: "Business",
    level: "Bachelor's",
    status: "Active",
    description:
      "Understand financial records, reporting and accounting principles.",
  },
  {
    id: 7,
    title: "Applied Mathematics",
    code: "MA-101",
    department: "Science & Mathematics",
    instructor: "Ibrahim Ali",
    students: 38,
    duration: "4 years",
    category: "Science",
    level: "Bachelor's",
    status: "Active",
    description:
      "Explore mathematical methods and their practical applications.",
  },
  {
    id: 8,
    title: "Graphic Design",
    code: "AR-101",
    department: "Arts & Humanities",
    instructor: "Usman Malik",
    students: 26,
    duration: "6 months",
    category: "Arts",
    level: "Certificate",
    status: "Active",
    description:
      "Develop creative skills through visual communication and design.",
  },
  {
    id: 9,
    title: "Physics",
    code: "SC-102",
    department: "Science & Mathematics",
    instructor: "Sara Ahmed",
    students: 31,
    duration: "4 years",
    category: "Science",
    level: "Bachelor's",
    status: "Under review",
    description:
      "Discover the fundamental laws that explain our universe.",
  },
  {
    id: 10,
    title: "Artificial Intelligence",
    code: "CS-103",
    department: "Computer Science",
    instructor: "Ayesha Khan",
    students: 42,
    duration: "2 years",
    category: "Technology",
    level: "Master's",
    status: "Active",
    description:
      "Explore intelligent systems, machine learning and AI applications.",
  },
  {
    id: 11,
    title: "English Literature",
    code: "AH-101",
    department: "Arts & Humanities",
    instructor: "Fatima Noor",
    students: 25,
    duration: "2 years",
    category: "Arts",
    level: "Bachelor's",
    status: "Active",
    description:
      "Explore literature, language and the power of storytelling.",
  },
  {
    id: 12,
    title: "Database Management",
    code: "CS-104",
    department: "Computer Science",
    instructor: "Hina Tariq",
    students: 36,
    duration: "16 weeks",
    category: "Technology",
    level: "Certificate",
    status: "Active",
    description:
      "Learn database design, SQL and modern data management.",
  },
];

const categoryStyles: Record<
  string,
  { background: string; school: string; icon: typeof Code2 }
> = {
  Technology: {
    background: "bg-[#e2ebe0]",
    school: "School of Technology",
    icon: Code2,
  },
  Business: {
    background: "bg-[#eeeade]",
    school: "School of Business",
    icon: BriefcaseBusiness,
  },
  Science: {
    background: "bg-[#e0ebea]",
    school: "School of Science",
    icon: FlaskConical,
  },
  Arts: {
    background: "bg-[#e8e9e0]",
    school: "School of Arts",
    icon: Palette,
  },
};

const categoryOptions = [
  "All programs",
  "Technology",
  "Business",
  "Science",
  "Arts",
];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All programs");
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const filteredCourses = useMemo(() => {
    const query = search.toLowerCase().trim();

    return courses.filter((course) => {
      const matchesSearch =
        course.title.toLowerCase().includes(query) ||
        course.code.toLowerCase().includes(query) ||
        course.department.toLowerCase().includes(query) ||
        course.instructor.toLowerCase().includes(query);

      const matchesCategory =
        category === "All programs" || course.category === category;

      return matchesSearch && matchesCategory;
    });
  }, [search, category]);

  const totalStudents = courses.reduce(
    (total, course) => total + course.students,
    0
  );

  return (
    <div className="min-h-screen bg-[#f7f9f7] px-5 py-7 sm:px-8">

      {/* Breadcrumb */}
      <div className="mb-7">
        <div className="mb-7 flex items-center gap-2 text-xs text-[#819087]">
          <span>Home</span>
          <span>/</span>
          <span className="font-medium text-[#174d38]">Courses</span>
        </div>

        <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#39765b]">
          Find your direction
        </p>

        <h1 className="text-2xl font-semibold tracking-tight text-[#153d30] sm:text-3xl">
          Big ambitions start here.
        </h1>

        <p className="mt-2 text-xs leading-5 text-[#718579]">
          Explore our academic offerings and find a path that fits your curiosity.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="mb-7 flex flex-col gap-3 sm:flex-row">

        <div className="relative flex-1">
          <ChartNoAxesColumnIncreasing
            size={15}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[#819087]"
          />

          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search programs and courses..."
            className="w-full rounded-lg border border-[#dce6df] bg-white py-3 pl-9 pr-4 text-xs text-[#153d30] outline-none transition focus:border-[#39765b]"
          />
        </div>

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="rounded-lg border border-[#dce6df] bg-white px-3 py-3 text-xs text-[#294536] outline-none focus:border-[#39765b] sm:w-44"
        >
          {categoryOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>

      {/* Course Results */}
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h2 className="text-sm font-semibold text-[#153d30]">
            Explore programs
          </h2>
          <p className="mt-1 text-[11px] text-[#819087]">
            Discover courses designed for your future.
          </p>
        </div>

        <span className="text-xs text-[#718579]">
          {filteredCourses.length} courses
        </span>
      </div>

      {/* Course Cards */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {filteredCourses.map((course) => {
          const theme = categoryStyles[course.category];
          const Icon = theme.icon;

          return (
            <article
              key={course.id}
              className="group flex min-h-[320px] flex-col overflow-hidden rounded-xl border border-[#e1e9e3] bg-white transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Card Image / Icon Area */}
              <div
                className={`relative flex h-28 shrink-0 items-center justify-center ${theme.background}`}
              >
                <span className="absolute left-3 top-3 rounded bg-white px-2 py-1 text-[9px] font-semibold text-[#426451]">
                  {course.level}
                </span>

                <div className="flex size-[66px] rotate-[-8deg] items-center justify-center rounded-xl bg-white/75 shadow-sm transition duration-300 group-hover:rotate-0 group-hover:scale-105">
                  <Icon
                    size={30}
                    strokeWidth={1.8}
                    className="text-[#39765b]"
                  />
                </div>
              </div>

              {/* Card Information */}
              <div className="flex flex-1 flex-col p-4">

                <p className="mb-2 text-[9px] font-medium text-[#819087]">
                  {theme.school}
                </p>

                <h3 className="text-sm font-semibold leading-5 text-[#153d30]">
                  {course.title}
                </h3>

                <p className="mt-2 line-clamp-3 text-[11px] leading-[1.7] text-[#718579]">
                  {course.description}
                </p>

                {/* Course Footer */}
                <div className="mt-auto border-t border-[#edf1ed] pt-4">
                  <div className="mb-3 flex items-center justify-between">
                    <div className="flex items-center gap-1.5 text-[10px] text-[#718579]">
                      <Clock3 size={12} />
                      {course.duration}
                    </div>

                    <div className="flex items-center gap-1 text-[10px] text-[#718579]">
                      <Users size={12} />
                      {course.students}
                    </div>
                  </div>

                  <button
                    onClick={() => setSelectedCourse(course)}
                    className="flex w-full items-center justify-between text-[11px] font-semibold text-[#174d38] transition hover:text-[#43845e]"
                  >
                    View course
                    <ArrowRight
                      size={14}
                      className="transition group-hover:translate-x-1"
                    />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Empty Search State */}
      {filteredCourses.length === 0 && (
        <div className="rounded-xl border border-[#e1e9e3] bg-white px-5 py-16 text-center">
          <BookOpen
            size={30}
            className="mx-auto mb-3 text-[#819087]"
          />
          <h3 className="text-sm font-semibold text-[#294536]">
            No courses found
          </h3>
          <p className="mt-2 text-xs text-[#819087]">
            Try another search term or select a different category.
          </p>
          <button
            onClick={() => {
              setSearch("");
              setCategory("All programs");
            }}
            className="mt-4 text-xs font-semibold text-[#174d38] hover:underline"
          >
            Clear filters
          </button>
        </div>
      )}

      {/* Course Details Modal */}
      {selectedCourse && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setSelectedCourse(null)}
        >
          <div
            className="w-full max-w-md rounded-xl border border-[#e1e9e3] bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#819087]">
                  {selectedCourse.code}
                </p>

                <h2 className="mt-1 text-lg font-semibold text-[#153d30]">
                  {selectedCourse.title}
                </h2>
              </div>

              <button
                onClick={() => setSelectedCourse(null)}
                className="rounded-lg p-2 text-[#819087] transition hover:bg-[#f1f5f1]"
                aria-label="Close course details"
              >
                <X size={19} />
              </button>
            </div>

            <p className="mb-5 text-xs leading-6 text-[#718579]">
              {selectedCourse.description}
            </p>

            <div className="space-y-4 border-t border-[#edf1ed] pt-5 text-sm">

              <div className="flex justify-between gap-3">
                <span className="text-xs text-[#819087]">Department</span>
                <span className="text-right text-xs font-medium text-[#294536]">
                  {selectedCourse.department}
                </span>
              </div>

              <div className="flex justify-between gap-3">
                <span className="text-xs text-[#819087]">Instructor</span>
                <span className="text-xs font-medium text-[#294536]">
                  {selectedCourse.instructor}
                </span>
              </div>

              <div className="flex justify-between gap-3">
                <span className="text-xs text-[#819087]">Duration</span>
                <span className="text-xs font-medium text-[#294536]">
                  {selectedCourse.duration}
                </span>
              </div>

              <div className="flex justify-between gap-3">
                <span className="text-xs text-[#819087]">Students</span>
                <span className="text-xs font-medium text-[#294536]">
                  {selectedCourse.students}
                </span>
              </div>

              <div className="flex justify-between gap-3">
                <span className="text-xs text-[#819087]">Level</span>
                <span className="text-xs font-medium text-[#294536]">
                  {selectedCourse.level}
                </span>
              </div>

              <div className="flex justify-between gap-3">
                <span className="text-xs text-[#819087]">Status</span>
                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-medium ${
                    selectedCourse.status === "Active"
                      ? "bg-[#e5f2e8] text-[#347448]"
                      : "bg-[#edf3e7] text-[#66803c]"
                  }`}
                >
                  {selectedCourse.status}
                </span>
              </div>
            </div>

            <button
              onClick={() => setSelectedCourse(null)}
              className="mt-7 w-full rounded-lg bg-[#174d38] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#103c2b]"
            >
              Close details
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
