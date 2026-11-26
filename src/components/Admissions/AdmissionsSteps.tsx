
const steps = [
  {
    number: "01",
    title: "Choose your program",
    description: "Explore programs and find your perfect fit.",
  },
  {
    number: "02",
    title: "Prepare your documents",
    description: "Collect your academic and personal documents.",
  },
  {
    number: "03",
    title: "Complete your application",
    description: "Fill out the application form carefully.",
  },
  {
    number: "04",
    title: "Track your decision",
    description: "Stay updated on your application status.",
  },
];

export default function AdmissionsSteps() {
  return (
    <section className="bg-[#f7f9f6]">
      <div className="mx-auto grid max-w-[1120px] grid-cols-1 gap-3 px-6 pb-8 sm:grid-cols-2 lg:grid-cols-4 md:px-10">

        {steps.map((step) => (
          <div
            key={step.number}
            className="rounded-lg border border-[#e4eae4] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#a5c5af] hover:shadow-md"
          >
            <span className="text-[11px] font-bold text-[#43866a]">
              {step.number}
            </span>

            <h3 className="mt-2 text-[13px] font-semibold text-[#173f32]">
              {step.title}
            </h3>

            <p className="mt-2 text-xs leading-5 text-gray-500">
              {step.description}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
}
