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
      {/* Background */}
      <motion.div style={{ scale, opacity }} className="absolute inset-0">
        <img
          src={data.heroImage}
          alt={data.name}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/95" />

      {/* Gold Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(198,167,94,0.15),transparent_65%)]" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6">

        {/* Back Button */}
        <button
          onClick={() => navigate("/brands")}
          className="absolute top-8 left-6 md:left-12 text-sm text-white/70 hover:text-white transition"
        >
          ← Back to Brands
        </button>

        {/* HERO TEXT BLOCK */}
        <div className="flex flex-col items-center gap-1 md:gap-2 -mt-16">

          {/* Label */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="tracking-[0.45em] text-[11px] md:text-xs uppercase text-[#C6A75E]"
          >
            {data.label}
          </motion.p>

          {/* Logo / Title */}
          {data.logo ? (
            <motion.img
              src={data.logo}
              alt={data.name}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="
                mx-auto
                w-[220px]
                sm:w-[280px]
                md:w-[340px]
                lg:w-[420px]
                object-contain
                -mt-1
              "
            />
          ) : (
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light text-white leading-tight -mt-1"
            >
              {data.name.toUpperCase()}
            </motion.h1>
          )}

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 0.85, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="max-w-lg text-xs md:text-base text-white/70 -mt-1"
          >
            {data.tagline}
          </motion.p>

        </div>

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