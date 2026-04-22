import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { slugify } from "../utils/slug";
import { productsData } from "../data/productsData";

const BRAND_LABELS = {
  "crest-stone": "Crest Stone",
  zerra: "Zerra",
  formiq: "Formiq",
};

const findProduct = (brandSlug, productSlug) => {
  const brand = productsData[brandSlug];
  if (!brand) return null;
  return brand.products.find(
    (p) => (p.slug || slugify(p.name)) === productSlug
  );
};

const ProductDetail = () => {
  const { brandSlug, productSlug } = useParams();
  const product = findProduct(brandSlug, productSlug);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveIndex(0);
  }, [productSlug]);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 text-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-light mb-4">Product not found</h1>
            <Link to="/brands" className="text-[#C8A75B] hover:underline">
              Back to brands
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  // variants are the authoritative list; fall back to gallery or single image
  const variants =
    product.variants && product.variants.length > 0
      ? product.variants
      : (product.gallery || [product.image]).map((img, i) => ({
          name: product.gallery?.length > 1 ? `View ${i + 1}` : product.name,
          image: img,
        }));

  const activeVariant = variants[activeIndex] || variants[0];
  const mainImg = activeVariant.image;

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Breadcrumb */}
          <div className="text-xs tracking-[0.3em] text-white/50 uppercase mb-8">
            <Link to="/brands" className="hover:text-[#C8A75B]">Brands</Link>
            <span className="mx-2">/</span>
            <Link to={`/brand/${brandSlug}`} className="hover:text-[#C8A75B]">
              {BRAND_LABELS[brandSlug]}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{product.name}</span>
          </div>

          {/* Hero grid */}
          <div className="grid lg:grid-cols-5 gap-10 mb-16">

            {/* Main image (left, 3 cols) */}
            <div className="lg:col-span-3">
              <div className="aspect-[4/3] overflow-hidden bg-white/5">
                <img
                  src={mainImg}
                  alt={activeVariant.name}
                  className="w-full h-full object-cover transition-opacity duration-300"
                />
              </div>
              {variants.length > 1 && (
                <p className="text-center mt-3 text-white/60 text-sm font-light">
                  {activeVariant.name}
                </p>
              )}
            </div>

            {/* Info (right, 2 cols) */}
            <div className="lg:col-span-2">
              {product.category && (
                <p className="text-[#C8A75B] text-xs tracking-[0.35em] uppercase mb-4">
                  {BRAND_LABELS[brandSlug]} · {product.category}
                </p>
              )}

              <h1 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
                {product.name}
              </h1>

              {product.description && (
                <p className="text-white/70 text-sm md:text-base font-light leading-relaxed mb-8">
                  {product.description}
                </p>
              )}

              {product.sizes && (
                <div className="mb-4">
                  <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-2">Sizes</p>
                  <p className="text-white/70 text-sm">{product.sizes}</p>
                </div>
              )}

              {variants.length > 1 && (
                <div className="mb-4">
                  <p className="text-white/30 text-xs tracking-[0.3em] uppercase mb-2">Finishes</p>
                  <p className="text-white/70 text-sm">
                    {variants.length} colour{variants.length > 1 ? "s" : ""} available
                  </p>
                </div>
              )}

              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/20 px-3 py-1 text-[11px] font-light tracking-wide text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              <Link to="/contact">
                <button className="w-full md:w-auto mt-4 border border-[#C8A75B] text-[#C8A75B] px-8 py-3 text-sm font-light tracking-widest hover:bg-[#C8A75B] hover:text-black transition-all duration-300">
                  Request Sample →
                </button>
              </Link>
            </div>
          </div>

          {/* Variant swatches */}
          {variants.length > 1 && (
            <div className="mt-10">
              <div className="flex items-end justify-between mb-6 border-b border-white/10 pb-3">
                <h2 className="text-xl md:text-2xl font-light">Available Finishes</h2>
                <p className="text-white/40 text-xs tracking-[0.3em] uppercase">
                  {variants.length} Colours
                </p>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4">
                {variants.map((v, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      setActiveIndex(i);
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className={`group text-left transition-all duration-300 ${
                      activeIndex === i ? "opacity-100" : "opacity-80 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`aspect-square overflow-hidden bg-white/5 border-2 transition-colors duration-200 ${
                        activeIndex === i
                          ? "border-[#C8A75B]"
                          : "border-transparent group-hover:border-[#C8A75B]/50"
                      }`}
                    >
                      <img
                        src={v.image}
                        alt={v.name}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <p
                      className={`mt-2 text-xs font-light tracking-wide leading-tight ${
                        activeIndex === i ? "text-[#C8A75B]" : "text-white/60"
                      }`}
                    >
                      {v.name}
                    </p>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Back link */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <Link
              to={`/brand/${brandSlug}`}
              className="text-[#C8A75B] text-sm tracking-widest uppercase hover:underline"
            >
              ← Back to {BRAND_LABELS[brandSlug]}
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetail;
