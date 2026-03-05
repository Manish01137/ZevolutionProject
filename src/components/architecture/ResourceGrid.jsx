import ResourceCard from "./ResourceCard";

const ResourceGrid = ({ data }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 pb-24 grid md:grid-cols-2 lg:grid-cols-3 gap-10">
      {data.map((item, i) => (
        <ResourceCard key={i} item={item} />
      ))}
    </div>
  );
};

export default ResourceGrid;