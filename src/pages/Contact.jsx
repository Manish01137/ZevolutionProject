import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ContactHero from "../components/contact/ContactHero";
import ContactForm from "../components/contact/ContactForm";
import ExperienceSection from "../components/contact/ExperienceSection";

const Contact = () => {
  return (
    <>
      <Navbar />
      <ContactHero />

      <ContactForm/>

      <ExperienceSection />
      <Footer />
    </>
  );
};

export default Contact;