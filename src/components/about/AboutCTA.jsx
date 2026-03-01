import { Link } from "react-router-dom";

const AboutCTA = () => {
  return (
    <section className="relative bg-black text-white py-20 md:py-32 overflow-hidden">

      {/* Background Soft Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,167,91,0.15),_transparent_60%)]"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-6 text-center">

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight mb-6">
          Ready to Transform Your Vision?
        </h2>

        {/* Subtext */}
        <p className="text-gray-400 text-sm md:text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed">
          Let’s collaborate on your next architectural masterpiece. Our team
          is ready to bring your vision to life with premium materials and
          expert guidance.
        </p>

        {/* Button */}
        <Link to="/contact">
          <button
            className="group relative inline-flex items-center justify-center 
                       px-8 md:px-12 py-3 md:py-4 
                       overflow-hidden 
                       bg-[#C8A75B] text-black 
                       uppercase tracking-[3px] text-xs md:text-sm font-medium
                       transition-all duration-500 ease-out
                       hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              Start a Conversation
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </span>

            {/* Hover Sweep Effect */}
            <span className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-700 ease-out"></span>
          </button>
        </Link>

      </div>

      {/* Bottom Fade for Depth */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent"></div>

    </section>
  );
};

export default AboutCTA;