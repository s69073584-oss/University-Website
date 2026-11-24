import Hero from "@/components/Home/Hero";
import EducationLevels from "@/components/Home/Educationlevels";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import Statistics from "@/components/Home/StatisticsSection";
import FeaturedCourses from "@/components/Home/FeaturedCourses";
import Faculty from "@/components/Home/FacutySection";
import CampusLife from "@/components/Home/CampuslifeSection";
import Testimonials from "@/components/Home/TestimoinalSection";
import NewsEvents from "@/components/Home/NewsEventSection";
import AdmissionsCta from "@/components/Home/AdmisisionCta"

export default function Home() {
  return (
    <main>
      <Hero />
      
      <EducationLevels />
      <FeaturedCourses />
      <WhyChooseUs />
      <Statistics />
      <CampusLife />
      <Faculty />
      
      <Testimonials />
      <NewsEvents />
      <AdmissionsCta />
    </main>
  );
}
