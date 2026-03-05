/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const ResourceCard = ({ item }) => {
  return (
    <motion.div
      whileHover={{ y: -12 }}
      transition={{ duration: 0.4 }}
      className="group bg-[#0e0e0e] border border-gray-800 rounded-xl overflow-hidden hover:border-[#c9a45c]/40 transition-all duration-500"
    >
      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={item.image}
          alt={item.title}
          className="w-full h-64 object-cover transition duration-700 group-hover:scale-110"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>

      </div>

      {/* Content */}
      <div className="p-7">

        {/* Top Info */}
        <div className="flex justify-between items-center text-xs mb-4 tracking-wider">

          <span className="text-[#c9a45c] uppercase font-light">
            {item.type}
          </span>

          <span className="text-gray-500 font-light">
            {item.read}
          </span>

        </div>

        {/* Title */}
        <h3 className="text-white text-lg leading-snug mb-4 font-light group-hover:text-[#c9a45c] transition">
          {item.title}
        </h3>

        {/* Description */}
        <p className="text-gray-400 text-sm leading-relaxed mb-6 font-light">
          {item.desc}
        </p>

        {/* Button */}
        <button className="flex items-center gap-2 text-[#c9a45c] text-sm font-light tracking-wide group-hover:gap-3 transition-all">
          Read More
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>

      </div>
    </motion.div>
  );
};

export default ResourceCard;