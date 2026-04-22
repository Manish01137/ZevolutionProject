import { useEffect, useState, useRef, useCallback } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Search, X } from "lucide-react";
import logo from "../../assets/images/Zev Logo-02.png";

// ── Search Index ─────────────────────────────────────────────────────────────
// A flat, searchable index of all website content
const SEARCH_INDEX = [
  // Pages
  { type: "Page", title: "Home", path: "/", desc: "Zevolution, premium architectural surface solutions" },
  { type: "Page", title: "About Zevolution", path: "/about", desc: "Our story, mission, and founding team" },
  { type: "Page", title: "Our Brands", path: "/brands", desc: "Explore all Zevolution brand collections" },
  { type: "Page", title: "Projects", path: "/projects", desc: "Real-world installations and case studies" },
  { type: "Page", title: "Architects Hub", path: "/architects-hub", desc: "Resources and tools for architects" },
  { type: "Page", title: "Contact", path: "/contact", desc: "Get in touch with our team" },

  // Brands
  { type: "Brand", title: "Crest Stone", path: "/brand/crest-stone", desc: "FCC Stone Cladding Systems, 94 premium products across 5 collections" },
  { type: "Brand", title: "Zerra", path: "/brand/zerra", desc: "HandPeeled™ Stone Veneers, authentic natural stone surfaces" },
  { type: "Brand", title: "Formiq", path: "/brand/formiq", desc: "Premium Flooring Systems, engineered for luxury interiors" },

  // Crest Stone Products
  { type: "Product", title: "Age Stone", path: "/brand/crest-stone", desc: "Crest Stone · Stone Cladding Textures" },
  { type: "Product", title: "Cut Stone", path: "/brand/crest-stone", desc: "Crest Stone · Stone Cladding Textures" },
  { type: "Product", title: "Morocco Cladding", path: "/brand/crest-stone", desc: "Crest Stone · North African inspired cladding" },
  { type: "Product", title: "Muretto", path: "/brand/crest-stone", desc: "Crest Stone · Italian brick-bond cladding" },
  { type: "Product", title: "Travertine Classic", path: "/brand/crest-stone", desc: "Crest Stone · Roman-inspired travertine cladding" },
  { type: "Product", title: "Weaving", path: "/brand/crest-stone", desc: "Crest Stone · Interlocked weave-pattern panels" },
  { type: "Product", title: "Woven", path: "/brand/crest-stone", desc: "Crest Stone · Sculptural woven-texture panels" },
  { type: "Product", title: "Arabescato Corchia", path: "/brand/crest-stone", desc: "Crest Stone · Italian luxury marble effect" },
  { type: "Product", title: "Armani Dark Grey", path: "/brand/crest-stone", desc: "Crest Stone · Minimalist luxury stone" },
  { type: "Product", title: "Bianco Carrara", path: "/brand/crest-stone", desc: "Crest Stone · Classic Italian white marble" },
  { type: "Product", title: "Black Sandstone", path: "/brand/crest-stone", desc: "Crest Stone · Dramatic black stone cladding" },
  { type: "Product", title: "Bvlgari Stone", path: "/brand/crest-stone", desc: "Crest Stone · Ultra-luxury stone finish" },
  { type: "Product", title: "Golden Carrara", path: "/brand/crest-stone", desc: "Crest Stone · Warm golden Italian marble" },
  { type: "Product", title: "Pandora", path: "/brand/crest-stone", desc: "Crest Stone · Dramatic marble-effect stone" },
  { type: "Product", title: "Danxia Rammed Earth", path: "/brand/crest-stone", desc: "Crest Stone · Rammed earth boards" },
  { type: "Product", title: "Gobi Rammed Earth", path: "/brand/crest-stone", desc: "Crest Stone · Desert-inspired rammed earth" },
  { type: "Product", title: "Aerolite", path: "/brand/crest-stone", desc: "Crest Stone · Lightweight FCC boards" },
  { type: "Product", title: "Concrete Board", path: "/brand/crest-stone", desc: "Crest Stone · Industrial concrete FCC panels" },
  { type: "Product", title: "Huge Travertine", path: "/brand/crest-stone", desc: "Crest Stone · Large format travertine FCC" },
  { type: "Product", title: "Roman Huge Travertine", path: "/brand/crest-stone", desc: "Crest Stone · Grand Roman travertine FCC" },
  { type: "Product", title: "Sawing Wood Board", path: "/brand/crest-stone", desc: "Crest Stone · Saw-cut wood-grain FCC" },
  { type: "Product", title: "Ando Cement", path: "/brand/crest-stone", desc: "Crest Stone · Tadao Ando inspired concrete" },
  { type: "Product", title: "Bulgari Marble Pillar", path: "/brand/crest-stone", desc: "Crest Stone · Prestige marble pillars" },
  { type: "Product", title: "Italian Travertine", path: "/brand/crest-stone", desc: "Crest Stone · Authentic Italian travertine" },
  { type: "Product", title: "Milan Travertine", path: "/brand/crest-stone", desc: "Crest Stone · Milan-inspired travertine" },
  { type: "Product", title: "Marble Collection", path: "/brand/crest-stone", desc: "Crest Stone · Premium marble FCC panels" },
  { type: "Product", title: "Skyline Stone", path: "/brand/crest-stone", desc: "Crest Stone · Urban-inspired stone panels" },
  { type: "Product", title: "Zen Ando Cement", path: "/brand/crest-stone", desc: "Crest Stone · Meditative cement panels" },

  // Zerra Products
  { type: "Product", title: "Sandstone Veneer", path: "/brand/zerra", desc: "Zerra · Warm-toned HandPeeled™ sandstone" },
  { type: "Product", title: "Marble Veneer", path: "/brand/zerra", desc: "Zerra · Authentic marble veneers" },
  { type: "Product", title: "Limestone Veneer", path: "/brand/zerra", desc: "Zerra · Organic limestone surfaces" },
  { type: "Product", title: "Concrete Veneer", path: "/brand/zerra", desc: "Zerra · Industrial concrete stone veneers" },
  { type: "Product", title: "Slate & Quartzite", path: "/brand/zerra", desc: "Zerra · Dramatic slate and quartzite veneers" },

  // Formiq Products
  { type: "Product", title: "Oak Prime Wide Plank", path: "/brand/formiq", desc: "Formiq · Premium oak engineered flooring" },
  { type: "Product", title: "TerraWood Classic", path: "/brand/formiq", desc: "Formiq · Warm brown engineered flooring" },
  { type: "Product", title: "Smoke Grey Laminate", path: "/brand/formiq", desc: "Formiq · Contemporary grey laminate" },
  { type: "Product", title: "Linea Stone-Effect Floor", path: "/brand/formiq", desc: "Formiq · Stone-effect porcelain flooring" },

  // Projects
  { type: "Project", title: "Chhavi Eye Hospital", path: "/projects/chhavi-eye-hospital", desc: "Healthcare · Premium facade and interior surfaces" },
  { type: "Project", title: "Kuchaiya Residence", path: "/projects/kuchaiya", desc: "Residential · HandPeeled™ stone transformation" },
  { type: "Project", title: "Marcos a Muscles", path: "/projects/marcos-a-muscles", desc: "Fitness & Commercial · Bold premium interior" },
  { type: "Project", title: "Mumbai Commercial", path: "/projects/mumbai-project", desc: "Commercial · Coastal facade system" },
  { type: "Project", title: "Rajput Jewellers", path: "/projects/rajput-jewellers", desc: "Retail · Luxury stone interior surfaces" },
  { type: "Project", title: "Residency Project", path: "/projects/residency", desc: "Luxury Residential · Complete surface package" },
  { type: "Project", title: "Sanjay Plastic", path: "/projects/sanjay-plastic", desc: "Industrial & Commercial · Corporate facade upgrade" },
  { type: "Project", title: "Satya Prakash Public School", path: "/projects/satya-prakash-public-school", desc: "Education · Safe & inspiring surfaces" },
  { type: "Project", title: "Villa Jaipur", path: "/projects/villa-jaipur", desc: "Luxury Villa · Heritage meets luxury finish" },
];

