
"use client";

import { useMemo, useState } from "react";
import {
  FileText,
  Users,
  GraduationCap,
  CalendarCheck,
  Wallet,
  Download,
  Search,
  TrendingUp,
  ClipboardList,
} from "lucide-react";

type ReportCategory =
  | "All reports"
  | "Students"
  | "Teachers"
  | "Attendance"
  | "Fees"
  | "Academic";

type Report = {
  id: number;
  title: string;
  category: Exclude<ReportCategory, "All reports">;
  description: string;
  generated: string;
  records: number;
  status: "Available" | "Updated";
};

const initialReports: Report[] = [
  { id: 1, title: "Student Enrollment Report", category: "Students", description: "Student registration and enrollment summary", generated: "Nov 26, 2026", records: 1248, status: "Updated" },
  { id: 2, title: "Teacher Directory Report", category: "Teachers", description: "Teacher details and department assignments", generated: "Nov 25, 2026", records: 84, status: "Available" },
  { id: 3, title: "Daily Attendance Report", category: "Attendance", description: "Daily student attendance overview", generated: "Nov 26, 2026", records: 1248, status: "Updated" },
  { id: 4, title: "Monthly Attendance Report", category: "Attendance", description: "Monthly attendance and absence summary", generated: "Nov 24, 2026", records: 1248, status: "Available" },
  { id: 5, title: "Fee Collection Report", category: "Fees", description: "Collected fees and payment transactions", generated: "Nov 26, 2026", records: 986, status: "Updated" },
  { id: 6, title: "Outstanding Fees Report", category: "Fees", description: "Pending and overdue student payments", generated: "Nov 23, 2026", records: 262, status: "Available" },
  { id: 7, title: "Examination Results Report", category: "Academic", description: "Student examination marks and grades", generated: "Nov 22, 2026", records: 860, status: "Available" },
  { id: 8, title: "Course Enrollment Report", category: "Academic", description: "Course registrations and academic programs", generated: "Nov 20, 2026", records: 420, status: "Available" },
];

const categories: ReportCategory[] = [
  "All reports",
  "Students",
  "Teachers",
  "Attendance",
  "Fees",
  "Academic",
];

const categoryStyles: Record<string, string> = {
  Students: "bg-[#e5f0e6] text-[#347448]",
  Teachers: "bg-[#e4edf4] text-[#416b89]",
  Attendance: "bg-[#eee8f3] text-[#76558b]",
  Fees: "bg-[#f2ecdf] text-[#8b7040]",
  Academic: "bg-[#e5edf0] text-[#426d78]",
};

