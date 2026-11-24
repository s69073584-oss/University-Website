
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Ayesha Khan",
    role: "Student",
    review:
      "Here, curiosity isn't just encouraged. It's where every lesson begins.",
  },
  {
    name: "Fatima Hassan",
    role: "Parent",
    review:
      "A place where our children feel seen, supported, and inspired to grow.",
  },
  {
    name: "Dr. Sara Ahmed",
    role: "Faculty",
    review:
      "The most rewarding part is watching students find their own voice.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#e6f0e5] px-5 py-16 sm:px-8 lg:py-20">

      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-8">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#438064]">
            People & Perspectives
          </span>

          <h2 className="mt-2 text-2xl font-bold tracking-tight text-[#183b2e] sm:text-3xl">
            A community that brings out your best.
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item) => (
            <div
              key={item.name}
              className="group rounded-xl border border-[#e9eee8] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg sm:p-6"
            >

              {/* Rating */}
              <div className="mb-4 flex items-center gap-0.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star
                    key={star}
                    size={12}
                    fill="#c69b50"
                    stroke="#c69b50"
                  />
                ))}
              </div>

              {/* Review */}
              <div className="relative">
                <Quote
                  size={23}
                  className="absolute -top-1 right-0 text-[#e6eee5]"
                />

                <p className="relative z-10 min-h-[60px] text-sm leading-7 text-[#354c40]">
                  "{item.review}"
                </p>
              </div>

              {/* Reviewer */}
              <div className="mt-5 border-t border-[#edf1ed] pt-4">
                <h3 className="text-xs font-bold text-[#183b2e]">
                  {item.name}
                </h3>

                <p className="mt-1 text-[10px] text-[#89958c]">
                  {item.role} · AL-RAZI Community
                </p>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
