/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const ArchitectureHero = () => {
  return (
    <section className="relative h-[85vh] w-full flex items-center justify-center overflow-hidden bg-black">

      {/* Background Image */}
      <motion.img
        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
        alt="Architecture Interior"
        className="absolute w-full h-full object-cover scale-105"
        initial={{ scale: 1.2 }}
        animate={{ scale: 1.05 }}
        transition={{ duration: 6, ease: "easeOut" }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-5xl px-6">

        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[#c9a45c] tracking-[6px] text-xs md:text-sm uppercase mb-6 font-light"
        >
          Knowledge Platform
        </motion.p>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-white text-5xl md:text-7xl lg:text-8xl font-extralight tracking-wide leading-tight mb-8"
        >
          Architects Hub
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-gray-300 text-base md:text-lg lg:text-xl leading-relaxed max-w-3xl mx-auto font-light"
        >
          Technical resources, specification guides, and design insights
          created to support architects, designers, and consultants in
          delivering exceptional architectural projects.
        </motion.p>

      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

    </section>
  );
};

export default ArchitectureHero;