export interface Faculty {
  slug: string;
  name: string;
  designation: string;
  department: string;
  image: string;
  qualification: string;
  experience: string;
  email?: string;
  about: string;

  education: {
    degree: string;
    institution: string;
    year: string;
  }[];

  experienceDetails: {
    position: string;
    institution: string;
    duration: string;
    description: string;
  }[];

  expertise: string[];

  research: {
    title: string;
    description: string;
  }[];

  courses: string[];
}