const TYPE_COLORS = {
  Page:    "bg-blue-500/20 text-blue-300",
  Brand:   "bg-[#c9a45c]/20 text-[#c9a45c]",
  Product: "bg-emerald-500/20 text-emerald-300",
  Project: "bg-purple-500/20 text-purple-300",
};

// ── SearchBar ─────────────────────────────────────────────────────────────────
const SearchBar = ({ onClose }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleSearch = useCallback((value) => {
    setQuery(value);
    if (!value.trim()) {
      setResults([]);
      return;
    }
    const q = value.toLowerCase();
    const matched = SEARCH_INDEX.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.desc.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q)
    ).slice(0, 8);
    setResults(matched);
  }, []);

  const handleSelect = (path) => {
    navigate(path);
    onClose();
    setQuery("");
    setResults([]);
  };

  return (
    <div className="fixed inset-0 z-[100] flex flex-col" onClick={onClose}>
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

      {/* Search Panel */}
      <div
        className="relative z-10 max-w-2xl w-full mx-auto mt-24 px-4"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Input */}
        <div className="relative flex items-center bg-[#111] border border-[#c9a45c]/50 rounded-xl overflow-hidden shadow-2xl shadow-black/50">
          <Search className="ml-5 text-[#c9a45c] shrink-0" size={20} />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => handleSearch(e.target.value)}
            placeholder="Search products, brands, projects…"
            className="flex-1 bg-transparent text-white placeholder-white/30 py-4 px-4 text-base outline-none"
          />
          {query && (
            <button
              onClick={() => { setQuery(""); setResults([]); }}
              className="mr-3 text-white/40 hover:text-white transition"
            >
              <X size={18} />
            </button>
          )}
          <button
            onClick={onClose}
            className="px-5 text-white/40 hover:text-white transition text-sm tracking-widest uppercase border-l border-[#2a2a2a] py-4"
          >
            Esc
          </button>
        </div>

        {/* Results Dropdown */}
        {results.length > 0 && (
          <div className="mt-2 bg-[#0d0d0d] border border-[#1e1e1e] rounded-xl overflow-hidden shadow-2xl">
            {results.map((item, idx) => (
              <button
                key={idx}
                onClick={() => handleSelect(item.path)}
                className="w-full flex items-center gap-4 px-5 py-3.5 hover:bg-[#1a1a1a] transition text-left group border-b border-[#111] last:border-0"
              >
                <span className={`text-[10px] tracking-widest uppercase px-2 py-0.5 rounded font-medium shrink-0 ${TYPE_COLORS[item.type]}`}>
                  {item.type}
                </span>
                <div className="min-w-0">
                  <p className="text-white text-sm font-light group-hover:text-[#c9a45c] transition truncate">
                    {item.title}
                  </p>
                  <p className="text-white/40 text-xs truncate mt-0.5">{item.desc}</p>
                </div>
                <span className="ml-auto text-white/20 group-hover:text-[#c9a45c]/50 text-xs shrink-0 transition">→</span>
              </button>
            ))}
          </div>
        )}

        {/* No results */}
        {query && results.length === 0 && (
          <div className="mt-2 bg-[#0d0d0d] border border-[#1e1e1e] rounded-xl px-5 py-6 text-center text-white/40 text-sm">
            No results found for &ldquo;{query}&rdquo;
          </div>
        )}

        {/* Quick links hint */}
        {!query && (
          <div className="mt-4 flex flex-wrap gap-2 justify-center">
            {["Crest Stone", "Zerra", "Formiq", "Villa Jaipur", "Travertine"].map((hint) => (
              <button
                key={hint}
                onClick={() => handleSearch(hint)}
                className="text-xs text-white/40 border border-[#2a2a2a] px-3 py-1.5 rounded-full hover:border-[#c9a45c]/50 hover:text-[#c9a45c] transition"
              >
                {hint}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

// ── Navbar ────────────────────────────────────────────────────────────────────
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close search on Escape key
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Zevolution", path: "/about" },
    { name: "Our Brands", path: "/brands" },
    { name: "Projects", path: "/projects" },
    { name: "Architects Hub", path: "/architects-hub" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black/60 backdrop-blur-lg py-4"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-container mx-auto px-8 flex items-center justify-between gap-6">

          {/* Logo */}
          <Link to="/" className="shrink-0">
            <img
              src={logo}
              alt="Zevolution Logo"
              className="h-10 object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex gap-10 text-sm tracking-wide font-light flex-1 justify-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className="relative group text-white/70 hover:text-gold transition-colors duration-300 whitespace-nowrap"
              >
                {link.name}
                <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-gold transition-all duration-300 group-hover:w-full" />
              </NavLink>
            ))}
          </nav>

          {/* Desktop Search Button */}
          <button
            id="search-toggle"
            onClick={() => setSearchOpen(true)}
            className="hidden lg:flex items-center gap-2 text-white/50 hover:text-[#c9a45c] transition-colors duration-300 border border-[#2a2a2a] hover:border-[#c9a45c]/50 rounded-full px-4 py-2 text-xs tracking-widest uppercase shrink-0"
          >
            <Search size={14} />
            Search
          </button>

          {/* Mobile Controls */}
          <div className="flex items-center gap-4 lg:hidden">
            {/* Mobile Search Icon */}
            <button
              onClick={() => setSearchOpen(true)}
              className="text-white/70 hover:text-[#c9a45c] transition"
            >
              <Search size={20} />
            </button>

            {/* Mobile Menu Button */}
            <button
              className="text-white/80 text-2xl"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden bg-black/95 backdrop-blur-md transition-all duration-500 overflow-hidden ${
            menuOpen ? "max-h-screen py-6" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-6 px-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setMenuOpen(false)}
                className="text-white/70 hover:text-gold text-lg transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </header>

      {/* Search Overlay */}
      {searchOpen && <SearchBar onClose={() => setSearchOpen(false)} />}
    </>
  );
};

export default Navbar;