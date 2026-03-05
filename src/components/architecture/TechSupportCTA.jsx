/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const TechSupportCTA = () => {
  return (
    <section className="relative py-32 bg-black overflow-hidden">

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#c9a45c]/5 via-transparent to-transparent"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-6">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl lg:text-6xl text-white mb-8 font-extralight leading-tight"
        >
          Need Custom Specifications?
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-gray-400 max-w-2xl mx-auto mb-12 text-base md:text-lg font-light leading-relaxed"
        >
          Our technical specialists provide project-specific documentation,
          BIM models, specification sheets, and consultation support to
          assist architects and designers in delivering outstanding
          architectural projects.
        </motion.p>

        {/* Button */}
        <motion.button
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.95 }}
          className="group bg-[#c9a45c] text-black px-10 py-4 text-sm tracking-wide font-light rounded-sm transition-all duration-300 hover:bg-[#d8b56d]"
        >
          CONTACT TECHNICAL SUPPORT
          <span className="ml-2 group-hover:translate-x-1 inline-block transition">
            →
          </span>
        </motion.button>

      </div>
    </section>
  );
};

export default TechSupportCTA;