
import Link from "next/link";
import {
  ArrowUpRight,
  ArrowRight,
  Camera,
  Sparkles,
} from "lucide-react";

const campusImages = [
  {
    image:
      "/images/community.jpg",
    title: "Student Community",
    category: "Campus Life",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    image:
      "/images/learntogether.jpg",
    title: "Learning Together",
    category: "Education",
    className: "",
  },
  {
    image:
      "/images/Activity.jpg",
    title: "Student Activities",
    category: "Community",
    className: "",
  },
  {
    image:
      "/images/campusexperince.jpg",
    title: "Campus Experiences",
    category: "Student Life",
    className: "",
  },
  {
    image:
      "/images/sports.jpg",
    title: "Sports & Teamwork",
    category: "Student Recreation",
    className: "",
  },
];

export default function CampuslifeSection() {
  return (
    <section className="bg-[#f5f8f5] px-5 py-16 sm:px-8 lg:py-24">

      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-10 flex flex-wrap items-end justify-between gap-5">

          <div className="max-w-2xl">

            <div className="mb-4 flex items-center gap-2">
              <Camera size={15} className="text-[#438064]" />

              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#438064]">
                Life Beyond Classrooms
              </span>
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight text-[#183b2e] sm:text-4xl lg:text-5xl">
              Experience life.
              <span className="text-[#4b966b]">
                {" "}Create memories.
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-[#78867d]">
              Discover a vibrant campus where friendships grow,
              ideas come alive, and every day brings new opportunities
              to learn, explore, and achieve.
            </p>

          </div>

          <Link
            href="/campus-life"
            className="group inline-flex items-center gap-2 rounded-md border border-[#d9e5dc] bg-white px-4 py-3 text-xs font-semibold text-[#245c42] transition hover:bg-[#245c42] hover:text-white"
          >
            Explore Campus Life

            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>

        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:grid-rows-2">

          {campusImages.map((item, index) => (
            <div
              key={item.title}
              className={`group relative min-h-[220px] overflow-hidden rounded-xl ${item.className} ${
                index === 0 ? "md:min-h-[450px]" : ""
              }`}
            >

              <img
                src={item.image}
                alt={item.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#102e23]/80 via-transparent to-transparent opacity-90 transition-opacity group-hover:opacity-100" />

              {/* Image Content */}
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">

                <div>
                  <span className="mb-2 block text-[9px] font-bold uppercase tracking-[0.18em] text-[#d5e9bd]">
                    {item.category}
                  </span>

                  <h3 className="text-base font-bold text-white sm:text-lg">
                    {item.title}
                  </h3>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/30 bg-white/15 text-white backdrop-blur-sm transition-all group-hover:bg-white group-hover:text-[#183b2e]">
                  <ArrowUpRight size={16} />
                </div>

              </div>

            </div>
          ))}

        </div>

        {/* Bottom Message */}
        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-[#e1eae1] bg-white px-5 py-5 sm:px-7">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#e6f0e5] text-[#34775c]">
              <Sparkles size={19} />
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#183b2e]">
                More than just a classroom.
              </h3>

              <p className="mt-1 text-xs text-[#859188]">
                A place to connect, explore and grow together.
              </p>
            </div>
          </div>

          <Link
            href="/campus-life"
            className="inline-flex items-center gap-2 text-xs font-semibold text-[#34775c] transition hover:text-[#183b2e]"
          >
            Discover more
            <ArrowRight size={14} />
          </Link>

        </div>

      </div>
    </section>
  );
}

export { CampuslifeSection };
