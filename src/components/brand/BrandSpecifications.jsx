/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const BrandSpecifications = ({ data }) => {
  return (
    <section className="bg-black py-28 md:py-36">
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center mb-20">
          <p className="text-[#C6A75E] tracking-[0.4em] text-xs mb-6">
            TECHNICAL INFORMATION
          </p>
          <h2 className="text-3xl md:text-5xl font-light">
            Specifications
          </h2>
        </div>

        <div className="space-y-8">
          {data.specs.map((spec, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex justify-between border-b border-white/10 pb-4 text-white/70"
            >
              <span>{spec.label}</span>
              <span className="text-white">{spec.value}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSpecifications;