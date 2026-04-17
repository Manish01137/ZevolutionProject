import { QRCodeSVG } from "qrcode.react";
import { Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { slugify } from "../utils/slug";
import { productsData } from "../data/productsData";

const SITE_URL = "https://lawngreen-dove-410612.hostingersite.com";

const BRAND_LABELS = {
  "crest-stone": "Crest Stone",
  zerra: "Zerra",
};

const QRCodes = () => {
  const brands = Object.keys(productsData);

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="text-center mb-16 print:hidden">
            <p className="text-[#C8A75B] tracking-[0.35em] text-xs mb-4 uppercase">
              Product QR Codes
            </p>
            <h1 className="text-3xl md:text-5xl font-light mb-4">
              Scan to view any product
            </h1>
            <p className="text-white/60 text-sm max-w-xl mx-auto">
              Each QR code links directly to its product page. Right-click a QR to save as image, or use browser Print to export all as PDF.
            </p>
            <button
              onClick={() => window.print()}
              className="mt-6 px-6 py-3 border border-[#C8A75B] text-[#C8A75B] hover:bg-[#C8A75B] hover:text-black transition-colors text-xs tracking-widest uppercase"
            >
              Print all QR codes
            </button>
          </div>

          {/* Brand sections */}
          {brands.map((brandSlug) => (
            <div key={brandSlug} className="mb-20">
              <h2 className="text-2xl md:text-3xl font-light mb-8 border-b border-white/10 pb-4">
                {BRAND_LABELS[brandSlug] || brandSlug}
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                {productsData[brandSlug].products.map((product) => {
                  const productSlug = product.slug || slugify(product.name);
                  const url = `${SITE_URL}/brand/${brandSlug}/product/${productSlug}`;

                  return (
                    <div
                      key={productSlug}
                      className="bg-white/5 p-4 flex flex-col items-center text-center break-inside-avoid"
                    >
                      <div className="bg-white p-3 mb-3">
                        <QRCodeSVG value={url} size={130} level="M" />
                      </div>
                      <p className="text-white text-xs font-light mb-1 leading-tight">
                        {product.name}
                      </p>
                      <Link
                        to={`/brand/${brandSlug}/product/${productSlug}`}
                        className="text-[#C8A75B] text-[10px] hover:underline print:hidden"
                      >
                        Open page
                      </Link>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="print:hidden">
        <Footer />
      </div>
    </>
  );
};

export default QRCodes;
