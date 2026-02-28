import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

const Home = () => {
  return (
    <>
      <Navbar />
      <div className="h-screen flex items-center justify-center">
        <h1 className="text-6xl font-light">Home Page</h1>
      </div>
      <Footer />
    </>
  );
};

export default Home;