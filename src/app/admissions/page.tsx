import AdmissionsHero from "@/components/Admissions/AdmissionsHero";
import AdmissionsSteps from "@/components/Admissions/AdmissionsSteps";
import ApplicationForm from "@/components/Admissions/ApplicationForm";
import ApplicationIntro from "@/components/Admissions/ApplicationIntro";
import AdmissionRequirements from "@/components/Admissions/AdmissionRequirements";
import RequiredDocuments from "@/components/Admissions/RequiredDocuments";
import AdmissionTimeline from "@/components/Admissions/AdmissionTimeline";

import AdmissionsFAQ from "@/components/Admissions/AdmissionsFAQ";

export default function AdmissionsPage() {
  return (
    <main className="min-h-screen bg-[#f7f9f6]">

      {/* Hero Section */}
      <AdmissionsHero />

      {/* Application Steps */}
      <AdmissionsSteps />

      {/* Application Introduction & Form */}
      <section className="bg-[#f7f9f6] pb-16">
        <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-8 px-6 md:grid-cols-[1fr_1.08fr] md:px-10">

          <div>
            <ApplicationIntro />
          </div>

          <div>
            <ApplicationForm />
          </div>

        </div>
      </section>

      {/* Admission Requirements */}
      <AdmissionRequirements />

      {/* Required Documents */}
      <RequiredDocuments />

      {/* Admission Timeline */}
      <AdmissionTimeline />

      {/* Frequently Asked Questions */}
      <AdmissionsFAQ />

    </main>
  );
}
