
"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Users,
  UserCheck,
  UserX,
  Clock3,
  Search,
  Check,
  X,
} from "lucide-react";

type AttendanceStatus = "Present" | "Absent" | "Late";

type AttendanceRecord = {
  id: number;
  student: string;
  studentId: string;
  className: string;
  date: string;
  checkIn: string;
  status: AttendanceStatus;
};

const initialRecords: AttendanceRecord[] = [
  { id: 1, student: "Ayesha Khan", studentId: "AR-2026-101", className: "Class 10-A", date: "2026-11-26", checkIn: "08:05 AM", status: "Present" },
  { id: 2, student: "Omar Hassan", studentId: "AR-2026-102", className: "Class 10-A", date: "2026-11-26", checkIn: "08:20 AM", status: "Late" },
  { id: 3, student: "Sara Ahmed", studentId: "AR-2026-103", className: "Class 10-B", date: "2026-11-26", checkIn: "08:02 AM", status: "Present" },
  { id: 4, student: "Ibrahim Ali", studentId: "AR-2026-104", className: "Class 10-B", date: "2026-11-26", checkIn: "--", status: "Absent" },
  { id: 5, student: "Fatima Noor", studentId: "AR-2026-105", className: "Class 10-A", date: "2026-11-26", checkIn: "08:10 AM", status: "Present" },
  { id: 6, student: "Bilal Ahmed", studentId: "AR-2026-106", className: "Class 9-A", date: "2026-11-26", checkIn: "08:15 AM", status: "Late" },
  { id: 7, student: "Hina Tariq", studentId: "AR-2026-107", className: "Class 9-A", date: "2026-11-26", checkIn: "08:00 AM", status: "Present" },
  { id: 8, student: "Usman Malik", studentId: "AR-2026-108", className: "Class 9-B", date: "2026-11-26", checkIn: "--", status: "Absent" },
  { id: 9, student: "Zainab Ali", studentId: "AR-2026-109", className: "Class 10-B", date: "2026-11-26", checkIn: "08:03 AM", status: "Present" },
  { id: 10, student: "Hamza Ahmed", studentId: "AR-2026-110", className: "Class 9-B", date: "2026-11-26", checkIn: "08:01 AM", status: "Present" },
];

const classes = [
  "All classes",
  "Class 9-A",
  "Class 9-B",
  "Class 10-A",
  "Class 10-B",
];

const statusStyles: Record<AttendanceStatus, string> = {
  Present: "bg-[#e5f2e8] text-[#347448]",
  Absent: "bg-[#f9e8e6] text-[#ad5147]",
  Late: "bg-[#fff2df] text-[#a56c27]",
};

