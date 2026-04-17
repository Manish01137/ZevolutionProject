import { useParams, Link } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { slugify } from "../utils/slug";
import { productsData } from "../data/productsData";

const BRAND_LABELS = {
  "crest-stone": "Crest Stone",
  zerra: "Zerra",
};

const SITE_URL = "https://lawngreen-dove-410612.hostingersite.com";

const findProduct = (brandSlug, productSlug) => {
  const brand = productsData[brandSlug];
  if (!brand) return null;
  return brand.products.find(
    (p) => (p.slug || slugify(p.name)) === productSlug
  );
};

const ProductDetail = () => {
  const { brandSlug, productSlug } = useParams();
  const product = findProduct(brandSlug, productSlug);
  const productUrl = `${SITE_URL}/brand/${brandSlug}/product/${productSlug}`;

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 text-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-light mb-4">Product not found</h1>
            <Link to="/brands" className="text-[#C8A75B] hover:underline">
              Back to brands
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-white pt-32 pb-20">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">

          {/* Breadcrumb */}
          <div className="text-xs tracking-[0.3em] text-white/50 uppercase mb-8">
            <Link to="/brands" className="hover:text-[#C8A75B]">Brands</Link>
            <span className="mx-2">/</span>
            <Link to={`/brand/${brandSlug}`} className="hover:text-[#C8A75B]">
              {BRAND_LABELS[brandSlug]}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{product.name}</span>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">

            {/* Image */}
            <div className="aspect-square overflow-hidden bg-white/5">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Info + QR */}
            <div>
              <p className="text-[#C8A75B] text-xs tracking-[0.35em] uppercase mb-4">
                {BRAND_LABELS[brandSlug]}
                {product.category ? ` · ${product.category}` : ""}
              </p>

              <h1 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
                {product.name}
              </h1>

              {product.description && (
                <p className="text-white/70 text-sm md:text-base font-light leading-relaxed mb-8">
                  {product.description}
                </p>
              )}

              {/* Variants */}
              {product.variants && product.variants.length > 0 && (
                <div className="mb-8">
                  <p className="text-xs tracking-[0.3em] uppercase text-white/50 mb-4">
                    Available finishes
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {product.variants.map((v) => (
                      <div key={v.name} className="text-center">
                        <div className="aspect-square overflow-hidden mb-2 bg-white/5">
                          <img
                            src={v.image}
                            alt={v.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <p className="text-white/70 text-xs font-light">
                          {v.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* QR code block */}
              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-xs tracking-[0.3em] uppercase text-[#C8A75B] mb-4">
                  Scan to open on mobile
                </p>

                <div className="inline-block bg-white p-4 rounded-sm">
                  <QRCodeSVG
                    value={productUrl}
                    size={160}
                    level="M"
                    includeMargin={false}
                  />
                </div>

                <p className="text-white/40 text-xs mt-4 break-all max-w-sm">
                  {productUrl}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetail;
