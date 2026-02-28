import { useParams } from "react-router-dom";

const brandData = {
  "crest-stone": {
    title: "Crest Stone",
    subtitle: "Fabricated Clay Claddings",
    description:
      "Monolithic textures. Dramatic facades. Crest Stone delivers fabricated clay systems engineered for bold architectural expression.",
  },
  zerra: {
    title: "Zerra",
    subtitle: "Handpeeled Stones",
    description:
      "Lightweight elegance with architectural precision. Zerra redefines contemporary stone experiences.",
  },
  formiq: {
    title: "Formiq",
    subtitle: "Flooring Systems",
    description:
      "Warmth. Depth. Natural luxury. Formiq flooring systems enhance both residential and commercial spaces.",
  },
  aerolith: {
    title: "Aerolith",
    subtitle: "Stone Flooring Systems",
    description:
      "Innovative lightweight stone systems designed for refined architectural interiors.",
  },
  zevocubes: {
    title: "ZevoCubes",
    subtitle: "Partition Systems",
    description:
      "Modern partition systems combining design flexibility with structural strength.",
  },
};

const BrandDetails = () => {
  const { slug } = useParams();
  const brand = brandData[slug];

  if (!brand) {
    return <div className="text-white p-20">Brand not found</div>;
  }

  return (
    <section className="bg-black text-white min-h-screen py-32 px-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-5xl font-extralight mb-6">
          {brand.title}
        </h1>
        <p className="text-gold tracking-wider mb-4">
          {brand.subtitle}
        </p>
        <p className="text-white/70 text-lg leading-relaxed">
          {brand.description}
        </p>
      </div>
    </section>
  );
};

export default BrandDetails;