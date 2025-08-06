import NavbarItems from "./NavbarItems";

export default function NavbarSmallScreen({ setShowSmallScreenNav, refs }) {
  const { homeRef, projectsRef, skillsRef, aboutRef, contactRef } = refs;
  return (
    <div className={`fixed h-screen w-[40vw] bg-[var(--bg-light)] z-3 py-20`}>
      <ul className="list-none text-[var(--text)] flex flex-col w-ful h-full [&_*]">
        <NavbarItems name={"Home"} currRef={homeRef} setShowSmallScreenNav={setShowSmallScreenNav} />
        <NavbarItems name={"Projects"} currRef={projectsRef} setShowSmallScreenNav={setShowSmallScreenNav} />
        <NavbarItems name={"Skills"} currRef={skillsRef} setShowSmallScreenNav={setShowSmallScreenNav} />
        <NavbarItems name={"About"} currRef={aboutRef} setShowSmallScreenNav={setShowSmallScreenNav} />
        <NavbarItems name={"Contact"} currRef={contactRef} setShowSmallScreenNav={setShowSmallScreenNav} />
      </ul>
    </div>
  );
}
