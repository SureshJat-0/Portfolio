import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { MdEmail } from "react-icons/md";

export default function ({ refs }) {
  const { homeRef, projectsRef, skillsRef, aboutRef, contactRef } = refs;

  const elements = [
    [homeRef, "Home"],
    [projectsRef, "Projects"],
    [skillsRef, "Skills"],
    [aboutRef, "About"],
    [contactRef, "Contact"],
  ];

  return (
    <footer className="relative mt-20 w-full overflow-hidden">
      <div className="bg-gradient-to-b from-[var(--bg-light)] to-[var(--bg)] px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div>
              <h3 className="text-3xl font-bold bg-gradient-to-r from-[var(--text-green)] to-[var(--bg)] bg-clip-text text-transparent mb-3">
                Suresh Jat
              </h3>
              <p className="text-[var(--text-muted)]/80 text-sm">
                Full-stack developer passionate about creating beautiful and
                functional web experiences.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-[var(--text-muted)]/80 text-sm">
                {elements.map((element, ind) => (
                  <li
                    key={ind}
                    onClick={() =>
                      element[0].current.scrollIntoView({ behavior: "smooth" })
                    }
                    className="hover:text-[var(--text-green)] transition-colors duration-200 cursor-pointer"
                  >
                    {element[1]}
                  </li>
                ))}
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a
                  href="https://github.com/SureshJat-0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[var(--text-green)]/10 hover:bg-[var(--text-green)]/50 flex items-center justify-center text-2xl text-[var(--text-green)] hover:text-white transition-all duration-200"
                >
                  <SiGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/suresh-jat-340b46322/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[var(--text-green)]/10 hover:bg-[var(--text-green)]/50 flex items-center justify-center text-2xl text-[var(--text-green)] hover:text-white transition-all duration-200"
                >
                  <SiLinkedin />
                </a>
                <a
                  href="https://x.com/SureshJat012"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-[var(--text-green)]/10 hover:bg-[var(--text-green)]/50 flex items-center justify-center text-2xl text-[var(--text-green)] hover:text-white transition-all duration-200"
                >
                  <SiX />
                </a>
                <a
                  href="mailto:sureshjatcode@gmail.com"
                  className="w-12 h-12 rounded-full bg-[var(--text-green)]/10 hover:bg-[var(--text-green)]/50 flex items-center justify-center text-2xl text-[var(--text-green)] hover:text-white transition-all duration-200"
                >
                  <MdEmail />
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-[var(--text-green)]/12 to-transparent my-8"></div>

          {/* Bottom Section */}
          <div className="text-center space-y-3">
            <p className="text-[var(--text-muted)] text-sm">
              © 2026 Suresh Jat. All rights reserved.
            </p>
            <p className="text-[var(--text-muted)]/80 text-xs">
              Build with <span className="text-red-500">❤️</span> using React,
              Tailwind CSS & Motion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
