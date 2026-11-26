
"use client";

import { useMemo, useState } from "react";
import {
  Wallet,
  CreditCard,
  Clock3,
  AlertCircle,
  Search,
  Receipt,
  X,
  CheckCircle2,
  User,
} from "lucide-react";

type PaymentStatus = "Paid" | "Pending" | "Overdue";

type FeeRecord = {
  id: number;
  student: string;
  studentId: string;
  className: string;
  feeType: string;
  amount: number;
  paidAmount: number;
  dueDate: string;
  paymentDate: string;
  status: PaymentStatus;
  method: string;
};

const initialFees: FeeRecord[] = [
  { id: 1, student: "Ayesha Khan", studentId: "AR-2026-101", className: "Class 10-A", feeType: "Tuition Fee", amount: 25000, paidAmount: 25000, dueDate: "2026-11-10", paymentDate: "2026-11-05", status: "Paid", method: "Bank Transfer" },
  { id: 2, student: "Omar Hassan", studentId: "AR-2026-102", className: "Class 10-A", feeType: "Tuition Fee", amount: 25000, paidAmount: 0, dueDate: "2026-12-05", paymentDate: "--", status: "Pending", method: "--" },
  { id: 3, student: "Sara Ahmed", studentId: "AR-2026-103", className: "Class 10-B", feeType: "Tuition Fee", amount: 25000, paidAmount: 25000, dueDate: "2026-11-10", paymentDate: "2026-11-08", status: "Paid", method: "Cash" },
  { id: 4, student: "Ibrahim Ali", studentId: "AR-2026-104", className: "Class 10-B", feeType: "Tuition Fee", amount: 25000, paidAmount: 0, dueDate: "2026-11-15", paymentDate: "--", status: "Overdue", method: "--" },
  { id: 5, student: "Fatima Noor", studentId: "AR-2026-105", className: "Class 10-A", feeType: "Examination Fee", amount: 5000, paidAmount: 5000, dueDate: "2026-11-20", paymentDate: "2026-11-18", status: "Paid", method: "Online" },
  { id: 6, student: "Bilal Ahmed", studentId: "AR-2026-106", className: "Class 9-A", feeType: "Tuition Fee", amount: 22000, paidAmount: 0, dueDate: "2026-11-15", paymentDate: "--", status: "Overdue", method: "--" },
  { id: 7, student: "Hina Tariq", studentId: "AR-2026-107", className: "Class 9-A", feeType: "Library Fee", amount: 3000, paidAmount: 3000, dueDate: "2026-11-20", paymentDate: "2026-11-19", status: "Paid", method: "Cash" },
  { id: 8, student: "Usman Malik", studentId: "AR-2026-108", className: "Class 9-B", feeType: "Tuition Fee", amount: 22000, paidAmount: 0, dueDate: "2026-12-05", paymentDate: "--", status: "Pending", method: "--" },
  { id: 9, student: "Zainab Ali", studentId: "AR-2026-109", className: "Class 10-B", feeType: "Transport Fee", amount: 4000, paidAmount: 4000, dueDate: "2026-11-20", paymentDate: "2026-11-17", status: "Paid", method: "Bank Transfer" },
  { id: 10, student: "Hamza Ahmed", studentId: "AR-2026-110", className: "Class 9-B", feeType: "Tuition Fee", amount: 22000, paidAmount: 0, dueDate: "2026-11-15", paymentDate: "--", status: "Overdue", method: "--" },
  { id: 11, student: "Maryam Noor", studentId: "AR-2026-111", className: "Class 10-A", feeType: "Examination Fee", amount: 5000, paidAmount: 0, dueDate: "2026-12-05", paymentDate: "--", status: "Pending", method: "--" },
  { id: 12, student: "Ahmed Raza", studentId: "AR-2026-112", className: "Class 9-A", feeType: "Tuition Fee", amount: 22000, paidAmount: 22000, dueDate: "2026-11-10", paymentDate: "2026-11-09", status: "Paid", method: "Online" },
];

