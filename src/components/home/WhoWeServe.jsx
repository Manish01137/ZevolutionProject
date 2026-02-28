import { motion } from "framer-motion";
import { Compass, PenTool, Building2, Home } from "lucide-react";

const data = [
  {
    title: "Architects",
    description:
      "Collaborate on visionary projects with materials that push boundaries.",
    icon: Compass,
  },
  {
    title: "Interior Designers",
    description:
      "Curate spaces with premium finishes and bespoke material solutions.",
    icon: PenTool,
  },
  {
    title: "Developers",
    description:
      "Elevate projects with materials that define market distinction.",
    icon: Building2,
  },
  {
    title: "Luxury Homeowners",
    description:
      "Transform residences into architectural masterpieces.",
    icon: Home,
  },
];

const WhoWeServe = () => {
  return (
    <section className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto text-center">

        {/* Small Gold Label */}
        <p className="text-sm tracking-[0.35em] text-[#C6A75E] uppercase mb-6">
          Who We Serve
        </p>

        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-16">
          Partners in Excellence
        </h2>

        {/* Cards */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {data.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group relative border border-white/10 bg-white/[0.02] backdrop-blur-sm p-10 text-left transition-all duration-500 hover:border-[#C6A75E]/60 hover:bg-white/[0.04]"
              >
                {/* Glow Effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 pointer-events-none bg-gradient-to-br from-[#C6A75E]/5 to-transparent" />

                {/* Icon Circle */}
                <div className="mb-6 w-14 h-14 flex items-center justify-center rounded-full border border-[#C6A75E]/50 text-[#C6A75E] group-hover:scale-110 transition duration-500">
                  <Icon size={24} strokeWidth={1.2} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-light text-white mb-4 tracking-wide">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 font-extralight leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServe;