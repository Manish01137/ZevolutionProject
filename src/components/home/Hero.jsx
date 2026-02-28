import heroVideo from "../../assets/videos/videoZevolution.mp4";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center text-center">

      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/65" />

      {/* Content */}
      <div className="relative z-10 max-w-6xl px-6">

        {/* Top Small Text */}
        <p className="text-gold tracking-[0.35em] text-[10px] md:text-xs mb-8">
          PREMIUM ARCHITECTURAL MATERIALS
        </p>

        {/* Main Title */}
        <h1 className="
          font-extralight
          leading-none
          tracking-[0.05em]
          text-4xl
          sm:text-5xl
          md:text-7xl
          lg:text-[95px]
          xl:text-[115px]
        ">
          <span className="text-gold">ZEVO</span>
          <span className="text-gold">LUTION</span>
        </h1>

        {/* Subtitle */}
        <p className="
          text-white/80
          text-base
          sm:text-lg
          md:text-2xl
          mt-6
          tracking-wide
        ">
          Zevolutionalise Your Spaces
        </p>

        <p className="text-gold mt-2 text-sm tracking-wider">
          Next Is Now.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center mt-10">

          <button className="
            bg-gold
            text-black
            px-8
            sm:px-10
            py-3
            sm:py-4
            text-xs
            sm:text-sm
            tracking-widest
            hover:opacity-90
            transition
            duration-300
          ">
            EXPLORE MATERIALS
          </button>

          <button className="
            border
            border-white/40
            text-white
            px-8
            sm:px-10
            py-3
            sm:py-4
            text-xs
            sm:text-sm
            tracking-widest
            hover:border-gold
            hover:text-gold
            transition
            duration-300
          ">
            CONNECT WITH US
          </button>

        </div>

      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 text-white/60 text-[11px] tracking-[0.25em]">
        SCROLL
        <div className="mt-2 text-gold text-lg animate-bounce">⌄</div>
      </div>

    </section>
  );
};

export default Hero;