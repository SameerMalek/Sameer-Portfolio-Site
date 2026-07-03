"use client";
import { motion } from "framer-motion";

// Restrained scroll-in reveal. Respects prefers-reduced-motion via Framer.
const Reveal = ({ children, delay = 0, y = 24, className = "" }) => {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};

export default Reveal;
