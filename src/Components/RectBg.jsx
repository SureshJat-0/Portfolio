import { motion } from "motion/react";

export default function RectBg({ top, right, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: delay }}
      style={{ top: `${top * 4}px`, right: `${right * 4}px` }}
      className={`absolute h-18 w-18 bg-[var(--rect)] z-[-2] lg:block hidden`}
    ></motion.div>
  );
}
