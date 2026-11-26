
"use client";

import { useState } from "react";

type Student = {
  id: number;
  name: string;
  studentId: string;
  academicInfo: string;
  status: "Active" | "Under Review";
};

const students: Student[] = [
  {
    id: 1,
    name: "Ayesha Khan",
    studentId: "AR-2026-101",
    academicInfo: "Computer Science",
    status: "Active",
  },
  {
    id: 2,
    name: "Omar Hassan",
    studentId: "AR-2026-102",
    academicInfo: "Business Administration",
    status: "Under Review",
  },
  {
    id: 3,
    name: "Sara Ahmed",
    studentId: "AR-2026-103",
    academicInfo: "Computer Science",
    status: "Active",
  },
  {
    id: 4,
    name: "Ibrahim Ali",
    studentId: "AR-2026-104",
    academicInfo: "Business Administration",
    status: "Under Review",
  },
  {
    id: 5,
    name: "Fatima Noor",
    studentId: "AR-2026-105",
    academicInfo: "Computer Science",
    status: "Active",
  },
  {
    id: 6,
    name: "Yusuf Malik",
    studentId: "AR-2026-106",
    academicInfo: "Business Administration",
    status: "Active",
  },
  {
    id: 7,
    name: "Zainab Farooq",
    studentId: "AR-2026-107",
    academicInfo: "Computer Science",
    status: "Under Review",
  },
  {
    id: 8,
    name: "Hamza Siddiqui",
    studentId: "AR-2026-108",
    academicInfo: "Business Administration",
    status: "Active",
  },
  {
    id: 9,
    name: "Maryam Iqbal",
    studentId: "AR-2026-109",
    academicInfo: "Computer Science",
    status: "Active",
  },
  {
    id: 10,
    name: "Bilal Ahmed",
    studentId: "AR-2026-110",
    academicInfo: "Business Administration",
    status: "Under Review",
  },
];

export default function StudentDashboard() {
  const [search, setSearch] = useState("");
  const [selectedStudent, setSelectedStudent] =
    useState<Student | null>(null);

  const filteredStudents = students.filter((student) => {
    const query = search.toLowerCase();

    return (
      student.name.toLowerCase().includes(query) ||
      student.studentId.toLowerCase().includes(query) ||
      student.academicInfo.toLowerCase().includes(query) ||
      student.status.toLowerCase().includes(query)
    );
  });

  return (
    <div className="min-h-screen bg-[#f7f9f7] px-5 py-7 sm:px-8">

      {/* Page Heading */}
      <div className="mb-6 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <p className="mb-2 text-xs font-medium text-[#718579]">
            2026-2027 / Fall semester
          </p>

          <h1 className="text-2xl font-semibold tracking-tight text-[#153d30]">
            Students
          </h1>

          <p className="mt-1 text-sm text-[#718579]">
            A clear view of your academic journey. Let's make today count.
          </p>
        </div>
      </div>

      {/* Students Table */}
      <div className="overflow-hidden rounded-xl border border-[#e1e9e3] bg-white">

        {/* Table Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#e8eee9] px-5 py-4 sm:flex-row sm:items-center">
          <h2 className="text-sm font-semibold text-[#153d30]">
            Students overview
          </h2>

          <input
            type="text"
            placeholder="Search records..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-[#dce6df] px-3 py-2 text-xs text-[#153d30] outline-none transition placeholder:text-[#a0aaa3] focus:border-[#39765b] sm:w-56"
          />
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[650px] text-left text-xs">

            <thead className="bg-[#fbfcfb] text-[#65776c]">
              <tr>
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Student ID</th>
                <th className="px-5 py-3 font-medium">
                  Date / academic information
                </th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 text-center font-medium">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#edf1ed]">
              {filteredStudents.map((student) => (
                <tr
                  key={student.id}
                  className="transition hover:bg-[#f9fbf9]"
                >
                  <td className="whitespace-nowrap px-5 py-4 font-medium text-[#294536]">
                    {student.name}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                    {student.studentId}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                    {student.academicInfo}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-medium ${
                        student.status === "Active"
                          ? "bg-[#e5f2e8] text-[#347448]"
                          : "bg-[#edf3e7] text-[#66803c]"
                      }`}
                    >
                      {student.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-center">
                    <button
                      onClick={() => setSelectedStudent(student)}
                      className="whitespace-nowrap font-semibold text-[#174d38] transition hover:text-[#43845e]"
                    >
                      Review →
                    </button>
                  </td>
                </tr>
              ))}

              {filteredStudents.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-10 text-center text-sm text-[#87958b]"
                  >
                    No students found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Table Footer */}
        <div className="border-t border-[#edf1ed] px-5 py-3">
          <p className="text-[10px] text-[#819087]">
            Showing {filteredStudents.length} of {students.length} students
            · Illustrative academic records · Local demo data only
          </p>
        </div>
      </div>

      {/* Student Review Modal */}
      {selectedStudent && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
          onClick={() => setSelectedStudent(null)}
        >
          <div
            className="w-full max-w-md rounded-xl border border-[#e1e9e3] bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#153d30]">
                Student details
              </h2>

              <button
                onClick={() => setSelectedStudent(null)}
                className="text-xl text-[#819087] hover:text-[#153d30]"
                aria-label="Close student details"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs text-[#819087]">Student name</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedStudent.name}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Student ID</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedStudent.studentId}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">
                  Academic information
                </p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedStudent.academicInfo}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Current status</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedStudent.status}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedStudent(null)}
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
