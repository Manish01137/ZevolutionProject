// src/data/projectsData.js
// Images are imported via Vite so they resolve correctly in both dev & build.
// NO per-project videos exist — video field is removed from all entries.
// Mumbai only has .ARW raw files (browser cannot display) — using Unsplash fallback.
// chhavi-ey-hospital folder has only 5 images (1-5.JPG, no hero).
// villa-jaipur/3.jpg is lowercase, all others are .JPG.

// ── Chhavi Eye Hospital ──────────────────────────────────────────────────────
import chhavi1 from "../assets/images/projects/chhavi-ey-hospital/1.JPG";
import chhavi2 from "../assets/images/projects/chhavi-ey-hospital/2.JPG";
import chhavi3 from "../assets/images/projects/chhavi-ey-hospital/3.JPG";
import chhavi4 from "../assets/images/projects/chhavi-ey-hospital/4.JPG";
import chhavi5 from "../assets/images/projects/chhavi-ey-hospital/5.JPG";

// ── Kuchaiya ─────────────────────────────────────────────────────────────────
import kuchaiya1 from "../assets/images/projects/kuchaiya/1.JPG";
import kuchaiya2 from "../assets/images/projects/kuchaiya/2.JPG";
import kuchaiya3 from "../assets/images/projects/kuchaiya/3.JPG";
import kuchaiya4 from "../assets/images/projects/kuchaiya/4.JPG";
import kuchaiya5 from "../assets/images/projects/kuchaiya/5.JPG";
import kuchaiya6 from "../assets/images/projects/kuchaiya/6.JPG";

// ── Marcos a Muscles ─────────────────────────────────────────────────────────
import marcos1 from "../assets/images/projects/marcos-a-muscles/1.JPG";
import marcos2 from "../assets/images/projects/marcos-a-muscles/2.JPG";
import marcos3 from "../assets/images/projects/marcos-a-muscles/3.JPG";
import marcos4 from "../assets/images/projects/marcos-a-muscles/4.JPG";
import marcos6 from "../assets/images/projects/marcos-a-muscles/6.JPG";
import marcos7 from "../assets/images/projects/marcos-a-muscles/7.JPG";

// ── Rajput Jewellers ─────────────────────────────────────────────────────────
import rajput1 from "../assets/images/projects/rajput-jewellers/1.JPG";
import rajput2 from "../assets/images/projects/rajput-jewellers/2.JPG";
import rajput3 from "../assets/images/projects/rajput-jewellers/3.JPG";
import rajput4 from "../assets/images/projects/rajput-jewellers/4.JPG";
import rajput5 from "../assets/images/projects/rajput-jewellers/5.JPG";
import rajput6 from "../assets/images/projects/rajput-jewellers/6.JPG";

// ── Residency ────────────────────────────────────────────────────────────────
import residency1 from "../assets/images/projects/residency/1.JPG";
import residency2 from "../assets/images/projects/residency/2.JPG";
import residency3 from "../assets/images/projects/residency/3.JPG";
import residency4 from "../assets/images/projects/residency/4.JPG";
import residency5 from "../assets/images/projects/residency/5.JPG";
import residency6 from "../assets/images/projects/residency/6.JPG";

// ── Sanjay Plastic (folder: sanjay-plastice — typo in folder name, kept as-is) ──
import sanjay1 from "../assets/images/projects/sanjay-plastice/1.JPG";
import sanjay2 from "../assets/images/projects/sanjay-plastice/2.JPG";
import sanjay3 from "../assets/images/projects/sanjay-plastice/3.JPG";
import sanjay4 from "../assets/images/projects/sanjay-plastice/4.JPG";
import sanjay5 from "../assets/images/projects/sanjay-plastice/5.JPG";
import sanjay6 from "../assets/images/projects/sanjay-plastice/6.JPG";

// ── Satya Prakash School ─────────────────────────────────────────────────────
import satya1 from "../assets/images/projects/satya-prakash-school/1.JPG";
import satya2 from "../assets/images/projects/satya-prakash-school/2.JPG";
import satya3 from "../assets/images/projects/satya-prakash-school/3.JPG";
import satya4 from "../assets/images/projects/satya-prakash-school/4.JPG";
import satya5 from "../assets/images/projects/satya-prakash-school/5.JPG";
import satya6 from "../assets/images/projects/satya-prakash-school/6.JPG";

