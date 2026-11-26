"use client";


"use client";

import { useState } from "react";

type Department = {
  id: number;
  name: string;
  code: string;
  description: string;
  programs: number;
  teachers: number;
  status: "Active" | "Under review";
};

const departments: Department[] = [
  {
    id: 1,
    name: "Computer Science",
    code: "CS",
    description: "Technology, programming and software development.",
    programs: 2,
    teachers: 18,
    status: "Active",
  },
  {
    id: 2,
    name: "Business Administration",
    code: "BA",
    description: "Business management, finance and administration.",
    programs: 2,
    teachers: 15,
    status: "Active",
  },
  {
    id: 3,
    name: "Science & Mathematics",
    code: "SM",
    description: "Scientific studies, mathematics and research.",
    programs: 3,
    teachers: 20,
    status: "Active",
  },
  {
    id: 4,
    name: "Arts & Humanities",
    code: "AH",
    description: "Languages, literature and humanities.",
    programs: 2,
    teachers: 12,
    status: "Under review",
  },
  {
    id: 5,
    name: "Social Sciences",
    code: "SS",
    description: "Social studies and human development.",
    programs: 2,
    teachers: 10,
    status: "Active",
  },
  {
    id: 6,
    name: "Engineering",
    code: "EN",
    description: "Engineering principles and technical education.",
    programs: 2,
    teachers: 9,
    status: "Active",
  },
];

export default function DepartmentsPage() {
  const [search, setSearch] = useState("");
  const [selectedDepartment, setSelectedDepartment] =
    useState<Department | null>(null);

  const filteredDepartments = departments.filter((department) => {
    const query = search.toLowerCase();

    return (
      department.name.toLowerCase().includes(query) ||
      department.code.toLowerCase().includes(query) ||
      department.status.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-[#f7f9f7] px-5 py-7 sm:px-8">

      {/* Heading */}
      <div className="mb-7">
        <p className="mb-2 text-xs font-medium text-[#718579]">
          2026-2027 / Fall semester
        </p>

        <h1 className="text-2xl font-semibold text-[#153d30]">
          Departments
        </h1>

        <p className="mt-1 text-sm text-[#718579]">
          Manage academic departments and their teaching teams.
        </p>
      </div>

      {/* Overview */}
      <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          {
            title: "Total Departments",
            value: departments.length,
            icon: "🏛️",
          },
          {
            title: "Active Departments",
            value: departments.filter((d) => d.status === "Active").length,
            icon: "✓",
          },
          {
            title: "Total Teachers",
            value: departments.reduce((sum, d) => sum + d.teachers, 0),
            icon: "👨‍🏫",
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
              <span className="text-lg text-[#39765b]">{stat.icon}</span>
            </div>

            <h2 className="text-2xl font-semibold text-[#153d30]">
              {stat.value}
            </h2>
          </div>
        ))}
      </div>

      {/* Department List */}
      <div className="mb-5 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h2 className="text-base font-semibold text-[#153d30]">
            All departments
          </h2>
          <p className="mt-1 text-xs text-[#819087]">
            Overview of academic departments
          </p>
        </div>

        <input
          type="text"
          placeholder="Search departments..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-lg border border-[#dce6df] bg-white px-3 py-3 text-xs text-[#153d30] outline-none focus:border-[#39765b] sm:w-64"
        />
      </div>

      {/* Department Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredDepartments.map((department) => (
          <div
            key={department.id}
            className="rounded-xl border border-[#e1e9e3] bg-white p-5 transition hover:border-[#b8d0bf]"
          >
            <div className="mb-5 flex items-start justify-between">
              <div className="flex size-11 items-center justify-center rounded-lg bg-[#e5f0e6] text-sm font-bold text-[#286344]">
                {department.code}
              </div>

              <span
                className={`rounded-full px-3 py-1 text-[10px] font-medium ${
                  department.status === "Active"
                    ? "bg-[#e5f2e8] text-[#347448]"
                    : "bg-[#edf3e7] text-[#66803c]"
                }`}
              >
                {department.status}
              </span>
            </div>

            <h3 className="text-base font-semibold text-[#294536]">
              {department.name}
            </h3>

            <p className="mt-2 min-h-10 text-xs leading-5 text-[#819087]">
              {department.description}
            </p>

            <div className="my-5 grid grid-cols-2 gap-3 border-y border-[#edf1ed] py-4">
              <div>
                <p className="text-lg font-semibold text-[#153d30]">
                  {department.programs}
                </p>
                <p className="text-[10px] text-[#819087]">
                  Programs
                </p>
              </div>

              <div>
                <p className="text-lg font-semibold text-[#153d30]">
                  {department.teachers}
                </p>
                <p className="text-[10px] text-[#819087]">
                  Teachers
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedDepartment(department)}
              className="text-xs font-semibold text-[#174d38] hover:text-[#43845e]"
            >
              View department →
            </button>
          </div>
        ))}

        {filteredDepartments.length === 0 && (
          <div className="col-span-full rounded-xl border border-[#e1e9e3] bg-white p-10 text-center text-sm text-[#819087]">
            No departments found.
          </div>
        )}
      </div>

      {/* Details Modal */}
      {selectedDepartment && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
          onClick={() => setSelectedDepartment(null)}
        >
          <div
            className="w-full max-w-md rounded-xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#153d30]">
                Department details
              </h2>

              <button
                onClick={() => setSelectedDepartment(null)}
                className="text-xl text-[#819087]"
                aria-label="Close department details"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs text-[#819087]">Department</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedDepartment.name}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Department code</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedDepartment.code}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Programs</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedDepartment.programs}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Teachers</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedDepartment.teachers}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Status</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedDepartment.status}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedDepartment(null)}
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
