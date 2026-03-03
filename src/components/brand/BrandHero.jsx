/* eslint-disable no-unused-vars */
import { motion, useScroll, useTransform } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";

const BrandHero = ({ data }) => {
  const navigate = useNavigate();
  const heroRef = useRef(null);

  const { scrollY } = useScroll();
  const scale = useTransform(scrollY, [0, 500], [1, 1.08]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0.6]);

  return (
    <section
      ref={heroRef}
      className="relative h-[85vh] md:h-screen w-full overflow-hidden bg-black"
    >
      {/* Background Image */}
      <motion.div
        style={{ scale, opacity }}
        className="absolute inset-0"
      >
        <img
          src={data.heroImage}
          alt={data.name}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/95" />

      {/* Soft Gold Ambient Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(198,167,94,0.15),transparent_65%)]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

        {/* Back Button */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          onClick={() => navigate("/brands")}
          className="absolute top-8 left-6 md:left-12 text-sm text-white/70 hover:text-white transition"
        >
          ← Back to Brands
        </motion.button>

        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="tracking-[0.5em] text-xs md:text-sm uppercase text-[#C6A75E] mb-6"
        >
          {data.label}
        </motion.p>

        {/* Brand Name */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-tight"
        >
          {data.name.toUpperCase()}
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-6 max-w-2xl text-sm md:text-lg text-white/70"
        >
          {data.tagline}
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 flex flex-col items-center"
        >
          <div className="h-12 w-[1px] bg-white/30 relative overflow-hidden">
            <motion.div
              animate={{ y: ["-100%", "100%"] }}
              transition={{ repeat: Infinity, duration: 1.6 }}
              className="absolute top-0 left-0 h-6 w-full bg-[#C6A75E]"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default BrandHero;