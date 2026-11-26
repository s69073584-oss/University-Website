
import {
  Target,
  Eye,
  ArrowUpRight,
} from "lucide-react";

const missionItems = [
  {
    icon: Target,
    label: "OUR MISSION",
    title: "Empowering minds through meaningful education.",
    description:
      "To nurture knowledge, strengthen character, encourage curiosity, and equip learners with the skills and confidence to make meaningful contributions to society.",
    points: [
      "Encourage lifelong learning",
      "Build knowledge and character",
      "Inspire meaningful contributions",
    ],
  },
  {
    icon: Eye,
    label: "OUR VISION",
    title: "Creating a brighter future for every learner.",
    description:
      "To create a welcoming academic community where every learner has the opportunity to discover their potential, achieve their goals, and thrive.",
    points: [
      "Create opportunities for growth",
      "Inspire future generations",
      "Build an inclusive community",
    ],
  },
];

export default function Mission() {
  return (
    <section className="bg-[#f7faf7] px-5 py-20 sm:py-24 lg:py-28">
      <main className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#dce9df] bg-[#edf5ee] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#24734f]" />
            <p className="text-xs font-medium text-[#285c43]">
              OUR PURPOSE
            </p>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#123e30] sm:text-4xl lg:text-5xl">
            Guided by purpose.
            <br />
            <span className="text-[#2c7953]">
              Driven by possibility.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Our mission and vision reflect the values that guide
            our educational community and shape our commitment
            to every learner.
          </p>

        </div>

        {/* Mission & Vision Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 lg:grid-cols-2">

          {missionItems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.label}
                className="group rounded-2xl border border-[#e3ebe4] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9"
              >

                {/* Icon and Label */}
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-[#e9f3eb] text-[#185b43] transition group-hover:bg-[#185b43] group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="text-[#a5c9a9]"
                  />
                </div>

                <p className="mt-7 text-xs font-bold tracking-[2px] text-[#43865b]">
                  {item.label}
                </p>

                <h3 className="mt-3 max-w-md text-2xl font-extrabold leading-snug text-[#123e30] sm:text-3xl">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  {item.description}
                </p>

                {/* Points */}
                <div className="mt-7 space-y-3 border-t border-[#edf1ed] pt-6">
                  {item.points.map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <span className="h-2 w-2 shrink-0 rounded-full bg-[#43865b]" />
                      <p className="text-sm text-gray-600">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>

              </div>
            );
          })}

        </div>

      </main>
    </section>
  );
}
