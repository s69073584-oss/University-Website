
"use client";

import { useMemo, useState } from "react";
import {
  CalendarDays,
  Clock3,
  MapPin,
  Search,
  BookOpen,
  Users,
} from "lucide-react";

type Schedule = {
  id: number;
  day: string;
  time: string;
  subject: string;
  className: string;
  teacher: string;
  room: string;
  category: string;
};

const schedule: Schedule[] = [
  { id: 1, day: "Monday", time: "08:00 - 09:00", subject: "Mathematics", className: "Class 10-A", teacher: "Ayesha Khan", room: "Room 101", category: "Science" },
  { id: 2, day: "Monday", time: "09:15 - 10:15", subject: "English", className: "Class 10-A", teacher: "Sara Ahmed", room: "Room 102", category: "Arts" },
  { id: 3, day: "Monday", time: "10:30 - 11:30", subject: "Computer Science", className: "Class 10-B", teacher: "Bilal Ahmed", room: "Lab 01", category: "Technology" },
  { id: 4, day: "Tuesday", time: "08:00 - 09:00", subject: "Physics", className: "Class 10-A", teacher: "Ibrahim Ali", room: "Lab 02", category: "Science" },
  { id: 5, day: "Tuesday", time: "09:15 - 10:15", subject: "Business Studies", className: "Class 10-B", teacher: "Omar Hassan", room: "Room 103", category: "Business" },
  { id: 6, day: "Tuesday", time: "10:30 - 11:30", subject: "Mathematics", className: "Class 10-B", teacher: "Ayesha Khan", room: "Room 101", category: "Science" },
  { id: 7, day: "Wednesday", time: "08:00 - 09:00", subject: "English", className: "Class 10-A", teacher: "Sara Ahmed", room: "Room 102", category: "Arts" },
  { id: 8, day: "Wednesday", time: "09:15 - 10:15", subject: "Chemistry", className: "Class 10-B", teacher: "Fatima Noor", room: "Lab 02", category: "Science" },
  { id: 9, day: "Wednesday", time: "10:30 - 11:30", subject: "Computer Science", className: "Class 10-A", teacher: "Bilal Ahmed", room: "Lab 01", category: "Technology" },
  { id: 10, day: "Thursday", time: "08:00 - 09:00", subject: "Biology", className: "Class 10-A", teacher: "Fatima Noor", room: "Lab 03", category: "Science" },
  { id: 11, day: "Thursday", time: "09:15 - 10:15", subject: "Business Studies", className: "Class 10-B", teacher: "Omar Hassan", room: "Room 103", category: "Business" },
  { id: 12, day: "Thursday", time: "10:30 - 11:30", subject: "English", className: "Class 10-B", teacher: "Sara Ahmed", room: "Room 102", category: "Arts" },
  { id: 13, day: "Friday", time: "08:00 - 09:00", subject: "Mathematics", className: "Class 10-A", teacher: "Ayesha Khan", room: "Room 101", category: "Science" },
  { id: 14, day: "Friday", time: "09:15 - 10:15", subject: "Physics", className: "Class 10-B", teacher: "Ibrahim Ali", room: "Lab 02", category: "Science" },
  { id: 15, day: "Saturday", time: "08:00 - 09:00", subject: "Computer Science", className: "Class 10-A", teacher: "Bilal Ahmed", room: "Lab 01", category: "Technology" },
];

