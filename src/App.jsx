import "./App.css";
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

function App() {
  const [showContact, setShowContact] = useState(false);
  const [showSmallScreenNav, setShowSmallScreenNav] = useState(false);
  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);

  useEffect(() => {
    if (showContact) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [showContact]);

  return (
    <div className="flex flex-col">
      <Navbar
        setShowContact={setShowContact}
        showSmallScreenNav={showSmallScreenNav}
        setShowSmallScreenNav={setShowSmallScreenNav}
        refs={{ homeRef, projectsRef, skillsRef, aboutRef, contactRef }}
      />
      {showSmallScreenNav ? (
        <NavbarSmallScreen
          setShowSmallScreenNav={setShowSmallScreenNav}
          refs={{ homeRef, projectsRef, skillsRef, aboutRef, contactRef }}
        />
      ) : null}
      <LandingPage homeRef={homeRef} setShowContact={setShowContact} />
      <Projects projectsRef={projectsRef} />
      <ScrollingProjects scrollLeft={true} />
      <ScrollingProjects scrollLeft={false} />
      <Skills skillsRef={skillsRef} />
      <About aboutRef={aboutRef} setShowContact={setShowContact} />
      <Contact
        contactRef={contactRef}
        showContact={showContact}
        setShowContact={setShowContact}
      />
      <Footer />
      <StaticContactBox
        showContact={showContact}
        setShowContact={setShowContact}
      />
    </div>
  );
}

export default App;
