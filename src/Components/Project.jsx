import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { motion } from "motion/react";

export default function Project({
  id,
  title,
  descreption,
  techStack,
  imageSource,
  gitHubLink,
  liveLink,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: id % 2 == 0 ? 20 : -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.45, delay: 0.1 }}
      className="lg:m-6 md:m-4 sm:m-6 m-3 xl:mb-18 lg:mb-16 md:mb-8 sm:mb-12 mb-8 xl:[&:nth-child(even)]:mt-28 lg:[&:nth-child(even)]:mt-24 md:[&:nth-child(even)]:mt-16 [--translate-start:100px] odd:[--translate-start:-100px]"
    >
      <div className="xl:px-12 xl:py-14 lg:px-10 lg:py-12 md:px-6 md:py-6 sm:px-10 sm:py-12 px-6 py-8 bg-[var(--project-bg)]">
        <div className="py-2 w-full bg-[var(--browser-shade)] flex justify-start items-center gap-2 ps-2 rounded-tl-lg rounded-tr-lg">
          <div className="h-3 w-3 rounded-full bg-red-400"></div>
          <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
          <div className="h-3 w-3 rounded-full bg-green-400"></div>
        </div>
        <div style={{ aspectRatio: "16 / 9", width: "100%" }}>
          <img
            src={imageSource}
            alt="ChatApp"
            loading="lazy"
            style={{
              filter: "blur(10px)",
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            onLoad={(e) => (e.target.style.filter = "blur(0px)")}
          />
        </div>
      </div>
      <div className="">
        <h1 className="lg:text-2xl md:text-xl text-xl text-[var(--text-green)] font-bold md:pt-12 sm:pt-4 pt-2">
          {title}{" "}
        </h1>
        <p className="text-[var(--text-muted)] my-2 md:text-base text-sm">
          {descreption}
        </p>
        <ul className="flex list-none flex-wrap">
          {techStack.map((tech, ind) => (
            <li
              className="text-sm lg:text-base px-4 py-1 rounded border border-[var(--text-muted)] bg-[var(--bg)] text-[var(--text-muted)] me-2 mb-2 hover:bg-[var(--text-green-light)] hover:border-transparent hover:text-black"
              key={ind}
            >
              {tech}
            </li>
          ))}
        </ul>
        <div className="sm:my-4 my-2 flex gap-4 flex-wrap">
          {liveLink[0] && (
            <a
              href={liveLink[1]}
              target="_blank"
              aria-label={`Live deployement link for ${title}`}
              rel="noopener noreferrer"
              className="text-sm lg:text-base cursor-pointer px-6 py-1 rounded bg-[var(--text-green)] flex justify-center items-center hover:bg-[var(--btn-bg)]"
            >
              <span className="mx-2">Live</span>
              <ArrowOutwardIcon sx={{ fontSize: 18 }} />
            </a>
          )}
          {gitHubLink[0] && (
            <a
              href={gitHubLink[1]}
              target="_blank"
              aria-label={`Github link for ${title}`}
              rel="noopener noreferrer"
              className="cursor-pointer px-6 py-1 rounded bg-[var(--text-green)] flex justify-center items-center hover:bg-[var(--btn-bg)]"
            >
              <span className="mx-2">Code</span>
              <ArrowOutwardIcon sx={{ fontSize: 18 }} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
