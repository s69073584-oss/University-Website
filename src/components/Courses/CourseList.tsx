
"use client";

import { useState } from "react";
import { courses } from "@/data/courses";
import CourseSearch from "./CourseSearch";
import CourseFilters from "./CourseFilters";
import CourseCard from "./CourseCard";

export default function CourseList() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All programs");

  const filteredCourses = courses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(search.toLowerCase()) ||
      course.school.toLowerCase().includes(search.toLowerCase()) ||
      course.description.toLowerCase().includes(search.toLowerCase());

    const matchesCategory =
      category === "All programs" ||
      course.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <section className="bg-[#f7faf7] px-5 pb-20 sm:pb-24 lg:pb-28">
      <main className="mx-auto max-w-7xl">

        {/* Search and Filters */}
        <div className="flex flex-col gap-3 sm:flex-row">

          <CourseSearch
            value={search}
            onChange={setSearch}
          />

          <CourseFilters
            value={category}
            onChange={setCategory}
          />

        </div>

        {/* Course Count */}
        <div className="mt-5 flex items-center justify-between">
          <p className="text-xs text-gray-500">
            Showing{" "}
            <span className="font-semibold text-[#285c43]">
              {filteredCourses.length}
            </span>{" "}
            {filteredCourses.length === 1 ? "program" : "programs"}
          </p>
        </div>

        {/* Courses Grid */}
        {filteredCourses.length > 0 ? (
          <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {filteredCourses.map((course) => (
              <CourseCard
                key={course.id}
                course={course}
              />
            ))}

          </div>
        ) : (
          /* Empty State */
          <div className="mt-5 rounded-xl border border-dashed border-[#cbd9cd] bg-white px-5 py-16 text-center">

            <h3 className="text-lg font-bold text-[#123e30]">
              No courses found
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Try searching with a different name or category.
            </p>

            <button
              onClick={() => {
                setSearch("");
                setCategory("All programs");
              }}
              className="mt-5 rounded-md bg-[#185b43] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#10432f]"
            >
              Clear filters
            </button>

          </div>
        )}

      </main>
    </section>
  );
}
