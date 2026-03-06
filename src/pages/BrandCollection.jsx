import { useParams } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const BrandCollection = () => {

  const { slug, collection } = useParams();

  return (

    <>
    
    <Navbar />

    <div className="bg-black text-white py-40 text-center">

      <h1 className="text-5xl font-light mb-6">

        {collection}

      </h1>

      <p className="text-white/60">

        Product collection page for {slug}

      </p>

    </div>

    <Footer />

    </>

  );

};

export default BrandCollection;