import abouthero from "../../assets/images/abouthero.png";

const AboutHero = () => {
  return (
    <section
      className="relative h-[80vh] flex items-center justify-center text-center overflow-hidden"
      style={{
        backgroundImage: `url(${abouthero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 px-6 max-w-4xl mx-auto">
        <p className="text-[#C8A75B] tracking-[0.4em] text-xs uppercase mb-6 font-light">
          Our Story
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-extralight text-white leading-tight mb-6">
          Built on Vision,<br />Driven by Craft
        </h1>
        <p className="text-white/70 text-base md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
          Zevolution is the architecture of premium materials — a brand ecosystem
          created to elevate every surface, every space, every structure.
        </p>
      </div>

      {/* Bottom gradient */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default AboutHero;
