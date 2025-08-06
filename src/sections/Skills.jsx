import SkillBox from "../Components/SkillBox";

export default function Skills({ skillsRef }) {
  const skills = [
    {
      Frontend: [
        ["React", "SiReact"],
        ["TailwindCSS", "SiTailwindcss"],
        ["HTML", "SiHtml5"],
        ["CSS", "SiCss3"],
        ["JavaScript", "SiJavascript"],
      ],
    },
    {
      Backend: [
        ["Node.js", "SiNodedotjs"],
        ["Express.js", "SiExpress"],
        ["MongoDB", "SiMongodb"],
        ["Mongoose", "SiMongodb"],
      ],
    },
    {
      "Tools & Other": [
        ["Git", "SiGit"],
        ["GitHub", "SiGithub"],
        ["Figma", "SiFigma"],
        ["VS Code", ""],
        ["Postman", "SiPostman"],
      ],
    },
  ];
  return (
    <div
      ref={skillsRef}
      className="scroll-mt-16 xl:py-6 lg:py-4 md:py-2 py-2 xl:my-6 lg:my-4 md:my-2 sm:my-2 xl:px-12 lg:px-8 md:px-8 sm:px-8 px-4"
    >
      <h1 className="font-bold xl:text-5xl lg:text-5xl md:text-4xl sm:text-3xl text-2xl text-center text-[var(--text)] md:my-12 mt-6">
        <span className="text-[var(--text-green)]">Technologies</span>{" "}
        <span> I Work With</span>
      </h1>
      <div className="flex flex-col">
        {skills.map((skill, ind) => (
          <SkillBox techStack={skill} key={ind} />
        ))}
      </div>
    </div>
  );
}