const statusStyles: Record<PaymentStatus, string> = {
  Paid: "bg-[#e5f2e8] text-[#347448]",
  Pending: "bg-[#edf3e7] text-[#66803c]",
  Overdue: "bg-[#f9e8e6] text-[#ad5147]",
};

const formatCurrency = (amount: number) =>
  new Intl.NumberFormat("en-PK", {
    style: "currency",
    currency: "PKR",
    maximumFractionDigits: 0,
  }).format(amount);

const formatDate = (date: string) => {
  if (date === "--") return "--";

  return new Date(`${date}T00:00:00`).toLocaleDateString("en-PK", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};

export default function FeesPage() {
  const [fees, setFees] = useState(initialFees);
  const [search, setSearch] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("All statuses");
  const [selectedFee, setSelectedFee] = useState<FeeRecord | null>(null);

  const filteredFees = useMemo(() => {
    const query = search.toLowerCase().trim();

    return fees.filter((fee) => {
      const matchesSearch =
        fee.student.toLowerCase().includes(query) ||
        fee.studentId.toLowerCase().includes(query) ||
        fee.className.toLowerCase().includes(query) ||
        fee.feeType.toLowerCase().includes(query);

      const matchesStatus =
        selectedStatus === "All statuses" ||
        fee.status === selectedStatus;

      return matchesSearch && matchesStatus;
    });
  }, [fees, search, selectedStatus]);

  const totalFees = fees.reduce((sum, fee) => sum + fee.amount, 0);

  const collectedAmount = fees.reduce(
    (sum, fee) => sum + fee.paidAmount,
    0
  );

  const pendingAmount = fees.reduce(
    (sum, fee) =>
      sum + (fee.status === "Pending" ? fee.amount - fee.paidAmount : 0),
    0
  );

  const overdueAmount = fees.reduce(
    (sum, fee) =>
      sum + (fee.status === "Overdue" ? fee.amount - fee.paidAmount : 0),
    0
  );

  const paidCount = fees.filter((fee) => fee.status === "Paid").length;
  const pendingCount = fees.filter((fee) => fee.status === "Pending").length;
  const overdueCount = fees.filter((fee) => fee.status === "Overdue").length;

  const updatePayment = (id: number) => {
    setFees((current) =>
      current.map((fee) =>
        fee.id === id
          ? {
              ...fee,
              paidAmount: fee.amount,
              status: "Paid",
              paymentDate: "2026-11-26",
              method: "Cash",
            }
          : fee
      )
    );

    setSelectedFee(null);
  };

  return (
    <div className="min-h-screen bg-[#f7f9f7] px-5 py-7 sm:px-8">

      {/* Heading */}
      <div className="mb-7">
        <p className="mb-2 text-xs font-medium text-[#718579]">
          2026-2027 / Fall semester
        </p>

        <h1 className="text-2xl font-semibold tracking-tight text-[#153d30]">
          Fees & Payments
        </h1>

        <p className="mt-1 text-sm text-[#718579]">
          Manage student fee records, payments and outstanding balances.
        </p>
      </div>

      {/* Statistics */}
      <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Total Fees",
            value: totalFees,
            icon: Wallet,
          },
          {
            title: "Collected Amount",
            value: collectedAmount,
            icon: CreditCard,
          },
          {
            title: "Pending Payments",
            value: pendingAmount,
            icon: Clock3,
          },
          {
            title: "Overdue Payments",
            value: overdueAmount,
            icon: AlertCircle,
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

              <h2 className="text-xl font-semibold text-[#153d30]">
                {formatCurrency(stat.value)}
              </h2>
            </div>
          );
        })}
      </div>

      {/* Payment Overview */}
      <div className="mb-7 rounded-xl border border-[#e1e9e3] bg-white p-5">
        <div className="mb-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-sm font-semibold text-[#153d30]">
              Payment collection overview
            </h2>
            <p className="mt-1 text-xs text-[#819087]">
              Collected amount compared to total recorded fees.
            </p>
          </div>

          <span className="text-xl font-semibold text-[#153d30]">
            {totalFees > 0
              ? Math.round((collectedAmount / totalFees) * 100)
              : 0}%
          </span>
        </div>

        <div className="h-3 overflow-hidden rounded-full bg-[#edf1ed]">
          <div
            className="h-full rounded-full bg-[#39765b] transition-all"
            style={{
              width: `${
                totalFees > 0
                  ? (collectedAmount / totalFees) * 100
                  : 0
              }%`,
            }}
          />
        </div>

        <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 text-[10px] text-[#718579]">
          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#39765b]" />
            Collected: {formatCurrency(collectedAmount)}
          </span>

          <span className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#e8eee9]" />
            Remaining: {formatCurrency(totalFees - collectedAmount)}
          </span>
        </div>
      </div>

      {/* Payment Status Summary */}
      <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {[
          {
            label: "Paid records",
            count: paidCount,
            color: "text-[#347448]",
            background: "bg-[#e5f2e8]",
          },
          {
            label: "Pending records",
            count: pendingCount,
            color: "text-[#66803c]",
            background: "bg-[#edf3e7]",
          },
          {
            label: "Overdue records",
            count: overdueCount,
            color: "text-[#ad5147]",
            background: "bg-[#f9e8e6]",
          },
        ].map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between rounded-xl border border-[#e1e9e3] bg-white p-4"
          >
            <span className="text-xs font-medium text-[#718579]">
              {item.label}
            </span>

            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold ${item.background} ${item.color}`}
            >
              {item.count}
            </span>
          </div>
        ))}
      </div>

      {/* Fee Records */}
      <div className="overflow-hidden rounded-xl border border-[#e1e9e3] bg-white">

        {/* Header */}
        <div className="flex flex-col justify-between gap-4 border-b border-[#e8eee9] p-5 lg:flex-row lg:items-center">
          <div>
            <h2 className="text-sm font-semibold text-[#153d30]">
              Student fee records
            </h2>

            <p className="mt-1 text-xs text-[#819087]">
              Track individual student payments and outstanding fees.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <div className="relative">
              <Search
                size={14}
                className="absolute left-3 top-1/2 -translate-y-1/2 text-[#819087]"
              />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search students..."
                className="w-full rounded-lg border border-[#dce6df] py-2.5 pl-9 pr-3 text-xs outline-none focus:border-[#39765b] sm:w-52"
              />
            </div>

            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="rounded-lg border border-[#dce6df] bg-white px-3 py-2.5 text-xs text-[#294536] outline-none focus:border-[#39765b]"
            >
              {[
                "All statuses",
                "Paid",
                "Pending",
                "Overdue",
              ].map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[950px] text-left text-xs">
            <thead className="bg-[#fbfcfb] text-[#65776c]">
              <tr>
                <th className="px-5 py-3 font-medium">Student</th>
                <th className="px-5 py-3 font-medium">Student ID</th>
                <th className="px-5 py-3 font-medium">Fee type</th>
                <th className="px-5 py-3 font-medium">Amount</th>
                <th className="px-5 py-3 font-medium">Due date</th>
                <th className="px-5 py-3 font-medium">Payment status</th>
                <th className="px-5 py-3 font-medium">Action</th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#edf1ed]">
              {filteredFees.map((fee) => (
                <tr
                  key={fee.id}
                  className="transition hover:bg-[#f9fbf9]"
                >
                  <td className="whitespace-nowrap px-5 py-4 font-medium text-[#294536]">
                    {fee.student}
                    <p className="mt-1 text-[10px] font-normal text-[#819087]">
                      {fee.className}
                    </p>
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                    {fee.studentId}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                    {fee.feeType}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 font-medium text-[#294536]">
                    {formatCurrency(fee.amount)}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                    {formatDate(fee.dueDate)}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-medium ${statusStyles[fee.status]}`}
                    >
                      {fee.status}
                    </span>
                  </td>

                  <td className="whitespace-nowrap px-5 py-4">
                    <button
                      onClick={() => setSelectedFee(fee)}
                      className="font-semibold text-[#174d38] hover:text-[#43845e]"
                    >
                      View details →
                    </button>
                  </td>
                </tr>
              ))}

              {filteredFees.length === 0 && (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-12 text-center text-sm text-[#87958b]"
                  >
                    No payment records found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="border-t border-[#edf1ed] px-5 py-3">
          <p className="text-[10px] text-[#819087]">
            Showing {filteredFees.length} of {fees.length} payment records ·
            Illustrative financial records · Local demo data only
          </p>
        </div>
      </div>

      {/* Payment Details Modal */}
      {selectedFee && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 p-4"
          onClick={() => setSelectedFee(null)}
        >
          <div
            className="w-full max-w-md rounded-xl border border-[#e1e9e3] bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-wider text-[#819087]">
                  Payment information
                </p>

                <h2 className="mt-1 text-lg font-semibold text-[#153d30]">
                  Fee details
                </h2>
              </div>

              <button
                onClick={() => setSelectedFee(null)}
                className="rounded-lg p-2 text-[#819087] hover:bg-[#f1f5f1]"
                aria-label="Close payment details"
              >
                <X size={19} />
              </button>
            </div>

            <div className="mb-5 flex items-center gap-3 rounded-lg bg-[#f4f7f4] p-4">
              <div className="flex size-10 items-center justify-center rounded-full bg-[#e5f0e6]">
                <User size={18} className="text-[#39765b]" />
              </div>

              <div>
                <p className="text-sm font-semibold text-[#294536]">
                  {selectedFee.student}
                </p>
                <p className="mt-1 text-[10px] text-[#819087]">
                  {selectedFee.studentId}
                </p>
              </div>
            </div>

            <div className="space-y-4 border-t border-[#edf1ed] pt-5 text-sm">
              {[
                ["Class", selectedFee.className],
                ["Fee type", selectedFee.feeType],
                ["Total amount", formatCurrency(selectedFee.amount)],
                ["Paid amount", formatCurrency(selectedFee.paidAmount)],
                [
                  "Remaining amount",
                  formatCurrency(selectedFee.amount - selectedFee.paidAmount),
                ],
                ["Due date", formatDate(selectedFee.dueDate)],
                ["Payment date", formatDate(selectedFee.paymentDate)],
                ["Payment method", selectedFee.method],
              ].map(([label, value]) => (
                <div key={label} className="flex justify-between gap-4">
                  <span className="text-xs text-[#819087]">{label}</span>
                  <span className="text-right text-xs font-medium text-[#294536]">
                    {value}
                  </span>
                </div>
              ))}

              <div className="flex items-center justify-between">
                <span className="text-xs text-[#819087]">Status</span>

                <span
                  className={`rounded-full px-3 py-1 text-[10px] font-medium ${statusStyles[selectedFee.status]}`}
                >
                  {selectedFee.status}
                </span>
              </div>
            </div>

            {selectedFee.status !== "Paid" && (
              <button
                onClick={() => updatePayment(selectedFee.id)}
                className="mt-7 flex w-full items-center justify-center gap-2 rounded-lg bg-[#174d38] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#103c2b]"
              >
                <CheckCircle2 size={15} />
                Mark payment as paid
              </button>
            )}

            {selectedFee.status === "Paid" && (
              <div className="mt-7 flex items-center justify-center gap-2 rounded-lg bg-[#e5f2e8] px-4 py-3 text-xs font-semibold text-[#347448]">
                <CheckCircle2 size={15} />
                Payment completed
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
