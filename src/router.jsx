import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Projects from "./pages/Projects";
import ArchitectsHub from "./pages/ArchitectsHub";
import Contact from "./pages/Contact";
import BrandDetails from "./pages/BrandDetails";
import ProjectDetails from "./pages/ProjectDetails";
import BrandProducts from "./pages/BrandProducts"; // NEW PAGE
import CategoryProducts from "./pages/CategoryProducts";
import ProductDetail from "./pages/ProductDetail";
import ProductURLs from "./pages/ProductURLs";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/brands",
    element: <Brands />,
  },
  {
    path: "/projects",
    element: <Projects />,
  },
  {
    path: "/projects/:slug",
    element: <ProjectDetails />,
  },
  {
    path: "/architects-hub",
    element: <ArchitectsHub />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/brand/:slug",
    element: <BrandDetails />,
  },

  // NEW ROUTE FOR PRODUCTS
  {
    path: "/brand/:slug/products",
    element: <BrandProducts />,
  },

  // Category page (e.g. /brand/zerra/category/sandstone)
  {
    path: "/brand/:brandSlug/category/:categorySlug",
    element: <CategoryProducts />,
  },

  // Individual product page — this is where QR scans land
  {
    path: "/brand/:brandSlug/product/:productSlug",
    element: <ProductDetail />,
  },

  // Admin page with all product URLs for copying to external QR generator
  {
    path: "/product-urls",
    element: <ProductURLs />,
  },
]);