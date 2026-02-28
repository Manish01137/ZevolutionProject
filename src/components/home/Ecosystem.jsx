import { useNavigate } from "react-router-dom";
import { useRef } from "react";
import crest from "../../assets/images/CrestStone.png";
import zerra from "../../assets/images/ZERRA.png";
import formiq from "../../assets/images/FORMIQ.png";
import aerolith from "../../assets/images/AEROLITH.png";
import zevocubes from "../../assets/images/ZEVOCUBE.png";

const Ecosystem = () => {
  const navigate = useNavigate();

  const brands = [
    {
      name: "Crest Stone",
      category: "FCC (Fabricated Clay Claddings)",
      description: "Monolithic textures. Dramatic facades.",
      slug: "crest-stone",
      image: crest,
    },
    {
      name: "Zerra",
      category: "Handpeeled Stones",
      description: "Lightweight elegance. Architectural precision.",
      slug: "zerra",
      image: zerra,
    },
    {
      name: "Formiq",
      category: "Flooring Systems",
      description: "Warmth. Depth. Natural luxury.",
      slug: "formiq",
      image: formiq,
    },
    {
      name: "Aerolith",
      category: "Stone Flooring Systems",
      description: "Coming Soon",
      slug: "aerolith",
      image: aerolith,
      comingSoon: true,
    },
    {
      name: "ZevoCubes",
      category: "Partition Systems",
      description: "Coming Soon",
      slug: "zevocubes",
      image: zevocubes,
      comingSoon: true,
    },
  ];

  const handleMouseMove = (e, ref) => {
    const rect = ref.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * 6;
    const rotateY = ((x - centerX) / centerX) * -6;

    ref.current.style.transform = `
      perspective(1200px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.03, 1.03, 1.03)
    `;
  };

  const handleMouseLeave = (ref) => {
    ref.current.style.transform = `
      perspective(1200px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `;
  };

  return (
    <section className="bg-black py-28 md:py-32">
      
      <div className="max-w-7xl mx-auto px-6 text-center mb-20">
        <p className="text-gold tracking-[0.35em] text-xs mb-6">
          OUR BRANDS
        </p>

        <h2 className="text-3xl sm:text-4xl md:text-6xl font-extralight mb-6">
          The Zevolution Ecosystem
        </h2>

        <p className="text-white/60 max-w-2xl mx-auto text-sm sm:text-base">
          Five premium brands. One architectural vision. Discover materials that redefine what's possible.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-14">
        
        {brands.map((brand, index) => {
          // eslint-disable-next-line react-hooks/rules-of-hooks
          const cardRef = useRef(null);

          return (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => navigate(`/brand/${brand.slug}`)}
              onMouseMove={(e) => handleMouseMove(e, cardRef)}
              onMouseLeave={() => handleMouseLeave(cardRef)}
              ref={cardRef}
              style={{
                transition: "transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)",
                transformStyle: "preserve-3d",
              }}
            >
              <div className="relative overflow-hidden rounded-sm">

                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-[420px] sm:h-[470px] md:h-[520px] object-cover transition duration-[1200ms] ease-out group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent transition duration-700 group-hover:via-black/50" />

                {brand.comingSoon && (
                  <div className="absolute top-6 right-6 bg-gold text-black text-xs px-4 py-2 tracking-wider">
                    COMING SOON
                  </div>
                )}

                <div className="absolute bottom-8 left-6 right-6 translate-z-20">
                  
                  <p className="text-gold text-xs tracking-widest mb-3">
                    {brand.category}
                  </p>

                  <h3 className="text-xl sm:text-2xl font-light text-white mb-2">
                    {brand.name}
                  </h3>

                  <p className="text-white/70 text-sm mb-5">
                    {brand.description}
                  </p>

                  {!brand.comingSoon && (
                    <div className="
                      flex items-center
                      text-gold
                      text-sm
                      tracking-wide
                      opacity-0
                      translate-y-4
                      group-hover:opacity-100
                      group-hover:translate-y-0
                      transition-all
                      duration-700
                    ">
                      <span>Explore</span>
                      <span className="ml-2 transition-transform duration-700 group-hover:translate-x-3">
                        →
                      </span>
                    </div>
                  )}

                </div>

              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
};

export default Ecosystem;