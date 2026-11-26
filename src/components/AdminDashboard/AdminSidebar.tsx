
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ShieldCheck,
  LayoutDashboard,
  Users,
  BookOpen,
  GraduationCap,
  BarChart3,
  CalendarDays,
  ClipboardList,
  CreditCard,
  Settings,
  ArrowLeft,
  Building2,
} from "lucide-react";

const menuItems = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Students", href: "/admin/students", icon: Users },
  { name: "Teachers", href: "/admin/teachers", icon: BookOpen },
  { name: "Admissions", href: "/admin/admissions", icon: BarChart3 },
  { name: "Academic Management", href: "/admin/academic", icon: GraduationCap },
  { name: "Departments", href: "/admin/departments", icon: Building2 },
  { name: "Courses and Subjects", href: "/admin/courses", icon: BookOpen },
  { name: "Timetable", href: "/admin/timetable", icon: CalendarDays },
  { name: "Exams and Results", href: "/admin/exams", icon: ClipboardList },
  { name: "Attendance", href: "/admin/attendance", icon: BarChart3 },
  { name: "Fees and Payments", href: "/admin/fees", icon: CreditCard },
  { name: "Reports", href: "/admin/reports", icon: BookOpen },
  { name: "Roles and Settings", href: "/admin/settings", icon: Settings },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-screen w-16 shrink-0 flex-col bg-[#103f30] px-2 py-4 text-white md:w-[260px] md:px-4 md:py-5">

      {/* Logo */}
      <div className="flex items-center justify-center gap-3 border-b border-white/10 pb-5 md:justify-start">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/30 bg-white/10">
          <ShieldCheck size={25} />
        </div>

        <div className="hidden md:block">
          <h1 className="text-lg font-bold leading-tight tracking-wide">
            AL-RAZI
          </h1>
          <p className="text-[9px] font-semibold uppercase tracking-[2px] text-gray-300">
            School System
          </p>
        </div>
      </div>

      {/* Portal Label */}
      <div className="mb-4 mt-6 hidden md:block">
        <p className="text-[9px] font-semibold uppercase tracking-[1.5px] text-[#91c4a8]">
          Admin Portal · Demo
        </p>
      </div>

      {/* Navigation */}
      <nav className="min-h-0 flex-1 overflow-y-auto pr-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(`${item.href}/`));

            return (
              <li key={item.name}>
                <Link
                  href={item.href}
                  aria-current={isActive ? "page" : undefined}
                  className={`flex items-center justify-center gap-2.5 rounded-md px-2 py-2 text-xs transition-all duration-200 md:justify-start md:px-3 ${
                    isActive
                      ? "bg-[#e4eee6] font-semibold text-[#174b36] shadow-sm"
                      : "text-gray-200 hover:bg-white/10 hover:text-white"
                  }`}
                  title={item.name}
                >
                  <Icon size={15} strokeWidth={1.7} />
                  <span className="hidden md:inline">{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom Section */}
      <div className="mt-4 shrink-0 border-t border-white/10 pt-4">

        {/* Admin Profile */}
        <div className="mb-4 rounded-lg border border-white/10 bg-white/5 p-2 md:p-3">
          <div className="flex items-center justify-center gap-3 md:justify-start">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#dce9df] text-sm font-bold text-[#104b37]">
              A
            </div>

            <div className="hidden md:block">
              <p className="text-xs font-semibold text-white">
                Administrator
              </p>

              <div className="mt-1 flex items-center gap-1.5">
                <span className="h-1.5 w-1.5 rounded-full bg-green-400" />
                <span className="text-[10px] text-gray-300">
                  Online
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Website */}
        <Link
          href="/"
          className="mb-4 flex items-center justify-center gap-2 text-xs text-gray-300 transition hover:text-white md:justify-start"
          title="Back to website"
        >
          <ArrowLeft size={13} />
          <span className="hidden md:inline">Back to website</span>
        </Link>

        {/* System Version */}
        <div className="hidden text-center md:block">
          <p className="text-[10px] text-gray-400">
            AL-RAZI School Management
          </p>
          <p className="mt-1 text-[9px] text-gray-500">
            Version 1.0.0 · Demo
          </p>
        </div>

      </div>
    </aside>
  );
}
