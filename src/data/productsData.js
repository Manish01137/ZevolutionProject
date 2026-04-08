// ── Zerra · Sandstone ─────────────────────────────────────────────────────────
import sandstoneAgra from "../assets/images/zerra/Sandstone/AgraRedSandStone.jpg";
import sandstoneOxford from "../assets/images/zerra/Sandstone/OXFORDYELLOWSandstone.jpg";
import sandstoneRainbow from "../assets/images/zerra/Sandstone/raibow1Sandstone.jpg";

// ── Zerra · Marble ────────────────────────────────────────────────────────────
import marbleAtlantic from "../assets/images/zerra/Marble/AtlanticWhitemarble.jpg";
import marbleGrigio from "../assets/images/zerra/Marble/GrigioCliffmarble.JPG";
import marbleArctic from "../assets/images/zerra/Marble/articstromMarble.jpg";

// ── Zerra · Limestone ─────────────────────────────────────────────────────────
import limestoneAqua from "../assets/images/zerra/Limestone/AquaBlanco.jpg";
import limestoneIce from "../assets/images/zerra/Limestone/IcePearlLimestone.jpg";
import limestoneBrown from "../assets/images/zerra/Limestone/brownpeacockLimestone.jpg";

// ── Zerra · Concrete ──────────────────────────────────────────────────────────
import concreteWhite from "../assets/images/zerra/Concrete/WhiteConcrete.jpg";
import concreteMedium from "../assets/images/zerra/Concrete/MideumGreyconcrete.JPG";
import concreteDark from "../assets/images/zerra/Concrete/DarkGreyConcrete.JPG";

// ── Zerra · Slate & Quartzite ─────────────────────────────────────────────────
import slateSilver from "../assets/images/zerra/slate&Quartzite/SilverShineSlate.jpg";
import slateTerra from "../assets/images/zerra/slate&Quartzite/TerraredSlate.JPG";
import slateZeera from "../assets/images/zerra/slate&Quartzite/ZeeraGreen.SlateJPG.JPG";

// ── Crestone ──────────────────────────────────────────────────────────────────
import { crestoneBrandContent } from "./crestoneData";

