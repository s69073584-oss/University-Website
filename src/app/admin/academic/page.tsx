
"use client";

import { useState } from "react";

type Program = {
  id: number;
  name: string;
  department: string;
  duration: string;
  courses: number;
  status: "Active" | "Under review";
};

const programs: Program[] = [
  {
    id: 1,
    name: "Computer Science",
    department: "Technology",
    duration: "4 Years",
    courses: 12,
    status: "Active",
  },
  {
    id: 2,
    name: "Business Administration",
    department: "Business",
    duration: "4 Years",
    courses: 10,
    status: "Active",
  },
  {
    id: 3,
    name: "Mathematics",
    department: "Science",
    duration: "4 Years",
    courses: 8,
    status: "Active",
  },
  {
    id: 4,
    name: "English Language",
    department: "Arts & Humanities",
    duration: "2 Years",
    courses: 6,
    status: "Under review",
  },
  {
    id: 5,
    name: "Physics",
    department: "Science",
    duration: "4 Years",
    courses: 9,
    status: "Active",
  },
];

const departments = [
  { name: "Computer Science", code: "CS", programs: 1 },
  { name: "Business Administration", code: "BA", programs: 1 },
  { name: "Science & Mathematics", code: "SM", programs: 2 },
  { name: "Arts & Humanities", code: "AH", programs: 1 },
];

