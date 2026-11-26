
const requirements = [
  {
    number: "01",
    title: "Academic Qualification",
    description:
      "Applicants must meet the academic qualification required for their selected program.",
  },
  {
    number: "02",
    title: "Minimum Marks",
    description:
      "Students must satisfy the minimum marks and eligibility criteria of their chosen program.",
  },
  {
    number: "03",
    title: "Complete Information",
    description:
      "All personal and academic information must be accurate and complete.",
  },
  {
    number: "04",
    title: "Supporting Documents",
    description:
      "Applicants should provide the necessary academic records and identification documents.",
  },
];

export default function AdmissionRequirements() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">

        <div className="mb-9 max-w-xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#43866a]">
            Before you apply
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#153f32]">
            Admission requirements
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Get familiar with the basic requirements before starting your
            admission application.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {requirements.map((item) => (
            <div
              key={item.number}
              className="rounded-xl border border-[#e7ece7] bg-[#f8faf7] p-5 transition hover:border-[#a9c9b2]"
            >
              <span className="text-xs font-bold text-[#43866a]">
                {item.number}
              </span>

              <h3 className="mt-4 text-sm font-semibold text-[#153f32]">
                {item.title}
              </h3>

              <p className="mt-3 text-xs leading-6 text-gray-500">
                {item.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
