import { useState } from "react";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import ArchitectureHero from "../components/architecture/ArchitectureHero";
import ResourceSearch from "../components/architecture/ResourceSearch";
import ResourceFilters from "../components/architecture/ResourceFilters";
import ResourceGrid from "../components/architecture/ResourceGrid";
import DownloadResources from "../components/architecture/DownloadResources";
import TechSupportCTA from "../components/architecture/TechSupportCTA";

import { resources } from "../data/architectureResources";

const ArchitectsHub = () => {
  const [search, setSearch] = useState("");
  const [active, setActive] = useState("All");

  const filteredResources = resources.filter((item) => {
    const matchesSearch = item.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      active === "All" || item.category === active;

    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <ArchitectureHero />

      {/* Search */}
      <ResourceSearch search={search} setSearch={setSearch} />

      {/* Category Filters */}
      <ResourceFilters active={active} setActive={setActive} />

      {/* Resources Grid */}
      <ResourceGrid data={filteredResources} />

      {/* Downloadable Files */}
      <DownloadResources />

      {/* Technical Support CTA */}
      <TechSupportCTA />

      <Footer />
    </>
  );
};

export default ArchitectsHub;