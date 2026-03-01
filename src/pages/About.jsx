import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import AboutHero from "../components/about/AboutHero";
import Philosophy from "../components/about/Philosophy";
import Principles from "../components/about/Principles";
import Approach from "../components/about/Approach";
import AboutCTA from "../components/about/AboutCTA";
import Founder from "../components/about/Founder";

const About = () => {
  return (
    <>
      <Navbar />
      <AboutHero />
      <Philosophy />
      <Principles />
      <Approach />
      <Founder/>
      <AboutCTA />
      <Footer />
    </>
  );
};

export default About;