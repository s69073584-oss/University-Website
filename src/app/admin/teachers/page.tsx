
"use client";

import { useState } from "react";

type Teacher = {
  id: number;
  name: string;
  teacherId: string;
  department: string;
  subject: string;
  status: "Active" | "Under review";
};

const teachers: Teacher[] = [
  {
    id: 1,
    name: "Ayesha Khan",
    teacherId: "AR-T-101",
    department: "Computer Science",
    subject: "Web Development",
    status: "Active",
  },
  {
    id: 2,
    name: "Omar Hassan",
    teacherId: "AR-T-102",
    department: "Business Administration",
    subject: "Business Management",
    status: "Under review",
  },
  {
    id: 3,
    name: "Sara Ahmed",
    teacherId: "AR-T-103",
    department: "Computer Science",
    subject: "Programming",
    status: "Active",
  },
  {
    id: 4,
    name: "Ibrahim Ali",
    teacherId: "AR-T-104",
    department: "Mathematics",
    subject: "Applied Mathematics",
    status: "Active",
  },
  {
    id: 5,
    name: "Fatima Noor",
    teacherId: "AR-T-105",
    department: "English",
    subject: "English Literature",
    status: "Under review",
  },
  {
    id: 6,
    name: "Usman Malik",
    teacherId: "AR-T-106",
    department: "Science",
    subject: "Physics",
    status: "Active",
  },
  {
    id: 7,
    name: "Hina Tariq",
    teacherId: "AR-T-107",
    department: "Computer Science",
    subject: "Database Management",
    status: "Active",
  },
  {
    id: 8,
    name: "Bilal Ahmed",
    teacherId: "AR-T-108",
    department: "Business Administration",
    subject: "Accounting",
    status: "Under review",
  },
];

export default function TeachersPage() {
  const [search, setSearch] = useState("");
  const [selectedTeacher, setSelectedTeacher] =
    useState<Teacher | null>(null);

  const filteredTeachers = teachers.filter((teacher) => {
    const query = search.toLowerCase();

    return (
      teacher.name.toLowerCase().includes(query) ||
      teacher.teacherId.toLowerCase().includes(query) ||
      teacher.department.toLowerCase().includes(query) ||
      teacher.subject.toLowerCase().includes(query) ||
      teacher.status.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-[#f7f9f7] px-5 py-7 sm:px-8">

      {/* Page Heading */}
      <div className="mb-6">
        <p className="mb-2 text-xs font-medium text-[#718579]">
          2026-2027 / Fall semester
        </p>

        <h1 className="text-2xl font-semibold tracking-tight text-[#153d30]">
          Teachers
        </h1>

        <p className="mt-1 text-sm text-[#718579]">
          A clear view of your academic journey. Let's make today count.
        </p>
      </div>

      {/* Teachers Overview */}
      <div className="overflow-hidden rounded-xl border border-[#e1e9e3] bg-white">

        {/* Table Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#e8eee9] px-5 py-4 sm:flex-row sm:items-center">
          <h2 className="text-sm font-semibold text-[#153d30]">
            Teachers overview
          </h2>

          <input
            type="text"
            placeholder="Search records..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-[#dce6df] px-3 py-2 text-xs text-[#153d30] outline-none transition placeholder:text-[#a0aaa3] focus:border-[#39765b] sm:w-56"
          />
        </div>

        {/* Teachers Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-xs">

            <thead className="bg-[#fbfcfb] text-[#65776c]">
              <tr>
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Teacher ID</th>
                <th className="px-5 py-3 font-medium">
                  Department / Subject
                </th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 text-center font-medium">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#edf1ed]">
              {filteredTeachers.map((teacher) => (
                <tr
                  key={teacher.id}
                  className="transition hover:bg-[#f9fbf9]"
                >
                  <td className="whitespace-nowrap px-5 py-4 font-medium text-[#294536]">
                    {teacher.name}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                    {teacher.teacherId}
                  </td>

                  <td className="px-5 py-4">
                    <p className="whitespace-nowrap text-[#52665a]">
                      {teacher.department}
                    </p>
                    <p className="mt-1 whitespace-nowrap text-[10px] text-[#819087]">
                      {teacher.subject}
                    </p>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-medium ${
                        teacher.status === "Active"
                          ? "bg-[#e5f2e8] text-[#347448]"
                          : "bg-[#edf3e7] text-[#66803c]"
                      }`}
                    >
                      {teacher.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-center">
                    <button
                      onClick={() => setSelectedTeacher(teacher)}
                      className="whitespace-nowrap font-semibold text-[#174d38] transition hover:text-[#43845e]"
                    >
                      Review →
                    </button>
                  </td>
                </tr>
              ))}

              {filteredTeachers.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-10 text-center text-sm text-[#87958b]"
                  >
                    No teachers found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Footer */}
        <div className="border-t border-[#edf1ed] px-5 py-3">
          <p className="text-[10px] text-[#819087]">
            Showing {filteredTeachers.length} of {teachers.length} teachers
            · Illustrative academic records · Local demo data only
          </p>
        </div>
      </div>

      {/* Teacher Details Modal */}
      {selectedTeacher && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
          onClick={() => setSelectedTeacher(null)}
        >
          <div
            className="w-full max-w-md rounded-xl border border-[#e1e9e3] bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#153d30]">
                Teacher details
              </h2>

              <button
                onClick={() => setSelectedTeacher(null)}
                className="text-xl text-[#819087] hover:text-[#153d30]"
                aria-label="Close teacher details"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs text-[#819087]">Teacher name</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedTeacher.name}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Teacher ID</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedTeacher.teacherId}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Department</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedTeacher.department}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Subject</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedTeacher.subject}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Current status</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedTeacher.status}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedTeacher(null)}
              className="mt-7 w-full rounded-lg bg-[#174d38] px-4 py-3 text-sm font-medium text-white transition hover:bg-[#103c2b]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
