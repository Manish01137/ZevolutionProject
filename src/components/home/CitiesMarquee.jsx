import { useEffect, useRef } from "react";

const CitiesMarquee = () => {
  const row1Ref = useRef(null);
  const row2Ref = useRef(null);

  useEffect(() => {
    let pos1 = 0;
    let pos2 = 0;

    const speed = 0.8;

    const animate = () => {
      const row1Width = row1Ref.current.scrollWidth / 2;
      const row2Width = row2Ref.current.scrollWidth / 2;

      pos1 -= speed;
      pos2 += speed;

      if (pos1 <= -row1Width) pos1 = 0;
      if (pos2 >= row2Width) pos2 = 0;

      row1Ref.current.style.transform = `translate3d(${pos1}px,0,0)`;
      row2Ref.current.style.transform = `translate3d(${pos2}px,0,0)`;

      requestAnimationFrame(animate);
    };

    const frame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frame);
  }, []);

  const cities1 = ["Delhi", "Mumbai", "Bangalore", "Chennai", "Hyderabad"];
  const cities2 = ["Ahmedabad", "Pune", "Kolkata", "Jaipur", "Surat"];

  const Item = ({ city }) => (
    <div className="flex items-center gap-8 md:gap-12">
      <span className="text-white/90">{city}.</span>

      <span className="bg-gradient-to-r from-[#C6A75E] to-[#E7C873] bg-clip-text text-transparent">
        Zevolutionalised.
      </span>

      <span className="text-white/20 text-xl md:text-2xl">◆</span>
    </div>
  );

  const ItemLight = ({ city }) => (
    <div className="flex items-center gap-6 md:gap-10">
      <span className="text-white/40">{city}.</span>

      <span className="text-[#C6A75E]/50">Zevolutionalised.</span>

      <span className="text-white/10 text-lg">◆</span>
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden bg-black py-20 border-y border-white/10">

      {/* Edge fade */}
      <div className="absolute left-0 top-0 h-full w-28 bg-gradient-to-r from-black to-transparent z-10" />
      <div className="absolute right-0 top-0 h-full w-28 bg-gradient-to-l from-black to-transparent z-10" />

      {/* ROW 1 */}
      <div className="overflow-hidden whitespace-nowrap mb-12">
        <div
          ref={row1Ref}
          className="flex gap-16 md:gap-24 text-4xl md:text-6xl lg:text-7xl font-extralight tracking-[0.08em]"
        >
          {[...cities1, ...cities1, ...cities1].map((city, i) => (
            <Item key={i} city={city} />
          ))}
        </div>
      </div>

      {/* ROW 2 */}
      <div className="overflow-hidden whitespace-nowrap">
        <div
          ref={row2Ref}
          className="flex gap-14 md:gap-20 text-2xl md:text-4xl lg:text-5xl font-extralight tracking-[0.08em]"
        >
          {[...cities2, ...cities2, ...cities2].map((city, i) => (
            <ItemLight key={i} city={city} />
          ))}
        </div>
      </div>

    </section>
  );
};

export default CitiesMarquee;