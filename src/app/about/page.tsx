import AboutHero from "@/components/About/AboutHero";
import Achievements from "@/components/About/Achievements";
import CoreValues from "@/components/About/CoreValues";
import Mission from "@/components/About/Mission";
import OurStory from "@/components/About/OurStory";
import WhyChooseUs from "@/components/Home/WhyChooseUs";

export default function AboutPage() {
    return (
        <div>
            <AboutHero />
            <OurStory />
            <Mission />
            <Achievements />
            <CoreValues />
            <WhyChooseUs />
        </div>
    )
}