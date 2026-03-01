// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import founderImg from "../../assets/images/founderimg.jpg";

const Founder = () => {
  return (
    <section className="relative bg-black text-white py-24 md:py-36 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 lg:gap-28 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="hidden md:block absolute -top-8 -left-8 w-28 h-28 bg-[#C8A75B]/10"></div>

          <img
            src={founderImg}
            alt="Founder"
            className="relative w-full object-cover rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.6)] transition duration-700 group-hover:scale-[1.015]"
          />

          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C8A75B]/70"></div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="space-y-10"
        >

          <p className="tracking-[10px] text-[10px] md:text-xs text-[#C8A75B] uppercase font-extralight">
            Founder’s Vision
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extralight leading-[1.2]">
            Building More Than Materials —
            <span className="block text-[#C8A75B] font-extralight mt-2">
              Shaping Architectural Legacy.
            </span>
          </h2>

          <div className="space-y-8 text-gray-400 text-sm md:text-base leading-relaxed font-extralight max-w-lg tracking-wide">

            <p>
              At Zevolution, leadership is guided by clarity of purpose and
              uncompromising standards. We see materials not merely as structural
              elements, but as expressions of identity and enduring craftsmanship.
            </p>

            <p>
              Every decision reflects a commitment to innovation, precision,
              and architectural integrity — ensuring each collaboration results
              in a lasting statement of excellence.
            </p>

            <p>
              Our journey is defined by ambition, discipline, and the pursuit
              of timeless design language that transcends trends.
            </p>

          </div>

        </motion.div>

      </div>

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,167,91,0.06),_transparent_65%)] pointer-events-none"></div>

    </section>
  );
};

export default Founder;