const days = ["All days", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

const categoryColors: Record<string, string> = {
  Science: "bg-[#e5f0e6] text-[#347448]",
  Technology: "bg-[#e4edf4] text-[#416b89]",
  Business: "bg-[#f2ecdf] text-[#8b7040]",
  Arts: "bg-[#eee8f3] text-[#76558b]",
};

export default function TimetablePage() {
  const [selectedDay, setSelectedDay] = useState("All days");
  const [search, setSearch] = useState("");

  const filteredSchedule = useMemo(() => {
    const query = search.toLowerCase().trim();

    return schedule.filter((item) => {
      const matchesDay =
        selectedDay === "All days" || item.day === selectedDay;

      const matchesSearch =
        item.subject.toLowerCase().includes(query) ||
        item.className.toLowerCase().includes(query) ||
        item.teacher.toLowerCase().includes(query) ||
        item.room.toLowerCase().includes(query);

      return matchesDay && matchesSearch;
    });
  }, [selectedDay, search]);

  const uniqueTeachers = new Set(schedule.map((item) => item.teacher)).size;

  return (
    <div className="min-h-screen bg-[#f7f9f7] px-5 py-7 sm:px-8">
      {/* Page Heading */}
      <div className="mb-7">
        <p className="mb-2 text-xs font-medium text-[#718579]">
          2026-2027 / Fall semester
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-[#153d30]">
          Timetable
        </h1>
        <p className="mt-1 text-sm text-[#718579]">
          Manage weekly class schedules, subjects and classroom assignments.
        </p>
      </div>

      {/* Summary Cards */}
      <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          { title: "Scheduled Classes", value: schedule.length, icon: CalendarDays },
          { title: "Teaching Days", value: 6, icon: Clock3 },
          { title: "Teachers Assigned", value: uniqueTeachers, icon: Users },
          { title: "Subjects", value: new Set(schedule.map((item) => item.subject)).size, icon: BookOpen },
        ].map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.title} className="rounded-xl border border-[#e1e9e3] bg-white p-5">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-xs font-medium text-[#718579]">{stat.title}</p>
                <Icon size={19} className="text-[#39765b]" />
              </div>
              <h2 className="text-2xl font-semibold text-[#153d30]">{stat.value}</h2>
            </div>
          );
        })}
      </div>

      {/* Timetable */}
      <div className="overflow-hidden rounded-xl border border-[#e1e9e3] bg-white">
        <div className="flex flex-col justify-between gap-4 border-b border-[#e8eee9] p-5 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-sm font-semibold text-[#153d30]">Weekly class schedule</h2>
            <p className="mt-1 text-xs text-[#819087]">
              View and search scheduled classes
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search size={14} className="absolute left-3 top-1/2 -translate-y-1/2 text-[#819087]" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search timetable..."
                className="w-full rounded-lg border border-[#dce6df] py-2.5 pl-9 pr-3 text-xs outline-none focus:border-[#39765b] sm:w-52"
              />
            </div>

            <select
              value={selectedDay}
              onChange={(e) => setSelectedDay(e.target.value)}
              className="rounded-lg border border-[#dce6df] bg-white px-3 py-2.5 text-xs text-[#294536] outline-none focus:border-[#39765b]"
            >
              {days.map((day) => (
                <option key={day} value={day}>{day}</option>
              ))}
            </select>
          </div>
        </div>

        {/* Day Filters */}
        <div className="flex gap-2 overflow-x-auto border-b border-[#edf1ed] px-5 py-3">
          {days.map((day) => (
            <button
              key={day}
              onClick={() => setSelectedDay(day)}
              className={`whitespace-nowrap rounded-lg px-3 py-2 text-[11px] font-medium transition ${
                selectedDay === day
                  ? "bg-[#1c563d] text-white"
                  : "bg-[#f4f7f4] text-[#718579] hover:bg-[#e8f0e9]"
              }`}
            >
              {day}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[760px] text-left text-xs">
            <thead className="bg-[#fbfcfb] text-[#65776c]">
              <tr>
                <th className="px-5 py-3 font-medium">Day</th>
                <th className="px-5 py-3 font-medium">Time</th>
                <th className="px-5 py-3 font-medium">Subject</th>
                <th className="px-5 py-3 font-medium">Class</th>
                <th className="px-5 py-3 font-medium">Teacher</th>
                <th className="px-5 py-3 font-medium">Room</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#edf1ed]">
              {filteredSchedule.map((item) => (
                <tr key={item.id} className="transition hover:bg-[#f9fbf9]">
                  <td className="whitespace-nowrap px-5 py-4 font-medium text-[#294536]">{item.day}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">{item.time}</td>
                  <td className="whitespace-nowrap px-5 py-4">
                    <span className={`rounded-full px-3 py-1 text-[10px] font-medium ${categoryColors[item.category]}`}>
                      {item.subject}
                    </span>
                  </td>
                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">{item.className}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">{item.teacher}</td>
                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                    <span className="flex items-center gap-1">
                      <MapPin size={12} /> {item.room}
                    </span>
                  </td>
                </tr>
              ))}
              {filteredSchedule.length === 0 && (
                <tr>
                  <td colSpan={6} className="px-5 py-12 text-center text-sm text-[#87958b]">
                    No classes found for this selection.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="border-t border-[#edf1ed] px-5 py-3">
          <p className="text-[10px] text-[#819087]">
            Showing {filteredSchedule.length} of {schedule.length} scheduled classes · Illustrative demo data
          </p>
        </div>
      </div>
    </div>
  );
}
