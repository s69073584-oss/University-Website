
import {
  Code2,
  BriefcaseBusiness,
  FlaskConical,
  ChartNoAxesColumnIncreasing,
} from "lucide-react";

export const courses = [
  {
    id: 1,
    slug: "computer-science",
    category: "Bachelor's",
    school: "School of Technology",
    title: "Computer Science",
    description:
      "Build the ideas, systems, and technologies that shape our world.",
    duration: "4 years",
    icon: Code2,
    theme: "bg-[#e3ece5]",
  },
  {
    id: 2,
    slug: "business-administration",
    category: "Bachelor's",
    school: "School of Business",
    title: "Business Administration",
    description:
      "Develop the confidence to lead, innovate, and make an impact.",
    duration: "4 years",
    icon: BriefcaseBusiness,
    theme: "bg-[#eeeade]",
  },
  {
    id: 3,
    slug: "natural-sciences",
    category: "School",
    school: "School of Sciences",
    title: "Natural Sciences",
    description:
      "Turn curiosity into discovery through hands-on exploration.",
    duration: "Classes 9–12",
    icon: FlaskConical,
    theme: "bg-[#e2eceb]",
  },
  {
    id: 4,
    slug: "data-science-analytics",
    category: "Master's",
    school: "Graduate Studies",
    title: "Data Science & Analytics",
    description:
      "Find meaningful answers to tomorrow's biggest questions.",
    duration: "2 years",
    icon: ChartNoAxesColumnIncreasing,
    theme: "bg-[#e9eadd]",
  },
];

export type Course = (typeof courses)[number];
