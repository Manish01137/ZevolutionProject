import { Search } from "lucide-react";

const ResourceSearch = ({ search, setSearch }) => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <div className="relative">
        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search resources..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#111] border border-gray-800 text-white pl-12 pr-4 py-4 rounded-lg focus:outline-none focus:border-[#c9a45c] transition"
        />
      </div>
    </div>
  );
};

export default ResourceSearch;