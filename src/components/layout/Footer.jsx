import { Link } from "react-router-dom";
import logo from "../../assets/images/Zev Logo-02.png";

const Footer = () => {
  return (
    <footer className="bg-black pt-24 pb-12">

      <div className="max-w-container mx-auto px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">

        {/* Logo + About */}
        <div>
          <img
            src={logo}
            alt="Zevolution Logo"
            className="h-14 mb-8"
          />

          <p className="text-white/60 text-sm leading-relaxed max-w-xs">
            Transforming architectural visions into tangible excellence.
            Premium materials for spaces that inspire.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white text-sm tracking-widest mb-8">
            QUICK LINKS
          </h4>

          <div className="flex flex-col gap-5 text-sm">
            {[
              { name: "Home", path: "/" },
              { name: "About Us", path: "/about" },
              { name: "Projects", path: "/projects" },
              { name: "Architects Hub", path: "/architects-hub" },
              { name: "Contact", path: "/contact" },
            ].map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="relative group text-white/60 hover:text-gold transition-colors duration-300 w-fit"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-[1px] w-0 bg-gold transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </div>
        </div>

        {/* Our Brands */}
        <div>
          <h4 className="text-white text-sm tracking-widest mb-8">
            OUR BRANDS
          </h4>

          <div className="flex flex-col gap-5 text-sm">
            {[
              { name: "Crest Stone", path: "/brand/crest-stone" },
              { name: "Zerra", path: "/brand/zerra" },
              { name: "Formiq", path: "/brand/formiq" },
              { name: "ZevoCubes", path: "/brands" },
              { name: "Aerolith", path: "/brands" },
            ].map((brand) => (
              <Link
                key={brand.name}
                to={brand.path}
                className="text-white/60 hover:text-gold transition-colors duration-300 w-fit"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-sm tracking-widest mb-8">
            CONTACT
          </h4>

          <div className="flex flex-col gap-6 text-sm text-white/60">
            <a
              href="tel:+919152220055"
              className="hover:text-gold transition-colors duration-300"
            >
              +91 91522 20055
            </a>

            <a
              href="mailto:info@zevolution.in"
              className="hover:text-gold transition-colors duration-300"
            >
              info@zevolution.in
            </a>
          </div>
        </div>

      </div>

      {/* Divider */}
      <div className="max-w-container mx-auto px-8 mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between text-white/40 text-sm">

        <p>
          © {new Date().getFullYear()} Zevolution. All rights reserved.
        </p>

        <div className="flex gap-8 mt-4 md:mt-0">
          <p className="hover:text-gold transition-colors duration-300 cursor-pointer">
            Privacy Policy
          </p>
          <p className="hover:text-gold transition-colors duration-300 cursor-pointer">
            Terms of Service
          </p>
        </div>

      </div>

    </footer>
  );
};

export default Footer;