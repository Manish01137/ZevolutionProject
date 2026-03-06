import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ProductHero from "../components/products/ProductHero";
import ProductIntro from "../components/products/ProductIntro";
import ProductGrid from "../components/products/ProductGrid";
import ProductCTA from "../components/products/ProductCTA";

const BrandProducts = () => {
  return (
    <>
      <Navbar />

      <ProductHero />

      <ProductIntro />

      <ProductGrid />

      <ProductCTA />

      <Footer />
    </>
  );
};

export default BrandProducts;