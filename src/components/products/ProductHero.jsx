/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { productsData } from "../../data/productsData";

const ProductHero = () => {
  const { slug } = useParams();
  const data = productsData[slug];

  if (!data) return null;

  return (
    <section className="relative min-h-[65vh] md:min-h-[75vh] flex items-center justify-center text-center overflow-hidden">

      {/* Background Image */}
      <img
        src={data.hero.image}
        alt={data.hero.title}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/80 to-black"></div>

      {/* Subtle Blur Layer */}
      <div className="absolute inset-0 backdrop-blur-[2px]"></div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="relative z-10 max-w-4xl px-6 md:px-10"
      >

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-thin tracking-wide mb-6 leading-tight text-white">
          {data.hero.title}
        </h1>

        {/* Divider Line */}
        <div className="w-16 h-[1px] bg-[#C6A75E] mx-auto mb-6"></div>

        {/* Description */}
        <p className="text-white/70 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          {data.hero.description}
        </p>

      </motion.div>

    </section>
  );
};

export default ProductHero;