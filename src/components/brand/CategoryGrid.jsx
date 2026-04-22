import { useMemo } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { productsData } from "../../data/productsData";
import { slugify } from "../../utils/slug";

const CategoryGrid = ({ brand }) => {
  const brandData = productsData[brand];
  const products = brandData?.products || [];

  const categories = useMemo(() => {
    const map = new Map();
    for (const p of products) {
      if (!p.category) continue;
      if (!map.has(p.category)) {
        map.set(p.category, {
          name: p.category,
          slug: slugify(p.category),
          cover: p.image,
          count: 0,
        });
      }
      map.get(p.category).count++;
    }
    return Array.from(map.values());
  }, [products]);

  if (categories.length === 0) return null;

  return (
    <section className="bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <p className="tracking-[0.35em] text-[11px] md:text-xs uppercase text-[#C6A75E] mb-4">
            Explore the Collection
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-wide text-white">
            Stone <span className="text-[#C6A75E] font-light">Families</span>
          </h2>
          <p className="mt-5 text-white/50 text-sm max-w-xl mx-auto font-light">
            {categories.length} categories, {products.length} products. Choose a stone family to view every variant.
          </p>
          <div className="w-16 h-[1px] bg-[#C6A75E]/70 mx-auto mt-6" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Link
                to={`/brand/${brand}/category/${cat.slug}`}
                className="group block relative overflow-hidden bg-[#0e0e0e] border border-[#1e1e1e] hover:border-[#C6A75E] transition-all duration-500 aspect-[4/5]"
              >
                <img
                  src={cat.cover}
                  alt={cat.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 group-hover:opacity-95 transition-opacity duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <p className="text-[#C6A75E] text-[10px] md:text-xs tracking-[0.35em] uppercase mb-2">
                    {cat.count} Product{cat.count > 1 ? "s" : ""}
                  </p>
                  <h3 className="text-white text-2xl md:text-3xl font-light mb-4">
                    {cat.name}
                  </h3>
                  <span className="inline-flex items-center gap-2 text-[#C6A75E] text-xs tracking-[0.3em] uppercase border-b border-[#C6A75E]/40 pb-1 group-hover:border-[#C6A75E]">
                    View Products
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
