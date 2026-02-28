import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  "All",
  "FCC",
  "HandPeeled Stones",
  "Flooring",
  "Commercial",
  "Residential",
];

const projects = [
  {
    title: "Meridian Tower",
    slug: "meridian-tower",
    city: "Mumbai",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000",
  },
  {
    title: "Serene Residence",
    slug: "serene-residence",
    city: "Delhi",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2000",
  },
  {
    title: "Azure Bay Hotel",
    slug: "azure-bay-hotel",
    city: "Goa",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2000",
  },
  {
    title: "Heritage Villa",
    slug: "heritage-villa",
    city: "Jaipur",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=2000",
  },
  {
    title: "Luxe Corporate HQ",
    slug: "luxe-corporate-hq",
    city: "Bangalore",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=2000",
  },
  {
    title: "Woodland Estate",
    slug: "woodland-estate",
    city: "Pune",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2000",
  },
];

const FeaturedProjects = () => {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All"
      ? projects
      : projects.filter((p) => p.category === active);

  return (
    <section className="bg-black py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-14">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extralight text-white mb-6 md:mb-0">
            Featured Projects
          </h2>

          <Link
            to="/projects"
            className="group border border-white/20 px-6 py-3 text-sm tracking-widest text-white flex items-center gap-2 transition-all duration-500 hover:border-[#C6A75E] hover:text-[#C6A75E]"
          >
            VIEW ALL PROJECTS
            <ArrowRight size={16} className="group-hover:translate-x-1 transition" />
          </Link>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 text-sm tracking-wide border transition-all duration-300
                ${
                  active === cat
                    ? "bg-[#C6A75E] text-black border-[#C6A75E]"
                    : "border-white/20 text-white/70 hover:border-[#C6A75E] hover:text-white"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence>
            {filtered.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to={`/projects/${project.slug}`}
                  className="group relative block overflow-hidden cursor-pointer"
                >
                  {/* Image */}
                  <div className="overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/50 to-transparent opacity-80 group-hover:opacity-95 transition duration-500" />

                  {/* Bottom Content */}
                  <div className="absolute bottom-8 left-8 transition-all duration-500 group-hover:translate-y-[-10px]">
                    <p className="text-xs tracking-[0.25em] text-[#C6A75E] uppercase mb-3">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-light text-white mb-1">
                      {project.title}
                    </h3>
                    <p className="text-white/70 text-sm">
                      {project.city}
                    </p>
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition duration-500">
                    <span className="border border-[#C6A75E] px-6 py-3 text-sm tracking-widest text-[#C6A75E] group-hover:bg-[#C6A75E] group-hover:text-black transition-all duration-500 flex items-center gap-2">
                      VIEW PROJECT
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProjects;