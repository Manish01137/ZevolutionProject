/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { FaCheck } from "react-icons/fa";

const BrandOverview = ({ data }) => {
  return (
    <section className="bg-black py-24 sm:py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-16 md:gap-24">

        {/* LEFT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >

          {/* Small Label */}
          <p className="text-[#C6A75E] tracking-[0.5em] text-[10px] sm:text-xs mb-6 uppercase">
            Overview
          </p>

          {/* Heading */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extralight leading-tight mb-8">
            {data.overviewTitle}
          </h2>

          {/* Elegant Divider */}
          <div className="w-16 h-[1px] bg-[#C6A75E] mb-8 opacity-60" />

          {/* Description */}
          <p className="text-white/60 leading-relaxed text-sm sm:text-base md:text-lg font-light tracking-wide">
            {data.overviewDescription}
          </p>

        </motion.div>

        {/* RIGHT COLUMN */}
        <motion.div
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >

          {/* Small Label */}
          <p className="text-[#C6A75E] tracking-[0.5em] text-[10px] sm:text-xs mb-6 uppercase">
            Ideal Applications
          </p>

          {/* Heading */}
          <h3 className="text-xl sm:text-2xl md:text-4xl font-extralight mb-10">
            Where It Excels
          </h3>

          {/* Applications Grid */}
          <div className="grid sm:grid-cols-2 gap-y-6 gap-x-12">

            {data.applications.map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ x: 6 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="flex items-start text-white/70 text-sm sm:text-base font-light"
              >

                {/* GOLD TICK ICON */}
                <FaCheck className="text-[#C6A75E] mr-3 mt-[3px] text-xs" />

                <span>{item}</span>

              </motion.div>
            ))}

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default BrandOverview;