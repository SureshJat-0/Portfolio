import NavbarItems from "./NavbarItems";

export default function NavbarSmallScreen({ setShowSmallScreenNav, refs }) {
  const { homeRef, projectsRef, skillsRef, aboutRef, contactRef } = refs;
  const navItems = [
    ["Home", homeRef],
    ["Projects", projectsRef],
    ["Skills", skillsRef],
    ["About", aboutRef],
    ["Contact", contactRef],
  ];
  return (
    <div className={`fixed h-screen w-[40vw] bg-[var(--bg-light)] z-3 py-20`}>
      <ul className="list-none text-[var(--text)] flex flex-col w-ful h-full [&_*]">
        {navItems.map((item, ind) => (
          <NavbarItems
            name={item[0]}
            currRef={item[1]}
            key={ind}
            setShowSmallScreenNav={setShowSmallScreenNav}
          />
        ))}
      </ul>
    </div>
  );
}
