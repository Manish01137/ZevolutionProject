import { zerraProducts, crestoneProducts } from "./generatedProducts";
import sandstoneAgra from "../assets/images/zerra/Sandstone/AgraRedSandStone.jpg";
import { slugify } from "../utils/slug";

// ── Group Zerra variants into 5 products by category ─────────────────────────
const ZERRA_DESCRIPTIONS = {
  Sandstone:
    "Warm toned HandPeeled™ sandstone veneers with rich natural surface variation, sourced from India's finest quarries. Ideal for heritage facades and contemporary residential exteriors.",
  Marble:
    "Authentic marble veneers hand finished to capture the depth and luminescence of quarried stone at a fraction of the structural weight. Designed for luxury interiors and feature walls.",
  Limestone:
    "Organic limestone surfaces with refined texture and subtle natural variation, ideal for luxury interiors and light toned exterior facades.",
  Concrete:
    "Industrial inspired concrete stone veneers with bold, contemporary character, engineered for high impact facades and feature wall applications.",
  "Slate & Quartzite":
    "Dramatic slate and quartzite veneers with rich mineral tones and layered texture, engineered for architecturally bold exterior and interior installations.",
};

const buildZerraGroupedProducts = () => {
  const map = new Map();
  for (const p of zerraProducts) {
    const key = p.category;
    if (!map.has(key)) {
      map.set(key, {
        name: key,
        slug: slugify(key),
        category: key,
        description: ZERRA_DESCRIPTIONS[key] || `${key} HandPeeled™ stone veneers.`,
        sizes: "Free form pieces · 25-60cm lengths",
        tags: ["HandPeeled™", "Exterior", "Interior"],
        cover: p.image,
        variants: [],
      });
    }
    const group = map.get(key);
    for (let i = 0; i < p.gallery.length; i++) {
      const variantName = p.gallery.length > 1 ? `${p.name} ${i + 1}` : p.name;
      group.variants.push({
        name: variantName,
        image: p.gallery[i],
      });
    }
  }

  const CATEGORY_ORDER = ["Sandstone", "Marble", "Limestone", "Concrete", "Slate & Quartzite"];
  return Array.from(map.values()).sort(
    (a, b) => CATEGORY_ORDER.indexOf(a.name) - CATEGORY_ORDER.indexOf(b.name)
  );
};

const zerraGrouped = buildZerraGroupedProducts();

export const productsData = {
  "crest-stone": {
    hero: {
      title: "FCC Stone Cladding Systems",
      description:
        "Premium stone cladding products across 5 curated collections: Stone Textures, Marble & Sandstone, Rammed Earth, FCC Architectural Boards, and Premium Stone.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    },

    intro: {
      title: "Five Collections. Limitless Architecture.",
      description:
        "Crest Stone FCC Systems span five distinct product families, from hand textured stone claddings and authentic marble finishes to rammed earth boards, architectural FCC panels, and premium stone collections. Every surface is precision engineered to deliver decades of performance without compromise.",
    },

    instagram: "https://instagram.com/creststone",

    products: crestoneProducts.map((p) => ({
      name: p.name,
      slug: p.slug,
      category: p.category,
      description: `${p.name} is part of the ${p.category} collection. A premium Crest Stone finish engineered for high durability, crack resistance, and long term architectural performance.`,
      sizes: "Custom sizing available · Standard 600×300mm to 1200×600mm",
      tags: ["Exterior", "Interior", "FCC System"],
      image: p.image,
      gallery: p.gallery,
    })),
  },

  zerra: {
    hero: {
      title: "HandPeeled™ Stone Veneers",
      description:
        "Authentic natural stone surfaces crafted with 90% less structural weight. Where organic beauty meets engineered performance.",
      image: sandstoneAgra,
    },

    intro: {
      title: "Five Stone Families. One Collection.",
      description:
        "Zerra HandPeeled™ Stones span five curated stone families: Sandstone, Marble, Limestone, Concrete, and Slate & Quartzite. Each is hand finished to preserve authentic texture, colour, and depth. Designed for luxury homes, feature walls, hospitality, and landscape architecture.",
    },

    instagram: "https://instagram.com/zerra_stoneveneers",

    products: zerraGrouped.map((p) => ({
      name: p.name,
      slug: p.slug,
      category: p.category,
      description: p.description,
      sizes: p.sizes,
      tags: p.tags,
      image: p.cover,
      gallery: p.variants.map((v) => v.image),
      variants: p.variants,
    })),
  },

  formiq: {
    hero: {
      title: "Premium Flooring Systems",
      description:
        "Engineered flooring designed for luxury interiors and high performance commercial environments where every step matters.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
    },

    intro: {
      title: "Floors That Perform & Inspire",
      description:
        "Formiq Flooring Systems merge acoustic comfort, thermal compatibility, and enduring visual appeal. Built for luxury homes, offices, retail, and hospitality spaces.",
    },

    products: [
      {
        name: "Oak Prime Wide Plank",
        slug: "oak-prime-wide-plank",
        description:
          "Large format premium oak flooring with a satin finish, engineered for dimensionally stable performance in luxury interiors.",
        sizes: "2200×220mm · 2400×240mm",
        tags: ["Residential", "Underfloor Heating Safe", "Premium"],
        image:
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1600&auto=format&fit=crop",
      },
      {
        name: "TerraWood Classic Brown",
        slug: "terrawood-classic-brown",
        description:
          "Warm brown engineered wood flooring with authentic grain detail, perfect for living spaces and boutique hospitality.",
        sizes: "1800×180mm · 2200×220mm",
        tags: ["Residential", "Hospitality", "Acoustic Certified"],
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop",
      },
      {
        name: "Smoke Grey Laminate",
        slug: "smoke-grey-laminate",
        description:
          "Sophisticated grey toned laminate flooring with a brushed finish, ideal for contemporary commercial and office environments.",
        sizes: "1200×198mm · 1800×218mm",
        tags: ["Commercial", "High Traffic", "Low VOC"],
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
      },
      {
        name: "Linea Stone Effect Floor",
        slug: "linea-stone-effect-floor",
        description:
          "Stone effect porcelain finish large format flooring that delivers the prestige of natural stone with engineered durability.",
        sizes: "800×800mm · 1200×600mm",
        tags: ["Commercial", "Healthcare", "Wet Area Safe"],
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },
};
