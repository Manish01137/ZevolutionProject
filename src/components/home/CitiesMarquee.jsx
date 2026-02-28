import { useEffect, useRef } from "react";

const CitiesMarquee = () => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const el = marqueeRef.current;
    let animationFrame;
    let position = 0;

    const speed = 0.35; // slower = more luxury feel

    const animate = () => {
      position -= speed;

      if (Math.abs(position) >= el.scrollWidth / 2) {
        position = 0;
      }

      el.style.transform = `translate3d(${position}px, 0, 0)`;
      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, []);

  const cities = ["Delhi", "Mumbai", "Bangalore"];

  return (
    <section className="relative w-full overflow-hidden border-y border-white/10 bg-black py-14 md:py-20">

      {/* Soft Fade Left */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10" />

      {/* Soft Fade Right */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10" />

      <div className="whitespace-nowrap">
        <div
          ref={marqueeRef}
          className="flex items-center gap-16 md:gap-24 text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.08em]"
        >
          {[...cities, ...cities].map((city, index) => (
            <div key={index} className="flex items-center gap-5 md:gap-8">
              
              {/* City Name */}
              <span className="text-white/90">
                {city}
              </span>

              {/* Zevolutionalised */}
              <span className="bg-gradient-to-r from-[#C6A75E] to-[#E7C873] bg-clip-text text-transparent font-light">
                Zevolutionalised.
              </span>

              {/* Divider Dot */}
              <span className="text-white/30 text-xl md:text-2xl">
                •
              </span>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CitiesMarquee;