export default function AcademicDashboard() {
  const [search, setSearch] = useState("");

  const [selectedProgram, setSelectedProgram] =
    useState<Program | null>(null);

  const filteredPrograms = programs.filter((program) => {
    const query = search.toLowerCase();

    return (
      program.name.toLowerCase().includes(query) ||
      program.department.toLowerCase().includes(query) ||
      program.status.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-[#f7f9f7] px-5 py-7 sm:px-8">

      {/* Page Heading */}
      <div className="mb-7">
        <p className="mb-2 text-xs font-medium text-[#718579]">
          2026-2027 / Fall semester
        </p>

        <h1 className="text-2xl font-semibold tracking-tight text-[#153d30]">
          Academic Management
        </h1>

        <p className="mt-1 text-sm text-[#718579]">
          Manage academic programs, departments and learning structures.
        </p>
      </div>

      {/* Overview Cards */}
      <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        {[
          {
            title: "Departments",
            value: "4",
            description: "Academic departments",
            icon: "🏛️",
          },
          {
            title: "Programs",
            value: "5",
            description: "Available programs",
            icon: "🎓",
          },
          {
            title: "Courses",
            value: "45",
            description: "Across all programs",
            icon: "📚",
          },
          {
            title: "Active Semesters",
            value: "1",
            description: "Current academic term",
            icon: "📅",
          },
        ].map((stat) => (
          <div
            key={stat.title}
            className="rounded-xl border border-[#e1e9e3] bg-white p-5"
          >
            <div className="mb-4 flex items-center justify-between">
              <p className="text-xs font-medium text-[#718579]">
                {stat.title}
              </p>

              <span className="text-lg">{stat.icon}</span>
            </div>

            <h2 className="text-2xl font-semibold text-[#153d30]">
              {stat.value}
            </h2>

            <p className="mt-1 text-xs text-[#819087]">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Academic Programs */}
      <div className="overflow-hidden rounded-xl border border-[#e1e9e3] bg-white">

        <div className="flex flex-col justify-between gap-4 border-b border-[#e8eee9] px-5 py-4 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-sm font-semibold text-[#153d30]">
              Academic programs
            </h2>

            <p className="mt-1 text-xs text-[#819087]">
              Overview of available academic programs
            </p>
          </div>

          <input
            type="text"
            placeholder="Search programs..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-[#dce6df] px-3 py-2 text-xs text-[#153d30] outline-none transition placeholder:text-[#a0aaa3] focus:border-[#39765b] sm:w-56"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-xs">

            <thead className="bg-[#fbfcfb] text-[#65776c]">
              <tr>
                <th className="px-5 py-3 font-medium">Program name</th>
                <th className="px-5 py-3 font-medium">Department</th>
                <th className="px-5 py-3 font-medium">Duration</th>
                <th className="px-5 py-3 font-medium">Courses</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 text-center font-medium">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#edf1ed]">
              {filteredPrograms.map((program) => (
                <tr
                  key={program.id}
                  className="transition hover:bg-[#f9fbf9]"
                >
                  <td className="whitespace-nowrap px-5 py-4 font-medium text-[#294536]">
                    {program.name}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                    {program.department}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                    {program.duration}
                  </td>

                  <td className="px-5 py-4 text-[#52665a]">
                    {program.courses}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-medium ${
                        program.status === "Active"
                          ? "bg-[#e5f2e8] text-[#347448]"
                          : "bg-[#edf3e7] text-[#66803c]"
                      }`}
                    >
                      {program.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-center">
                    <button
                      onClick={() => setSelectedProgram(program)}
                      className="whitespace-nowrap font-semibold text-[#174d38] transition hover:text-[#43845e]"
                    >
                      View →
                    </button>
                  </td>
                </tr>
              ))}

              {filteredPrograms.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-10 text-center text-sm text-[#87958b]"
                  >
                    No programs found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="border-t border-[#edf1ed] px-5 py-3">
          <p className="text-[10px] text-[#819087]">
            Showing {filteredPrograms.length} of {programs.length} programs
            · Illustrative academic records · Local demo data only
          </p>
        </div>
      </div>

      {/* Departments */}
      <div className="mt-7">
        <div className="mb-4">
          <h2 className="text-base font-semibold text-[#153d30]">
            Departments overview
          </h2>

          <p className="mt-1 text-xs text-[#819087]">
            Academic departments and their programs
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {departments.map((department) => (
            <div
              key={department.code}
              className="rounded-xl border border-[#e1e9e3] bg-white p-5"
            >
              <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-[#e5f0e6] text-sm font-semibold text-[#286344]">
                {department.code}
              </div>

              <h3 className="text-sm font-semibold text-[#294536]">
                {department.name}
              </h3>

              <p className="mt-2 text-xs text-[#819087]">
                {department.programs} academic programs
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Academic Calendar */}
      <div className="mt-7 rounded-xl border border-[#e1e9e3] bg-white p-5 sm:p-6">
        <h2 className="text-sm font-semibold text-[#153d30]">
          Academic calendar
        </h2>

        <p className="mt-1 text-xs text-[#819087]">
          Current academic session information
        </p>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div>
            <p className="text-xs text-[#819087]">
              Academic year
            </p>
            <p className="mt-2 text-sm font-semibold text-[#294536]">
              2026 - 2027
            </p>
          </div>

          <div>
            <p className="text-xs text-[#819087]">
              Current semester
            </p>
            <p className="mt-2 text-sm font-semibold text-[#294536]">
              Fall Semester
            </p>
          </div>

          <div>
            <p className="text-xs text-[#819087]">
              Academic status
            </p>
            <span className="mt-2 inline-block rounded-full bg-[#e5f2e8] px-3 py-1 text-[10px] font-medium text-[#347448]">
              In progress
            </span>
          </div>
        </div>
      </div>

      {/* Program Details Modal */}
      {selectedProgram && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
          onClick={() => setSelectedProgram(null)}
        >
          <div
            className="w-full max-w-md rounded-xl border border-[#e1e9e3] bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#153d30]">
                Program details
              </h2>

              <button
                onClick={() => setSelectedProgram(null)}
                className="text-xl text-[#819087]"
                aria-label="Close program details"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs text-[#819087]">Program name</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedProgram.name}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Department</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedProgram.department}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Duration</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedProgram.duration}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Total courses</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedProgram.courses}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Status</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedProgram.status}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedProgram(null)}
              className="mt-7 w-full rounded-lg bg-[#174d38] px-4 py-3 text-sm font-medium text-white hover:bg-[#103c2b]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
