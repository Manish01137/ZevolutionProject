/* eslint-disable no-unused-vars */
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";

const BrandCollections = () => {

  const navigate = useNavigate();
  const { slug } = useParams();

  return (
    <section className="bg-black py-28 md:py-36">

      <div className="max-w-6xl mx-auto px-6 text-center">

        {/* Small Label */}
        <p className="text-[#C6A75E] tracking-[0.45em] text-[10px] uppercase mb-6">
          Product Collection
        </p>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extralight text-white mb-14">
          Explore Product Systems
        </h2>

        {/* Button */}
        <motion.button

          whileHover={{
            scale:1.05,
            boxShadow:"0 0 40px rgba(198,167,94,0.3)"
          }}

          transition={{duration:0.3}}

          onClick={()=>navigate(`/brand/${slug}/products`)}

          className="
          border border-[#C6A75E]
          text-[#C6A75E]
          px-10 md:px-14
          py-4
          text-xs md:text-sm
          tracking-[0.3em]
          uppercase
          transition-all duration-500
          hover:bg-[#C6A75E]
          hover:text-black
          "

        >
          Explore Products
        </motion.button>

      </div>

    </section>
  );
};

export default BrandCollections;