export default function AttendancePage() {
  const [records, setRecords] = useState(initialRecords);
  const [search, setSearch] = useState("");
  const [selectedClass, setSelectedClass] = useState("All classes");
  const [selectedDate, setSelectedDate] = useState("2026-11-26");
  const [selectedStatus, setSelectedStatus] = useState("All statuses");

  const filteredRecords = useMemo(() => {
    const query = search.toLowerCase().trim();

    return records.filter((record) => {
      const matchesSearch =
        record.student.toLowerCase().includes(query) ||
        record.studentId.toLowerCase().includes(query) ||
        record.className.toLowerCase().includes(query);

      const matchesClass =
        selectedClass === "All classes" ||
        record.className === selectedClass;

      const matchesDate = record.date === selectedDate;

      const matchesStatus =
        selectedStatus === "All statuses" ||
        record.status === selectedStatus;

      return matchesSearch && matchesClass && matchesDate && matchesStatus;
    });
  }, [records, search, selectedClass, selectedDate, selectedStatus]);

  const dateRecords = records.filter(
    (record) => record.date === selectedDate
  );

  const presentCount = dateRecords.filter(
    (record) => record.status === "Present"
  ).length;

  const absentCount = dateRecords.filter(
    (record) => record.status === "Absent"
  ).length;

  const lateCount = dateRecords.filter(
    (record) => record.status === "Late"
  ).length;

  const attendanceRate =
    dateRecords.length > 0
      ? Math.round(((presentCount + lateCount) / dateRecords.length) * 100)
      : 0;

  const updateStatus = (id: number, status: AttendanceStatus) => {
    setRecords((current) =>
      current.map((record) =>
        record.id === id
          ? {
              ...record,
              status,
              checkIn:
                status === "Absent"
                  ? "--"
                  : record.checkIn === "--"
                    ? "08:00 AM"
                    : record.checkIn,
            }
          : record
      )
    );
  };

  return (
    <div className="min-h-screen bg-[#f7f9f7] px-5 py-7 sm:px-8">

      {/* Heading */}
      <div className="mb-7">
        <p className="mb-2 text-xs font-medium text-[#718579]">
          2026-2027 / Fall semester
        </p>

        <h1 className="text-2xl font-semibold tracking-tight text-[#153d30]">
          Attendance
        </h1>

        <p className="mt-1 text-sm text-[#718579]">
          Track student attendance and manage daily classroom records.
        </p>
      </div>

      {/* Statistics */}
      <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Total Students",
            value: dateRecords.length,
            icon: Users,
          },
          {
            title: "Present Today",
            value: presentCount,
            icon: UserCheck,
          },
          {
            title: "Absent Today",
            value: absentCount,
            icon: UserX,
          },
          {
            title: "Late Arrivals",
            value: lateCount,
            icon: Clock3,
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

      {/* Attendance Rate */}
      <div className="mb-7 rounded-xl border border-[#e1e9e3] bg-white p-5">
        <div className="mb-3 flex items-center justify-between gap-3">
          <div>
            <p className="text-xs font-medium text-[#718579]">
              Daily attendance rate
            </p>
            <h2 className="mt-1 text-2xl font-semibold text-[#153d30]">
              {attendanceRate}%
            </h2>
          </div>

          <div className="flex size-11 items-center justify-center rounded-lg bg-[#e5f0e6]">
            <CalendarDays size={21} className="text-[#39765b]" />
          </div>
        </div>

        <div className="h-2 overflow-hidden rounded-full bg-[#edf1ed]">
          <div
            className="h-full rounded-full bg-[#39765b] transition-all"
            style={{ width: `${attendanceRate}%` }}
          />
        </div>

        <p className="mt-2 text-[10px] text-[#819087]">
          Present and late students are counted as attended.
        </p>
      </div>

      {/* Attendance Table */}
      <div className="overflow-hidden rounded-xl border border-[#e1e9e3] bg-white">

        <div className="flex flex-col justify-between gap-4 border-b border-[#e8eee9] p-5 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-sm font-semibold text-[#153d30]">
              Daily attendance records
            </h2>
            <p className="mt-1 text-xs text-[#819087]">
              Review and update student attendance.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <input
              type="date"
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="rounded-lg border border-[#dce6df] bg-white px-3 py-2.5 text-xs text-[#294536] outline-none focus:border-[#39765b]"
            />

            <select
              value={selectedClass}
              onChange={(e) => setSelectedClass(e.target.value)}
              className="rounded-lg border border-[#dce6df] bg-white px-3 py-2.5 text-xs text-[#294536] outline-none focus:border-[#39765b]"
            >
              {classes.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="rounded-lg border border-[#dce6df] bg-white px-3 py-2.5 text-xs text-[#294536] outline-none focus:border-[#39765b]"
            >
              {["All statuses", "Present", "Absent", "Late"].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Search */}
        <div className="border-b border-[#edf1ed] px-5 py-3">
          <div className="relative max-w-sm">
            <Search
              size={14}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#819087]"
            />

            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search student name or ID..."
              className="w-full rounded-lg border border-[#dce6df] py-2.5 pl-9 pr-3 text-xs outline-none focus:border-[#39765b]"
            />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[850px] text-left text-xs">
            <thead className="bg-[#fbfcfb] text-[#65776c]">
              <tr>
                <th className="px-5 py-3 font-medium">Student</th>
                <th className="px-5 py-3 font-medium">Student ID</th>
                <th className="px-5 py-3 font-medium">Class</th>
                <th className="px-5 py-3 font-medium">Check-in</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Update status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#edf1ed]">
              {filteredRecords.map((record) => (
                <tr key={record.id} className="transition hover:bg-[#f9fbf9]">
                  <td className="whitespace-nowrap px-5 py-4 font-medium text-[#294536]">
                    {record.student}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                    {record.studentId}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                    {record.className}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                    {record.checkIn}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-medium ${statusStyles[record.status]}`}
                    >
                      {record.status}
                    </span>
                  </td>

                  <td className="px-5 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => updateStatus(record.id, "Present")}
                        title="Mark present"
                        aria-label={`Mark ${record.student} present`}
                        className="rounded-md border border-[#dce9df] p-1.5 text-[#347448] transition hover:bg-[#e5f2e8]"
                      >
                        <Check size={13} />
                      </button>

                      <button
                        onClick={() => updateStatus(record.id, "Absent")}
                        title="Mark absent"
                        aria-label={`Mark ${record.student} absent`}
                        className="rounded-md border border-[#f0dedd] p-1.5 text-[#ad5147] transition hover:bg-[#f9e8e6]"
                      >
                        <X size={13} />
                      </button>

                      <button
                        onClick={() => updateStatus(record.id, "Late")}
                        title="Mark late"
                        aria-label={`Mark ${record.student} late`}
                        className="rounded-md border border-[#f0e3cf] p-1.5 text-[#a56c27] transition hover:bg-[#fff2df]"
                      >
                        <Clock3 size={13} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}

              {filteredRecords.length === 0 && (
                <tr>
                  <td
                    colSpan={6}
                    className="px-5 py-12 text-center text-sm text-[#87958b]"
                  >
                    No attendance records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="border-t border-[#edf1ed] px-5 py-3">
          <p className="text-[10px] text-[#819087]">
            Showing {filteredRecords.length} of {dateRecords.length} students ·
            Illustrative attendance records · Local demo data only
          </p>
        </div>
      </div>
    </div>
  );
}
