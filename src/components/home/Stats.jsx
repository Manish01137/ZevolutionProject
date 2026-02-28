import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const statsData = [
  {
    number: 500,
    suffix: "+",
    label: "Projects Completed",
  },
  {
    number: 15,
    suffix: "+",
    label: "Cities Transformed",
  },
  {
    number: 5,
    suffix: "",
    label: "Premium Brands",
  },
];

const Counter = ({ value, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);

    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        start = value;
        clearInterval(counter);
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(counter);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const Stats = () => {
  return (
    <section className="relative bg-black py-28 px-6 md:px-12 overflow-hidden">

      {/* Subtle Grid Background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:60px_60px]" />

      <div className="relative max-w-7xl mx-auto text-center">

        {/* Heading */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-[#C6A75E] tracking-[0.35em] text-sm uppercase mb-6"
        >
          Our Impact
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extralight text-white mb-20"
        >
          Numbers That Define Us
        </motion.h2>

        {/* Stats Grid */}
        <div className="grid md:grid-cols-3 gap-16">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center"
            >
              {/* Number */}
              <h3 className="text-6xl md:text-7xl font-extralight text-white">
                <Counter value={stat.number} suffix={stat.suffix} />
              </h3>

              {/* Gold underline */}
              <div className="w-12 h-[2px] bg-[#C6A75E] my-6" />

              {/* Label */}
              <p className="text-white/60 tracking-[0.2em] uppercase text-sm">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;