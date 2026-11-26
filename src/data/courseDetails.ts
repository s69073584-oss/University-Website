
export const courseDetails = {
  "computer-science": {
    duration: "4 years",
    format: "On campus + blended learning",
    requirements: "Previous level qualification",
    instructor: "Dr. Ayesha Khan",
    overviewTitle: "Turn your curiosity into capability.",
    overview:
      "Build a strong foundation through engaging coursework, collaborative projects, and guided practice. Develop critical thinking, practical skills, and the confidence to approach complex challenges.",
    modules: [
      "Foundations and essential concepts",
      "Tools, methods, and practical applications",
      "Collaborative problem-solving",
      "Independent research and final project",
    ],
  },

  "business-administration": {
    duration: "4 years",
    format: "On campus + blended learning",
    requirements: "Previous level qualification",
    instructor: "Academic Faculty",
    overviewTitle: "Develop the confidence to lead.",
    overview:
      "Explore business principles, leadership, management, and practical strategies through collaborative learning and real-world projects.",
    modules: [
      "Introduction to Business",
      "Management and Leadership",
      "Marketing and Finance",
      "Business Strategy and Final Project",
    ],
  },

  "natural-sciences": {
    duration: "Classes 9–12",
    format: "On campus",
    requirements: "Previous academic qualification",
    instructor: "Science Faculty",
    overviewTitle: "Discover the science behind everything.",
    overview:
      "Explore scientific principles through practical activities, experiments, and guided learning that encourage curiosity and discovery.",
    modules: [
      "Scientific Foundations",
      "Biology and Life Sciences",
      "Physics and Chemistry",
      "Practical Research and Experiments",
    ],
  },

  "data-science-analytics": {
    duration: "2 years",
    format: "On campus + blended learning",
    requirements: "Bachelor's degree",
    instructor: "Graduate Faculty",
    overviewTitle: "Turn data into meaningful discoveries.",
    overview:
      "Develop analytical thinking and explore data tools, statistical methods, and practical approaches to solving complex problems.",
    modules: [
      "Data Analysis Foundations",
      "Statistics and Data Visualization",
      "Machine Learning Applications",
      "Research and Final Project",
    ],
  },
};

export type CourseDetails = (typeof courseDetails)[keyof typeof courseDetails];
