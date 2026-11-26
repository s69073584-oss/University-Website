
"use client";

import { useEffect, useState } from "react";

export default function ApplicationIntro() {
  const [applications, setApplications] = useState<string[]>([]);

  useEffect(() => {
    try {
      const saved = localStorage.getItem("universityApplications");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed)) {
          setApplications(
            parsed.map((item: { reference?: string }) => item.reference || "")
              .filter(Boolean)
          );
        }
      }
    } catch {
      setApplications([]);
    }
  }, []);

  return (
    <div className="space-y-5">

      <div>
        <h2 className="text-xl font-bold text-[#153f32]">
          Begin your application
        </h2>

        <p className="mt-3 text-xs leading-6 text-gray-500">
          Have your previous academic records, identification, and supporting
          documents ready. School applicants should include guardian details;
          university applicants should include previous qualifications.
        </p>
      </div>

      <div className="rounded-lg border border-[#dfebdf] bg-[#e7f1e6] p-4">
        <h3 className="text-[13px] font-semibold text-[#194b38]">
          Your local applications
        </h3>

        {applications.length > 0 ? (
          <div className="mt-3 space-y-2">
            {applications.map((reference) => (
              <div
                key={reference}
                className="rounded-md bg-white p-3 text-xs text-[#194b38]"
              >
                Reference: {reference}
              </div>
            ))}
          </div>
        ) : (
          <p className="mt-2 text-xs leading-5 text-gray-600">
            Your submitted demo application references will appear here.
            Nothing is sent to an institution.
          </p>
        )}
      </div>

    </div>
  );
}
