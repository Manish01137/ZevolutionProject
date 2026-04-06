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
    title: "Chhavi Eye Hospital",
    heroImage: chhavi1,
    location: "India",
    type: "Healthcare",
    year: "2024",
    category: "Healthcare",

    challenge:
      "Design and deliver a premium façade and interior surface solution for a modern eye hospital that conveys trust, hygiene, and clinical sophistication — while maintaining aesthetic warmth for patients.",

    solution:
      "Zevolution specified high-precision FCC wall panels and seamless flooring systems that meet healthcare-grade durability standards, delivering a clean, professional environment with minimal maintenance requirements.",

    execution:
      "Our team coordinated closely with the hospital's project consultants to ensure zero-disruption installation. All materials were selected for anti-bacterial properties and ease of sanitization.",

    outcome:
      "Chhavi Eye Hospital now features a world-class interior finish that builds patient confidence and reflects the institution's commitment to excellence in healthcare.",

    testimonial:
      "Zevolution understood the unique demands of a healthcare environment. The finish quality and professionalism were outstanding.",

    client: "Management — Chhavi Eye Hospital",

    gallery: [chhavi1, chhavi2, chhavi3, chhavi4, chhavi5],
  },

  {
    slug: "kuchaiya",
    title: "Kuchaiya",
    heroImage: kuchaiya1,
    location: "India",
    type: "Residential",
    year: "2024",
    category: "Residential",

    challenge:
      "Transform a traditional residential property with contemporary surface solutions that respect regional architectural character while elevating the overall finish quality.",

    solution:
      "Zevolution's HandPeeled Stone cladding and textured wall systems brought authentic natural aesthetics with modern durability, perfectly suited to the local climate and design sensibility.",

    execution:
      "Custom material selection and on-site consultation ensured seamless integration with the existing structure. Installation was completed with precision and minimal disruption to occupants.",

    outcome:
      "The Kuchaiya residence now stands as a refined example of how traditional homes can be transformed with premium surface materials.",

    testimonial:
      "The transformation was beyond what we imagined. Zevolution brought expertise and craftsmanship that truly elevated our home.",

    client: "Homeowner — Kuchaiya Residence",

    gallery: [kuchaiya1, kuchaiya2, kuchaiya3, kuchaiya4, kuchaiya5, kuchaiya6],
  },

  {
    slug: "marcos-a-muscles",
    title: "Marcos a Muscles",
    heroImage: marcos1,
    location: "India",
    type: "Fitness & Commercial",
    year: "2024",
    category: "Commercial",

    challenge:
      "Create a high-energy gym environment with surface solutions that withstand heavy usage, moisture, and mechanical stress — while projecting a bold, premium brand identity.",

    solution:
      "Zevolution deployed industrial-grade flooring and feature wall systems designed for high-impact environments. The material palette was chosen to reinforce the brand's strength-focused identity.",

    execution:
      "Fast-track installation was coordinated to meet the gym's launch timeline. Surface treatments were applied to ensure slip resistance, durability, and easy maintenance.",

    outcome:
      "Marcos a Muscles opened to strong client response, with the interior finish becoming a key differentiator in the competitive fitness market.",

    testimonial:
      "Our gym looks incredible. Zevolution delivered exactly the bold, premium look we were going for — on time and on budget.",

    client: "Owner — Marcos a Muscles",

    gallery: [marcos1, marcos2, marcos3, marcos4, marcos6, marcos7],
  },

  {
    slug: "mumbai-project",
    title: "Mumbai",
    heroImage: mumbaiPlaceholder,
    location: "Mumbai",
    type: "Commercial",
    year: "2024",
    category: "Commercial",

    challenge:
      "Deliver premium façade and surface solutions for a commercial project in Mumbai's competitive urban landscape, where coastal humidity and high foot traffic demand exceptional material performance.",

    solution:
      "Zevolution's FCC system provided a high-performance exterior finish engineered for Mumbai's coastal climate — combining visual impact with long-term resistance to humidity and salt exposure.",

    execution:
      "Precision fabrication and expert installation ensured tight tolerances and a flawless finish. The project was delivered in phases to align with the client's operational timeline.",

    outcome:
      "The Mumbai project stands as a benchmark commercial property, combining architectural prestige with Zevolution's signature material quality.",

    testimonial:
      "Working with Zevolution on our Mumbai project was seamless. Their understanding of coastal conditions and premium finishes is unmatched.",

    client: "Project Director — Mumbai",

    gallery: [
      mumbaiPlaceholder,
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e0745e?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2070&auto=format&fit=crop",
    ],
  },

  {
    slug: "rajput-jewellers",
    title: "Rajput Jewellers",
    heroImage: rajput1,
    location: "India",
    type: "Retail",
    year: "2024",
    category: "Commercial",

    challenge:
      "Design a luxury retail environment for a premium jewellery brand where surface materials must reflect opulence, trust, and timeless elegance — while maintaining practicality for a high-footfall retail space.",

    solution:
      "Zevolution curated a bespoke combination of polished stone finishes and FCC accent panels to create an environment of refined luxury, complementing the jewellery displays and brand identity.",

    execution:
      "Material selection was guided by the store's design consultants. Installation was executed with jeweller's precision — every joint, edge, and surface treated as a design detail.",

    outcome:
      "Rajput Jewellers now commands one of the most distinguished retail interiors in the region, with customers regularly commenting on the store's premium ambiance.",

    testimonial:
      "The attention to detail Zevolution brought to our store is extraordinary. Every surface reflects our brand's commitment to quality.",

    client: "Owner — Rajput Jewellers",

    gallery: [rajput1, rajput2, rajput3, rajput4, rajput5, rajput6],
  },

  {
    slug: "residency",
    title: "Residency",
    heroImage: residency1,
    location: "India",
    type: "Luxury Residential",
    year: "2024",
    category: "Residential",

    challenge:
      "Deliver a complete premium residential surface package — from exterior cladding to interior finishes — that meets the expectations of discerning homeowners seeking a distinguished living environment.",

    solution:
      "A curated selection of Zevolution's HandPeeled Stones and engineered flooring systems was specified across the property, creating cohesive luxury from entrance to interior.",

    execution:
      "A dedicated project team managed all phases from material sampling to final installation, ensuring every surface met the client's exacting standards.",

    outcome:
      "The Residency project delivers a living environment of exceptional quality — a home that speaks the language of refined taste and enduring craftsmanship.",

    testimonial:
      "Zevolution transformed our vision into reality. The finish quality across every surface is simply impeccable.",

    client: "Homeowner — Residency Project",

    gallery: [residency1, residency2, residency3, residency4, residency5, residency6],
  },

  {
    slug: "sanjay-plastic",
    title: "Sanjay Plastic",
    heroImage: sanjay1,
    location: "India",
    type: "Industrial & Commercial",
    year: "2024",
    category: "Commercial",

    challenge:
      "Upgrade the commercial façade and office interiors of an industrial business to project a modern, professional corporate identity without disrupting ongoing operations.",

    solution:
      "Zevolution delivered a clean, contemporary façade and interior finish package using low-maintenance FCC panels and durable flooring solutions suited to industrial-adjacent environments.",

    execution:
      "Installation was phased to ensure the business remained fully operational throughout. Materials were selected for ease of maintenance and long-term performance in a commercial setting.",

    outcome:
      "Sanjay Plastic's upgraded premises now project the credibility and professionalism the brand deserves, with a finish that impresses clients and partners alike.",

    testimonial:
      "Our office looks completely transformed. Zevolution delivered a professional result that has changed how clients perceive our business.",

    client: "Director — Sanjay Plastic",

    gallery: [sanjay1, sanjay2, sanjay3, sanjay4, sanjay5, sanjay6],
  },

  {
    slug: "satya-prakash-public-school",
    title: "Satya Prakash Public School",
    heroImage: satya1,
    location: "India",
    type: "Education",
    year: "2024",
    category: "Education",

    challenge:
      "Deliver durable, safe, and inspiring surface solutions for a school environment that must withstand heavy daily use while creating a positive, stimulating space for students and staff.",

    solution:
      "Zevolution specified child-safe, high-durability flooring and wall systems designed for educational environments — combining vibrant aesthetics with materials engineered for high-traffic performance.",

    execution:
      "Work was scheduled during non-school hours to avoid disruption to academic activities. All materials met safety standards appropriate for educational facilities.",

    outcome:
      "Satya Prakash Public School now features an environment that inspires learning — with surfaces that look exceptional and perform reliably year after year.",

    testimonial:
      "The school has been completely revitalized. Students and parents have noticed the transformation — it's created real pride in our institution.",

    client: "Principal — Satya Prakash Public School",

    gallery: [satya1, satya2, satya3, satya4, satya5, satya6],
  },

  {
    slug: "villa-jaipur",
    title: "Villa Jaipur",
    heroImage: villa1,
    location: "Jaipur",
    type: "Luxury Villa",
    year: "2024",
    category: "Residential",

    challenge:
      "Create a luxury villa finish that honours Jaipur's rich architectural heritage while delivering the modern standards of quality and comfort expected by today's discerning homeowners.",

    solution:
      "Zevolution's HandPeeled Stone collection in warm Rajasthani tones was selected to echo the region's architectural identity, combined with premium engineered flooring for interior spaces.",

    execution:
      "The project required careful material curation and skilled craftsmanship to honour the villa's architectural character. Our team worked alongside the architect to ensure every detail was perfect.",

    outcome:
      "Villa Jaipur is now a masterpiece of contemporary luxury rooted in regional heritage — a residence that tells a story through its surfaces and materials.",

    testimonial:
      "Zevolution captured the soul of Jaipur in our villa's finish. It's exactly the heritage-meets-luxury aesthetic we were dreaming of.",

    client: "Owner — Villa Jaipur",

    gallery: [villa1, villa2, villa3, villa4, villa5, villa6],
  },
];