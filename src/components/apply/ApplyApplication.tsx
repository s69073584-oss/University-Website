"use client";

import Link from "next/link";
import { useState, type ChangeEvent, type FormEvent } from "react";

const steps = [
  { number: "01", title: "Choose your program" },
  { number: "02", title: "Prepare your documents" },
  { number: "03", title: "Complete your application" },
  { number: "04", title: "Track your decision" },
];

const initialFormData = {
  studentName: "",
  guardianName: "",
  dateOfBirth: "",
  email: "",
  phone: "",
  program: "",
  qualifications: "",
  address: "",
};

export default function ApplyApplication() {
  const [formData, setFormData] = useState(initialFormData);
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files ?? []);
    setSelectedFiles(files);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="bg-white">
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
        <nav aria-label="Breadcrumb" className="text-sm text-gray-500">
          <ol className="flex items-center gap-2">
            <li>
              <Link href="/" className="transition hover:text-[#123D2B]">
                Home
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="font-medium text-[#123D2B]">Admissions</li>
          </ol>
        </nav>

        <p className="mt-8 text-xs font-semibold tracking-[0.2em] text-[#43865B] sm:text-sm">
          YOUR FUTURE STARTS WITH A STEP.
        </p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-[#123D2B] sm:text-4xl lg:text-5xl">
          Make room for possibility.
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
          Explore programs at AL-RAZI School &amp; University and begin your application
          with confidence. Share your details, prepare your documents, and take the next
          step toward your future.
        </p>

        <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <li
              key={step.number}
              className="rounded-xl border border-[#d9e7df] bg-[#f6fbf8] p-5"
            >
              <p className="text-sm font-semibold tracking-wide text-[#43865B]">
                {step.number}
              </p>
              <p className="mt-2 text-base font-semibold text-[#123D2B]">{step.title}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="border-t border-gray-100 bg-gray-50">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-8 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-12 lg:px-8 lg:py-14">
          <div>
            <h2 className="text-2xl font-bold text-[#123D2B] sm:text-3xl">
              Begin your application.
            </h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-gray-600">
              Prepare your academic records, identification, and any supporting documents
              before you start. Having these details ready will help you complete the
              application smoothly and accurately.
            </p>

            <div className="mt-8 rounded-2xl border border-[#cfe3d7] bg-[#eaf5ef] p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#123D2B]">
                Your local applications
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#24553d] sm:text-base">
                Submitted application previews will appear on this device for your
                reference. This page lets you review your information before sharing it
                through official admission channels.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm sm:p-8">
            <div className="rounded-lg border border-[#cfe3d7] bg-[#eaf5ef] px-4 py-3 text-sm font-medium text-[#24553d]">
              Interactive preview - submissions stay on this device.
            </div>

            {submitted && (
              <div
                className="mt-4 rounded-lg border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-800"
                role="status"
                aria-live="polite"
              >
                Application preview saved on this device. No information has been submitted
                to the institution.
              </div>
            )}

            <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="studentName" className="block text-sm font-medium text-gray-700">
                  Student Name
                </label>
                <input
                  id="studentName"
                  name="studentName"
                  type="text"
                  required
                  value={formData.studentName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-gray-900 shadow-sm outline-none transition focus:border-[#43865B] focus:ring-2 focus:ring-[#43865B]/20"
                />
              </div>

              <div>
                <label htmlFor="guardianName" className="block text-sm font-medium text-gray-700">
                  Guardian Name
                </label>
                <input
                  id="guardianName"
                  name="guardianName"
                  type="text"
                  required
                  value={formData.guardianName}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-gray-900 shadow-sm outline-none transition focus:border-[#43865B] focus:ring-2 focus:ring-[#43865B]/20"
                />
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="dateOfBirth" className="block text-sm font-medium text-gray-700">
                    Date of Birth
                  </label>
                  <input
                    id="dateOfBirth"
                    name="dateOfBirth"
                    type="date"
                    required
                    value={formData.dateOfBirth}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-gray-900 shadow-sm outline-none transition focus:border-[#43865B] focus:ring-2 focus:ring-[#43865B]/20"
                  />
                </div>

                <div>
                  <label htmlFor="program" className="block text-sm font-medium text-gray-700">
                    Select Program
                  </label>
                  <select
                    id="program"
                    name="program"
                    required
                    value={formData.program}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-300 bg-white px-3 py-2.5 text-gray-900 shadow-sm outline-none transition focus:border-[#43865B] focus:ring-2 focus:ring-[#43865B]/20"
                  >
                    <option value="">Select a program</option>
                    <option value="School">School</option>
                    <option value="College">College</option>
                    <option value="University">University</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email Address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-gray-900 shadow-sm outline-none transition focus:border-[#43865B] focus:ring-2 focus:ring-[#43865B]/20"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-gray-900 shadow-sm outline-none transition focus:border-[#43865B] focus:ring-2 focus:ring-[#43865B]/20"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="qualifications" className="block text-sm font-medium text-gray-700">
                  Academic Qualifications
                </label>
                <textarea
                  id="qualifications"
                  name="qualifications"
                  required
                  rows={4}
                  value={formData.qualifications}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-gray-900 shadow-sm outline-none transition focus:border-[#43865B] focus:ring-2 focus:ring-[#43865B]/20"
                />
              </div>

              <div>
                <label htmlFor="address" className="block text-sm font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  id="address"
                  name="address"
                  required
                  rows={3}
                  value={formData.address}
                  onChange={handleChange}
                  className="mt-1 w-full rounded-md border border-gray-300 px-3 py-2.5 text-gray-900 shadow-sm outline-none transition focus:border-[#43865B] focus:ring-2 focus:ring-[#43865B]/20"
                />
              </div>

              <div>
                <label htmlFor="documents" className="block text-sm font-medium text-gray-700">
                  Document Upload
                </label>
                <p className="mt-1 text-sm text-gray-500">
                  Upload supporting documents (PDF, JPG, or PNG).
                </p>
                <input
                  id="documents"
                  name="documents"
                  type="file"
                  accept=".pdf,.jpg,.jpeg,.png"
                  multiple
                  onChange={handleFileChange}
                  className="mt-2 block w-full text-sm text-gray-700 file:mr-4 file:rounded-md file:border-0 file:bg-[#123D2B] file:px-4 file:py-2.5 file:font-semibold file:text-white hover:file:bg-[#1D563C]"
                />
                {selectedFiles.length > 0 && (
                  <div className="mt-3 rounded-md border border-gray-200 bg-gray-50 p-3">
                    <p className="text-sm font-medium text-gray-700">Selected files</p>
                    <ul className="mt-2 list-inside list-disc space-y-1 text-sm text-gray-600">
                      {selectedFiles.map((file) => (
                        <li key={`${file.name}-${file.lastModified}`}>{file.name}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full rounded-md bg-[#123D2B] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#1D563C] focus:outline-none focus:ring-2 focus:ring-[#43865B] focus:ring-offset-2"
              >
                Submit Application
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}