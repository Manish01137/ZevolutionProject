import Navbar from "../components/layout/Navbar";
import Brand2Hero from "../components/brand/brand2hero";
import Footer from "../components/layout/Footer";
import Material from "../components/home/Material";

const Brands = () => {
  return (
    <>
      {/* Navbar */}
      <Navbar />
       
      {/* Hero Section */}
    
      <Brand2Hero />
      <Material/>
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Brands;