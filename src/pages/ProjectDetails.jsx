// src/pages/ProjectDetails.jsx

import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { projectsData } from "../data/projectsData";
import { ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: "easeOut" },
  },
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projectsData.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Project not found.
      </div>
    );
  }

  return (
    <>
      <Navbar />

      <div className="bg-black text-white overflow-hidden">

        {/* HERO */}
        <motion.section
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative h-[90vh] flex items-center justify-center text-center"
          style={{
            backgroundImage: `url(${project.heroImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />

          <div className="relative z-10 px-6">
            <Link
              to="/"
              className="flex items-center justify-center gap-2 text-white/70 mb-6 hover:text-[#C6A75E] transition duration-300"
            >
              <ArrowLeft size={16} /> Back to Home
            </Link>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-[#C6A75E] tracking-[0.3em] text-sm uppercase mb-4"
            >
              Case Study
            </motion.p>

            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-4xl md:text-6xl font-extralight mb-6"
            >
              {project.title}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="show"
              className="text-white/70"
            >
              {project.location} • {project.type} • {project.year}
            </motion.p>
          </div>
        </motion.section>

        {/* CHALLENGE & SOLUTION */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-20"
        >
          <div>
            <p className="text-[#C6A75E] tracking-[0.3em] text-sm uppercase mb-6">
              The Challenge
            </p>
            <h2 className="text-3xl font-light mb-6">
              Project Requirements
            </h2>
            <p className="text-white/70 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div>
            <p className="text-[#C6A75E] tracking-[0.3em] text-sm uppercase mb-6">
              Material Solution
            </p>
            <h2 className="text-3xl font-light mb-6">
              Our Approach
            </h2>
            <p className="text-white/70 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </motion.section>

        {/* GALLERY */}
        <section className="py-24 px-6 md:px-12 text-center">
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-[#C6A75E] tracking-[0.3em] text-sm uppercase mb-6"
          >
            Gallery
          </motion.p>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="text-4xl font-extralight mb-16"
          >
            Project Images
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {project.gallery.map((img, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.04 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-[350px] object-cover transition duration-700 hover:brightness-110"
                />
              </motion.div>
            ))}
          </div>
        </section>

        {/* EXECUTION & OUTCOME */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-20"
        >
          <div>
            <p className="text-[#C6A75E] tracking-[0.3em] text-sm uppercase mb-6">
              Execution Strategy
            </p>
            <h2 className="text-3xl font-light mb-6">
              How We Delivered
            </h2>
            <p className="text-white/70">{project.execution}</p>
          </div>

          <div>
            <p className="text-[#C6A75E] tracking-[0.3em] text-sm uppercase mb-6">
              The Outcome
            </p>
            <h2 className="text-3xl font-light mb-6">
              Results Achieved
            </h2>
            <p className="text-white/70">{project.outcome}</p>
          </div>
        </motion.section>

        {/* TESTIMONIAL */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-32 text-center px-6"
        >
          <p className="text-6xl text-[#C6A75E] mb-10">“</p>
          <p className="text-2xl font-light max-w-3xl mx-auto mb-8">
            {project.testimonial}
          </p>
          <p className="text-[#C6A75E]">{project.client}</p>
        </motion.section>

        {/* CTA */}
        <motion.section
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="py-24 text-center"
        >
          <h2 className="text-4xl font-extralight mb-6">
            Start Your Project
          </h2>
          <button className="bg-[#C6A75E] text-black px-8 py-4 tracking-widest hover:scale-105 transition duration-300">
            GET IN TOUCH →
          </button>
        </motion.section>
      </div>

      <Footer />
    </>
  );
};

export default ProjectDetails;