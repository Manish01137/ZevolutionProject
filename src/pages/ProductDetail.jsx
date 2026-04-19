import { useParams, Link } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import { slugify } from "../utils/slug";
import { productsData } from "../data/productsData";

const BRAND_LABELS = {
  "crest-stone": "Crest Stone",
  zerra: "Zerra",
};

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
            <Link to={`/brand/${brandSlug}/products`} className="hover:text-[#C8A75B]">
              Products
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

            {/* Info */}
            <div>
              <p className="text-[#C8A75B] text-xs tracking-[0.35em] uppercase mb-4">
                {BRAND_LABELS[brandSlug]}
              </p>

              <h1 className="text-3xl md:text-5xl font-light mb-6 leading-tight">
                {product.name}
              </h1>

              {product.description && (
                <p className="text-white/70 text-sm md:text-base font-light leading-relaxed mb-8">
                  {product.description}
                </p>
              )}

              {product.sizes && (
                <p className="text-white/50 text-sm mb-6">
                  <span className="text-white/30 text-xs tracking-[0.3em] uppercase mr-3">Sizes</span>
                  {product.sizes}
                </p>
              )}

              {product.tags && product.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-8">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="border border-white/20 px-3 py-1 text-[11px] font-light tracking-wide text-white/60"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
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

              {/* Request sample CTA */}
              <Link to="/contact">
                <button className="w-full md:w-auto mt-4 border border-[#C8A75B] text-[#C8A75B] px-8 py-3 text-sm font-light tracking-widest hover:bg-[#C8A75B] hover:text-black transition-all duration-300">
                  Request Sample →
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ProductDetail;
