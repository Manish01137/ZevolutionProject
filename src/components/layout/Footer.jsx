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

          {/* Social Icons Placeholder */}
          <div className="flex gap-5 mt-8">
            {["Instagram", "LinkedIn", "Twitter", "YouTube"].map((item) => (
              <div
                key={item}
                className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white/60 hover:text-gold hover:border-gold transition-all duration-300 cursor-pointer"
              >
                •
              </div>
            ))}
          </div>
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
            {["Crest Stone", "Zerra", "Formiq", "ZevoCubes", "Aerolith"].map(
              (brand) => (
                <p
                  key={brand}
                  className="text-white/60 hover:text-gold transition-colors duration-300 cursor-pointer"
                >
                  {brand}
                </p>
              )
            )}
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white text-sm tracking-widest mb-8">
            CONTACT
          </h4>

          <div className="flex flex-col gap-6 text-sm text-white/60">
            <p>
              Design District, New Delhi <br />
              India 110001
            </p>

            <p className="hover:text-gold transition-colors duration-300 cursor-pointer">
              +91 11 4567 8900
            </p>

            <p className="hover:text-gold transition-colors duration-300 cursor-pointer">
              connect@zevolution.com
            </p>
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