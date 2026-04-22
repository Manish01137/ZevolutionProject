import { useEffect, useMemo } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { productsData } from "../data/productsData";
import { slugify } from "../utils/slug";

const BRAND_LABELS = {
  "crest-stone": "Crest Stone",
  zerra: "Zerra",
  formiq: "Formiq",
};

const CategoryProducts = () => {
  const { brandSlug, categorySlug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [brandSlug, categorySlug]);

  const brandData = productsData[brandSlug];
  const category = useMemo(() => {
    if (!brandData) return null;
    const all = Array.from(
      new Set(brandData.products.map((p) => p.category).filter(Boolean))
    );
    return all.find((c) => slugify(c) === categorySlug) || null;
  }, [brandData, categorySlug]);

  const products = useMemo(() => {
    if (!brandData || !category) return [];
    return brandData.products.filter((p) => p.category === category);
  }, [brandData, category]);

  if (!brandData || !category) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 text-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-light mb-4">Category not found</h1>
            <Link to={`/brand/${brandSlug}`} className="text-[#C8A75B] hover:underline">
              Back to {BRAND_LABELS[brandSlug] || "brand"}
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-white pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Breadcrumb */}
          <div className="text-xs tracking-[0.3em] text-white/50 uppercase mb-8">
            <Link to="/brands" className="hover:text-[#C8A75B]">Brands</Link>
            <span className="mx-2">/</span>
            <Link to={`/brand/${brandSlug}`} className="hover:text-[#C8A75B]">
              {BRAND_LABELS[brandSlug]}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{category}</span>
          </div>

          {/* Header */}
          <div className="mb-16 text-center">
            <p className="tracking-[0.35em] text-[11px] md:text-xs uppercase text-[#C6A75E] mb-4">
              {BRAND_LABELS[brandSlug]} · Collection
            </p>
            <h1 className="text-4xl md:text-6xl font-extralight mb-4">
              {category}
            </h1>
            <p className="text-white/50 text-sm">
              {products.length} product{products.length > 1 ? "s" : ""} in this family
            </p>
            <div className="w-16 h-[1px] bg-[#C6A75E]/70 mx-auto mt-6" />
          </div>

          {/* Products grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, i) => {
              const productSlug = product.slug || slugify(product.name);
              const url = `/brand/${brandSlug}/product/${productSlug}`;
              const imageCount = product.gallery?.length || 1;

              return (
                <motion.div
                  key={product.slug}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: Math.min(i * 0.05, 0.4) }}
                  className="bg-[#0e0e0e] border border-[#1e1e1e] hover:border-[#C6A75E] transition-all duration-500 overflow-hidden flex flex-col"
                >
                  <Link to={url} className="relative overflow-hidden block group/image">
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      className="w-full h-56 object-cover transition-all duration-700 group-hover/image:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70" />
                    {imageCount > 1 && (
                      <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm border border-[#C6A75E]/40 text-[#C6A75E] text-[10px] tracking-widest uppercase px-2 py-1">
                        {imageCount} views
                      </span>
                    )}
                  </Link>

                  <div className="p-6 flex flex-col flex-1">
                    <Link to={url}>
                      <h3 className="text-white text-lg font-light tracking-wide mb-3 hover:text-[#C6A75E] transition-colors">
                        {product.name}
                      </h3>
                    </Link>

                    <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light line-clamp-2 flex-1">
                      {product.description}
                    </p>

                    <Link
                      to={url}
                      className="w-full border border-[#C6A75E] text-[#C6A75E] py-2.5 text-xs font-light tracking-widest uppercase text-center hover:bg-[#C6A75E] hover:text-black transition-all duration-300 block mt-auto"
                    >
                      View Product →
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <Link
              to={`/brand/${brandSlug}`}
              className="text-[#C6A75E] text-sm tracking-widest uppercase hover:underline"
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

export default CategoryProducts;
