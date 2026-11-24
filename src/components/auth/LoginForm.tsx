
import Link from "next/link";
import { GraduationCap, ArrowRight } from "lucide-react";

export default function Login() {
  return (
    <main className="min-h-[calc(100vh-100px)] bg-[#f7faf7] px-5 py-10 md:py-14">
      <div className="mx-auto grid max-w-[980px] grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-10">

        {/* Left Welcome Card */}
        <div className="rounded-xl bg-[#104b37] p-7 text-white shadow-sm sm:p-9">
          <GraduationCap size={30} strokeWidth={1.5} />

          <h2 className="mt-6 text-2xl font-bold leading-tight sm:text-3xl">
            Your future.
            <br />
            All in one place.
          </h2>

          <p className="mt-4 text-sm leading-6 text-gray-200">
            Connect to your courses, your community, and your next opportunity.
          </p>

          {/* Campus Image */}
          <div className="mt-7 h-36 overflow-hidden rounded-lg bg-[#dce9df] sm:h-40">
            <img
              src="/images/school.jpg"
              alt="AL-RAZI campus"
              className="h-full w-full object-cover"
            />
          </div>

          <p className="mt-4 text-[10px] text-gray-200">
            UI preview only. No real accounts or authentication.
          </p>
        </div>

        {/* Right Login Form */}
        <div className="w-full">
          <p className="text-[10px] font-semibold uppercase tracking-[2px] text-[#477d63]">
            Welcome to AL-RAZI
          </p>

          <h1 className="mt-2 text-3xl font-bold text-[#123e30]">
            A new day of possibilities.
          </h1>

          <form className="mt-7 space-y-4">

            {/* Preview As */}
            <div>
              <label className="mb-2 block text-xs font-medium text-gray-700">
                Preview as
              </label>

              <select
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-3 text-sm text-gray-700 outline-none focus:border-[#185b43]"
                defaultValue="Student"
              >
                <option>Student</option>
                <option>Teacher</option>
                <option>Staff</option>
                <option>Parent</option>
              </select>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-xs font-medium text-gray-700">
                Email address
              </label>

              <input
                type="email"
                placeholder="You@example.com"
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-[#185b43]"
              />
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-xs font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter any demo password"
                className="w-full rounded-md border border-gray-200 bg-white px-3 py-3 text-sm outline-none transition focus:border-[#185b43]"
              />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-end">
              <Link
                href="#"
                className="text-xs font-medium text-gray-600 hover:text-[#185b43]"
              >
                Forgot password?
              </Link>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[#185b43] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#103d2d]"
            >
              Enter demo portal
              <ArrowRight size={16} />
            </button>
          </form>

          {/* Bottom Links */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-3 gap-y-2 text-xs">
            <Link
              href="/auth/signup"
              className="font-medium text-[#185b43] hover:underline"
            >
              Register
            </Link>

            <Link href="#" className="text-gray-600 hover:text-[#185b43]">
              Reset Password
            </Link>

            <Link href="#" className="text-gray-600 hover:text-[#185b43]">
              Email Verification
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
