/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const BrandBenefits = ({ data }) => {
  return (
    <section className="bg-black py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="text-[#C6A75E] tracking-[0.5em] text-xs uppercase mb-6">
            KEY BENEFITS
          </p>

          <h2 className="text-3xl md:text-5xl font-extralight tracking-wide">
            Why Choose {data.name.toUpperCase()}
          </h2>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {data.benefits.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
              viewport={{ once: true }}
              className="
                bg-[#0c0c0c]
                border border-white/10
                p-10
                min-h-[200px]
                flex flex-col
                justify-center
                transition-all duration-500
                hover:border-[#C6A75E]/40
              "
            >
              <h4 className="text-[#C6A75E] text-lg font-light mb-4 tracking-wide">
                {item.title}
              </h4>

              <p className="text-white/60 text-sm leading-relaxed font-light">
                {item.desc}
              </p>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default BrandBenefits;