import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-white/10 pt-20 pb-10">
      <div className="max-w-container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* About */}
        <div>
          <h3 className="text-2xl tracking-widest font-light mb-6">
            <span className="text-white">ZEVO</span>
            <span className="text-gold">LUTION</span>
          </h3>
          <p className="text-muted text-sm leading-relaxed">
            Transforming architectural visions into tangible excellence.
            Premium materials for spaces that inspire.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white mb-6 uppercase tracking-wider text-sm">
            Quick Links
          </h4>
          <div className="flex flex-col gap-4 text-muted text-sm">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/architects-hub">Architects Hub</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>

        {/* Brands */}
        <div>
          <h4 className="text-white mb-6 uppercase tracking-wider text-sm">
            Our Brands
          </h4>
          <div className="flex flex-col gap-4 text-muted text-sm">
            <p>Crest Stone</p>
            <p>Zerra</p>
            <p>Formiq</p>
            <p>ZevoCubes</p>
            <p>Aerolith</p>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-white mb-6 uppercase tracking-wider text-sm">
            Contact
          </h4>
          <div className="text-muted text-sm leading-relaxed space-y-4">
            <p>Design District, New Delhi<br />India 110001</p>
            <p>+91 11 4567 8900</p>
            <p>connect@zevolution.com</p>
          </div>
        </div>
      </div>

      <div className="text-center text-muted text-xs mt-16 border-t border-white/10 pt-6">
        © {new Date().getFullYear()} Zevolution. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;