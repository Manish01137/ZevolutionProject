/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { Download } from "lucide-react";

const files = [
  {
    title: "Crest Stone FCC Specifications",
    type: "PDF • 2.4 MB",
  },
  {
    title: "Zerra HandPeeled Stone Catalog",
    type: "PDF • 8.1 MB",
  },
  {
    title: "Formiq Flooring Performance Guide",
    type: "PDF • 5.6 MB",
  },
  {
    title: "Architectural CAD Block Library",
    type: "DWG • 12.3 MB",
  },
];

const DownloadResources = () => {
  return (
    <section className="py-28 bg-black">

      {/* Section Heading */}
      <div className="text-center mb-20 px-6">

        <p className="text-[#c9a45c] tracking-[6px] text-xs uppercase font-light">
          Technical Documentation
        </p>

        <h2 className="text-4xl md:text-5xl text-white mt-5 font-extralight">
          Downloadable Resources
        </h2>

        <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-sm md:text-base font-light leading-relaxed">
          Access technical documentation, specification sheets,
          catalogs, and architectural resources to support your
          design and project development.
        </p>

      </div>

      {/* Resource Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-6">

        {files.map((file, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            transition={{ duration: 0.4 }}
            className="group relative bg-[#0f0f0f] border border-gray-800 p-8 rounded-xl overflow-hidden hover:border-[#c9a45c]/40 transition-all duration-500"
          >

            {/* Glow Hover Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-[#c9a45c]/10 to-transparent"></div>

            {/* Icon */}
            <div className="mb-6 relative z-10">
              <Download
                size={28}
                className="text-[#c9a45c] transition-transform duration-300 group-hover:scale-110"
              />
            </div>

            {/* Title */}
            <h3 className="text-white text-lg mb-3 font-light leading-snug relative z-10 group-hover:text-[#c9a45c] transition">
              {file.title}
            </h3>

            {/* File Type */}
            <p className="text-gray-400 text-sm font-light mb-6 relative z-10">
              {file.type}
            </p>

            {/* Download Button */}
            <button className="text-[#c9a45c] text-sm font-light tracking-wide flex items-center gap-2 relative z-10 group-hover:gap-3 transition-all">
              Download
              <span className="group-hover:translate-x-1 transition">
                →
              </span>
            </button>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default DownloadResources;