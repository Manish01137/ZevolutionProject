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
import BrandCollections from "../components/brand/BrandCollections";

import ProjectSection from "../components/brand/ProjectSection";

const BrandDetails = () => {

  const { slug } = useParams();

  const material = materialsData.find(
    (item) => item.slug === slug
  );

  /* Scroll to top when page changes */
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  /* If brand not found */
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

      {/* HERO */}
      <BrandHero data={material} />

      {/* OVERVIEW */}
      <BrandOverview data={material} />
      
      {/* PRODUCT GRID */}
      <ProjectSection brand={slug} />

      {/* COLLECTIONS (reduced gap) */}
      <div className="-mt-16 md:-mt-24">
        <BrandCollections data={material} />
      </div>

      {/* BENEFITS */}
      <BrandBenefits data={material} />

      {/* ENGINEERING */}
      <BrandEngineering data={material} />

      {/* SPECIFICATIONS */}
      <BrandSpecifications data={material} />

      {/* CTA */}
      <BrandCTA data={material} />

      {/* FOOTER */}
      <Footer />

    </div>
  );
};

export default BrandDetails;