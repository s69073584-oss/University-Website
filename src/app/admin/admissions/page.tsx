
"use client";

import { useState } from "react";

type Admission = {
  id: number;
  name: string;
  applicantId: string;
  email: string;
  program: string;
  status: "Active" | "Under review";
  document: string;
};

const initialAdmissions: Admission[] = [
  {
    id: 1,
    name: "Ayesha Khan",
    applicantId: "AR-2026-101",
    email: "ayesha@example.com",
    program: "Computer Science",
    status: "Active",
    document: "Academic transcript.pdf",
  },
  {
    id: 2,
    name: "Omar Hassan",
    applicantId: "AR-2026-102",
    email: "omar@example.com",
    program: "Business Administration",
    status: "Under review",
    document: "Certificate.pdf",
  },
  {
    id: 3,
    name: "Sara Ahmed",
    applicantId: "AR-2026-103",
    email: "sara@example.com",
    program: "Computer Science",
    status: "Active",
    document: "Transcript.pdf",
  },
  {
    id: 4,
    name: "Ibrahim Ali",
    applicantId: "AR-2026-104",
    email: "ibrahim@example.com",
    program: "Business Administration",
    status: "Under review",
    document: "Documents.pdf",
  },
];

export default function AdmissionsDashboard() {
  const [admissions, setAdmissions] =
    useState<Admission[]>(initialAdmissions);

  const [search, setSearch] = useState("");
  const [selectedAdmission, setSelectedAdmission] =
    useState<Admission | null>(null);

  const [applicantName, setApplicantName] = useState("");
  const [email, setEmail] = useState("");
  const [program, setProgram] = useState("");
  const [uploadedDocument, setDocument] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const filteredAdmissions = admissions.filter((admission) => {
    const query = search.toLowerCase();

    return (
      admission.name.toLowerCase().includes(query) ||
      admission.applicantId.toLowerCase().includes(query) ||
      admission.program.toLowerCase().includes(query) ||
      admission.status.toLowerCase().includes(query)
    );
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newAdmission: Admission = {
      id: Date.now(),
      name: applicantName.trim(),
      applicantId: `AR-2026-${101 + admissions.length}`,
      email: email.trim(),
      program,
      status: "Under review",
      document: uploadedDocument?.name || "No document uploaded",
    };

    setAdmissions((prev) => [...prev, newAdmission]);

    setApplicantName("");
    setEmail("");
    setProgram("");
    setDocument(null);
    setMessage("Admission submission added successfully!");

    const fileInput = document.getElementById(
      "admission-document"
    ) as HTMLInputElement | null;

    if (fileInput) fileInput.value = "";
  };

  return (
    <div className="min-h-screen bg-[#f7f9f7] px-5 py-7 sm:px-8">

      {/* Page Heading */}
      <div className="mb-6">
        <p className="mb-2 text-xs font-medium text-[#718579]">
          2026-2027 / Fall semester
        </p>

        <h1 className="text-2xl font-semibold tracking-tight text-[#153d30]">
          Admissions
        </h1>

        <p className="mt-1 text-sm text-[#718579]">
          Manage applications and review new student submissions.
        </p>
      </div>

      {/* Admissions Overview */}
      <div className="overflow-hidden rounded-xl border border-[#e1e9e3] bg-white">

        <div className="flex flex-col justify-between gap-4 border-b border-[#e8eee9] px-5 py-4 sm:flex-row sm:items-center">
          <h2 className="text-sm font-semibold text-[#153d30]">
            Admissions overview
          </h2>

          <input
            type="text"
            placeholder="Search records..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-lg border border-[#dce6df] px-3 py-2 text-xs text-[#153d30] outline-none focus:border-[#39765b] sm:w-56"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] text-left text-xs">

            <thead className="bg-[#fbfcfb] text-[#65776c]">
              <tr>
                <th className="px-5 py-3 font-medium">Name</th>
                <th className="px-5 py-3 font-medium">Applicant ID</th>
                <th className="px-5 py-3 font-medium">
                  Academic Information
                </th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 text-center font-medium">
                  Action
                </th>
              </tr>
            </thead>

            <tbody className="divide-y divide-[#edf1ed]">
              {filteredAdmissions.map((admission) => (
                <tr
                  key={admission.id}
                  className="transition hover:bg-[#f9fbf9]"
                >
                  <td className="whitespace-nowrap px-5 py-4 font-medium text-[#294536]">
                    {admission.name}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                    {admission.applicantId}
                  </td>

                  <td className="whitespace-nowrap px-5 py-4 text-[#52665a]">
                    {admission.program}
                  </td>

                  <td className="px-5 py-4">
                    <span
                      className={`whitespace-nowrap rounded-full px-3 py-1 text-[10px] font-medium ${
                        admission.status === "Active"
                          ? "bg-[#e5f2e8] text-[#347448]"
                          : "bg-[#edf3e7] text-[#66803c]"
                      }`}
                    >
                      {admission.status}
                    </span>
                  </td>

                  <td className="px-5 py-4 text-center">
                    <button
                      onClick={() => setSelectedAdmission(admission)}
                      className="whitespace-nowrap font-semibold text-[#174d38] hover:text-[#43845e]"
                    >
                      Review →
                    </button>
                  </td>
                </tr>
              ))}

              {filteredAdmissions.length === 0 && (
                <tr>
                  <td
                    colSpan={5}
                    className="px-5 py-10 text-center text-sm text-[#87958b]"
                  >
                    No admissions found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="border-t border-[#edf1ed] px-5 py-3">
          <p className="text-[10px] text-[#819087]">
            Showing {filteredAdmissions.length} of {admissions.length} applications
            · Illustrative academic records · Local demo data only
          </p>
        </div>
      </div>

      {/* New Admission Form */}
      <div className="mt-6 max-w-2xl rounded-xl border border-[#e1e9e3] bg-white p-5 sm:p-6">

        <div className="mb-5">
          <h2 className="text-base font-semibold text-[#153d30]">
            New admission submission
          </h2>

          <p className="mt-1 text-xs text-[#819087]">
            Enter applicant information and submit an admission application.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="rounded-lg bg-[#e5f0e6] px-4 py-3 text-xs text-[#376b4a]">
            Interactive preview · Submissions stay on this device.
          </div>

          <div>
            <label className="mb-2 block text-xs font-medium text-[#294536]">
              Applicant name
            </label>

            <input
              type="text"
              required
              value={applicantName}
              onChange={(e) => setApplicantName(e.target.value)}
              placeholder="Enter applicant name"
              className="w-full rounded-lg border border-[#dce6df] px-3 py-3 text-xs text-[#153d30] outline-none focus:border-[#39765b]"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-medium text-[#294536]">
              Email address
            </label>

            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter email address"
              className="w-full rounded-lg border border-[#dce6df] px-3 py-3 text-xs text-[#153d30] outline-none focus:border-[#39765b]"
            />
          </div>

          <div>
            <label className="mb-2 block text-xs font-medium text-[#294536]">
              Selected program
            </label>

            <select
              required
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              className="w-full rounded-lg border border-[#dce6df] bg-white px-3 py-3 text-xs text-[#52665a] outline-none focus:border-[#39765b]"
            >
              <option value="">Select a program</option>
              <option value="Computer Science">Computer Science</option>
              <option value="Business Administration">
                Business Administration
              </option>
              <option value="Mathematics">Mathematics</option>
              <option value="English">English</option>
              <option value="Physics">Physics</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-xs font-medium text-[#294536]">
              Upload documents
            </label>

            <input
              id="admission-document"
              type="file"
              accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
              onChange={(e) =>
                setDocument(e.target.files?.[0] || null)
              }
              className="w-full text-xs text-[#52665a] file:mr-3 file:rounded-md file:border-0 file:bg-[#e5f0e6] file:px-3 file:py-2 file:text-xs file:font-medium file:text-[#376b4a]"
            />

            <p className="mt-1 text-[10px] text-[#819087]">
              PDF, DOC, DOCX, JPG or PNG.
            </p>
          </div>

          {message && (
            <p className="rounded-lg bg-[#e5f2e8] px-3 py-2 text-xs text-[#347448]">
              {message}
            </p>
          )}

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#1c563d] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#123e2c]"
          >
            Save submission <span>→</span>
          </button>
        </form>
      </div>

      {/* Review Modal */}
      {selectedAdmission && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4"
          onClick={() => setSelectedAdmission(null)}
        >
          <div
            className="w-full max-w-md rounded-xl border border-[#e1e9e3] bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-[#153d30]">
                Application details
              </h2>

              <button
                onClick={() => setSelectedAdmission(null)}
                className="text-xl text-[#819087]"
                aria-label="Close application details"
              >
                ×
              </button>
            </div>

            <div className="space-y-4 text-sm">
              <div>
                <p className="text-xs text-[#819087]">Applicant name</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedAdmission.name}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Applicant ID</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedAdmission.applicantId}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Email</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedAdmission.email}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Selected program</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedAdmission.program}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Document</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedAdmission.document}
                </p>
              </div>

              <div>
                <p className="text-xs text-[#819087]">Application status</p>
                <p className="mt-1 font-medium text-[#294536]">
                  {selectedAdmission.status}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedAdmission(null)}
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