// ── Villa Jaipur ─────────────────────────────────────────────────────────────
import villa1 from "../assets/images/projects/villa-jaipur/1.JPG";
import villa2 from "../assets/images/projects/villa-jaipur/2.JPG";
import villa3 from "../assets/images/projects/villa-jaipur/3.jpg"; // lowercase extension
import villa4 from "../assets/images/projects/villa-jaipur/4.JPG";
import villa5 from "../assets/images/projects/villa-jaipur/5.JPG";
import villa6 from "../assets/images/projects/villa-jaipur/6.JPG";

// Mumbai only has .ARW raw files — browser cannot display RAW.
// Using a curated Unsplash image as fallback for all Mumbai images.
const mumbaiPlaceholder =
  "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=2070&auto=format&fit=crop";

export const projectsData = [
  {
    slug: "chhavi-eye-hospital",
    title: "Chhavi Superspeciality Eye Hospital",
    heroImage: chhavi1,
    location: "Jabalpur",
    type: "Healthcare",
    year: "2026",
    category: "Healthcare",
    brand: "Creststone",
    product: "Dolomitic Marble Pillar",
    architect: "Ar. Selaish Nema",
    client: "Dr. Akhilesh Nema",

    challenge:
      "Developing a hygienic, premium healthcare environment with seamless interior finishes and a façade material resistant to moisture, staining, and structural stress.",

    solution:
      "Integration of Creststone Dolomitic Marble Pillar stone veneer, a lightweight, non-porous cladding system delivering natural marble aesthetics with enhanced durability and zero crack formation.",

    execution:
      "High-precision panel alignment with dry-fix methodology, ensuring smooth surface continuity, minimal joints, and optimized installation across both interior feature walls and external elevations.",

    outcome:
      "A clean, sophisticated healthcare space with a luxurious stone finish is maintenance-efficient, weather-resistant, and aligned with clinical and aesthetic performance standards.",

    testimonial:
      "Zevolution understood the unique demands of a healthcare environment. The finish quality and professionalism were outstanding.",

    gallery: [chhavi1, chhavi2, chhavi3, chhavi4, chhavi5],
  },

  {
    slug: "kuchaiya",
    title: "Kucheya Jewellers",
    heroImage: kuchaiya1,
    location: "Jabalpur",
    type: "Retail",
    year: "2025",
    category: "Commercial",
    brand: "Creststone",
    product: "Travertine Yellow",
    architect: "Ar. Sidarth Gokhle",
    client: "Salil Kuchaya",

    challenge:
      "Designing a high-end retail façade with curved architectural elements requiring material flexibility, seamless finish, and a premium stone aesthetic without risk of cracking.",

    solution:
      "Use of Creststone Travertine Yellow stone veneer — a lightweight, flexible cladding system enabling curvature adaptability with high durability and weather resistance.",

    execution:
      "Precision contour installation across arches and vertical planes with minimal joint visibility, ensuring uniform texture continuity and structural load optimization.",

    outcome:
      "A luxurious, monolithic façade with refined curvature detailing — crack-free, weatherproof, and visually aligned with the brand's premium identity.",

    testimonial:
      "The curved façade turned out exactly as envisioned. Zevolution's craftsmanship and material flexibility delivered a premium storefront identity.",

    gallery: [kuchaiya1, kuchaiya2, kuchaiya3, kuchaiya4, kuchaiya5, kuchaiya6],
  },

  {
    slug: "marcos-a-muscles",
    title: "Atmanamm Spa",
    heroImage: marcos1,
    location: "Jabalpur",
    type: "Wellness & Spa",
    year: "2026",
    category: "Commercial",
    brand: "Zerra",
    product: "Mint Sunrise / Vintage Shine",
    architect: "Not Given",
    client: "Vikram Raj Singh",

    challenge:
      "Designing fluid, organic interior elements with seamless curvature and spa-grade moisture resistance, while maintaining a high-end, calming aesthetic aligned with the brand identity.",

    solution:
      "Integration of Zerra stone veneer enabling thermo-flexible application over curved reception desks and bathtubs, delivering crack-resistant, water-resistant, and lightweight natural stone finishes.",

    execution:
      "Precision layering and contour-forming techniques allowed monolithic surface continuity across complex radii, concealed joints, and integrated lighting details without compromising structural efficiency.",

    outcome:
      "A sculptural, luxury spa environment with tactile natural textures, enhanced durability in wet zones, and a visually seamless design language driven by flexibility and refined craftsmanship.",

    testimonial:
      "Zevolution delivered exactly the calming, tactile environment we wanted. Every surface feels crafted, premium, and completely on-brand.",

    gallery: [marcos1, marcos2, marcos3, marcos4, marcos6, marcos7],
  },

  {
    slug: "mumbai-project",
    title: "Asteria Tower B, Courtyard Society",
    heroImage: mumbaiPlaceholder,
    location: "Mumbai",
    type: "Luxury Residential",
    year: "2026",
    category: "Residential",
    brand: "Zerra",
    product: "Sea White / Light Concrete",
    architect: "Ar. Rohit Sutaria",
    client: "Anonymous",

    challenge:
      "Achieving a refined luxury interior with natural stone aesthetics while integrating seamless curvature and modern minimal design without adding structural load.",

    solution:
      "Application of Zerra Sea White / Light Concrete stone veneer — a lightweight, flexible cladding system enabling fluid surface adaptation with natural texture and crack-resistant performance.",

    execution:
      "Precision dry installation with concealed joints and backlit integration, ensuring smooth transitions across curved panels and cabinetry surfaces.",

    outcome:
      "A sophisticated, nature-inspired modern space — visually striking, lightweight, and highly durable, delivering a seamless blend of luxury and organic texture.",

    testimonial:
      "Zevolution's material flexibility allowed us to execute the design exactly as envisioned — seamless, sculptural, and deeply premium.",

    gallery: [
      mumbaiPlaceholder,
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop",
    ],
  },

  {
    slug: "rajput-jewellers",
    title: "Rajput Brother's Jewellers",
    heroImage: rajput1,
    location: "Jabalpur",
    type: "Retail",
    year: "2025",
    category: "Commercial",
    brand: "Zerra",
    product: "Copper Series",
    architect: "Not Specified",
    client: "Harginder Singh Rajput",

    challenge:
      "Creating a bold, premium retail façade with natural stone aesthetics while achieving seamless curvature and long-term exterior durability against environmental exposure.",

    solution:
      "Use of Zerra Copper stone veneer — a flexible, lightweight cladding system enabling curved surface application with high resistance to moisture, cracking, and weathering.",

    execution:
      "Precision bending and adhesion on arched geometries with minimal joints, ensuring uniform texture continuity and integration with façade lighting elements.",

    outcome:
      "A striking, high-impact storefront with a luxurious natural finish — durable, maintenance-efficient, and visually distinctive in a modern retail context.",

    testimonial:
      "The attention to detail Zevolution brought to our store is extraordinary. Every surface reflects our brand's commitment to quality.",

    gallery: [rajput1, rajput2, rajput3, rajput4, rajput5, rajput6],
  },

  {
    slug: "residency",
    title: "Tamatu Residency",
    heroImage: residency1,
    location: "Jabalpur",
    type: "Luxury Residential",
    year: "2025",
    category: "Residential",
    brand: "Creststone",
    product: "Travertine White Gold",
    architect: "Ar. Sonal Choudhary",
    client: "Virat Jain",

    challenge:
      "Creating a façade that delivers a premium natural stone aesthetic while ensuring resistance to weathering, cracking, and long-term structural stress.",

    solution:
      "Application of Creststone Travertine White Gold stone veneer — a lightweight, flexible system replicating natural travertine with superior durability and zero water absorption issues.",

    execution:
      "Precision dry-fix installation with aligned horizontal banding, ensuring seamless joints, reduced load on structure, and enhanced façade detailing.",

    outcome:
      "A refined, contemporary elevation with a luxurious natural finish — highly durable, weather-resistant, and maintenance-efficient, elevating both visual appeal and performance.",

    testimonial:
      "Zevolution transformed our vision into reality. The finish quality across every surface is simply impeccable.",

    gallery: [residency1, residency2, residency3, residency4, residency5, residency6],
  },

  {
    slug: "sanjay-plastic",
    title: "Sanjay Plastic Residency",
    heroImage: sanjay1,
    location: "Jabalpur",
    type: "Luxury Residential",
    year: "2026",
    category: "Residential",
    brand: "Zerra",
    product: "Slate & Quartzite (Vintage Shine)",
    architect: "Ar. Sishir Shenghai",
    client: "Sanjay Jain",

    challenge:
      "Integrating natural stone aesthetics within a contemporary façade while addressing vertical elevations, recessed sections, and long-term resistance to weather-induced deterioration.",

    solution:
      "Application of Zerra Vintage Shine stone veneer — a flexible, ultra-thin slate & quartzite composite enabling seamless cladding across flat and recessed surfaces with superior durability and crack resistance.",

    execution:
      "Systematic panel alignment with controlled joint detailing, allowing adaptability across projections, niches, and ceiling integrations, ensuring uniform texture flow and structural compatibility.",

    outcome:
      "A refined, modern elevation enriched with natural textures — lightweight, weather-resilient, and visually distinctive, delivering a luxurious yet organic architectural identity.",

    testimonial:
      "The façade completely transformed the character of the building. Zevolution delivered a result that elevates the entire property.",

    gallery: [sanjay1, sanjay2, sanjay3, sanjay4, sanjay5, sanjay6],
  },

  {
    slug: "satya-prakash-public-school",
    title: "Satya Prakash Public School",
    heroImage: satya1,
    location: "Jabalpur",
    type: "Education",
    year: "2026",
    category: "Education",
    brand: "Zerra",
    product: "Slate & Quartzite (Indian Autumn)",
    architect: "Ar. Nirja Kalantre",
    client: "Not Given",

    challenge:
      "Creating a strong institutional identity through natural stone while maintaining design continuity across entrance focal points and large interior surfaces without adding structural load.",

    solution:
      "Deployment of Zerra Indian Autumn stone veneer — a flexible, lightweight slate & quartzite system enabling seamless application on vertical planes with high resistance to moisture, cracking, and surface degradation.",

    execution:
      "Precision panel mapping with vein continuity alignment, enabling smooth integration across columns, feature walls, and double-height interiors while ensuring substrate adaptability and clean edge detailing.",

    outcome:
      "A bold, premium institutional façade and interior language that reflects clarity, strength, and natural elegance — delivering a durable, maintenance-efficient, and visually commanding architectural statement.",

    testimonial:
      "The school has been completely revitalized. Students and parents have noticed the transformation — it's created real pride in our institution.",

    gallery: [satya1, satya2, satya3, satya4, satya5, satya6],
  },

  {
    slug: "villa-jaipur",
    title: "Residency Villa",
    heroImage: villa1,
    location: "Jaipur",
    type: "Luxury Villa",
    year: "2025",
    category: "Residential",
    brand: "Zerra",
    product: "Slate & Quartzite (Indian Autumn / Autumn Cream)",
    architect: "Not Given",
    client: "Not Given",

    challenge:
      "Achieving a seamless luxury façade across complex geometries — cantilever frames, curved cut-outs, and vertical planes — without adding dead load or risking weather-induced deterioration.",

    solution:
      "Application of Zerra stone veneer in Indian Autumn & Autumn Cream, offering high flexibility, low thickness, and superior resistance to moisture, UV exposure, and cracking compared to conventional stone cladding.",

    execution:
      "Advanced surface calibration with modular paneling, enabling precise wrapping over sharp edges, soffits, and circular voids while maintaining vein flow continuity and structural compatibility.",

    outcome:
      "A refined, contemporary villa envelope delivering a premium natural stone aesthetic with long-term durability, minimal maintenance, and a bold architectural identity driven by flexibility and precision.",

    testimonial:
      "Zevolution captured exactly the heritage-meets-luxury aesthetic we were dreaming of. The finish quality is outstanding.",

    gallery: [villa1, villa2, villa3, villa4, villa5, villa6],
  },
];