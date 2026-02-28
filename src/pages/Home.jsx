import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import Hero from "../components/home/Hero";
import Ecosystem from "../components/home/Ecosystem";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <Navbar />
      
      {/* Hero Section */}
      <Hero />

      {/* Brand Ecosystem Section */}
      <Ecosystem />

      <Footer />
    </div>
  );
};

export default Home;