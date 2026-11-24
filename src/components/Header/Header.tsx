
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-[#123D2B] text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-4 py-2 sm:px-6 lg:px-8">

        <p className="text-[10px] font-medium sm:text-xs">
          Learn Today. Lead Tomorrow.
        </p>

        <Link
          href="/login"
          className="flex items-center gap-1 text-[10px] font-semibold transition hover:text-[#A5C9A9] sm:text-xs"
        >
          Student & Staff Portal
          <ArrowUpRight size={13} />
        </Link>

      </div>
    </header>
  );
}
