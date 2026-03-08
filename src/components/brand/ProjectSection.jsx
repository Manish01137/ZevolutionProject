import { brandContent } from "../../data/brandContent";

const ProjectSection = ({ brand }) => {

  // normalize slug
  const normalizedBrand = brand?.replace("-", "");

  const products = brandContent[normalizedBrand] || [];

  if (!products.length) return null;

  return (
    <section className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* GRID */}
        <div className="grid md:grid-cols-3 gap-10">

          {products.map((item) => (
            <div
              key={item.id}
              className="bg-[#0e0e0e] border border-[#1e1e1e] rounded-lg overflow-hidden hover:border-[#c9a45c] transition"
            >

              {/* IMAGE */}
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-56 object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">

                <h3 className="text-white text-xl font-medium">
                  {item.name}
                </h3>

                <p className="text-gray-400 text-sm mt-3">
                  {item.description}
                </p>

                {/* VARIANTS */}
                <div className="mt-6 space-y-2">
                  {item.variants.map((variant, i) => (
                    <div
                      key={i}
                      className="flex justify-between border-b border-[#222] pb-2 text-gray-300 text-sm"
                    >
                      <span>{variant}</span>
                      <span className="text-[#c9a45c]">›</span>
                    </div>
                  ))}
                </div>

                {/* BUTTON */}
                <button className="mt-6 w-full border border-[#c9a45c] text-[#c9a45c] py-2 hover:bg-[#c9a45c] hover:text-black transition">
                  Request Sample
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ProjectSection;