const steps = [
    { num: "01", title: "Design Consultation", desc: "Collaborative sessions to understand your vision." },
    { num: "02", title: "Material Recommendation", desc: "Guidance based on aesthetics and performance." },
    { num: "03", title: "Technical Specification Support", desc: "Detailed specifications and drawings." },
    { num: "04", title: "Execution Advisory", desc: "On-site quality assurance." },
    { num: "05", title: "Post-Installation Guidance", desc: "Ongoing support and care." },
  ];
  
  const Approach = () => {
    return (
      <section className="bg-black text-white py-24">
        <div className="container mx-auto px-6">
  
          <p className="tracking-[6px] text-sm text-[#C8A75B] mb-6 text-center">
            OUR APPROACH
          </p>
  
          <h2 className="text-4xl md:text-5xl font-light text-center mb-20">
            From Vision to Reality
          </h2>
  
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-8 items-start border-b border-gray-800 pb-8">
                <span className="text-[#C8A75B] text-3xl font-light">
                  {step.num}
                </span>
                <div>
                  <h3 className="text-xl mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Approach;