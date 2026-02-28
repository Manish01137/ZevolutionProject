import { createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import About from "./pages/About";
import Brands from "./pages/Brands";
import Projects from "./pages/Projects";
import ArchitectsHub from "./pages/ArchitectsHub";
import Contact from "./pages/Contact";
import BrandDetails from "./pages/BrandDetails";

export const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/about", element: <About /> },
  { path: "/brands", element: <Brands /> },
  { path: "/projects", element: <Projects /> },
  { path: "/architects-hub", element: <ArchitectsHub /> },
  { path: "/contact", element: <Contact /> },
  { path: "/brand/:slug", element: <BrandDetails /> },
]);