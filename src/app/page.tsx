import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import ExperienceSection from "@/components/sections/Experience";
import ProjectsSection from "@/components/sections/Projects";

const Home = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </div>
  );
}

export default Home
