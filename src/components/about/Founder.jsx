import { FaLinkedinIn } from "react-icons/fa";

import dheeraj from "../../assets/images/founder-dheeraj.webp";
import hitesh from "../../assets/images/founder-hitesh.webp";
import nakul from "../../assets/images/founder-nakul.webp";

const founders = [
  {
    name: "Dheeraj",
    title: "Founder & CEO",
    image: dheeraj,
    bio: "Dheeraj drives the vision of Zevolution — bringing together premium material brands to redefine architectural excellence across India.",
    linkedin: "https://www.linkedin.com/in/dheeraj-gehani-956009365",
  },
  {
    name: "Hitesh",
    title: "Co-Founder & Operations",
    image: hitesh,
    bio: "Hitesh oversees the seamless delivery and operational excellence that has become the hallmark of every Zevolution project.",
    linkedin: "https://www.linkedin.com/in/hitesh-sakariya-a738a2bb",
  },
  {
    name: "Nakul",
    title: "Co-Founder & Design",
    image: nakul,
    bio: "Nakul leads the design and curation philosophy ensuring every material selection exceeds the expectations of architects and clients alike.",
    linkedin: "https://www.linkedin.com/in/nakul-kanchhal-unihome",
  },
];

const Founder = () => {
  return (
    <section className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="tracking-[8px] text-xs md:text-sm text-[#C8A75B] uppercase font-light mb-6">
            The People Behind Zevolution
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Meet the Founders
          </h2>
        </div>

        {/* Founder Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {founders.map((founder) => (
            <div
              key={founder.name}
              className="group text-center"
            >
              {/* Image */}
              <div className="relative overflow-hidden mb-6 mx-auto w-full aspect-[3/4] max-w-xs">
                <img
                  src={founder.image}
                  alt={founder.name}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                />

                {/* Dark overlay on hover */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* LinkedIn icon on hover */}
                {founder.linkedin && (
                  <a
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${founder.name} LinkedIn profile`}
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-3 group-hover:translate-y-0"
                  >
                    <span className="flex items-center justify-center w-14 h-14 rounded-full border border-[#C8A75B] bg-black/60 backdrop-blur-sm text-[#C8A75B] hover:bg-[#C8A75B] hover:text-black transition-colors duration-300">
                      <FaLinkedinIn size={20} />
                    </span>
                  </a>
                )}

                {/* Gold bottom strip */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-[#C8A75B] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Details */}
              <h3 className="text-xl font-light mb-1">{founder.name}</h3>
              <p className="text-[#C8A75B] text-xs tracking-widest uppercase mb-4 font-light">
                {founder.title}
              </p>
              <p className="text-gray-400 text-sm leading-relaxed font-light max-w-xs mx-auto">
                {founder.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founder;
