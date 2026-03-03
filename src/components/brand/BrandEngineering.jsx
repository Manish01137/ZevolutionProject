/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const BrandEngineering = ({ data }) => {
  return (
    <section className="bg-black py-24 sm:py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 md:gap-24 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          {/* Small Label */}
          <p className="text-[#C6A75E] tracking-[0.5em] text-[10px] sm:text-xs uppercase mb-6">
            Product Structure
          </p>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extralight leading-tight mb-8 tracking-wide">
            Engineering Excellence
          </h2>

          {/* Divider Line */}
          <div className="w-16 h-[1px] bg-[#C6A75E] mb-8 opacity-60" />

          {/* Description */}
          <p className="text-white/60 leading-relaxed text-sm sm:text-base md:text-lg font-light tracking-wide">
            {data.engineeringText}
          </p>
        </motion.div>

        {/* RIGHT SIDE IMAGES */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4"
        >
          {data.engineeringImages.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden group"
            >
              <img
                src={img}
                alt="Engineering"
                className="
                  w-full 
                  h-52 sm:h-60 md:h-64 
                  object-cover 
                  transition duration-700 ease-out 
                  group-hover:scale-105
                "
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandEngineering;