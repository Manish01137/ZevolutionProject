import { zerraProducts, crestoneProducts } from "./generatedProducts";
import sandstoneAgra from "../assets/images/zerra/Sandstone/AgraRedSandStone.jpg";

// ── Brand-level metadata ─────────────────────────────────────────────────────
// Product arrays come from generatedProducts.js (auto-built from filesystem).

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
        "Crest Stone FCC Systems span five distinct product families, from hand-textured stone claddings and authentic marble finishes to rammed earth boards, architectural FCC panels, and premium stone collections. Every surface is precision engineered to deliver decades of performance without compromise.",
    },

    instagram: "https://instagram.com/creststone",

    products: crestoneProducts.map((p) => ({
      name: p.name,
      slug: p.slug,
      category: p.category,
      description: `${p.name} is part of the ${p.category} collection. A premium Crest Stone finish engineered for high durability, crack resistance, and long-term architectural performance.`,
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

    products: zerraProducts.map((p) => ({
      name: p.name,
      slug: p.slug,
      category: p.category,
      description: `${p.name} is part of our ${p.category} family. Hand peeled natural stone veneer that captures authentic texture and depth while weighing 90% less than quarried stone.`,
      sizes: "Free form pieces · 25-60cm lengths",
      tags: ["Exterior", "Interior", "Natural"],
      image: p.image,
      gallery: p.gallery,
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
