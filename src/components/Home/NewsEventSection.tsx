
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";

const events = [
  {
    day: "24",
    month: "OCT",
    category: "Campus Life · Sample event",
    title: "Open doors. New possibilities.",
    description:
      "Join our campus discovery day and meet your future community.",
    link: "/events/open-day",
  },
  {
    day: "02",
    month: "NOV",
    category: "Innovation · Sample event",
    title: "Ideas that make a difference.",
    description:
      "Explore student projects at the annual innovation showcase.",
    link: "/events/innovation",
  },
  {
    day: "12",
    month: "NOV",
    category: "Community · Sample event",
    title: "A conversation about our future.",
    description:
      "Connect with faculty at our interdisciplinary research forum.",
    link: "/events/community",
  },
];

export default function NewsEventSection() {
  return (
    <section className="bg-[#f5f8f5] px-5 py-16 sm:px-8 lg:py-20">

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">

          <div>
            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#438064]">
              On Campus
            </span>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#183b2e] sm:text-3xl">
              There's always something happening.
            </h2>
          </div>

          <Link
            href="/events"
            className="group mb-1 inline-flex items-center gap-1 text-xs font-semibold text-[#245c42] transition hover:text-[#4b966b]"
          >
            View all events

            <ArrowRight
              size={14}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>

        </div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          {events.map((event) => (
            <article
              key={event.title}
              className="group flex min-h-[190px] flex-col rounded-xl border border-[#e5ebe5] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#cbdacb] hover:shadow-lg sm:p-6"
            >

              {/* Date */}
              <div className="mb-4 flex items-center">
                <div className="inline-flex items-center gap-1.5 rounded-md bg-[#e6f0e5] px-3 py-1.5 text-[10px] font-bold text-[#34775c]">
                  <CalendarDays size={12} />
                  {event.day} {event.month}
                </div>
              </div>

              {/* Category */}
              <span className="text-[10px] font-medium text-[#438064]">
                {event.category}
              </span>

              {/* Title */}
              <h3 className="mt-2 text-base font-bold leading-snug text-[#183b2e] transition-colors group-hover:text-[#438064]">
                {event.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-xs leading-6 text-[#78867d]">
                {event.description}
              </p>

              {/* Footer Link */}
              <div className="mt-auto pt-5">
                <Link
                  href={event.link}
                  className="group/link inline-flex items-center gap-1 text-[11px] font-semibold text-[#245c42] transition hover:text-[#4b966b]"
                >
                  Find out more

                  <ArrowRight
                    size={12}
                    className="transition-transform group-hover/link:translate-x-1"
                  />
                </Link>
              </div>

            </article>
          ))}

        </div>
      </div>
    </section>
  );
}
