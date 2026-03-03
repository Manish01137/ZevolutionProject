import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { materialsData } from "../data/materialsData";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import BrandHero from "../components/brand/BrandHero";
import BrandOverview from "../components/brand/BrandOverview";
import BrandBenefits from "../components/brand/BrandBenefits";
import BrandEngineering from "../components/brand/BrandEngineering";
import BrandSpecifications from "../components/brand/BrandSpecifications";
import BrandCTA from "../components/brand/BrandCTA";

const BrandDetails = () => {
  const { slug } = useParams();
  const material = materialsData.find(item => item.slug === slug);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!material) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Not Found
      </div>
    );
  }

  return (
    <div className="bg-black text-white overflow-hidden">
      
      {/* Navbar */}
      <Navbar />

      {/* Brand Sections */}
      <BrandHero data={material} />
      <BrandOverview data={material} />
      <BrandBenefits data={material} />
      <BrandEngineering data={material} />
      <BrandSpecifications data={material} />
      <BrandCTA data={material} />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BrandDetails;