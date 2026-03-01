const steps = [
    {
      num: "01",
      title: "Design Consultation",
      desc: "Collaborative sessions to understand vision, requirements, and project aspirations.",
    },
    {
      num: "02",
      title: "Material Recommendation",
      desc: "Expert guidance on material selection based on aesthetics, performance, and budget.",
    },
    {
      num: "03",
      title: "Technical Specification Support",
      desc: "Detailed specifications, drawings, and documentation for seamless integration.",
    },
    {
      num: "04",
      title: "Execution Advisory",
      desc: "On-site guidance and quality assurance throughout the installation process.",
    },
    {
      num: "05",
      title: "Post-Installation Guidance",
      desc: "Ongoing support for maintenance, care, and long-term material performance.",
    },
  ];
  
  const Approach = () => {
    return (
      <section className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
  
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
  
          {/* Top Label */}
          <p className="tracking-[8px] text-xs md:text-sm text-[#C8A75B] uppercase font-light text-center mb-6">
            Our Approach
          </p>
  
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-center mb-20 leading-tight">
            From Vision to Reality
          </h2>
  
          {/* Timeline */}
          <div className="relative">
  
            {/* Vertical Line (Desktop Only) */}
            <div className="hidden md:block absolute left-6 top-0 bottom-0 w-px bg-white/10"></div>
  
            <div className="space-y-16">
  
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="group relative md:pl-20 transition-all duration-500"
                >
  
                  {/* Step Number */}
                  <div className="absolute left-0 top-0 md:-left-2">
  
                    <span className="text-4xl md:text-5xl font-extralight text-[#C8A75B]/70 group-hover:text-[#C8A75B] transition duration-500">
                      {step.num}
                    </span>
  
                  </div>
  
                  {/* Content Box */}
                  <div className="border-b border-white/10 pb-8 md:pb-10
                                  transition-all duration-500
                                  group-hover:border-[#C8A75B]/40">
  
                    <h3 className="text-lg md:text-2xl font-light mb-3 tracking-wide transition duration-500 group-hover:text-[#C8A75B]">
                      {step.title}
                    </h3>
  
                    <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light max-w-2xl">
                      {step.desc}
                    </p>
  
                  </div>
  
                </div>
              ))}
  
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Approach;