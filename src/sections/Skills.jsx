import { motion } from "motion/react";
import {
  FaChartSimple,
  FaCircleCheck,
  FaCode,
  FaDatabase,
  FaInfinity,
  FaRocket,
  FaScrewdriverWrench,
  FaServer,
} from "react-icons/fa6";
import {
  SiCss3,
  SiDocker,
  SiExpress,
  SiGithub,
  SiGithubactions,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMongodb,
  SiMysql,
  SiNginx,
  SiNodedotjs,
  SiPostman,
  SiReact,
  SiRedis,
  SiRender,
  SiTailwindcss,
  SiVercel,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export default function Skills({ skillsRef }) {
  const sharedCardClass =
    "rounded-[1.4rem] border border-[hsl(127_24%_38%_/_0.22)] bg-[linear-gradient(150deg,hsl(198_26%_11%_/_0.94),hsl(200_23%_8%_/_0.96))] shadow-[inset_0_0_0_1px_hsl(127_18%_36%_/_0.08),0_16px_34px_hsl(0_0%_0%_/_0.2)]";

  const skillCards = [
    {
      title: "Frontend Development",
      subtitle:
        "Building responsive, interactive and accessible user interfaces.",
      headerIcon: FaCode,
      items: [
        ["React", SiReact],
        ["Tailwind CSS", SiTailwindcss],
        ["HTML5", SiHtml5],
        ["CSS3", SiCss3],
        ["JavaScript (ES6+)", SiJavascript],
      ],
      stackInfo:
        "Hooks, Context API, React Router, Lazy Loading (React.lazy, Suspense), Responsive Design, Accessibility",
    },
    {
      title: "Backend Development",
      subtitle: "Building RESTful APIs, handling data, and server-side logic.",
      headerIcon: FaServer,
      items: [
        ["Node.js", SiNodedotjs],
        ["Express.js", SiExpress],
        ["MongoDB", SiMongodb],
        ["Redis", SiRedis],
      ],
      stackInfo:
        "REST APIs, Authentication (JWT), Middleware, MVC Architecture, Redis caching, Error Handling",
    },
    {
      title: "Databases",
      subtitle: "Databases and query languages I work with.",
      headerIcon: FaDatabase,
      items: [
        ["MongoDB", SiMongodb],
        ["MySQL", SiMysql],
        ["Redis", SiRedis],
        ["SQL", FaDatabase],
      ],
      stackInfo:
        "Schema Design, Indexing, Aggregation, Relationships, Query Optimization, Transactions",
    },
    {
      title: "DevOps & CI/CD",
      subtitle:
        "Automating builds, tests and deployments for reliable delivery.",
      headerIcon: FaInfinity,
      items: [
        ["Docker", SiDocker],
        ["GitHub Actions", SiGithubactions],
        // ["Nginx", SiNginx],
        ["Vercel", SiVercel],
        ["Render", SiRender],
      ],
      stackInfo:
        "CI/CD Pipelines, Docker Builds, Multi-stage Dockerfiles, Image Publishing, Reverse Proxy, Deployments, Environment Management",
    },
    {
      title: "Tools & Utilities",
      subtitle:
        "Tools and platforms that help me build, test and ship better products.",
      headerIcon: FaScrewdriverWrench,
      items: [
        ["Git", SiGit],
        ["GitHub", SiGithub],
        ["Postman", SiPostman],
        ["VS Code", VscVscode],
        // ["Linux", SiLinux],
      ],
      stackInfo:
        "Version Control, API Testing, Code Editor, Command Line, Development Workflow",
    },
    {
      title: "How I Build & Deliver",
      subtitle:
        "My approach to building scalable, maintainable and performant applications.",
      headerIcon: FaRocket,
      points: [
        "Production-ready applications",
        "Scalable REST API architecture",
        "Authentication & Authorization",
        "CI/CD & Automated Deployment",
        "Dockerized Development",
        "Performance Optimization",
        "Real-time Communication (Socket.IO)",
        "Responsive UI Development",
      ],
    },
  ];

  // const proficiencyItems = [
  //   { name: "React", icon: SiReact, level: 4 },
  //   { name: "Node.js", icon: SiNodedotjs, level: 4 },
  //   { name: "MongoDB", icon: SiMongodb, level: 4 },
  //   { name: "Express.js", icon: SiExpress, level: 4 },
  //   { name: "Tailwind CSS", icon: SiTailwindcss, level: 3 },
  //   { name: "JavaScript", icon: SiJavascript, level: 4 },
  // ];

  const renderIcon = (IconComponent, size = 38) => {
    if (!IconComponent) return null;
    return <IconComponent size={size} className="text-[hsl(197_90%_68%)]" />;
  };

  return (
    <div
      ref={skillsRef}
      className="relative isolate scroll-mt-16 overflow-hidden px-4 py-10 sm:px-6 md:px-8 md:py-16 xl:px-12 [background:radial-gradient(circle_at_top_right,hsl(127_45%_50%_/_0.08),transparent_34%),linear-gradient(180deg,hsl(200_23%_8%),hsl(200_22%_7%))]"
    >
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="font-bold text-3xl text-[var(--text)] sm:text-4xl md:text-5xl xl:text-6xl">
          <span className="text-[var(--text-green)]">Technologies</span>{" "}
          <span>I Work With</span>
        </h1>
        <p className="mx-auto mt-5 max-w-3xl text-[1rem] leading-[1.7] text-[var(--text-muted)] md:text-[1.08rem]">
          A collection of technologies, frameworks, and tools I use to build
          modern, scalable, and efficient web applications.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1536px] grid-cols-1 gap-5 lg:grid-cols-2 xl:grid-cols-3">
        {skillCards.map((card, index) => (
          <motion.article
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className={`${sharedCardClass} p-4 pb-[1.15rem] md:p-[1.05rem]`}
          >
            <header className="mb-[0.9rem] flex items-start gap-3">
              <span className="inline-flex h-[2.75rem] w-[2.75rem] shrink-0 items-center justify-center rounded-full border border-[hsl(127_28%_44%_/_0.32)] bg-[radial-gradient(circle_at_35%_35%,hsl(127_54%_62%_/_0.22),hsl(200_24%_12%_/_0.76))] text-[var(--text-green)] shadow-[0_0_0_1px_hsl(127_28%_44%_/_0.08),0_0_24px_hsl(127_54%_62%_/_0.08)]">
                <card.headerIcon size={18} />
              </span>
              <div>
                <h2 className="text-[1.25rem] font-[650] leading-[1.2] text-[var(--text)] xl:text-[1.45rem]">
                  {card.title}
                </h2>
                {card.subtitle && (
                  <p className="mt-[0.38rem] max-w-[32ch] text-[0.91rem] leading-[1.55] text-[var(--text-muted)] md:text-[0.96rem]">
                    {card.subtitle}
                  </p>
                )}
              </div>
            </header>

            {card.items?.length ? (
              <>
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

                {card.stackInfo ? (
                  <div className="mt-[0.8rem] flex items-start gap-[0.55rem] border-t border-[hsl(127_20%_38%_/_0.2)] pt-[0.72rem]">
                    <span
                      className="mt-[0.5rem] h-2 w-2 shrink-0 rounded-full bg-[var(--text-green)]"
                      aria-hidden="true"
                    ></span>
                    <p className="text-[0.9rem] leading-[1.45] text-[var(--text-muted)] md:text-[0.96rem]">
                      {card.stackInfo}
                    </p>
                  </div>
                ) : null}
              </>
            ) : (
              <ul className="grid list-none grid-cols-1 gap-y-[0.8rem] gap-x-6 p-0 md:grid-cols-2 md:gap-y-4">
                {card.points.map((point) => (
                  <li
                    key={point}
                    className="flex gap-[0.55rem] text-[1rem] text-[var(--text-muted)]"
                  >
                    <FaCircleCheck className="mt-1 shrink-0 text-[var(--text-green)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            )}
          </motion.article>
        ))}
      </div>

      {/* <motion.article
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.45, delay: 0.25 }}
        className={`${sharedCardClass} mx-auto mt-5 max-w-[1536px] p-4 pb-4 md:p-[1.15rem]`}
      >
        <header className="mb-[0.95rem] flex items-start gap-3">
          <span className="inline-flex h-[2.75rem] w-[2.75rem] shrink-0 items-center justify-center rounded-full border border-[hsl(127_28%_44%_/_0.32)] bg-[radial-gradient(circle_at_35%_35%,hsl(127_54%_62%_/_0.22),hsl(200_24%_12%_/_0.76))] text-[var(--text-green)] shadow-[0_0_0_1px_hsl(127_28%_44%_/_0.08),0_0_24px_hsl(127_54%_62%_/_0.08)]">
            <FaChartSimple size={18} />
          </span>
          <div>
            <h3 className="text-[1.25rem] font-[650] leading-[1.2] text-[var(--text)] xl:text-[1.45rem]">
              Proficiency Overview
            </h3>
            <p className="mt-[0.38rem] max-w-3xl text-[0.91rem] leading-[1.55] text-[var(--text-muted)] md:text-[0.96rem]">
              A quick snapshot of the areas I use most often when shipping and
              iterating on products.
            </p>
          </div>
        </header>

        <ul className="grid list-none grid-cols-1 gap-[0.7rem] p-0 md:grid-cols-2 xl:grid-cols-3">
          {proficiencyItems.map((item) => (
            <li
              key={item.name}
              className="flex items-center justify-between gap-3 rounded-xl border border-[hsl(127_20%_38%_/_0.22)] hover:border-[var(--text-green-light)] bg-[hsl(201_20%_13%_/_0.78)] px-3 py-[0.6rem]"
            >
              <span className="inline-flex items-center gap-2 text-[0.95rem] text-[var(--text)]">
                {renderIcon(item.icon, 20)}
                <span>{item.name}</span>
              </span>
              <span className="inline-flex gap-[0.28rem]">
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
      </motion.article> */}
    </div>
  );
}
