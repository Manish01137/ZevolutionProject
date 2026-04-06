import { Link } from "react-router-dom";

const Button = ({
  children,
  to,
  href,
  onClick,
  variant = "primary",
  className = "",
  type = "button",
}) => {
  const base =
    "inline-flex items-center justify-center gap-2 px-8 py-3 text-xs tracking-widest uppercase transition-all duration-300 font-light";

  const variants = {
    primary: "bg-[#C8A75B] text-black hover:opacity-90 hover:scale-105",
    outline:
      "border border-white/40 text-white hover:border-[#C8A75B] hover:text-[#C8A75B]",
    ghost: "text-white hover:text-[#C8A75B] underline underline-offset-4",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={classes}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {children}
    </button>
  );
};

export default Button;
