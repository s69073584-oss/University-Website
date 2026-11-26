import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  BriefcaseBusiness,
  GraduationCap,
  Mail,
} from "lucide-react";
import { Faculty } from "@/types/faculty";

interface Props {
  teacher: Faculty;
}

export default function FacultyProfileHero({ teacher }: Props) {
  return (
    <section className="bg-[#f7faf7] py-12 md:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/faculty"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-[#185b43] hover:text-[#10432f]"
        >
          <ArrowLeft size={18} />
          Back to Faculty
        </Link>

        <div className="grid items-center gap-10 rounded-2xl border border-[#dce9df] bg-white p-6 shadow-sm md:grid-cols-[280px_1fr] md:p-10">
          <div className="relative mx-auto h-[280px] w-full max-w-[280px] overflow-hidden rounded-xl bg-[#edf5ee]">
            <Image
              src={teacher.image}
              alt={teacher.name}
              fill
              className="object-cover"
            />
          </div>

          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#43865b]">
              Faculty Profile
            </p>

            <h1 className="text-3xl font-bold text-[#123e30] md:text-4xl">
              {teacher.name}
            </h1>

            <p className="mt-2 text-lg font-medium text-[#185b43]">
              {teacher.designation}
            </p>

            <p className="mt-1 text-gray-600">{teacher.department}</p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="flex items-center gap-3 rounded-lg bg-[#edf5ee] p-4">
                <BriefcaseBusiness className="text-[#185b43]" size={22} />
                <div>
                  <p className="text-xs text-gray-500">Experience</p>
                  <p className="font-semibold text-[#123e30]">
                    {teacher.experience}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-lg bg-[#edf5ee] p-4">
                <GraduationCap className="text-[#185b43]" size={22} />
                <div>
                  <p className="text-xs text-gray-500">Qualification</p>
                  <p className="font-semibold text-[#123e30]">
                    {teacher.qualification}
                  </p>
                </div>
              </div>
            </div>

            {teacher.email && (
              <a
                href={`mailto:${teacher.email}`}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#185b43] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#10432f]"
              >
                <Mail size={18} />
                Contact Teacher
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
