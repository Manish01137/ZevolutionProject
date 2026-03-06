/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const ProductCTA = () => {

  const navigate = useNavigate();

  return (
    <section className="relative bg-black py-24 md:py-32 overflow-hidden">

      {/* subtle background glow */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-[500px] h-[500px] bg-[#C6A75E]/10 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-10 text-center">

        {/* Heading */}
        <motion.h2
          initial={{opacity:0,y:60}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.9}}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-thin tracking-wide text-white mb-6"
        >
          Need Samples or Technical Specs?
        </motion.h2>

        {/* gold divider */}
        <motion.div
          initial={{width:0}}
          whileInView={{width:"80px"}}
          viewport={{once:true}}
          transition={{duration:0.8,delay:0.2}}
          className="h-[1px] bg-[#C6A75E] mx-auto mb-8"
        />

        {/* Description */}
        <motion.p
          initial={{opacity:0,y:40}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.9,delay:0.2}}
          className="text-white/60 text-base md:text-lg font-light leading-relaxed max-w-2xl mx-auto mb-10"
        >
          Our team can provide samples, technical documentation,
          and consultation for your architectural project.
        </motion.p>

        {/* Button */}
        <motion.button
          initial={{opacity:0,y:30}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          transition={{duration:0.8,delay:0.3}}
          whileHover={{scale:1.05}}
          whileTap={{scale:0.96}}
          onClick={() => navigate("/contact")}
          className="relative border border-[#C6A75E] text-[#C6A75E] font-light tracking-wide px-10 py-4 text-sm md:text-base transition-all duration-300 hover:bg-[#C6A75E] hover:text-black"
        >
          Contact Our Team →
        </motion.button>

      </div>

    </section>
  );
};

export default ProductCTA;