import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import crestImg from "../../assets/images/CrestStone1.png";
import zerraImg from "../../assets/images/ZERRA_HANDPEELED1.png";
import formiqImg from "../../assets/images/FORMIQ1.png";

gsap.registerPlugin(ScrollTrigger);

const Material = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray(".material-section");

      sections.forEach((section, index) => {
        const image = section.querySelector(".material-image img");
        const content = section.querySelector(".material-content");
        const textElements = content.children;

        const isReverse = index % 2 !== 0;

        // Image reveal (smooth cinematic)
        gsap.fromTo(
          image,
          {
            scale: 1.15,
            opacity: 0,
            x: isReverse ? 100 : -100,
          },
          {
            scale: 1,
            opacity: 1,
            x: 0,
            duration: 1.6,
            ease: "power4.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
          }
        );

        // Text stagger reveal
        gsap.fromTo(
          textElements,
          {
            y: 60,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.2,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
            },
          }
        );

        // Subtle parallax on image
        gsap.to(image, {
          y: -40,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const materials = [
    {
      brand: "Crest Stone",
      title: "FCC Systems",
      description:
        "Fabricated Clay Claddings that bring monolithic character to modern facades. Engineered for impact, designed for permanence.",
      points: [
        "Superior weather resistance",
        "Zero maintenance facade systems",
        "Custom texture capabilities",
        "Sustainable manufacturing",
        "Fire-rated options available",
      ],
      image: crestImg,
      slug: "crest-stone",
    },
    {
      brand: "Zerra",
      title: "HandPeeled Stones",
      description:
        "Lightweight natural stone veneers with authentic textures. The elegance of stone without the structural demands.",
      points: [
        "Up to 90% lighter than natural stone",
        "Authentic hand-finished textures",
        "Easy installation on any surface",
        "Interior and exterior applications",
        "Natural material composition",
      ],
      image: zerraImg,
      slug: "zerra",
    },
    {
      brand: "Formiq",
      title: "Flooring Systems",
      description:
        "Premium flooring solutions that bring warmth, depth, and natural luxury to every space. Engineered for life.",
      points: [
        "High-traffic durability",
        "Underfloor heating compatible",
        "Acoustic performance certified",
        "Wide format options",
        "Natural wood & stone finishes",
      ],
      image: formiqImg,
      slug: "formiq",
    },
  ];

  return (
    <section ref={containerRef} className="bg-black py-28 md:py-36">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-24">
          <p className="text-gold tracking-[0.4em] text-xs mb-6">
            MATERIAL CATEGORIES
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extralight">
            Crafted for Excellence
          </h2>
        </div>

        {/* Sections */}
        {materials.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              className={`material-section grid md:grid-cols-2 gap-16 md:gap-24 items-center mb-32 ${
                isReverse ? "md:[&>div:first-child]:order-2" : ""
              }`}
            >
              {/* Image */}
              <div className="material-image overflow-hidden group">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[350px] sm:h-[420px] md:h-[520px] object-cover 
                             transition duration-[1600ms] ease-out 
                             group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="material-content">
                <p className="text-gold tracking-widest text-xs mb-4 uppercase">
                  {item.brand}
                </p>

                <h3 className="text-2xl sm:text-3xl md:text-5xl font-light mb-6">
                  {item.title}
                </h3>

                <p className="text-white/60 mb-6 leading-relaxed text-sm sm:text-base">
                  {item.description}
                </p>

                <ul className="space-y-3 mb-8">
                  {item.points.map((point, i) => (
                    <li
                      key={i}
                      className="text-white/70 text-sm flex items-start"
                    >
                      <span className="text-gold mr-3">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => navigate(`/brand/${item.slug}`)}
                  className="
                    border border-gold 
                    text-gold 
                    px-8 py-3 
                    text-xs sm:text-sm 
                    tracking-widest 
                    transition-all duration-500 
                    hover:bg-gold hover:text-black
                    hover:shadow-[0_0_40px_rgba(212,175,55,0.4)]
                  "
                >
                  EXPLORE {item.brand.toUpperCase()} →
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Material;