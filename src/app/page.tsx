import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ExperienceSection from "@/components/sections/Experience";
import ProjectsSection from "@/components/sections/Projects";
import ContributionsSection from "@/components/sections/Contributions";
import ContactSection from "@/components/sections/Contact";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <ContributionsSection />
      <ContactSection />
    </div>
  );
}

export default Home
