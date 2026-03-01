const principles = [
    {
      title: "Transformation",
      desc: "We don’t just supply materials — we transform vision into architectural reality.",
    },
    {
      title: "Creation",
      desc: "Every project is an opportunity to create something that didn’t exist before.",
    },
    {
      title: "Excellence",
      desc: "Uncompromising quality in every texture, finish, and installation detail.",
    },
    {
      title: "Innovation",
      desc: "Pushing boundaries with materials and techniques that define the future.",
    },
  ];
  
  const Principles = () => {
    return (
      <section className="relative bg-black text-white py-20 md:py-32 overflow-hidden">
  
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
  
          {/* Top Label */}
          <p className="tracking-[8px] text-xs md:text-sm text-[#C8A75B] uppercase font-light mb-6">
            Our Principles
          </p>
  
          {/* Heading */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-16 leading-tight">
            The Foundations of Excellence
          </h2>
  
          {/* Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
  
            {principles.map((item, index) => (
              <div
                key={index}
                className="group relative p-8 md:p-10 bg-white/5 backdrop-blur-sm border border-white/10 
                transition-all duration-500 ease-out
                hover:-translate-y-3 hover:border-[#C8A75B]/60 hover:bg-white/10"
              >
  
                {/* Animated Top Border */}
                <div className="absolute top-0 left-0 h-[2px] w-0 bg-[#C8A75B] transition-all duration-500 group-hover:w-full"></div>
  
                {/* Title */}
                <h3 className="text-lg md:text-xl font-light mb-4 text-[#C8A75B] tracking-wide">
                  {item.title}
                </h3>
  
                {/* Description */}
                <p className="text-gray-400 text-sm md:text-base leading-relaxed font-light">
                  {item.desc}
                </p>
  
              </div>
            ))}
  
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Principles;