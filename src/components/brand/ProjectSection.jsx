import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { productsData } from "../../data/productsData";

const PAGE_SIZE = 12;

const ProjectSection = ({ brand }) => {
  const brandData = productsData[brand];
  const products = brandData?.products || [];

  const categories = useMemo(() => {
    const set = new Set();
    products.forEach((p) => p.category && set.add(p.category));
    return ["All", ...Array.from(set)];
  }, [products]);

  const [activeCat, setActiveCat] = useState("All");
  const [page, setPage] = useState(1);

  const filtered = useMemo(() => {
    if (activeCat === "All") return products;
    return products.filter((p) => p.category === activeCat);
  }, [products, activeCat]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const handleCatChange = (cat) => {
    setActiveCat(cat);
    setPage(1);
  };

  if (!products.length) return null;

  return (
    <section className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-wide text-white">
            Explore{" "}
            <span className="text-[#c9a45c] font-light">Product Range</span>
          </h2>

          <p className="mt-5 text-[#c9a45c]/80 text-[11px] md:text-xs tracking-[0.35em] uppercase font-light">
            {products.length} Products across {categories.length - 1} Collections
          </p>

          <div className="w-16 h-[1px] bg-[#c9a45c]/70 mx-auto mt-6" />
        </div>

        {categories.length > 2 && (
          <div className="mb-12 overflow-x-auto">
            <div className="flex gap-2 min-w-max mx-auto justify-center flex-wrap">
              {categories.map((cat) => {
                const count =
                  cat === "All"
                    ? products.length
                    : products.filter((p) => p.category === cat).length;
                const isActive = activeCat === cat;
                return (
                  <button
                    key={cat}
                    onClick={() => handleCatChange(cat)}
                    className={`px-5 py-2 text-xs tracking-[0.2em] uppercase font-light border transition-all duration-300 rounded-sm ${
                      isActive
                        ? "border-[#c9a45c] bg-[#c9a45c] text-black"
                        : "border-[#2a2a2a] text-gray-400 hover:border-[#c9a45c]/60 hover:text-[#c9a45c]"
                    }`}
                  >
                    {cat} <span className="ml-2 opacity-60">({count})</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paged.map((item) => (
            <ProductCard key={item.slug} item={item} brand={brand} />
          ))}
        </div>

        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-2 flex-wrap">
            <button
              onClick={() => {
                setPage((p) => Math.max(1, p - 1));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={page === 1}
              className="px-4 py-2 text-xs tracking-widest uppercase border border-[#2a2a2a] text-gray-500 hover:border-[#c9a45c] hover:text-[#c9a45c] transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => {
              const isActive = num === page;
              const show =
                num === 1 || num === totalPages || Math.abs(num - page) <= 2;
              const showDotsBefore = num === page - 3 && page > 4;
              const showDotsAfter = num === page + 3 && page < totalPages - 3;

              if (showDotsBefore || showDotsAfter) {
                return (
                  <span key={`dots-${num}`} className="text-gray-600 px-1">
                    …
                  </span>
                );
              }
              if (!show) return null;

              return (
                <button
                  key={num}
                  onClick={() => {
                    setPage(num);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className={`w-9 h-9 text-xs border transition-all duration-200 ${
                    isActive
                      ? "border-[#c9a45c] bg-[#c9a45c] text-black font-medium"
                      : "border-[#2a2a2a] text-gray-400 hover:border-[#c9a45c]/60 hover:text-[#c9a45c]"
                  }`}
                >
                  {num}
                </button>
              );
            })}

            <button
              onClick={() => {
                setPage((p) => Math.min(totalPages, p + 1));
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              disabled={page === totalPages}
              className="px-4 py-2 text-xs tracking-widest uppercase border border-[#2a2a2a] text-gray-500 hover:border-[#c9a45c] hover:text-[#c9a45c] transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        )}

        {totalPages > 1 && (
          <p className="text-center text-gray-600 text-[11px] tracking-widest uppercase mt-4">
            Showing {Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)}-
            {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length} products
          </p>
        )}
      </div>
    </section>
  );
};

const ProductCard = ({ item, brand }) => {
  const imageCount = item.gallery?.length || 1;

  return (
    <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden hover:border-[#c9a45c]/50 transition-all duration-300 flex flex-col group">

      <div className="relative overflow-hidden">
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          decoding="async"
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {imageCount > 1 && (
          <span className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm border border-[#c9a45c]/40 text-[#c9a45c] text-[10px] tracking-widest uppercase px-2 py-1">
            {imageCount} views
          </span>
        )}
      </div>

      <div className="p-6 flex flex-col flex-1">

        {item.category && (
          <p className="text-[10px] tracking-[0.25em] uppercase text-[#c9a45c]/70 mb-2">
            {item.category}
          </p>
        )}

        <h3 className="text-white text-lg font-light tracking-wide">
          {item.name}
        </h3>

        <p className="text-gray-500 text-sm mt-3 leading-relaxed line-clamp-2 flex-1">
          {item.description}
        </p>

        <Link
          to={`/brand/${brand}/product/${item.slug}`}
          className="mt-6 w-full border border-[#c9a45c]/40 text-[#c9a45c] py-2.5 text-xs tracking-[0.2em] uppercase text-center hover:bg-[#c9a45c] hover:text-black hover:border-[#c9a45c] transition-all duration-300 block"
        >
          View Product →
        </Link>
      </div>
    </div>
  );
};

export default ProjectSection;
