
import Image from "next/image";
import Link from "next/link";

export default function AboutHero() {
  return (
    <section className="bg-[#f7faf7] px-5 pb-16 pt-10 sm:pb-20">

      <main className="mx-auto max-w-7xl">

        {/* Breadcrumb */}
        <div className="mb-10 flex items-center gap-2 text-xs text-gray-500">
          <Link href="/" className="transition hover:text-[#185b43]">
            Home
          </Link>
          <span>/</span>
          <span className="font-medium text-[#285c43]">
            About Us
          </span>
        </div>

        {/* Hero Content */}
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">

          {/* Left Content */}
          <div className="max-w-xl">

            <p className="text-[10px] font-bold tracking-[2px] text-[#43865b]">
              ROOTED IN PURPOSE
            </p>

            <h1 className="mt-3 text-3xl font-extrabold leading-[1.15] tracking-tight text-[#123e30] sm:text-4xl">
              An enduring belief in what’s possible.
            </h1>

            <p className="mt-4 max-w-lg text-xs leading-6 text-gray-600 sm:text-sm sm:leading-7">
              AL-RAZI brings school and university education together
              in one connected learning community. Our vision is simple:
              make every learner feel empowered to ask, discover,
              and lead.
            </p>

          </div>

          {/* Right Image */}
          <div className="relative h-[230px] w-full overflow-hidden rounded-xl sm:h-[300px] lg:h-[340px]">
            <Image
              src="/images/School.jpg"
              alt="AL-RAZI School and University Campus"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

        </div>

        {/* Mission, Vision & Approach Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">

          {/* Mission */}
          <div className="rounded-lg border border-[#edf0ed] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-sm font-bold text-[#123e30]">
              Our mission
            </h2>

            <p className="mt-3 text-xs leading-6 text-gray-600">
              Nurture knowledge, strengthen character, and
              inspire meaningful contributions to society.
            </p>
          </div>

          {/* Vision */}
          <div className="rounded-lg border border-[#edf0ed] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-sm font-bold text-[#123e30]">
              Our vision
            </h2>

            <p className="mt-3 text-xs leading-6 text-gray-600">
              A welcoming academic community where every
              learner has the opportunity to thrive.
            </p>
          </div>

          {/* Approach */}
          <div className="rounded-lg border border-[#edf0ed] bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">
            <h2 className="text-sm font-bold text-[#123e30]">
              Our approach
            </h2>

            <p className="mt-3 text-xs leading-6 text-gray-600">
              Rigorous learning, thoughtful mentorship, and
              real-world experiences at every stage.
            </p>
          </div>

        </div>

      </main>
    </section>
  );
}
