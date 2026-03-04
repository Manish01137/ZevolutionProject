/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";

const BrandCTA = ({ data }) => {
  return (
    <section className="bg-black py-26 md:py-36 text-center">
      <div className="max-w-3xl mx-auto px-6">

        <h2 className="text-3xl md:text-5xl font-light mb-6">
          Ready to Specify {data.name.toUpperCase()}?
        </h2>

        <p className="text-white/60 mb-10">
          Connect with our team for samples, specifications, and expert consultation.
        </p>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="px-10 py-4 bg-[#C6A75E] text-black tracking-widest text-sm uppercase transition-all duration-500 hover:shadow-[0_0_40px_rgba(198,167,94,0.4)]"
        >
          Request Consultation →
        </motion.button>
      </div>
    </section>
  );
};

export default BrandCTA;