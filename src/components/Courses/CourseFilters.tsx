
interface CourseFiltersProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CourseFilters({
  value,
  onChange,
}: CourseFiltersProps) {
  return (
    <div className="relative w-full sm:w-[155px] shrink-0">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-12 w-full cursor-pointer appearance-none rounded-lg border border-[#e1e8e2] bg-white px-4 pr-9 text-xs font-medium text-[#244b39] outline-none transition hover:border-[#a5c9a9] focus:border-[#43865b] focus:ring-2 focus:ring-[#43865b]/10"
      >
        <option value="All programs">All programs</option>
        <option value="Bachelor's">Bachelor's</option>
        <option value="School">School</option>
        <option value="Master's">Master's</option>
      </select>

      <svg
        className="pointer-events-none absolute right-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-500"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.7"
      >
        <path
          d="m5 7.5 5 5 5-5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}
