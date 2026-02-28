import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/images/Zev Logo-02.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-black/60 backdrop-blur-lg py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-container mx-auto px-8 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="Zevolution Logo"
            className="h-10 object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-12 text-sm tracking-wide font-light">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className="relative group text-white/70 hover:text-gold transition-colors duration-300"
            >
              {link.name}

              {/* Gold Underline */}
              <span className="absolute left-0 -bottom-2 h-[1px] w-0 bg-gold transition-all duration-300 group-hover:w-full"></span>
            </NavLink>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white/80 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
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
  );
};

export default Navbar;