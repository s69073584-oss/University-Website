
"use client";

import { useState, type FormEvent } from "react";

export default function ApplicationForm() {
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const form = event.currentTarget;
      const formData = new FormData(form);

      const student = {
        reference: `APP-${Date.now().toString().slice(-8)}`,
        studentName: formData.get("studentName"),
        guardianName: formData.get("guardianName"),
        dob: formData.get("dob"),
        email: formData.get("email"),
        address: formData.get("address"),
        program: formData.get("program"),
        education: formData.get("education"),
        documentName: (
          formData.get("documents") as File
        )?.name || "",
        submittedAt: new Date().toISOString(),
      };

      const previous = JSON.parse(
        localStorage.getItem("universityApplications") || "[]"
      );

      localStorage.setItem(
        "universityApplications",
        JSON.stringify([...previous, student])
      );

      setMessage(
        `Application saved successfully! Your reference is ${student.reference}`
      );

      form.reset();
    } catch {
      setMessage("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  const inputClass =
    "mt-2 w-full rounded-md border border-[#dce5df] bg-white px-3 py-3 text-xs text-[#173f32] outline-none transition focus:border-[#39785b] focus:ring-2 focus:ring-[#39785b]/10";

  const labelClass =
    "block text-xs font-medium text-[#173f32]";

  return (
    <div className="rounded-xl border border-[#e7ece7] bg-white p-5 shadow-sm md:p-6">

      <div className="mb-6 rounded-md bg-[#e6f1e5] px-3 py-3">
        <p className="text-[11px] text-[#476a53]">
          Interactive preview · submissions stay on this device.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">

        <div>
          <label className={labelClass}>
            Student name
          </label>
          <input
            name="studentName"
            type="text"
            required
            placeholder="Enter student name"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>
            Guardian name
          </label>
          <input
            name="guardianName"
            type="text"
            required
            placeholder="Enter guardian name"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>
            Date of birth
          </label>
          <input
            name="dob"
            type="date"
            required
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>
            Email address
          </label>
          <input
            name="email"
            type="email"
            required
            placeholder="Enter email address"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>
            Address
          </label>
          <input
            name="address"
            type="text"
            required
            placeholder="Enter address"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>
            Selected class or program
          </label>
          <input
            name="program"
            type="text"
            required
            placeholder="Enter selected class or program"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>
            Previous education and grades
          </label>
          <textarea
            name="education"
            required
            rows={3}
            placeholder="Enter previous education and grades"
            className={inputClass}
          />
        </div>

        <div>
          <label className={labelClass}>
            Documents
          </label>
          <input
            name="documents"
            type="file"
            accept=".pdf,.jpg,.jpeg,.png"
            className="mt-3 block w-full text-xs text-gray-600 file:mr-3 file:rounded-md file:border-0 file:bg-[#e7f1e6] file:px-4 file:py-2 file:text-xs file:font-medium file:text-[#194b38] hover:file:bg-[#d7e8d7]"
          />
          <p className="mt-2 text-[10px] text-gray-400">
            PDF, JPG or PNG files.
          </p>
        </div>

        {message && (
          <p
            role="status"
            className="rounded-md bg-[#e7f1e6] p-3 text-xs leading-5 text-[#194b38]"
          >
            {message}
          </p>
        )}

        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-md bg-[#1c5941] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#154632] disabled:opacity-60"
        >
          {loading ? "Submitting..." : "Submit application"}
          <span>→</span>
        </button>

      </form>
    </div>
  );
}
