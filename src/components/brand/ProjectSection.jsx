import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { brandContent } from "../../data/brandContent";

// ── Crestone catalog category ranges (by product id) ───────────────────────
const CRESTONE_CATEGORIES = [
  { label: "All", min: 1, max: 999 },
  { label: "Stone Textures", min: 1, max: 11 },
  { label: "Marble & Stone", min: 12, max: 27 },
  { label: "Rammed Earth", min: 28, max: 32 },
  { label: "FCC Boards", min: 33, max: 61 },
  { label: "Premium Stone", min: 62, max: 999 },
];

const PAGE_SIZE = 12;

const ProjectSection = ({ brand }) => {
  const navigate = useNavigate();

  const normalizedBrand = brand?.replace(/-/g, "");
  const products = brandContent[normalizedBrand] || [];

  const isCreststone = normalizedBrand === "creststone";

  const [openVariant, setOpenVariant] = useState(null);
  const [activeCat, setActiveCat] = useState(0);   // category tab index
  const [page, setPage] = useState(1);              // current page

  // ── filtered products ──────────────────────────────────────────────────────
  const filtered = useMemo(() => {
    if (!isCreststone) return products;
    const cat = CRESTONE_CATEGORIES[activeCat];
    return products.filter((p) => p.id >= cat.min && p.id <= cat.max);
  }, [products, isCreststone, activeCat]);

  // ── paginated slice ────────────────────────────────────────────────────────
  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const paged = isCreststone
    ? filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)
    : filtered;

  // reset page when category changes
  const handleCatChange = (idx) => {
    setActiveCat(idx);
    setPage(1);
    setOpenVariant(null);
  };

  if (!products.length) return null;

  return (
    <section className="bg-black py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── SECTION HEADING ─────────────────────────────────────────────── */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extralight tracking-wide text-white">
            Explore{" "}
            <span className="text-[#c9a45c] font-light">Product Range</span>
          </h2>

          <p className="mt-5 text-[#c9a45c]/80 text-[11px] md:text-xs tracking-[0.35em] uppercase font-light">
            {isCreststone
              ? `${filtered.length} Products · ${products.length} Total across 5 Collections`
              : "Product Collections"}
          </p>

          <div className="w-16 h-[1px] bg-[#c9a45c]/70 mx-auto mt-6" />
        </div>

        {/* ── CATEGORY TABS (Crestone only) ──────────────────────────────── */}
        {isCreststone && (
          <div className="mb-12 overflow-x-auto">
            <div className="flex gap-2 min-w-max mx-auto justify-center flex-wrap">
              {CRESTONE_CATEGORIES.map((cat, idx) => (
                <button
                  key={cat.label}
                  onClick={() => handleCatChange(idx)}
                  className={`px-5 py-2 text-xs tracking-[0.2em] uppercase font-light border transition-all duration-300 rounded-sm ${
                    activeCat === idx
                      ? "border-[#c9a45c] bg-[#c9a45c] text-black"
                      : "border-[#2a2a2a] text-gray-400 hover:border-[#c9a45c]/60 hover:text-[#c9a45c]"
                  }`}
                >
                  {cat.label}
                  {idx > 0 && (
                    <span className="ml-2 opacity-60">
                      ({products.filter(p => p.id >= cat.min && p.id <= cat.max).length})
                    </span>
                  )}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* ── PRODUCT GRID ───────────────────────────────────────────────── */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {paged.map((item) => (
            <ProductCard
              key={item.id}
              item={item}
              openVariant={openVariant}
              setOpenVariant={setOpenVariant}
              onRequestSample={() => navigate("/contact")}
            />
          ))}
        </div>

        {/* ── PAGINATION (Crestone only) ─────────────────────────────────── */}
        {isCreststone && totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-2 flex-wrap">
            {/* Prev */}
            <button
              onClick={() => { setPage((p) => Math.max(1, p - 1)); window.scrollTo({ top: document.querySelector("section")?.offsetTop - 80, behavior: "smooth" }); }}
              disabled={page === 1}
              className="px-4 py-2 text-xs tracking-widest uppercase border border-[#2a2a2a] text-gray-500 hover:border-[#c9a45c] hover:text-[#c9a45c] transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← Prev
            </button>

            {/* Page numbers */}
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => {
              const isActive = num === page;
              const show =
                num === 1 ||
                num === totalPages ||
                Math.abs(num - page) <= 2;
              const showDotsBefore =
                num === page - 3 && page > 4;
              const showDotsAfter =
                num === page + 3 && page < totalPages - 3;

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
                  onClick={() => { setPage(num); window.scrollTo({ top: 0, behavior: "smooth" }); }}
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

            {/* Next */}
            <button
              onClick={() => { setPage((p) => Math.min(totalPages, p + 1)); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              disabled={page === totalPages}
              className="px-4 py-2 text-xs tracking-widest uppercase border border-[#2a2a2a] text-gray-500 hover:border-[#c9a45c] hover:text-[#c9a45c] transition disabled:opacity-30 disabled:cursor-not-allowed"
            >
              Next →
            </button>
          </div>
        )}

        {/* ── PAGE INFO ──────────────────────────────────────────────────── */}
        {isCreststone && totalPages > 1 && (
          <p className="text-center text-gray-600 text-[11px] tracking-widest uppercase mt-4">
            Showing{" "}
            {Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)}–
            {Math.min(page * PAGE_SIZE, filtered.length)} of {filtered.length} products
          </p>
        )}

      </div>
    </section>
  );
};

// ── ProductCard ─────────────────────────────────────────────────────────────

const ProductCard = ({ item, openVariant, setOpenVariant, onRequestSample }) => {
  const [heroImage, setHeroImage] = useState(item.image);
  const [activeVariantImg, setActiveVariantImg] = useState(null);

  return (
    <div className="bg-[#0a0a0a] border border-[#1a1a1a] rounded-lg overflow-hidden hover:border-[#c9a45c]/50 transition-all duration-300 flex flex-col group">

      {/* IMAGE */}
      <div className="relative overflow-hidden">
        <img
          src={activeVariantImg || heroImage}
          alt={item.name}
          className="w-full h-56 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* CONTENT */}
      <div className="p-6 flex flex-col flex-1">

        <h3 className="text-white text-lg font-light tracking-wide">
          {item.name}
        </h3>

        <p className="text-gray-500 text-sm mt-3 leading-relaxed line-clamp-2">
          {item.description}
        </p>

        {/* VARIANT COUNT BADGE */}
        {item.variants?.length > 0 && (
          <p className="mt-3 text-[10px] tracking-[0.25em] uppercase text-[#c9a45c]/60">
            {item.variants.length} Colour{item.variants.length > 1 ? "s" : ""} Available
          </p>
        )}

        {/* VARIANTS ACCORDION */}
        {item.variants?.length > 0 && (
          <div className="mt-4 flex-1">
            {item.variants.map((variant, i) => {
              const key = `${item.id}-${i}`;
              const isOpen = openVariant === key;

              return (
                <div key={i} className="border-b border-[#1e1e1e]">
                  <button
                    onClick={() => {
                      setOpenVariant(isOpen ? null : key);
                      if (!isOpen) setActiveVariantImg(variant.image);
                      else setActiveVariantImg(null);
                    }}
                    className="w-full flex justify-between items-center py-2.5 text-gray-400 text-xs hover:text-white transition group/btn"
                  >
                    <span className="tracking-wide">{variant.name}</span>
                    <span
                      className={`text-[#c9a45c] text-lg leading-none transition-transform duration-300 ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {/* DROPDOWN IMAGE */}
                  {isOpen && (
                    <div className="pb-4 animate-in fade-in slide-in-from-top-2 duration-200">
                      <img
                        src={variant.image}
                        alt={variant.name}
                        className="w-full rounded-md object-cover max-h-48"
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        )}

        {/* REQUEST SAMPLE BUTTON */}
        <button
          onClick={onRequestSample}
          className="mt-6 w-full border border-[#c9a45c]/40 text-[#c9a45c] py-2.5 text-xs tracking-[0.2em] uppercase hover:bg-[#c9a45c] hover:text-black hover:border-[#c9a45c] transition-all duration-300"
        >
          Request Sample
        </button>

      </div>
    </div>
  );
};

export default ProjectSection;