const steps = [
  {
    number: "01",
    title: "Understand",
    desc: "We begin by deeply understanding your project requirements, architectural vision, and the precise performance demands of your environment.",
  },
  {
    number: "02",
    title: "Curate",
    desc: "Our specialists curate a tailored material selection from across our brand ecosystem, matching aesthetics, performance, and budget with precision.",
  },
  {
    number: "03",
    title: "Sample & Refine",
    desc: "We facilitate material sampling and on-site trials, refining the selection until it perfectly aligns with the architect's and client's expectations.",
  },
  {
    number: "04",
    title: "Deliver & Install",
    desc: "From precision manufacturing to expert installation, we manage every step to ensure flawless execution and lasting results.",
  },
];

const Approach = () => {
  return (
    <section className="relative bg-[#0a0a0a] text-white py-20 md:py-32 overflow-hidden">

      {/* Subtle gold line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#C8A75B]/60 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">

        {/* Header */}
        <div className="text-center mb-20">
          <p className="tracking-[8px] text-xs md:text-sm text-[#C8A75B] uppercase font-light mb-6">
            How We Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Our Approach
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
          {steps.map((step) => (
            <div
              key={step.number}
              className="group relative border border-white/10 p-8 hover:border-[#C8A75B]/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#C8A75B] transition-all duration-500 group-hover:w-full" />
              <span className="text-5xl font-extralight text-[#C8A75B]/20 block mb-4">
                {step.number}
              </span>
              <h3 className="text-xl font-light text-[#C8A75B] mb-3 tracking-wide">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed font-light">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Approach;
