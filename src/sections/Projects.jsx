import Project from "../Components/Project";
import ChatApp from "../assets/ChatApp.png";
import LogicLoop from "../assets/LogicLoop.png";
import PlacePort from "../assets/PlacePort.png";
import Twitter from "../assets/Twitter.png";
import Amazon from "../assets/Amazon.png";
import EarBeats from "../assets/EarBeats.png";

export default function Projects({ projectsRef }) {
  const projects = [
    {
      title: "Chat App (Full Stack - MERN)",
      description:
        "A full-stack real-time chat app with authentication and WebSockets.",
      techStack: ["Socket_IO", "React", "Node_js", "Express_js", "MongoDB"],
      imageSource: ChatApp,
      gitHubLink: [
        true,
        "https://github.com/SureshJat-0/MERN/tree/main/ChatApp",
      ],
      liveLink: [true, "http://suresh-chat-client.onrender.com/"],
    },
    {
      title: "Place Port (EJS, Backend, Database)",
      description:
        "Airbnb-inspired web app for discovering, listing, and booking unique places to stay, complete with user authentication, image uploads, and database-driven listings.",
      techStack: ["Node_js", "Express_js", "MongoDB", "EJS"],
      imageSource: PlacePort,
      gitHubLink: [true, "https://github.com/SureshJat-0/MajorProjects"],
      liveLink: [false, ""],
    },
    {
      title: "Twitter Clone (Full Stack - MERN)",
      description:
        "A full-stack Twitter clone that lets users sign up, post tweets — featuring real-time updates and a MongoDB-powered backend.",
      techStack: ["React", "Node_js", "Express_js", "MongoDB"],
      imageSource: Twitter,
      gitHubLink: [
        true,
        "https://github.com/SureshJat-0/MERN/tree/main/Twitter",
      ],
      liveLink: [false, ""],
    },
    {
      title: "Logic Loop ( Full Stack - MERN )",
      description:
        "A full-stack web app with user authentication, game-playing features, and persistent game history storage using a MongoDB database.",
      techStack: ["React", "Node_js", "Express_js", "MongoDB"],
      imageSource: LogicLoop,
      gitHubLink: [
        true,
        "https://github.com/SureshJat-0/MERN/tree/main/LogicLoop",
      ],
      liveLink: [false, ""],
    },
    {
      title: "Amazon Clone",
      description:
        "A frontend-only project built using HTML, CSS, and JavaScript when I began learning web development. It replicates core Amazon UI features like product listings, navbar, and a basic cart.",
      techStack: ["HTML", "CSS", "JavaScript"],
      imageSource: Amazon,
      gitHubLink: [
        true,
        "https://github.com/SureshJat-0/Front-End/tree/main/AmazonC",
      ],
      liveLink: [false, ""],
    },
    {
      title: "Ear Beats",
      description:
        "A visually engaging and animated frontend website that showcases details about headsets, earphones, and audio gear. Built to highlight smooth animations, modern UI design.",
      techStack: ["HTML", "CSS", "JavaScript"],
      imageSource: EarBeats,
      gitHubLink: [
        true,
        "https://github.com/SureshJat-0/projects-front-end/tree/main/EarBeats",
      ],
      liveLink: [false, ""],
    },
  ];

  return (
    <div
      ref={projectsRef}
      className="scroll-mt-16 w-full xl:px-12 lg:px-6 md:px-8 px-4 min-h-screen xl:my-12 lg:my-6 md:my-4 my-4 pt-8"
    >
      {/* header  */}
      <div className="xl:m-16 lg:m-12 md:m-8 m-4 flex">
        <div className="lg:text-4xl md:text-3xl sm:text-3xl text-2xl font-bold flex flex-nowrap gap-2">
          <span className="text-[var(--text)]">My</span>
          <span className="text-[var(--text-green)]">Projects</span>
        </div>
        <div className="border-b  xl:w-[70vw] lg:w-[65vw] md:w-[60vw] sm:w-[55vw] w-[35vw] mb-4 mx-4 border-[var(--text-green-light)]"></div>
        <div className="rounded-full md:h-8 md:w-8 h-6 w-6 border border-[var(--text-green-light)] bg-[var(--bg)] relative right-4 top-1 z-[-2]"></div>
      </div>
      {/* projects  */}
      <div className="w-full grid md:grid-cols-2 sm:grid-cols-1">
        {projects.map((project, ind) => (
          <Project
            title={project.title}
            descreption={project.description}
            techStack={project.techStack}
            imageSource={project.imageSource}
            gitHubLink={project.gitHubLink}
            liveLink={project.liveLink}
            key={ind}
          />
        ))}
      </div>
    </div>
  );
}
