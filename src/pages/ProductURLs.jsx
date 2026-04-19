import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { slugify } from "../utils/slug";
import { productsData } from "../data/productsData";

const BRAND_LABELS = {
  "crest-stone": "Crest Stone",
  zerra: "Zerra",
};

const buildProductList = (siteUrl) => {
  const list = [];
  for (const brandSlug of Object.keys(productsData)) {
    const brand = productsData[brandSlug];
    brand.products.forEach((p) => {
      const productSlug = p.slug || slugify(p.name);
      list.push({
        brand: BRAND_LABELS[brandSlug] || brandSlug,
        brandSlug,
        name: p.name,
        slug: productSlug,
        url: `${siteUrl}/brand/${brandSlug}/product/${productSlug}`,
      });
    });
  }
  return list;
};

const ProductURLs = () => {
  const siteUrl = typeof window !== "undefined" ? window.location.origin : "";
  const products = buildProductList(siteUrl);
  const [copiedId, setCopiedId] = useState(null);
  const [filter, setFilter] = useState("all");

  const filtered = filter === "all"
    ? products
    : products.filter((p) => p.brandSlug === filter);

  const copyToClipboard = async (text, id) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    } catch {
      // Fallback
      const el = document.createElement("textarea");
      el.value = text;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 1500);
    }
  };

  const copyAllURLs = () => {
    const allUrls = filtered.map((p) => `${p.name} - ${p.url}`).join("\n");
    copyToClipboard(allUrls, "all");
  };

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="mb-12">
            <p className="text-[#C8A75B] tracking-[0.35em] text-xs mb-4 uppercase">
              Admin · Product URLs
            </p>
            <h1 className="text-3xl md:text-5xl font-light mb-4">
              All product links
            </h1>
            <p className="text-white/60 text-sm max-w-2xl">
              Copy any URL below and paste it into any QR code generator (e.g. qr-code-generator.com, qrcode-monkey.com).
              When someone scans that QR, it'll open the specific product page.
            </p>
            <p className="text-white/40 text-xs mt-4">
              Total products: <span className="text-[#C8A75B]">{products.length}</span>
            </p>
          </div>

          {/* Filter buttons */}
          <div className="flex flex-wrap gap-3 mb-8">
            <button
              onClick={() => setFilter("all")}
              className={`px-4 py-2 text-xs tracking-widest uppercase border transition-colors ${
                filter === "all"
                  ? "border-[#C8A75B] bg-[#C8A75B] text-black"
                  : "border-white/20 text-white/60 hover:border-[#C8A75B] hover:text-[#C8A75B]"
              }`}
            >
              All ({products.length})
            </button>
            {Object.keys(productsData).map((brandSlug) => {
              const count = productsData[brandSlug].products.length;
              return (
                <button
                  key={brandSlug}
                  onClick={() => setFilter(brandSlug)}
                  className={`px-4 py-2 text-xs tracking-widest uppercase border transition-colors ${
                    filter === brandSlug
                      ? "border-[#C8A75B] bg-[#C8A75B] text-black"
                      : "border-white/20 text-white/60 hover:border-[#C8A75B] hover:text-[#C8A75B]"
                  }`}
                >
                  {BRAND_LABELS[brandSlug]} ({count})
                </button>
              );
            })}

            <button
              onClick={copyAllURLs}
              className="ml-auto px-4 py-2 text-xs tracking-widest uppercase border border-white/30 text-white/80 hover:bg-white hover:text-black transition-colors"
            >
              {copiedId === "all" ? "✓ Copied all" : "Copy all visible"}
            </button>
          </div>

          {/* Table */}
          <div className="bg-white/5 border border-white/10 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="bg-white/5 border-b border-white/10">
                <tr>
                  <th className="text-left px-4 py-3 font-light text-[#C8A75B] text-xs tracking-[0.2em] uppercase">
                    Brand
                  </th>
                  <th className="text-left px-4 py-3 font-light text-[#C8A75B] text-xs tracking-[0.2em] uppercase">
                    Product
                  </th>
                  <th className="text-left px-4 py-3 font-light text-[#C8A75B] text-xs tracking-[0.2em] uppercase">
                    URL
                  </th>
                  <th className="text-right px-4 py-3 font-light text-[#C8A75B] text-xs tracking-[0.2em] uppercase">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filtered.map((p) => (
                  <tr
                    key={`${p.brandSlug}-${p.slug}`}
                    className="border-b border-white/5 hover:bg-white/5 transition-colors"
                  >
                    <td className="px-4 py-3 text-white/60 text-xs whitespace-nowrap">
                      {p.brand}
                    </td>
                    <td className="px-4 py-3 text-white font-light whitespace-nowrap">
                      {p.name}
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={p.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/50 text-xs break-all hover:text-[#C8A75B]"
                      >
                        {p.url}
                      </a>
                    </td>
                    <td className="px-4 py-3 text-right whitespace-nowrap">
                      <button
                        onClick={() => copyToClipboard(p.url, `${p.brandSlug}-${p.slug}`)}
                        className="px-3 py-1 text-xs tracking-widest uppercase border border-white/20 text-white/60 hover:border-[#C8A75B] hover:text-[#C8A75B] transition-colors"
                      >
                        {copiedId === `${p.brandSlug}-${p.slug}` ? "✓ Copied" : "Copy"}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductURLs;
