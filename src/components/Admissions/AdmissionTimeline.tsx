
const timeline = [
  {
    number: "01",
    title: "Applications Open",
    description: "Admission applications become available.",
    date: "To be announced",
  },
  {
    number: "02",
    title: "Application Deadline",
    description: "Last date to submit your application.",
    date: "To be announced",
  },
  {
    number: "03",
    title: "Entry Test & Evaluation",
    description: "Eligible applicants proceed through the assessment process.",
    date: "To be announced",
  },
  {
    number: "04",
    title: "Merit List & Results",
    description: "Admission decisions and merit lists are announced.",
    date: "To be announced",
  },
];

export default function AdmissionTimeline() {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">

        <div className="mb-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#43866a]">
            Important dates
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#153f32]">
            Admission timeline
          </h2>

          <p className="mt-3 max-w-xl text-sm leading-6 text-gray-500">
            Follow the admission process and stay informed about important
            application milestones.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-4">
          {timeline.map((item) => (
            <div key={item.number} className="relative border-l-2 border-[#dceadd] pl-5 pb-3">

              <span className="absolute -left-[7px] top-0 h-3 w-3 rounded-full border-2 border-white bg-[#43866a] ring-2 ring-[#dceadd]" />

              <p className="text-[11px] font-bold text-[#43866a]">
                STEP {item.number}
              </p>

              <h3 className="mt-3 text-sm font-semibold text-[#153f32]">
                {item.title}
              </h3>

              <p className="mt-2 text-xs leading-5 text-gray-500">
                {item.description}
              </p>

              <p className="mt-4 inline-block rounded-md bg-[#e7f1e6] px-3 py-2 text-[10px] font-semibold text-[#286044]">
                {item.date}
              </p>

            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-gray-400">
          Note: Actual admission dates should be updated according to the
          official university admission schedule.
        </p>

      </div>
    </section>
  );
}
