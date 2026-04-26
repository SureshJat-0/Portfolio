import { motion } from "motion/react";
import {
  FaCircleCheck,
  FaCode,
  FaServer,
  FaScrewdriverWrench,
  FaChartSimple,
  FaBolt,
} from "react-icons/fa6";
import { iconMap } from "../Components/Icons";

export default function Skills({ skillsRef }) {
  const skillCards = [
    {
      title: "Frontend Development",
      subtitle:
        "Building responsive, interactive and accessible user interfaces.",
      headerIcon: FaCode,
      items: [
        ["React", "SiReact"],
        ["Tailwind CSS", "SiTailwindcss"],
        ["HTML5", "SiHtml5"],
        ["CSS3", "SiCss3"],
        ["JavaScript", "SiJavascript"],
      ],
      stackInfo:
        "Hooks, Context API, React Router, Lazy Loading (React.lazy, Suspense), Responsive Design, Accessibility",
    },
    {
      title: "Backend Development",
      subtitle: "Building RESTful APIs, handling data, and server-side logic.",
      headerIcon: FaServer,
      items: [
        ["Node.js", "SiNodedotjs"],
        ["Express.js", "SiExpress"],
        ["MongoDB", "SiMongodb"],
        ["Mongoose", "SiMongoose"],
      ],
      stackInfo:
        "REST APIs, Authentication (JWT), Middleware, MVC Architecture, Error Handling",
    },
    {
      title: "Tools & Others",
      subtitle:
        "Tools and platforms that help me build, test and ship better products.",
      headerIcon: FaScrewdriverWrench,
      items: [
        ["Git", "SiGit"],
        ["GitHub", "SiGithub"],
        ["Docker", "SiDocker"],
        ["Postman", "SiPostman"],
        ["VS Code", "SiVisualstudiocode"],
      ],
      stackInfo:
        "Version Control, API Testing, Containerization, Code Editor, Development Workflow",
    },
  ];

  const buildPoints = [
    "Clean, maintainable, and modular code structure",
    "Component-based architecture (React best practices)",
    "REST API design with proper error handling",
    "Authentication & secure session management",
    "Performance optimization (lazy loading, caching)",
    "Real-time features using WebSockets (Socket.IO)",
  ];

  const proficiencyItems = [
    { name: "React", icon: "SiReact", level: 4 },
    { name: "Node.js", icon: "SiNodedotjs", level: 4 },
    { name: "MongoDB", icon: "SiMongodb", level: 4 },
    { name: "Express.js", icon: "SiExpress", level: 4 },
    { name: "Tailwind CSS", icon: "SiTailwindcss", level: 3 },
    { name: "JavaScript", icon: "SiJavascript", level: 4 },
  ];

  const renderIcon = (iconName, size = 38) => {
    const IconComponent = iconMap[iconName];
    if (!IconComponent) return null;
    return <IconComponent size={size} className="text-[hsl(197_90%_68%)]" />;
  };

  return (
    <div
      ref={skillsRef}
      className="scroll-mt-16 px-4 sm:px-6 md:px-8 xl:px-12 py-8 md:py-16 [background:radial-gradient(circle_at_top_right,hsl(127_45%_50%_/_0.06),transparent_34%),linear-gradient(180deg,hsl(200_23%_8%),hsl(200_22%_7%))]"
    >
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[1rem] font-bold tracking-[0.08em] text-[var(--text-green)]">
          MY SKILLS
        </p>
        <h1 className="font-bold xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-[var(--text)] mt-3">
          <span className="text-[var(--text-green)]">Technologies</span>{" "}
          <span>I Work With</span>
        </h1>
        <p className="mt-5 text-[1rem] leading-[1.6] text-[var(--text-muted)] md:text-[1.09rem] md:leading-[1.75]">
          A collection of technologies, frameworks, and tools I use to build
          modern, scalable, and efficient web applications.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1100px] grid-cols-1 gap-5 lg:grid-cols-2">
        {skillCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-2xl border border-[hsl(127_24%_38%_/_0.24)] bg-[linear-gradient(150deg,hsl(198_26%_11%_/_0.94),hsl(200_23%_9%_/_0.95))] p-4 pb-[1.2rem] shadow-[inset_0_0_0_1px_hsl(127_18%_36%_/_0.08),0_14px_30px_hsl(0_0%_0%_/_0.18)] md:p-4"
          >
            <header className="mb-[0.85rem] flex flex-col items-start justify-between gap-3 md:mb-[1rem] md:flex-row md:items-center">
              <div className="flex items-start gap-3">
                <span className="inline-flex h-[2.4rem] w-[2.4rem] shrink-0 items-center justify-center rounded-full border border-[hsl(127_28%_44%_/_0.32)] bg-[radial-gradient(circle_at_35%_35%,hsl(127_54%_62%_/_0.2),hsl(200_24%_12%_/_0.75))] text-[var(--text-green)] md:h-[2.65rem] md:w-[2.65rem]">
                  <card.headerIcon />
                </span>
                <div>
                  <h3 className="text-[1.35rem] font-[650] text-[var(--text)] xl:text-[1.65rem]">
                    {card.title}
                  </h3>
                  <p className="mt-[0.35rem] max-w-[32ch] text-[0.92rem] leading-[1.5] text-[var(--text-muted)] md:text-[0.97rem]">
                    {card.subtitle}
                  </p>
                </div>
              </div>
            </header>
            <ul className="grid list-none grid-cols-2 gap-[0.6rem] p-0 md:grid-cols-3 md:gap-3 xl:grid-cols-5">
              {card.items.map((item) => (
                <li
                  key={item[0]}
                  className="flex min-h-[94px] flex-col items-center justify-center gap-[0.7rem] rounded-[0.7rem] border border-[hsl(127_22%_42%_/_0.2)] hover:border-[var(--text-green-light)] bg-[linear-gradient(160deg,hsl(201_22%_14%_/_0.9),hsl(201_19%_12%_/_0.88))] px-2 text-[var(--text)] md:min-h-[100px] xl:min-h-[106px]"
                >
                  {renderIcon(item[1])}
                  <p className="m-0 text-[0.92rem]">{item[0]}</p>
                </li>
              ))}
            </ul>
            <div className="mt-[0.8rem] flex items-start gap-[0.55rem] border-t border-[hsl(127_20%_38%_/_0.2)] pt-[0.72rem]">
              <span
                className="mt-[0.5rem] h-2 w-2 shrink-0 rounded-full bg-[var(--text-green)]"
                aria-hidden="true"
              ></span>
              <p className="text-[0.9rem] leading-[1.45] text-[var(--text-muted)] md:text-[0.96rem]">
                {card.stackInfo}
              </p>
            </div>
          </motion.article>
        ))}

        <motion.article
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="rounded-2xl border border-[hsl(127_24%_38%_/_0.24)] bg-[linear-gradient(150deg,hsl(198_26%_11%_/_0.94),hsl(200_23%_9%_/_0.95))] p-4 pb-[1.2rem] shadow-[inset_0_0_0_1px_hsl(127_18%_36%_/_0.08),0_14px_30px_hsl(0_0%_0%_/_0.18)] md:p-4"
        >
          <header className="mb-[0.5rem] flex items-start justify-between gap-3 md:mb-[1rem] md:items-center">
            <h3 className="text-[1.35rem] font-[650] text-[var(--text)] xl:text-[1.65rem]">
              How I Build & Deliver
            </h3>
          </header>
          <ul className="grid list-none grid-cols-1 gap-y-[0.8rem] gap-x-6 p-0 md:grid-cols-2 md:gap-y-4">
            {buildPoints.map((point) => (
              <li
                key={point}
                className="flex gap-[0.55rem] text-[1rem] text-[var(--text-muted)]"
              >
                <FaCircleCheck className="mt-1 shrink-0 text-[var(--text-green)]" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </motion.article>
      </div>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, delay: 0.25 }}
        className="mx-auto mt-5 max-w-[1100px] rounded-2xl border border-[hsl(127_24%_38%_/_0.24)] bg-[linear-gradient(150deg,hsl(198_26%_11%_/_0.94),hsl(200_23%_9%_/_0.95))] p-4 pb-4 shadow-[inset_0_0_0_1px_hsl(127_18%_36%_/_0.08),0_14px_30px_hsl(0_0%_0%_/_0.18)]"
      >
        <header className="mb-[0.8rem] flex flex-col items-start justify-between gap-3 md:flex-row md:items-center">
          <div className="flex items-start gap-3">
            <span className="inline-flex h-[2.4rem] w-[2.4rem] shrink-0 items-center justify-center rounded-full border border-[hsl(127_28%_44%_/_0.32)] bg-[radial-gradient(circle_at_35%_35%,hsl(127_54%_62%_/_0.2),hsl(200_24%_12%_/_0.75))] text-[var(--text-green)] md:h-[2.65rem] md:w-[2.65rem]">
              <FaChartSimple />
            </span>
            <div>
              <h3 className="text-[1.35rem] font-[650] text-[var(--text)] xl:text-[1.65rem]">
                Proficiency Overview
              </h3>
            </div>
          </div>
        </header>

        <ul className="grid list-none grid-cols-1 gap-[0.55rem] p-0 md:grid-cols-2 md:gap-[0.7rem] xl:grid-cols-3">
          {proficiencyItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between gap-3 rounded-xl border border-[hsl(127_20%_38%_/_0.22)] hover:border-[var(--text-green-light)] bg-[hsl(201_20%_13%_/_0.78)] px-3 py-[0.6rem]"
            >
              <span className="inline-flex items-center gap-2 text-[0.95rem] text-[var(--text)]">
                {renderIcon(item.icon, 20)}
                <span>{item.name}</span>
              </span>
              <span
                className="inline-flex gap-[0.28rem]"
                aria-label={`${item.name} level ${item.level} of 5`}
              >
                {[1, 2, 3, 4, 5].map((dot) => (
                  <span
                    key={dot}
                    className={`h-[0.42rem] w-[0.42rem] rounded-full ${
                      dot <= item.level
                        ? "bg-[hsl(147_66%_63%)] shadow-[0_0_8px_hsl(147_66%_63%_/_0.45)]"
                        : "bg-[hsl(200_18%_34%_/_0.8)]"
                    }`}
                  ></span>
                ))}
              </span>
            </li>
          ))}
        </ul>
      </motion.article>
    </div>
  );
}
