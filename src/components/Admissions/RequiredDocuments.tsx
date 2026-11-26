
const documents = [
  {
    title: "Academic Certificates",
    description: "Previous examination certificates and mark sheets.",
    icon: "01",
  },
  {
    title: "Identity Document",
    description: "CNIC, B-Form or other applicable identification.",
    icon: "02",
  },
  {
    title: "Recent Photographs",
    description: "Recent passport-size photographs.",
    icon: "03",
  },
  {
    title: "Additional Documents",
    description: "Any other documents required for your selected program.",
    icon: "04",
  },
];

export default function RequiredDocuments() {
  return (
    <section className="bg-[#f7f9f6] py-16">
      <div className="mx-auto max-w-[1120px] px-6 md:px-10">

        <div className="mb-9 max-w-xl">
          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#43866a]">
            Get prepared
          </p>

          <h2 className="mt-2 text-2xl font-bold text-[#153f32]">
            Required documents
          </h2>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            Keep these documents ready before completing your application.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {documents.map((document) => (
            <div
              key={document.icon}
              className="rounded-xl border border-[#e5ebe5] bg-white p-5"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#e7f1e6] text-xs font-bold text-[#286044]">
                {document.icon}
              </div>

              <h3 className="mt-4 text-sm font-semibold text-[#153f32]">
                {document.title}
              </h3>

              <p className="mt-2 text-xs leading-6 text-gray-500">
                {document.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
