/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import heroImg from "../../assets/images/abouthero.png";

const AboutHero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center text-white">

      {/* Background Image with Slow Zoom */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6, ease: "easeOut" }}
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Premium Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90"></div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6">

        {/* Small Top Label */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="tracking-[8px] text-xs md:text-sm text-[#C8A75B] mb-6 uppercase"
        >
          About Zevolution
        </motion.p>

        {/* Main Heading */}
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
          className="text-4xl sm:text-5xl md:text-7xl font-light leading-tight"
        >
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
            className="block"
          >
            Designed to Transform.
          </motion.span>

          <motion.span
            variants={{
              hidden: { opacity: 0, y: 60 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
            className="block text-[#C8A75B] relative"
          >
            Engineered to Endure.
            <span className="absolute left-1/2 -bottom-4 w-24 h-[2px] bg-[#C8A75B] -translate-x-1/2"></span>
          </motion.span>
        </motion.h1>

      </div>

      {/* Bottom Fade Shadow for Depth */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent"></div>

    </section>
  );
};

export default AboutHero;