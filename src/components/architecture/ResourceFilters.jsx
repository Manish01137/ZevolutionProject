const categories = [
    "All",
    "Facade Systems",
    "Cladding Insights",
    "Flooring Performance",
    "Installation Guides",
    "Technical Docs",
  ];
  
  const ResourceFilters = ({ active, setActive }) => {
    return (
      <div className="flex flex-wrap justify-center gap-4 px-6 pb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`px-6 py-3 text-sm border rounded-md transition-all duration-300
            ${
              active === cat
                ? "bg-[#c9a45c] text-black border-[#c9a45c]"
                : "border-gray-700 text-gray-300 hover:border-[#c9a45c] hover:text-white"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    );
  };
  
  export default ResourceFilters;