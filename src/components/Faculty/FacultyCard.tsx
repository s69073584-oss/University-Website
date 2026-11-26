
import Link from "next/link";

type FacultyCardProps = {
  image: string;
  name: string;
  department: string;
  description: string;
  slug: string;
};

export default function FacultyCard({
  image,
  name,
  department,
  description,
  slug,
}: FacultyCardProps) {
  return (
    <article className="group overflow-hidden rounded-xl border border-[#e6ebe5] bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Teacher Avatar */}
      <div className="flex h-36 items-center justify-center bg-[#e5f0e5] md:h-40">
        <img
          src={image}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>

      {/* Teacher Information */}
      <div className="p-4">

        <h3 className="text-[14px] font-bold text-[#153f32]">
          {name}
        </h3>

        <p className="mt-1 text-[11px] font-medium text-[#43866a]">
          {department}
        </p>

        <p className="mt-3 min-h-[42px] text-[11px] leading-[1.7] text-gray-500">
          {description}
        </p>

        <Link
          href={`/faculty/${slug}`}
          className="mt-4 inline-flex items-center gap-1 text-[11px] font-semibold text-[#153f32] transition-colors hover:text-[#43866a]"
        >
          View profile
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </Link>

      </div>
    </article>
  );
}