export const productsData = {
  "crest-stone": {
    hero: {
      title: "FCC Stone Cladding Systems",
      description:
        "94 premium products across 5 curated collections — Stone Textures, Marble & Sandstone, Rammed Earth, FCC Architectural Boards, and Premium Stone.",
      image:
        "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop",
    },

    intro: {
      title: "Five Collections. Limitless Architecture.",
      description:
        "Crest Stone FCC Systems span five distinct product families — from hand-textured stone claddings and authentic marble finishes to rammed earth boards, architectural FCC panels, and premium stone collections. Every surface is precision-engineered to deliver decades of performance without compromise.",
    },

    products: crestoneBrandContent.map((p) => ({
      name: p.name,
      description: p.description,
      sizes: "Custom sizing available · Standard 600×300mm to 1200×600mm",
      tags: ["Exterior", "Interior", "FCC System"],
      image: p.image,
      variants: p.variants,
    })),
  },

  zerra: {
    hero: {
      title: "HandPeeled Stone Veneers",
      description:
        "Authentic natural stone surfaces crafted with 90% less structural weight — where organic beauty meets engineered performance.",
      image: sandstoneAgra,
    },

    intro: {
      title: "Five Stone Families. One Collection.",
      description:
        "Zerra HandPeeled Stones span five curated stone families — Sandstone, Marble, Limestone, Concrete, and Slate & Quartzite — each hand-finished to preserve authentic texture, colour, and depth. Designed for luxury homes, feature walls, hospitality, and landscape architecture.",
    },

    products: [
      {
        name: "Sandstone",
        description:
          "Warm-toned hand-peeled sandstone veneers with rich natural surface variation, sourced from India's finest quarries.",
        sizes: "Free-form pieces · 30–60cm lengths",
        tags: ["Exterior", "Interior", "Natural"],
        image: sandstoneAgra,
        variants: [
          { name: "Agra Red", image: sandstoneAgra },
          { name: "Oxford Yellow", image: sandstoneOxford },
          { name: "Rainbow", image: sandstoneRainbow },
        ],
      },
      {
        name: "Marble",
        description:
          "Authentic marble veneers hand-finished to capture the depth and luminescence of quarried stone at a fraction of the structural weight.",
        sizes: "Free-form pieces · 25–55cm lengths",
        tags: ["Interior", "Feature Wall", "Luxury"],
        image: marbleAtlantic,
        variants: [
          { name: "Atlantic White", image: marbleAtlantic },
          { name: "Grigio Cliff", image: marbleGrigio },
          { name: "Arctic Storm", image: marbleArctic },
        ],
      },
      {
        name: "Limestone",
        description:
          "Organic limestone surfaces with refined texture and subtle natural variation, ideal for luxury interiors and light-toned exterior facades.",
        sizes: "Free-form pieces · 25–60cm lengths",
        tags: ["Interior", "Exterior", "Luxury"],
        image: limestoneAqua,
        variants: [
          { name: "Aqua Blanco", image: limestoneAqua },
          { name: "Ice Pearl", image: limestoneIce },
          { name: "Brown Peacock", image: limestoneBrown },
        ],
      },
      {
        name: "Concrete",
        description:
          "Industrial-inspired concrete stone veneers with bold, contemporary character — engineered for high-impact facades and feature wall applications.",
        sizes: "Free-form pieces · 20–50cm lengths",
        tags: ["Exterior", "Contemporary", "Commercial"],
        image: concreteMedium,
        variants: [
          { name: "White Concrete", image: concreteWhite },
          { name: "Medium Grey", image: concreteMedium },
          { name: "Dark Grey", image: concreteDark },
        ],
      },
      {
        name: "Slate & Quartzite",
        description:
          "Dramatic slate and quartzite veneers with rich mineral tones and layered texture — engineered for architecturally bold exterior and interior installations.",
        sizes: "Free-form pieces · 20–50cm lengths",
        tags: ["Exterior", "Dramatic", "Premium"],
        image: slateSilver,
        variants: [
          { name: "Silver Shine", image: slateSilver },
          { name: "Terra Red", image: slateTerra },
          { name: "Zeera Green", image: slateZeera },
        ],
      },
    ],
  },

  formiq: {
    hero: {
      title: "Premium Flooring Systems",
      description:
        "Engineered flooring designed for luxury interiors and high-performance commercial environments — where every step matters.",
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
        description:
          "Large-format premium oak flooring with a satin finish, engineered for dimensionally stable performance in luxury interiors.",
        sizes: "2200×220mm · 2400×240mm",
        tags: ["Residential", "Underfloor Heating Safe", "Premium"],
        image:
          "https://images.unsplash.com/photo-1600210491892-03d54c0aaf87?q=80&w=1600&auto=format&fit=crop",
      },
      {
        name: "TerraWood Classic Brown",
        description:
          "Warm brown engineered wood flooring with authentic grain detail, perfect for living spaces and boutique hospitality.",
        sizes: "1800×180mm · 2200×220mm",
        tags: ["Residential", "Hospitality", "Acoustic Certified"],
        image:
          "https://images.unsplash.com/photo-1600566752355-35792bedcfea?q=80&w=1600&auto=format&fit=crop",
      },
      {
        name: "Smoke Grey Laminate",
        description:
          "Sophisticated grey-toned laminate flooring with a brushed finish, ideal for contemporary commercial and office environments.",
        sizes: "1200×198mm · 1800×218mm",
        tags: ["Commercial", "High Traffic", "Low VOC"],
        image:
          "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=1600&auto=format&fit=crop",
      },
      {
        name: "Linea Stone-Effect Floor",
        description:
          "Stone-effect porcelain-finish large format flooring that delivers the prestige of natural stone with engineered durability.",
        sizes: "800×800mm · 1200×600mm",
        tags: ["Commercial", "Healthcare", "Wet Area Safe"],
        image:
          "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?q=80&w=1600&auto=format&fit=crop",
      },
    ],
  },
};