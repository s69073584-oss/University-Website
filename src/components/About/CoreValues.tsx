
import {
  BookOpen,
  ShieldCheck,
  Lightbulb,
  HeartHandshake,
} from "lucide-react";

const values = [
  {
    icon: BookOpen,
    number: "01",
    title: "Excellence",
    description:
      "Striving for high standards in learning, teaching, and personal development.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Integrity",
    description:
      "Building a culture of honesty, responsibility, respect, and trust.",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Innovation",
    description:
      "Encouraging creative thinking, curiosity, and new ways of learning.",
  },
  {
    icon: HeartHandshake,
    number: "04",
    title: "Community",
    description:
      "Creating a supportive environment where everyone feels valued and included.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white px-5 py-20 sm:py-24 lg:py-28">
      <main className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="max-w-2xl">

          <div className="inline-flex items-center gap-2 rounded-full border border-[#dce9df] bg-[#edf5ee] px-4 py-2">
            <span className="h-2 w-2 rounded-full bg-[#24734f]" />
            <p className="text-xs font-medium text-[#285c43]">
              WHAT WE BELIEVE
            </p>
          </div>

          <h2 className="mt-6 text-3xl font-extrabold leading-tight tracking-tight text-[#123e30] sm:text-4xl lg:text-5xl">
            Values that shape
            <br />
            <span className="text-[#2c7953]">
              every possibility.
            </span>
          </h2>

          <p className="mt-5 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
            Our core values guide the way we learn, grow, and
            work together. They reflect the principles that
            shape our educational community.
          </p>

        </div>

        {/* Values Grid */}
        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

          {values.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.number}
                className="group rounded-2xl border border-[#e3ebe4] bg-[#f7faf7] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-[#a5c9a9] hover:bg-white hover:shadow-xl sm:p-7"
              >

                {/* Top Row */}
                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e5f0e5] text-[#185b43] transition duration-300 group-hover:bg-[#185b43] group-hover:text-white">
                    <Icon size={24} />
                  </div>

                  <span className="text-3xl font-extrabold text-[#dce9df]">
                    {item.number}
                  </span>

                </div>

                {/* Content */}
                <h3 className="mt-7 text-xl font-bold text-[#123e30]">
                  {item.title}
                </h3>

                <p className="mt-3 min-h-[84px] text-sm leading-7 text-gray-600">
                  {item.description}
                </p>

                {/* Bottom Accent */}
                <div className="mt-6 h-1 w-10 rounded-full bg-[#43865b] transition-all duration-300 group-hover:w-16" />

              </div>
            );
          })}

        </div>

      </main>
    </section>
  );
}
