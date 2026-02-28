import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Ecosystem from "../components/home/Ecosystem";
import Material from "../components/home/Material";
import CitiesMarquee from "../components/home/CitiesMarquee";
import WhoWeServe from "../components/home/WhoWeServe";
import FeaturedProjects from "../components/home/FeaturedProjects";
const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Brand Ecosystem Section */}
      <Ecosystem />
      <Material/>
      <CitiesMarquee />
      <WhoWeServe/>
      <FeaturedProjects/>
      <Footer />
    </div>
  );
};

export default Home;