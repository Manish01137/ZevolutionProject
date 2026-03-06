/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const Brand2Hero = () => {
  return (
    <section className="relative w-full h-[92vh] flex items-center justify-center overflow-hidden">

      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Modern Architecture"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">

        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[13px] tracking-[0.45em] text-orange-400 mb-6 uppercase font-light"
        >
          Our Brands
        </motion.p>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          className="text-white text-5xl md:text-7xl lg:text-[72px] font-extralight tracking-tight leading-[1.1] mb-8"
        >
          The Zevolution Ecosystem
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light"
        >
          Five premium brands united by a singular vision: to provide
          architects and designers with materials that exceed expectations
          and inspire innovation.
        </motion.p>

      </div>
    </section>
  );
};

export default Brand2Hero;