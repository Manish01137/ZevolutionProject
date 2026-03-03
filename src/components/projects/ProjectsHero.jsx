/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const ProjectsHero = () => {
  const heroRef = useRef(null);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 1.12]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.55]);

  return (
    <section
      ref={heroRef}
      className="relative h-[85vh] md:h-[95vh] w-full overflow-hidden bg-black"
    >
      {/* Background Image */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0"
      >
        <img
          src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop"
          alt="Luxury Modern Architecture"
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Cinematic Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-black/75 to-black/95" />

      {/* Subtle Gold Light Aura */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(198,167,94,0.15),transparent_65%)]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">
        
        <motion.span
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-5 tracking-[0.5em] text-xs md:text-sm uppercase text-[#C6A75E]"
        >
          Portfolio
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight"
        >
          Our Projects
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ duration: 1, delay: 0.4 }}
          className="h-[1px] bg-[#C6A75E] mt-6"
        />

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-6 max-w-xl md:max-w-2xl text-xs sm:text-sm md:text-lg text-gray-300"
        >
          Explore our portfolio of architectural excellence across India's
          most distinguished commercial and residential landmarks.
        </motion.p>

        {/* Premium Hover Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="mt-10 px-8 py-3 border border-[#C6A75E] text-[#C6A75E] text-sm tracking-wider uppercase relative overflow-hidden group"
        >
          <span className="relative z-10 group-hover:text-black transition-colors duration-500">
            View Portfolio
          </span>
          <span className="absolute inset-0 bg-[#C6A75E] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out" />
        </motion.button>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 flex flex-col items-center"
        >
          <div className="h-10 w-[1px] bg-gray-600 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="absolute top-0 left-0 h-6 w-full bg-[#C6A75E]"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-24 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default ProjectsHero;