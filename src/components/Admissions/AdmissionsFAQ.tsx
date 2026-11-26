
const faqs = [
  {
    question: "How can I apply for admission?",
    answer:
      "Choose your preferred program, prepare your documents and complete the application form.",
  },
  {
    question: "Which documents are required?",
    answer:
      "Academic certificates, mark sheets, identification documents and recent photographs may be required.",
  },
  {
    question: "Can I apply for more than one program?",
    answer:
      "Program selection and multiple application rules depend on the official university admission policy.",
  },
  {
    question: "How can I check my admission status?",
    answer:
      "Follow the university's official admission announcements and merit list updates.",
  },
  {
    question: "What happens after submitting my application?",
    answer:
      "Your application should be reviewed according to the university's admission process.",
  },
];

export default function AdmissionsFAQ() {
  return (
    <section className="bg-[#f7f9f6] py-16">
      <div className="mx-auto max-w-[850px] px-6 md:px-10">

        <div className="mb-9 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#43866a]">
            Need some help?
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#153f32]">
            Frequently asked questions
          </h2>

          <p className="mt-3 text-sm text-gray-500">
            Find answers to common admission questions.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-lg border border-[#e4eae4] bg-white p-5"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-sm font-semibold text-[#153f32]">
                {faq.question}

                <span className="text-lg text-[#43866a] transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>

              <p className="mt-4 border-t border-[#edf0ed] pt-4 text-xs leading-6 text-gray-500">
                {faq.answer}
              </p>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
