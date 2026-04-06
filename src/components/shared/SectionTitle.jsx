const SectionTitle = ({ label, title, subtitle, center = false, className = "" }) => {
  return (
    <div className={`mb-12 md:mb-16 ${center ? "text-center" : ""} ${className}`}>
      {label && (
        <p className="tracking-[8px] text-xs md:text-sm text-[#C8A75B] uppercase font-light mb-4">
          {label}
        </p>
      )}
      {title && (
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light leading-tight text-white">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="text-gray-400 text-sm md:text-lg font-light mt-4 max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
