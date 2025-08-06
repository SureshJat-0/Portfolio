import "../App.css";
import { iconMap } from "./Icons";
import { motion } from "motion/react";

export default function SkillBox({ techStack }) {
  const TechIcon = (iconName) => {
    const IconComponent = iconMap[iconName];
    return IconComponent ? (
      <IconComponent size={32} className="text-white" />
    ) : null;
  };
  return (
    <div className="my-4">
      <h3 className="text-[var(--text-muted)]">
        {Object.keys(techStack)[0]}
      </h3>
      <ul className="list-none text-[var(--text)] flex flex-wrap md:text-base text-sm">
        {techStack[Object.keys(techStack)[0]].map((tech, ind) => (
          <motion.li
            whileInView={{
              y: [0, -10, 0],
            }}
            whileHover={{ rotateX: 13, rotateY: 13 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              type: "spring",
              y: { duration: 0.5, delay: 0.4 },
            }}
            key={ind}
            className="project-card text-[var(--text)] md:min-h-24 md:min-w-24 sm:min-h-12 sm:min-w-12 min-h-4 min-w-4 sm:m-2 sm:p-5 m-2 p-3 flex flex-col justify-center items-center gap-3 rounded-lg bg-[var(--bg-light)] shadow card-rotate md:text-base text-sm"
          >
            {tech[0]}
            {TechIcon(tech[1])}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}
