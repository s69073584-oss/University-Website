
import { Search } from "lucide-react";

interface CourseSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export default function CourseSearch({
  value,
  onChange,
}: CourseSearchProps) {
  return (
    <div className="flex h-12 flex-1 items-center gap-3 rounded-lg border border-[#e1e8e2] bg-white px-4 transition focus-within:border-[#43865b] focus-within:ring-2 focus-within:ring-[#43865b]/10">
      <Search size={17} className="shrink-0 text-gray-400" />

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search programs and courses..."
        className="h-full w-full bg-transparent text-sm text-[#123e30] outline-none placeholder:text-gray-400"
      />
    </div>
  );
}
