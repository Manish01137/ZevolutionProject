/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { productsData } from "../../data/productsData";

const ProductIntro = () => {

  const { slug } = useParams();
  const data = productsData[slug];

  if (!data) return null;

  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[600px] h-[600px] bg-[#C6A75E]/5 blur-[160px] rounded-full"></div>
      </div>

      <div className="max-w-5xl mx-auto px-6 md:px-10 text-center relative z-10">

        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin tracking-wide mb-6 text-white leading-tight"
        >
          {data.intro.title}
        </motion.h2>

        {/* Gold divider */}
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: "70px" }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[1px] bg-[#C6A75E] mx-auto mb-8"
        />

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="text-white/70 text-base sm:text-lg md:text-xl font-light leading-relaxed max-w-3xl mx-auto"
        >
          {data.intro.description}
        </motion.p>

      </div>

    </section>
  );
};

export default ProductIntro;