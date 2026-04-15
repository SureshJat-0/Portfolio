import ContactButton from "../Contact/ContactButton";
import favicon from "/favicon.ico";
import NavbarItems from "./NavbarItems";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "motion/react";

export default function Navbar({
  setShowContactModal,
  refs,
  showSmallScreenNav,
  setShowSmallScreenNav,
}) {
  const { homeRef, projectsRef, skillsRef, aboutRef, contactRef } = refs;
  const navItems = [
    ["Home", homeRef],
    ["Projects", projectsRef],
    ["Skills", skillsRef],
    ["About", aboutRef],
    ["Contact", contactRef],
  ];
  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed w-screen flex justify-between items-center px-4 py-2 md:py-4 bg-[var(--bg)] z-[5]"
    >
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

        <img src={favicon} className="h-10" />
      </div>
      <div className="">
        <ul className="list-none hidden md:flex mx-2 text-[var(--text)]">
          {navItems.map((item, ind) => (
            <NavbarItems name={item[0]} currRef={item[1]} key={ind} />
          ))}
        </ul>
      </div>
      <div className="mx-4">
        <ContactButton setShowContactModal={setShowContactModal} />
      </div>
    </motion.div>
  );
}
