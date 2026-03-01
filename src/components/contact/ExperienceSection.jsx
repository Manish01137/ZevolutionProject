const ExperienceSection = () => {
    return (
      <section className="bg-black text-white py-24">
  
        <div className="max-w-6xl mx-auto px-6 text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extralight mb-4">
            Experience Our Materials
          </h2>
          <p className="text-gray-400 font-extralight">
            Visit our design studio to see, touch, and experience our complete collection.
          </p>
        </div>
  
        <div
          className="h-[500px] bg-cover bg-center mx-auto max-w-6xl"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2070&auto=format&fit=crop')",
          }}
        />
  
      </section>
    );
  };
  
  export default ExperienceSection;