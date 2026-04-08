import { useState } from "react";
import { motion } from "framer-motion";
import { useParams, Link } from "react-router-dom";
import { productsData } from "../../data/productsData";

const ProductCard = ({ product, index }) => {
  const [openVariant, setOpenVariant] = useState(null);
  const [activeImage, setActiveImage] = useState(product.image);

  const handleVariantToggle = (i, variantImage) => {
    if (openVariant === i) {
      setOpenVariant(null);
      setActiveImage(product.image);
    } else {
      setOpenVariant(i);
      setActiveImage(variantImage);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className="bg-[#0e0e0e] border border-[#1e1e1e] hover:border-[#C6A75E] transition-all duration-500 overflow-hidden flex flex-col"
    >
      {/* Product Image — switches on variant open */}
      <div className="relative overflow-hidden">
        <img
          src={activeImage}
          alt={product.name}
          className="w-full h-56 object-cover transition-all duration-700"
        />
        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent opacity-70" />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1">

        {/* Name */}
        <h3 className="text-white text-lg font-light tracking-wide mb-2">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-3 font-light">
          {product.description}
        </p>

        {/* Sizes */}
        <p className="text-white/50 text-xs font-light mb-4">
          Sizes: {product.sizes}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-5">
          {product.tags.map((tag, i) => (
            <span
              key={i}
              className="border border-white/20 px-3 py-1 text-[11px] font-light tracking-wide text-white/60 hover:border-[#C6A75E] hover:text-[#C6A75E] transition"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Colour Variants Dropdown */}
        {product.variants && product.variants.length > 0 && (
          <div className="mb-5 border-t border-[#1e1e1e] pt-4">
            <p className="text-[10px] tracking-[0.3em] text-[#C6A75E] uppercase mb-3 font-light">
              Available Colours
            </p>
            {product.variants.map((variant, i) => (
              <div key={i} className="border-b border-[#222]">
                <button
                  onClick={() => handleVariantToggle(i, variant.image)}
                  className="w-full flex justify-between items-center py-3 text-gray-300 text-sm hover:text-white transition font-light"
                >
                  <span>{variant.name}</span>
                  <span className={`text-[#C6A75E] transition-transform duration-300 ${openVariant === i ? "rotate-90" : ""}`}>
                    ›
                  </span>
                </button>

                {/* Dropdown image */}
                {openVariant === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35 }}
                    className="pb-4 overflow-hidden"
                  >
                    <img
                      src={variant.image}
                      alt={variant.name}
                      className="w-full rounded-sm object-cover max-h-48"
                    />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* Spacer to push button to bottom */}
        <div className="flex-1" />

        {/* CTA */}
        <Link to="/contact">
          <button className="w-full border border-[#C6A75E] text-[#C6A75E] py-2 text-sm font-light tracking-widest hover:bg-[#C6A75E] hover:text-black transition-all duration-300 mt-2">
            Request Sample →
          </button>
        </Link>
      </div>
    </motion.div>
  );
};

const ProductGrid = () => {
  const { slug } = useParams();
  const data = productsData[slug];

  if (!data) return null;

  return (
    <section className="bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {data.products.map((product, index) => (
          <ProductCard key={index} product={product} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;