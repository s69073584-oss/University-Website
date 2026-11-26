
import Link from "next/link";
import {
  CalendarDays,
  ArrowRight,
  Users,
  UserPlus,
  Megaphone,
  BookOpen,
  Clock,
  CheckCircle,
  GraduationCap,
} from "lucide-react";

import StatsCard from "./StatsCard";

export default function DashboardOverview() {
  return (
    <div className="mx-auto max-w-[1500px] space-y-7">

      {/* Welcome Section */}
      <section className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-medium text-[#477d63]">
            2026-2027 / Fall semester
          </p>

          <h1 className="mt-2 text-2xl font-bold text-[#123e30]">
            Welcome back, Administrator
          </h1>

          <p className="mt-2 text-xs text-gray-500">
            A clear view of your academic journey. Let's make today count.
          </p>
        </div>

      </section>

      {/* Statistics */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
       <StatsCard
  title="Students"
  value="1,248"
  description="Academic year 2026-2027"
  icon={Users}
/>

<StatsCard
  title="Teachers"
  value="84"
  description="Academic year 2026-2027"
  icon={GraduationCap}
/>

<StatsCard
  title="Programs"
  value="4"
  description="Active academic programs"
  icon={BookOpen}
/>

<StatsCard
  title="Applications"
  value="4"
  description="Pending applications"
  icon={CheckCircle}
/>
      </section>

      {/* Hero Banner */}
      <section className="rounded-xl bg-[#103f30] p-6 text-white md:p-8">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[#a6cfb5]">
          Your next chapter starts here
        </p>

        <h2 className="mt-3 text-xl font-bold">
          Your admin workspace, connected.
        </h2>

        <p className="mt-3 max-w-lg text-xs leading-6 text-gray-200">
          Your courses, community, and everything you need for a meaningful
          academic journey.
        </p>

        <Link
          href="/admin/timetable"
          className="mt-5 inline-flex items-center gap-2 rounded-md bg-white px-4 py-3 text-xs font-semibold text-[#174b36] transition hover:bg-[#e4eee6]"
        >
          View your schedule
          <ArrowRight size={14} />
        </Link>
      </section>

      {/* Quick Actions */}
      <section>
        <div className="mb-4">
          <h2 className="text-base font-bold text-[#123e30]">
            Quick actions
          </h2>
          <p className="mt-1 text-xs text-gray-500">
            Access your frequently used tools.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
          {[
            {
              title: "Add Student",
              href: "/admin/students",
              icon: UserPlus,
            },
            {
              title: "Add Teacher",
              href: "/admin/teachers",
              icon: Users,
            },
            {
              title: "Create Course",
              href: "/admin/courses",
              icon: BookOpen,
            },
            {
              title: "Mark Attendance",
              href: "/admin/attendance",
              icon: CheckCircle,
            },
          ].map((action) => {
            const Icon = action.icon;

            return (
              <Link
                key={action.title}
                href={action.href}
                className="flex items-center gap-3 rounded-lg border border-gray-100 bg-white p-4 transition hover:border-[#b9d5c2] hover:shadow-sm"
              >
                <div className="rounded-lg bg-[#e4eee6] p-2 text-[#185b43]">
                  <Icon size={17} />
                </div>

                <span className="text-xs font-semibold text-[#123e30]">
                  {action.title}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Continue Learning */}
      <section>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-base font-bold text-[#123e30]">
            Continue learning
          </h2>

          <Link
            href="/admin/courses"
            className="flex items-center gap-1 text-xs font-medium text-[#185b43] hover:underline"
          >
            View all courses
            <ArrowRight size={13} />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            { title: "Computer Science", progress: 75 },
            { title: "Mathematics", progress: 60 },
            { title: "English Language", progress: 85 },
          ].map((course) => (
            <div
              key={course.title}
              className="rounded-xl border border-gray-100 bg-white p-4"
            >
              <div className="flex items-center gap-2">
                <BookOpen size={17} className="text-[#185b43]" />
                <h3 className="text-sm font-semibold text-[#123e30]">
                  {course.title}
                </h3>
              </div>

              <div className="mt-5 flex justify-between text-xs text-gray-500">
                <span>Course progress</span>
                <span>{course.progress}%</span>
              </div>

              <div className="mt-2 h-2 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-[#185b43]"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Bottom Dashboard Sections */}
      <section className="grid grid-cols-1 gap-5 xl:grid-cols-2">

        {/* Recent Activity */}
        <div className="rounded-xl border border-gray-100 bg-white p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-base font-bold text-[#123e30]">
              Recent activity
            </h2>

            <Link
              href="/admin/reports"
              className="text-xs text-[#185b43] hover:underline"
            >
              View all
            </Link>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "New student registered",
                detail: "A student joined the academic system.",
                time: "Today",
                icon: UserPlus,
              },
              {
                title: "New course added",
                detail: "A new academic course was created.",
                time: "Yesterday",
                icon: BookOpen,
              },
              {
                title: "Announcement published",
                detail: "An announcement was shared.",
                time: "2 days ago",
                icon: Megaphone,
              },
            ].map((activity) => {
              const Icon = activity.icon;

              return (
                <div
                  key={activity.title}
                  className="flex items-start gap-3"
                >
                  <div className="rounded-lg bg-[#e4eee6] p-2 text-[#185b43]">
                    <Icon size={16} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-[#123e30]">
                      {activity.title}
                    </p>
                    <p className="mt-1 text-[11px] text-gray-500">
                      {activity.detail}
                    </p>
                  </div>

                  <span className="shrink-0 text-[10px] text-gray-400">
                    {activity.time}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="rounded-xl border border-gray-100 bg-white p-5">
          <div className="mb-5 flex items-center justify-between">
            <h2 className="text-base font-bold text-[#123e30]">
              Upcoming events
            </h2>

            <Link
              href="/admin/timetable"
              className="text-xs text-[#185b43] hover:underline"
            >
              View calendar
            </Link>
          </div>

          <div className="space-y-4">
            {[
              {
                date: "28",
                month: "NOV",
                title: "Mathematics Examination",
                time: "09:00 AM",
              },
              {
                date: "02",
                month: "DEC",
                title: "Teacher Staff Meeting",
                time: "11:00 AM",
              },
              {
                date: "05",
                month: "DEC",
                title: "Parent Teacher Meeting",
                time: "10:00 AM",
              },
            ].map((event) => (
              <div
                key={event.title}
                className="flex items-center gap-3 rounded-lg bg-[#f7faf7] p-3"
              >
                <div className="flex h-11 w-11 flex-col items-center justify-center rounded-md bg-[#e4eee6] text-[#185b43]">
                  <span className="text-sm font-bold">{event.date}</span>
                  <span className="text-[9px]">{event.month}</span>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-xs font-semibold text-[#123e30]">
                    {event.title}
                  </p>
                  <p className="mt-1 flex items-center gap-1 text-[10px] text-gray-500">
                    <Clock size={11} />
                    {event.time}
                  </p>
                </div>

                <CalendarDays size={16} className="text-[#477d63]" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Attendance Overview */}
      <section className="rounded-xl border border-gray-100 bg-white p-5">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-base font-bold text-[#123e30]">
              Attendance overview
            </h2>
            <p className="mt-1 text-xs text-gray-500">
              Overall student attendance summary.
            </p>
          </div>

          <Link
            href="/admin/attendance"
            className="text-xs font-medium text-[#185b43] hover:underline"
          >
            View attendance
          </Link>
        </div>

        <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {[
            { label: "Present", value: "92%", color: "bg-[#185b43]" },
            { label: "Absent", value: "5%", color: "bg-red-400" },
            { label: "Late", value: "3%", color: "bg-amber-400" },
          ].map((item) => (
            <div key={item.label}>
              <div className="mb-2 flex justify-between">
                <span className="text-xs text-gray-500">{item.label}</span>
                <span className="text-sm font-bold text-[#123e30]">
                  {item.value}
                </span>
              </div>

              <div className="h-2 rounded-full bg-gray-100">
                <div
                  className={`h-full rounded-full ${item.color}`}
                  style={{ width: item.value }}
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-5 text-center">
        <p className="text-[10px] text-gray-400">
          © 2026 AL-RAZI School Management System. All rights reserved.
        </p>
      </footer>

    </div>
  );
}
