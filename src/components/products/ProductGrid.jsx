import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { productsData } from "../../data/productsData";
import { slugify } from "../../utils/slug";

const PAGE_SIZE = 12;

const ProductCard = ({ product, index, brandSlug }) => {
  const productSlug = product.slug || slugify(product.name);
  const productUrl = `/brand/${brandSlug}/product/${productSlug}`;
  const imageCount = product.gallery?.length || 1;

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: Math.min(index * 0.05, 0.4) }}
      className="bg-[#0e0e0e] border border-[#1e1e1e] hover:border-[#C6A75E] transition-all duration-500 overflow-hidden flex flex-col"
    >
      <Link to={productUrl} className="relative overflow-hidden block group/image">
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
        {product.category && (
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#C6A75E]/70 mb-2">
            {product.category}
          </p>
        )}

        <Link to={productUrl}>
          <h3 className="text-white text-lg font-light tracking-wide mb-2 hover:text-[#C6A75E] transition-colors">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-400 text-sm leading-relaxed mb-4 font-light line-clamp-2 flex-1">
          {product.description}
        </p>

        <Link
          to={productUrl}
          className="w-full border border-[#C6A75E] text-[#C6A75E] py-2.5 text-xs font-light tracking-widest uppercase text-center hover:bg-[#C6A75E] hover:text-black transition-all duration-300 block mt-auto"
        >
          View Product →
        </Link>
      </div>
    </motion.div>
  );
};

const ProductGrid = () => {
  const { slug } = useParams();
  const data = productsData[slug];
  const products = data?.products || [];

  const categories = useMemo(() => {
    const set = new Set();
    products.forEach((p) => p.category && set.add(p.category));
    return ["All", ...Array.from(set)];
  }, [products]);

  const [activeCat, setActiveCat] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (activeCat === "All") return products;
    return products.filter((p) => p.category === activeCat);
  }, [products, activeCat]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  if (!data) return null;

  return (
    <section className="bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10">

        {categories.length > 2 && (
          <div className="mb-12 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const count =
                cat === "All"
                  ? products.length
                  : products.filter((p) => p.category === cat).length;
              const isActive = activeCat === cat;
              return (
                <button
                  key={cat}
                  onClick={() => {
                    setActiveCat(cat);
                    setPage(1);
                  }}
                  className={`px-5 py-2 text-xs tracking-[0.2em] uppercase font-light border transition-all duration-300 ${
                    isActive
                      ? "border-[#C6A75E] bg-[#C6A75E] text-black"
                      : "border-[#2a2a2a] text-gray-400 hover:border-[#C6A75E]/60 hover:text-[#C6A75E]"
                  }`}
                >
                  {cat} <span className="ml-2 opacity-60">({count})</span>
                </button>
              );
            })}
          </div>
        )}

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {paged.map((product, index) => (
            <ProductCard key={product.slug} product={product} index={index} brandSlug={slug} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-2 flex-wrap">
            <button
              onClick={() => {
                setPage((p) => Math.max(1, p - 1));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={page === 1}
              className="px-4 py-2 text-xs tracking-widest uppercase border border-[#2a2a2a] text-gray-500 hover:border-[#C6A75E] hover:text-[#C6A75E] transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => {
              const isActive = num === page;
              const show =
                num === 1 || num === totalPages || Math.abs(num - page) <= 2;
              const showDotsBefore = num === page - 3 && page > 4;
              const showDotsAfter = num === page + 3 && page < totalPages - 3;
              if (showDotsBefore || showDotsAfter)
                return <span key={`dots-${num}`} className="text-gray-600 px-1">…</span>;
              if (!show) return null;
              return (
                <button
                  key={num}
                  onClick={() => {
                    setPage(num);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-9 h-9 text-xs border transition-all duration-200 ${
                    isActive
                      ? "border-[#C6A75E] bg-[#C6A75E] text-black font-medium"
                      : "border-[#2a2a2a] text-gray-400 hover:border-[#C6A75E]/60 hover:text-[#C6A75E]"
                  }`}
                >
                  {num}
                </button>
              );
            })}

            <button
              onClick={() => {
                setPage((p) => Math.min(totalPages, p + 1));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={page === totalPages}
              className="px-4 py-2 text-xs tracking-widest uppercase border border-[#2a2a2a] text-gray-500 hover:border-[#C6A75E] hover:text-[#C6A75E] transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
