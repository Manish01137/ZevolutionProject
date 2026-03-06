/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";
import { productsData } from "../../data/productsData";

const ProductGrid = () => {

  const { slug } = useParams();
  const data = productsData[slug];

  if (!data) return null;

  return (
    <section className="bg-black py-24 md:py-32">

      <div className="max-w-7xl mx-auto px-6 md:px-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">

        {data.products.map((product,index)=>(

          <motion.div
            key={index}
            initial={{opacity:0,y:80}}
            whileInView={{opacity:1,y:0}}
            viewport={{once:true}}
            transition={{duration:0.7,delay:index*0.1}}
            whileHover={{y:-12}}
            className="group relative border border-white/10 hover:border-[#C6A75E]/60 transition-all duration-500 bg-white/[0.02] backdrop-blur-sm"
          >

            {/* Image */}
            <div className="relative overflow-hidden">

              <img
                src={product.image}
                alt={product.name}
                className="h-64 md:h-72 w-full object-cover transition duration-700 group-hover:scale-110"
              />

              {/* cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-70"></div>

              {/* hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-[#C6A75E]/10"></div>

            </div>

            {/* Content */}
            <div className="p-6 md:p-8">

              {/* Product Name */}
              <h3 className="text-lg md:text-xl font-thin tracking-wide mb-4 text-white">
                {product.name}
              </h3>

              {/* Description */}
              <p className="text-white/60 text-sm md:text-[15px] font-light leading-relaxed mb-4">
                {product.description}
              </p>

              {/* Sizes */}
              <p className="text-white/70 text-sm font-light mb-6">
                Sizes: {product.sizes}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {product.tags.map((tag,i)=>(
                  <span
                    key={i}
                    className="border border-white/20 px-3 py-1 text-[11px] font-light tracking-wide text-white/70 hover:border-[#C6A75E] hover:text-[#C6A75E] transition"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Button */}
              <button className="border border-[#C6A75E] text-[#C6A75E] font-light tracking-wide px-6 py-2 text-sm hover:bg-[#C6A75E] hover:text-black transition-all duration-300">
                Request Sample →
              </button>

            </div>

          </motion.div>

        ))}

      </div>

    </section>
  );
};

export default ProductGrid;