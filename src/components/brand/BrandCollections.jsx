/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const BrandCollections = () => {
  const navigate = useNavigate();
  const { slug } = useParams();

  return (
    <section className="bg-black py-28 md:py-36">

      <div className="max-w-6xl mx-auto px-6 flex justify-center">

        <motion.button
          whileHover={{
            scale: 1.06,
            boxShadow: "0 0 45px rgba(198,167,94,0.35)"
          }}
          whileTap={{ scale: 0.98 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          onClick={() => navigate(`/brand/${slug}/products`)}
          className="
            border border-[#C6A75E]
            text-[#C6A75E]
            px-12 md:px-16
            py-4 md:py-5
            text-[11px] md:text-sm
            font-light
            tracking-[0.35em]
            uppercase
            transition-all duration-500
            hover:bg-[#C6A75E]
            hover:text-black
            hover:border-[#C6A75E]
          "
        >
          Explore More
        </motion.button>

      </div>

    </section>
  );
};

export default BrandCollections;