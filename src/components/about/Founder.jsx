// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import founder1 from "../../assets/images/Manish.jpg";
import founder2 from "../../assets/images/Abhishek.jpg";
import founder3 from "../../assets/images/Dehran.webp";
import founder4 from "../../assets/images/Himanshu.jpg";

const founders = [
  { id: "01", name: "Manish Gehani", img: founder1 },
  { id: "02", name: "Abhishek Valecha", img: founder2 },
  { id: "03", name: "Dheeraj Gehani ", img: founder3 },
  { id: "04", name: "Himanshu Nebhani", img: founder4 },
];

const Founder = () => {
  return (
    <section className="relative bg-black text-white py-32 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center text-4xl md:text-6xl font-extralight text-[#C8A75B] mb-24 tracking-wide"
        >
          Meet Founders
        </motion.h2>

        {/* Founder Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">

          {founders.map((founder, index) => (
            <motion.div
              key={founder.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group overflow-hidden"
            >

              {/* Image */}
              <img
                src={founder.img}
                alt={founder.name}
                className="w-full h-[440px] object-cover transition duration-700 ease-out group-hover:scale-[1.05]"
              />

              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/30 group-hover:bg-black/60 transition duration-500"></div>

              {/* Founder Number */}
              <span className="absolute top-6 left-6 text-[#C8A75B] text-lg font-light opacity-80">
                {founder.id}
              </span>

              {/* Founder Name */}
              <div className="absolute bottom-10 left-6 right-6 opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition duration-500">

                <h3 className="text-xl md:text-2xl font-light tracking-wide">
                  {founder.name}
                </h3>

              </div>

              {/* Bottom Line */}
              <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#C8A75B]/40 scale-x-0 group-hover:scale-x-100 transition duration-500 origin-left"></div>

            </motion.div>
          ))}

        </div>

      </div>

      {/* Subtle Background Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,167,91,0.05),_transparent_70%)] pointer-events-none"></div>

    </section>
  );
};

export default Founder;