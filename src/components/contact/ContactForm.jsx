// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const ContactForm = () => {
  return (
    <section className="relative bg-black text-white py-24 md:py-32 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE — CONTACT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          <div>
            <p className="tracking-[8px] text-xs text-[#C8A75B] uppercase font-extralight mb-4">
              Get In Touch
            </p>

            <h2 className="text-3xl md:text-5xl font-extralight leading-tight">
              Contact Information
            </h2>
          </div>

          {/* Visit */}
          <div className="flex items-start gap-4 group">
            <div className="p-3 border border-[#C8A75B]/40 rounded-full group-hover:bg-[#C8A75B]/10 transition">
              <MapPin size={18} className="text-[#C8A75B]" />
            </div>
            <div>
              <h4 className="font-light mb-1">Visit Us</h4>
              <p className="text-gray-400 font-extralight text-sm leading-relaxed">
                Zevolution Design Studio <br />
                DLF Cyber City, Phase 2 <br />
                Gurugram, Haryana 122002
              </p>
            </div>
          </div>

          {/* Call */}
          <div className="flex items-start gap-4 group">
            <div className="p-3 border border-[#C8A75B]/40 rounded-full group-hover:bg-[#C8A75B]/10 transition">
              <Phone size={18} className="text-[#C8A75B]" />
            </div>
            <div>
              <h4 className="font-light mb-1">Call Us</h4>
              <p className="text-gray-400 font-extralight text-sm">
                +91 11 4567 8900 <br />
                +91 98765 43210
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4 group">
            <div className="p-3 border border-[#C8A75B]/40 rounded-full group-hover:bg-[#C8A75B]/10 transition">
              <Mail size={18} className="text-[#C8A75B]" />
            </div>
            <div>
              <h4 className="font-light mb-1">Email Us</h4>
              <p className="text-gray-400 font-extralight text-sm">
                connect@zevolution.com <br />
                architects@zevolution.com
              </p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4 group">
            <div className="p-3 border border-[#C8A75B]/40 rounded-full group-hover:bg-[#C8A75B]/10 transition">
              <Clock size={18} className="text-[#C8A75B]" />
            </div>
            <div>
              <h4 className="font-light mb-1">Studio Hours</h4>
              <p className="text-gray-400 font-extralight text-sm">
                Mon – Fri: 10:00 AM – 7:00 PM <br />
                Sat: 10:00 AM – 4:00 PM <br />
                Sun: By Appointment
              </p>
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE — FORM */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12"
        >
          <h3 className="text-2xl md:text-3xl font-extralight mb-10">
            Request Consultation
          </h3>

          <div className="grid md:grid-cols-2 gap-6">

            <input
              type="text"
              placeholder="Full Name *"
              className="bg-black/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#C8A75B] transition"
            />

            <input
              type="email"
              placeholder="Email Address *"
              className="bg-black/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#C8A75B] transition"
            />

            <input
              type="text"
              placeholder="Phone Number"
              className="bg-black/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#C8A75B] transition"
            />

            <input
              type="text"
              placeholder="Project Location"
              className="bg-black/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#C8A75B] transition"
            />

            <textarea
              rows="4"
              placeholder="Tell us about your project..."
              className="md:col-span-2 bg-black/40 border border-white/10 px-4 py-3 text-sm focus:outline-none focus:border-[#C8A75B] transition"
            />

          </div>

          <button
            className="mt-8 w-full bg-[#C8A75B] text-black py-4 uppercase tracking-widest text-sm 
                       transition-all duration-500 hover:scale-[1.02]"
          >
            Submit Inquiry →
          </button>
        </motion.div>

      </div>

      {/* Soft Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(200,167,91,0.06),_transparent_70%)] pointer-events-none"></div>

    </section>
  );
};

export default ContactForm;