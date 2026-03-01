// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const ContactHero = () => {
  return (
    <section className="relative h-[80vh] flex items-center justify-center text-center text-white overflow-hidden">

      {/* Background Image (Unsplash) */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop')",
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/90" />

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 px-6 max-w-4xl"
      >
        <p className="tracking-[10px] text-xs md:text-sm text-[#C8A75B] uppercase font-extralight mb-6">
          Connect
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extralight leading-tight">
          Let’s Build What’s Next.
        </h1>

        <p className="mt-6 text-gray-300 text-sm md:text-lg font-extralight max-w-2xl mx-auto">
          Whether you're an architect, developer, or homeowner with a vision,
          we’re here to help bring your project to life with premium materials.
        </p>
      </motion.div>
    </section>
  );
};

export default ContactHero;