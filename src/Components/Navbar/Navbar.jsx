import ContactButton from "../Contact/ContactButton";
import logo from "../../assets/logo.png";
import NavbarItems from "./NavbarItems";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

export default function Navbar({
  setShowContact,
  refs,
  showSmallScreenNav,
  setShowSmallScreenNav,
}) {
  const { homeRef, projectsRef, skillsRef, aboutRef, contactRef } = refs;

  return (
    <div className="fixed w-screen flex justify-between items-center p-4 bg-[var(--bg)] z-[5]">
      <div className="mx-2 font-extrabold text-2xl text-[var(--text)] flex justify-center items-center">
        {showSmallScreenNav ? (
          <AiOutlineClose
            onClick={() => {
              setShowSmallScreenNav(false);
            }}
            size={24}
            className="text-[var(--text)] mx-4 block md:hidden cursor-pointer"
          />
        ) : (
          <HiMenu
            onClick={() => {
              setShowSmallScreenNav(true);
            }}
            size={24}
            className="text-[var(--text)] mx-4 block md:hidden cursor-pointer"
          />
        )}

        <img src={logo} className="h-10" />
      </div>
      <div className="">
        <ul className="list-none hidden md:flex mx-2 text-[var(--text)]">
          <NavbarItems name={"Home"} currRef={homeRef} />
          <NavbarItems name={"Projects"} currRef={projectsRef} />
          <NavbarItems name={"Skills"} currRef={skillsRef} />
          <NavbarItems name={"About"} currRef={aboutRef} />
          <NavbarItems name={"Contact"} currRef={contactRef} />
        </ul>
      </div>
      <div className="mx-4">
        <ContactButton setShowContact={setShowContact} />
      </div>
    </div>
  );
}
