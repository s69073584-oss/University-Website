
"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  ClipboardCheck,
  GraduationCap,
  Award,
  Search,
  Clock3,
  MapPin,
  X,
} from "lucide-react";

type Exam = {
  id: number;
  name: string;
  subject: string;
  className: string;
  date: string;
  time: string;
  room: string;
  type: string;
  status: "Upcoming" | "Completed";
};

type Result = {
  id: number;
  student: string;
  studentId: string;
  exam: string;
  subject: string;
  marks: number;
  totalMarks: number;
  grade: string;
  status: "Pass" | "Fail";
};

const exams: Exam[] = [
  { id: 1, name: "Midterm Examination", subject: "Mathematics", className: "Class 10-A", date: "2026-12-02", time: "09:00 AM - 12:00 PM", room: "Hall 01", type: "Written", status: "Upcoming" },
  { id: 2, name: "Midterm Examination", subject: "English", className: "Class 10-A", date: "2026-12-04", time: "09:00 AM - 12:00 PM", room: "Hall 02", type: "Written", status: "Upcoming" },
  { id: 3, name: "Practical Assessment", subject: "Computer Science", className: "Class 10-B", date: "2026-12-06", time: "10:00 AM - 01:00 PM", room: "Computer Lab", type: "Practical", status: "Upcoming" },
  { id: 4, name: "Midterm Examination", subject: "Physics", className: "Class 10-A", date: "2026-11-18", time: "09:00 AM - 12:00 PM", room: "Hall 01", type: "Written", status: "Completed" },
  { id: 5, name: "Class Assessment", subject: "Biology", className: "Class 10-B", date: "2026-11-20", time: "10:00 AM - 11:30 AM", room: "Room 103", type: "Assessment", status: "Completed" },
  { id: 6, name: "Midterm Examination", subject: "Business Studies", className: "Class 10-B", date: "2026-11-22", time: "09:00 AM - 12:00 PM", room: "Hall 02", type: "Written", status: "Completed" },
];

const initialResults: Result[] = [
  { id: 1, student: "Ayesha Khan", studentId: "AR-2026-101", exam: "Midterm Examination", subject: "Mathematics", marks: 88, totalMarks: 100, grade: "A", status: "Pass" },
  { id: 2, student: "Omar Hassan", studentId: "AR-2026-102", exam: "Midterm Examination", subject: "Physics", marks: 76, totalMarks: 100, grade: "B", status: "Pass" },
  { id: 3, student: "Sara Ahmed", studentId: "AR-2026-103", exam: "Midterm Examination", subject: "English", marks: 92, totalMarks: 100, grade: "A+", status: "Pass" },
  { id: 4, student: "Ibrahim Ali", studentId: "AR-2026-104", exam: "Midterm Examination", subject: "Mathematics", marks: 42, totalMarks: 100, grade: "F", status: "Fail" },
  { id: 5, student: "Fatima Noor", studentId: "AR-2026-105", exam: "Midterm Examination", subject: "Physics", marks: 81, totalMarks: 100, grade: "A", status: "Pass" },
  { id: 6, student: "Bilal Ahmed", studentId: "AR-2026-106", exam: "Midterm Examination", subject: "English", marks: 68, totalMarks: 100, grade: "B", status: "Pass" },
  { id: 7, student: "Hina Tariq", studentId: "AR-2026-107", exam: "Midterm Examination", subject: "Mathematics", marks: 95, totalMarks: 100, grade: "A+", status: "Pass" },
  { id: 8, student: "Usman Malik", studentId: "AR-2026-108", exam: "Midterm Examination", subject: "Physics", marks: 35, totalMarks: 100, grade: "F", status: "Fail" },
];

type Tab = "Exams" | "Results";

