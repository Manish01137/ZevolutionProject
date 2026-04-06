import { motion } from "framer-motion";

const AnimatedReveal = ({
  children,
  delay = 0,
  duration = 0.8,
  y = 40,
  className = "",
  once = true,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once }}
      transition={{ delay, duration, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedReveal;
