import { useEffect, useRef, useState } from "react";
import StaticContactBox from "./Components/Contact/StaticContactBox";
import Navbar from "./Components/Navbar/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";
import LandingPage from "./sections/LandingPage";
import Projects from "./sections/Projects";
import ScrollingProjects from "./sections/ScrollingProjects";
import Skills from "./sections/Skills";
import NavbarSmallScreen from "./Components/Navbar/NavbarSmallScreen";
import { Toaster } from "react-hot-toast";

function App() {
  const [showContactModal, setShowContactModal] = useState(false);
  const [showSmallScreenNav, setShowSmallScreenNav] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (showContactModal) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showContactModal]);

  useEffect(() => {
    const sections = [
      { name: "Home", ref: homeRef },
      { name: "Projects", ref: projectsRef },
      { name: "Skills", ref: skillsRef },
      { name: "About", ref: aboutRef },
      { name: "Contact", ref: contactRef },
    ];

    const updateActiveSection = () => {
      const scrollMarker = window.scrollY + 140;
      let currentSection = "Home";

      sections.forEach((section) => {
        const element = section.ref.current;
        if (!element) return;

        const sectionTop = element.offsetTop;
        if (scrollMarker >= sectionTop) {
          currentSection = section.name;
        }
      });

      setActiveItem((prev) =>
        prev === currentSection ? prev : currentSection,
      );
    };

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, []);

  return (
    <div className="flex flex-col">
      <Toaster
        position="top-center"
        reverseOrder={false}
        toastOptions={{
          style: {
            background: "var(--bg-light)",
            color: "var(--text)",
            border: "1px solid #374151",
          },
        }}
      />
      <Navbar
        setShowContactModal={setShowContactModal}
        showSmallScreenNav={showSmallScreenNav}
        setShowSmallScreenNav={setShowSmallScreenNav}
        activeItem={activeItem}
        setActiveItem={setActiveItem}
        refs={{ homeRef, projectsRef, skillsRef, aboutRef, contactRef }}
      />
      {showSmallScreenNav ? (
        <NavbarSmallScreen
          setShowSmallScreenNav={setShowSmallScreenNav}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
          refs={{ homeRef, projectsRef, skillsRef, aboutRef, contactRef }}
        />
      ) : null}
      <LandingPage
        homeRef={homeRef}
        projectsRef={projectsRef}
        setShowContactModal={setShowContactModal}
      />
      <Projects projectsRef={projectsRef} />
      <ScrollingProjects scrollLeft={true} />
      <ScrollingProjects scrollLeft={false} />
      <Skills skillsRef={skillsRef} />
      <About aboutRef={aboutRef} setShowContactModal={setShowContactModal} />
      <Contact
        contactRef={contactRef}
        showContactModal={showContactModal}
        setShowContactModal={setShowContactModal}
      />
      <Footer
        refs={{ homeRef, projectsRef, skillsRef, aboutRef, contactRef }}
      />
      <StaticContactBox
        showContactModal={showContactModal}
        setShowContactModal={setShowContactModal}
      />
    </div>
  );
}

export default App;