export default function ExamsPage() {
  const [activeTab, setActiveTab] = useState<Tab>("Exams");
  const [search, setSearch] = useState("");
  const [selectedResult, setSelectedResult] = useState<Result | null>(null);

  const [results] = useState<Result[]>(initialResults);

  const filteredExams = useMemo(() => {
    const query = search.toLowerCase().trim();

    return exams.filter((exam) =>
      [
        exam.name,
        exam.subject,
        exam.className,
        exam.room,
        exam.type,
        exam.status,
      ].some((value) => value.toLowerCase().includes(query))
    );
  }, [search]);

  const filteredResults = useMemo(() => {
    const query = search.toLowerCase().trim();

    return results.filter((result) =>
      [
        result.student,
        result.studentId,
        result.exam,
        result.subject,
        result.grade,
        result.status,
      ].some((value) => value.toLowerCase().includes(query))
    );
  }, [search, results]);

  const upcomingExams = exams.filter((exam) => exam.status === "Upcoming").length;
  const completedExams = exams.filter((exam) => exam.status === "Completed").length;
  const publishedResults = results.length;
  const passCount = results.filter((result) => result.status === "Pass").length;

  const averageMarks =
    results.length > 0
      ? Math.round(
          results.reduce(
            (total, result) => total + (result.marks / result.totalMarks) * 100,
            0
          ) / results.length
        )
      : 0;

  return (
    <div className="min-h-screen bg-[#f7f9f7] px-5 py-7 sm:px-8">

      {/* Page Heading */}
      <div className="mb-7">
        <p className="mb-2 text-xs font-medium text-[#718579]">
          2026-2027 / Fall semester
        </p>

        <h1 className="text-2xl font-semibold tracking-tight text-[#153d30]">
          Exams & Results
        </h1>

        <p className="mt-1 text-sm text-[#718579]">
          Manage examination schedules, student assessments and academic results.
        </p>
      </div>

      {/* Statistics */}
      <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Total Exams",
            value: exams.length,
            icon: CalendarDays,
          },
          {
            title: "Upcoming Exams",
            value: upcomingExams,
            icon: Clock3,
          },
          {
            title: "Completed Exams",
            value: completedExams,
            icon: ClipboardCheck,
          },
          {
            title: "Published Results",
            value: publishedResults,
            icon: Award,
          },
        ].map((stat) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.title}
              className="rounded-xl border border-[#e1e9e3] bg-white p-5"
            >
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-medium text-[#718579]">
                  {stat.title}
                </p>
                <Icon size={19} className="text-[#39765b]" />
              </div>

              <h2 className="text-2xl font-semibold text-[#153d30]">
                {stat.value}
              </h2>
            </div>
          );
        })}
      </div>

      {/* Results Summary */}
      <div className="mb-7 grid grid-cols-1 gap-4 md:grid-cols-2">
        <div className="rounded-xl border border-[#e1e9e3] bg-white p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-medium text-[#718579]">
              Average student score
            </p>
            <GraduationCap size={19} className="text-[#39765b]" />
          </div>

          <h2 className="text-2xl font-semibold text-[#153d30]">
            {averageMarks}%
          </h2>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#edf1ed]">
            <div
              className="h-full rounded-full bg-[#39765b]"
              style={{ width: `${averageMarks}%` }}
            />
          </div>
        </div>

        <div className="rounded-xl border border-[#e1e9e3] bg-white p-5">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-xs font-medium text-[#718579]">
              Student pass rate
            </p>
            <Award size={19} className="text-[#39765b]" />
          </div>

          <h2 className="text-2xl font-semibold text-[#153d30]">
            {Math.round((passCount / publishedResults) * 100)}%
          </h2>

          <div className="mt-3 h-2 overflow-hidden rounded-full bg-[#edf1ed]">
            <div
              className="h-full rounded-full bg-[#39765b]"
              style={{ width: `${(passCount / publishedResults) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main Table Section */}
      <div className="overflow-hidden rounded-xl border border-[#e1e9e3] bg-white">

        {/* Tabs and Search */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#e8eee9] p-5 lg:flex-row lg:items-center">

          <div>
            <h2 className="text-sm font-semibold text-[#153d30]">
              Academic assessments
            </h2>
            <p className="mt-1 text-xs text-[#819087]">
              View examination schedules and student results.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="flex rounded-lg bg-[#f2f6f2] p-1">
              {(["Exams", "Results"] as Tab[]).map((tab) => (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setSearch("");
                  }}
                  className={`rounded-md px-4 py-2 text-xs font-medium transition ${
                    activeTab === tab
                      ? "bg-[#1c563d] text-white shadow-sm"
                      : "text-[#718579] hover:text-[#153d30]"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="relative">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#819087]"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={
                  activeTab === "Exams"
                    ? "Search exams..."
                    : "Search students..."
                }
                className="w-full rounded-lg border border-[#dce6df] py-2.5 pl-9 pr-3 text-xs outline-none focus:border-[#39765b] sm:w-52"
              />
            </div>
          </div>
        </div>

        {/* Exams Table */}
        {activeTab === "Exams" && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[800px] text-left text-xs">
              <thead className="bg-[#fbfcfb] text-[#65776c]">
                <tr>
                  <th className="px-5 py-3 font-medium">Examination</th>
                  <th className="px-5 py-3 font-medium">Subject</th>
                  <th className="px-5 py-3 font-medium">Class</th>
                  <th className="px-5 py-3 font-medium">Date</th>
                  <th className="px-5 py-3 font-medium">Time</th>
                  <th className="px-5 py-3 font-medium">Room</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#edf1ed]">
                {filteredExams.map((exam) => (
                  <tr key={exam.id} className="transition hover:bg-[#f9fbf9]">
                    <td className="whitespace-nowrap px-5 py-4 font-medium text-[#294536]">
                      {exam.name}
                      <p className="mt-1 text-[10px] font-normal text-[#819087]">
                        {exam.type}
                      </p>
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                      {exam.subject}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                      {exam.className}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                      {new Date(`${exam.date}T00:00:00`).toLocaleDateString(
                        "en-US",
                        { day: "numeric", month: "short", year: "numeric" }
                      )}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                      {exam.time}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                      <span className="flex items-center gap-1">
                        <MapPin size={12} />
                        {exam.room}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-medium ${
                          exam.status === "Upcoming"
                            ? "bg-[#edf3e7] text-[#66803c]"
                            : "bg-[#e5f2e8] text-[#347448]"
                        }`}
                      >
                        {exam.status}
                      </span>
                    </td>
                  </tr>
                ))}

                {filteredExams.length === 0 && (
                  <tr>
                    <td colSpan={7} className="px-5 py-12 text-center text-sm text-[#87958b]">
                      No examinations found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        {/* Results Table */}
        {activeTab === "Results" && (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[750px] text-left text-xs">
              <thead className="bg-[#fbfcfb] text-[#65776c]">
                <tr>
                  <th className="px-5 py-3 font-medium">Student</th>
                  <th className="px-5 py-3 font-medium">Student ID</th>
                  <th className="px-5 py-3 font-medium">Subject</th>
                  <th className="px-5 py-3 font-medium">Examination</th>
                  <th className="px-5 py-3 font-medium">Marks</th>
                  <th className="px-5 py-3 font-medium">Grade</th>
                  <th className="px-5 py-3 font-medium">Status</th>
                  <th className="px-5 py-3 font-medium">Action</th>
                </tr>
              </thead>

              <tbody className="divide-y divide-[#edf1ed]">
                {filteredResults.map((result) => (
                  <tr key={result.id} className="transition hover:bg-[#f9fbf9]">
                    <td className="whitespace-nowrap px-5 py-4 font-medium text-[#294536]">
                      {result.student}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                      {result.studentId}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                      {result.subject}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                      {result.exam}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                      {result.marks}/{result.totalMarks}
                    </td>

                    <td className="px-5 py-4 font-semibold text-[#294536]">
                      {result.grade}
                    </td>

                    <td className="px-5 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-[10px] font-medium ${
                          result.status === "Pass"
                            ? "bg-[#e5f2e8] text-[#347448]"
                            : "bg-[#f9e8e6] text-[#ad5147]"
                        }`}
                      >
                        {result.status}
                      </span>
                    </td>

                    <td className="px-5 py-4">
                      <button
                        onClick={() => setSelectedResult(result)}
                        className="whitespace-nowrap font-semibold text-[#174d38] hover:text-[#43845e]"
                      >
                        View →
                      </button>
                    </td>
                  </tr>
                ))}

                {filteredResults.length === 0 && (
                  <tr>
                    <td colSpan={8} className="px-5 py-12 text-center text-sm text-[#87958b]">
                      No student results found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}

        <div className="border-t border-[#edf1ed] px-5 py-3">
          <p className="text-[10px] text-[#819087]">
            {activeTab === "Exams"
              ? `Showing ${filteredExams.length} of ${exams.length} examinations`
              : `Showing ${filteredResults.length} of ${results.length} student results`}
            {" "}· Illustrative academic records · Local demo data only
          </p>
        </div>
      </div>

      {/* Result Details Modal */}
      {selectedResult && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setSelectedResult(null)}
        >
          <div
            className="w-full max-w-md rounded-xl border border-[#e1e9e3] bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#819087]">
                  Student examination record
                </p>
                <h2 className="mt-1 text-lg font-semibold text-[#153d30]">
                  Result details
                </h2>
              </div>

              <button
                onClick={() => setSelectedResult(null)}
                className="rounded-lg p-2 text-[#819087] hover:bg-[#f1f5f1]"
                aria-label="Close result details"
              >
                <X size={19} />
              </button>
            </div>

            <div className="space-y-4 border-t border-[#edf1ed] pt-5 text-sm">
              {[
                ["Student", selectedResult.student],
                ["Student ID", selectedResult.studentId],
                ["Examination", selectedResult.exam],
                ["Subject", selectedResult.subject],
                ["Obtained Marks", `${selectedResult.marks}/${selectedResult.totalMarks}`],
                ["Grade", selectedResult.grade],
                ["Result", selectedResult.status],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4">
                  <span className="text-xs text-[#819087]">{label}</span>
                  <span className="text-right text-xs font-medium text-[#294536]">
                    {value}
                  </span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedResult(null)}
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
