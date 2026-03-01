import philosophyImg from "../../assets/images/abouthero.png";

const Philosophy = () => {
  return (
    <section className="relative bg-black text-white py-20 md:py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

        {/* LEFT CONTENT */}
        <div className="space-y-8">

          <p className="tracking-[8px] text-xs md:text-sm text-[#C8A75B] uppercase font-light">
            Our Philosophy
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Where Vision Meets Material
          </h2>

          <div className="space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-light max-w-xl">

            <p>
              At Zevolution, we believe that exceptional architecture begins
              with exceptional materials. We’re not just suppliers — we are
              partners in the creative process, bringing together innovation,
              craftsmanship, and sustainability to deliver materials that inspire.
            </p>

            <p>
              Our ecosystem of premium brands represents decades of research,
              development, and refinement. Each product is engineered to meet
              the exacting standards of architects, designers, and discerning
              homeowners who demand nothing less than perfection.
            </p>

          </div>

        </div>

        {/* RIGHT IMAGE WITH PREMIUM LAYER EFFECT */}
        <div className="relative group">

          {/* Decorative Gold Block Top Right */}
          <div className="hidden md:block absolute -top-6 -right-6 w-24 h-24 bg-[#C8A75B]/20"></div>

          {/* Decorative Outline Bottom Left */}
          <div className="hidden md:block absolute -bottom-8 -left-8 w-40 h-40 border border-[#C8A75B]/30"></div>

          <img
            src={philosophyImg}
            alt="Philosophy"
            className="relative w-full object-cover rounded-sm shadow-2xl transition duration-700 group-hover:scale-[1.02]"
          />

        </div>

      </div>

    </section>
  );
};

export default Philosophy;