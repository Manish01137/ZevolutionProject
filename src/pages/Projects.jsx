import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProjectsHero from "../components/projects/ProjectsHero";
import FeaturedProjects from "../components/home/FeaturedProjects";
const Projects = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <ProjectsHero />

      {/* Future Sections */}
      <FeaturedProjects/>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Projects;