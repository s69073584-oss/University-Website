
import type { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  description: string;
  icon: LucideIcon;
}

export default function StatsCard({
  title,
  value,
  description,
  icon: Icon,
}: StatsCardProps) {
  return (
    <div className="rounded-xl border border-[#e8eee9] bg-white p-4 transition hover:-translate-y-1 hover:shadow-md">
      <div className="flex items-center justify-between">
        <p className="text-xs text-gray-500">{title}</p>

        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#e4eee6] text-[#185b43]">
          <Icon size={16} />
        </div>
      </div>

      <h2 className="mt-3 text-2xl font-bold text-[#123e30]">
        {value}
      </h2>

      <p className="mt-2 text-[10px] text-gray-400">
        {description}
      </p>
    </div>
  );
}
