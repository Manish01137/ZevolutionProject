import { useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BrandProducts = () => {

  const { slug } = useParams();

  return (

    <>
    
      <Navbar />

      <section className="bg-black text-white py-40 text-center">

        <h1 className="text-5xl font-extralight mb-6">
          Products
        </h1>

        <p className="text-white/60">
          Product collection for {slug}
        </p>

      </section>

      <Footer />

    </>

  );
};

export default BrandProducts;