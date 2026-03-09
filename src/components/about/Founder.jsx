// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import founderHitesh from "../../assets/images/founder-hitesh.webp";
import founderNakul from "../../assets/images/founder-nakul.webp";
import founderDheeraj from "../../assets/images/founder-dheeraj.webp";

const founders = [
  {
    id: "01",
    name: "Dheeraj Gehani",
    role: "Brand, Strategy & Growth",
    desc: "Driving the brand vision, market expansion and long-term strategic growth of Zevolution.",
    img: founderDheeraj,
    linkedin:
      "https://www.linkedin.com/in/dheeraj-gehani-956009365",
  },

  {
    id: "02",
    name: "Nakul Kanchhal",
    role: "Manufacturing & Quality Excellence",
    desc: "Anchoring manufacturing precision and operational excellence to ensure world-class quality.",
    img: founderNakul,
    linkedin:
      "https://www.linkedin.com/in/nakul-kanchhal-unihome",
  },

  {
    id: "03",
    name: "Hitesh Sakariya",
    role: "Finance & Expansion",
    desc: "Steering financial discipline, scalable growth and expansion of the Zevolution ecosystem.",
    img: founderHitesh,
    linkedin:
      "https://www.linkedin.com/in/hitesh-sakariya-a738a2bb",
  },
];

const Founder = () => {
  return (
    <section className="relative bg-black text-white py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-6xl font-extralight text-[#C8A75B] mb-10 tracking-wide"
        >
          Meet the Founders
        </motion.h2>

        {/* Intro */}
        <p className="max-w-3xl mx-auto text-center text-white/70 leading-relaxed mb-24">
          Zevolution is led by visionary founders shaping the future of
          architectural surfaces and interiors through innovation,
          manufacturing precision and strategic leadership.
        </p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-14">

          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden"
            >

              {/* Image */}
              <img
                src={founder.img}
                alt={founder.name}
                className="w-full h-[460px] md:h-[520px] object-cover transition duration-700 group-hover:scale-[1.06]"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/85 transition duration-500"></div>

              {/* Number */}
              <span className="absolute top-6 left-6 text-[#C8A75B] text-lg font-light opacity-90">
                {founder.id}
              </span>

              {/* Content */}
              <div className="absolute bottom-8 left-6 right-6 opacity-0 translate-y-12 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">

                <h3 className="text-xl md:text-2xl font-light tracking-wide mb-1">
                  {founder.name}
                </h3>

                <p className="text-[#C8A75B] text-sm mb-3">
                  {founder.role}
                </p>

                <p className="text-white/70 text-sm leading-relaxed mb-4">
                  {founder.desc}
                </p>

                {/* LinkedIn */}
                <a
                  href={founder.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#C8A75B] hover:text-white transition text-sm"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 
                    2.239 5 5 5h14c2.761 0 5-2.239 
                    5-5v-14c0-2.761-2.239-5-5-5zm-11 
                    19h-3v-10h3v10zm-1.5-11.268c-.966 
                    0-1.75-.784-1.75-1.75s.784-1.75 
                    1.75-1.75 1.75.784 
                    1.75 1.75-.784 1.75-1.75 
                    1.75zm13.5 11.268h-3v-5.604c0-3.368-4-3.113-4 
                    0v5.604h-3v-10h3v1.528c1.396-2.586 
                    7-2.777 7 2.476v5.996z"/>
                  </svg>

                  LinkedIn
                </a>

              </div>

              {/* Gold line */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C8A75B]/40 scale-x-0 group-hover:scale-x-100 transition duration-500 origin-left"></div>

            </motion.div>
          ))}

        </div>

        {/* Closing text */}
        <p className="max-w-4xl mx-auto text-center text-white/70 leading-relaxed mt-24">
          Together, they combine design intelligence, operational strength,
          market foresight and financial stewardship to build a future-ready
          surfaces and interiors enterprise.
        </p>

      </div>

      {/* Ambient glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,167,91,0.05),_transparent_70%)] pointer-events-none"></div>

    </section>
  );
};

export default Founder;