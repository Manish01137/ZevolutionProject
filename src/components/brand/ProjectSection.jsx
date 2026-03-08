import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { brandContent } from "../../data/brandContent";

const ProjectSection = ({ brand }) => {

  const navigate = useNavigate();

  const normalizedBrand = brand?.replace("-", "");
  const products = brandContent[normalizedBrand] || [];

  const [openVariant, setOpenVariant] = useState(null);

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

              {/* PRODUCT IMAGE */}
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
                <div className="mt-6">

                  {item.variants.map((variant, i) => {

                    const key = `${item.id}-${i}`;
                    const isOpen = openVariant === key;

                    return (
                      <div key={i} className="border-b border-[#222]">

                        <button
                          onClick={() =>
                            setOpenVariant(isOpen ? null : key)
                          }
                          className="w-full flex justify-between py-3 text-gray-300 text-sm hover:text-white transition"
                        >
                          {variant.name}

                          <span className="text-[#c9a45c]">
                            {isOpen ? "–" : "›"}
                          </span>
                        </button>

                        {/* DROPDOWN IMAGE */}
                        {isOpen && (
                          <div className="pb-4">
                            <img
                              src={variant.image}
                              alt={variant.name}
                              className="w-full rounded-md"
                            />
                          </div>
                        )}

                      </div>
                    );
                  })}

                </div>

                {/* REQUEST SAMPLE BUTTON */}
                <button
                  onClick={() => navigate("/contact")}
                  className="mt-6 w-full border border-[#c9a45c] text-[#c9a45c] py-2 hover:bg-[#c9a45c] hover:text-black transition"
                >
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