export default function ReportsPage() {
  const [reports] = useState(initialReports);
  const [category, setCategory] = useState<ReportCategory>("All reports");
  const [search, setSearch] = useState("");

  const filteredReports = useMemo(() => {
    const query = search.toLowerCase().trim();

    return reports.filter((report) => {
      const matchesCategory =
        category === "All reports" || report.category === category;

      const matchesSearch =
        report.title.toLowerCase().includes(query) ||
        report.description.toLowerCase().includes(query) ||
        report.category.toLowerCase().includes(query);

      return matchesCategory && matchesSearch;
    });
  }, [reports, category, search]);

  const exportCSV = () => {
    const headers = [
      "Report",
      "Category",
      "Description",
      "Generated",
      "Records",
      "Status",
    ];

    const rows = filteredReports.map((report) => [
      report.title,
      report.category,
      report.description,
      report.generated,
      report.records,
      report.status,
    ]);

    const csv = [headers, ...rows]
      .map((row) =>
        row.map((value) => `"${String(value).replace(/"/g, '""')}"`).join(",")
      )
      .join("\n");

    const blob = new Blob(["\uFEFF" + csv], {
      type: "text/csv;charset=utf-8;",
    });

    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "al-razi-reports.csv";
    link.click();
    URL.revokeObjectURL(url);
  };

  const stats = [
    { title: "Total Students", value: "1,248", icon: Users },
    { title: "Total Teachers", value: "84", icon: GraduationCap },
    { title: "Attendance Rate", value: "92%", icon: CalendarCheck },
    { title: "Fees Collected", value: "PKR 18.5M", icon: Wallet },
  ];

  return (
    <div className="min-h-screen bg-[#f7f9f7] px-5 py-7 sm:px-8">
      {/* Heading */}
      <div className="mb-7">
        <p className="mb-2 text-xs font-medium text-[#718579]">
          2026-2027 / Fall semester
        </p>
        <h1 className="text-2xl font-semibold tracking-tight text-[#153d30]">
          Reports
        </h1>
        <p className="mt-1 text-sm text-[#718579]">
          View academic, attendance, student and financial reports.
        </p>
      </div>

      {/* Statistics */}
      <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => {
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

      {/* Report Categories */}
      <div className="mb-7">
        <div className="mb-4">
          <h2 className="text-sm font-semibold text-[#153d30]">
            Report categories
          </h2>
          <p className="mt-1 text-xs text-[#819087]">
            Browse reports by department and activity.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-5">
          {[
            { name: "Students", count: "1,248 records", icon: Users },
            { name: "Teachers", count: "84 records", icon: GraduationCap },
            { name: "Attendance", count: "Daily records", icon: CalendarCheck },
            { name: "Fees", count: "Payment records", icon: Wallet },
            { name: "Academic", count: "Exam & course data", icon: ClipboardList },
          ].map((item) => {
            const Icon = item.icon;

            return (
              <button
                key={item.name}
                onClick={() => setCategory(item.name as ReportCategory)}
                className={`rounded-xl border p-4 text-left transition ${
                  category === item.name
                    ? "border-[#39765b] bg-[#edf5ee]"
                    : "border-[#e1e9e3] bg-white hover:border-[#b8cdbd]"
                }`}
              >
                <div className="mb-4 flex size-10 items-center justify-center rounded-lg bg-[#e5f0e6]">
                  <Icon size={19} className="text-[#39765b]" />
                </div>
                <h3 className="text-sm font-semibold text-[#294536]">
                  {item.name}
                </h3>
                <p className="mt-1 text-[10px] text-[#819087]">
                  {item.count}
                </p>
              </button>
            );
          })}
        </div>
      </div>

      {/* Reports Table */}
      <div className="overflow-hidden rounded-xl border border-[#e1e9e3] bg-white">
        <div className="flex flex-col justify-between gap-4 border-b border-[#e8eee9] p-5 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-sm font-semibold text-[#153d30]">
              Available reports
            </h2>
            <p className="mt-1 text-xs text-[#819087]">
              Browse and export your report records.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#819087]"
              />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search reports..."
                className="w-full rounded-lg border border-[#dce6df] py-2.5 pl-9 pr-3 text-xs outline-none focus:border-[#39765b] sm:w-52"
              />
            </div>

            <select
              value={category}
              onChange={(e) =>
                setCategory(e.target.value as ReportCategory)
              }
              className="rounded-lg border border-[#dce6df] bg-white px-3 py-2.5 text-xs text-[#294536] outline-none focus:border-[#39765b]"
            >
              {categories.map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>

            <button
              onClick={exportCSV}
              disabled={filteredReports.length === 0}
              className="flex items-center justify-center gap-2 rounded-lg bg-[#174d38] px-4 py-2.5 text-xs font-semibold text-white transition hover:bg-[#103c2b] disabled:cursor-not-allowed disabled:opacity-50"
            >
              <Download size={14} />
              Export CSV
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[800px] text-left text-xs">
            <thead className="bg-[#fbfcfb] text-[#65776c]">
              <tr>
                <th className="px-5 py-3 font-medium">Report name</th>
                <th className="px-5 py-3 font-medium">Category</th>
                <th className="px-5 py-3 font-medium">Generated</th>
                <th className="px-5 py-3 font-medium">Records</th>
                <th className="px-5 py-3 font-medium">Status</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#edf1ed]">
              {filteredReports.map((report) => (
                <tr key={report.id} className="transition hover:bg-[#f9fbf9]">
                  <td className="px-5 py-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-[#edf4ee]">
                        <FileText size={15} className="text-[#39765b]" />
                      </div>
                      <div>
                        <p className="font-semibold text-[#294536]">
                          {report.title}
                        </p>
                        <p className="mt-1 text-[10px] text-[#819087]">
                          {report.description}
                        </p>
                      </div>
                    </div>
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-medium ${categoryStyles[report.category]}`}
                    >
                      {report.category}
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                    {report.generated}
                  </td>

                  <td className="px-5 py-4 font-medium text-[#294536]">
                    {report.records.toLocaleString()}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-[10px] font-medium ${
                        report.status === "Updated"
                          ? "bg-[#e5f2e8] text-[#347448]"
                          : "bg-[#f1f3ed] text-[#71804f]"
                      }`}
                    >
                      {report.status}
                    </span>
                  </td>
                </tr>
              ))}

              {filteredReports.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-12 text-center text-sm text-[#87958b]"
                  >
                    No reports found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="border-t border-[#edf1ed] px-5 py-3">
          <p className="text-[10px] text-[#819087]">
            Showing {filteredReports.length} of {reports.length} reports ·
            Illustrative demo data
          </p>
        </div>
      </div>

      {/* Performance Note */}
      <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#e1e9e3] bg-white p-4">
        <TrendingUp size={18} className="mt-0.5 shrink-0 text-[#39765b]" />
        <div>
          <h3 className="text-xs font-semibold text-[#294536]">
            Academic performance overview
          </h3>
          <p className="mt-1 text-xs leading-5 text-[#718579]">
            Use the report categories to review student enrollment, academic
            results, attendance activity and financial records in one place.
          </p>
        </div>
      </div>
    </div>
  );
}
