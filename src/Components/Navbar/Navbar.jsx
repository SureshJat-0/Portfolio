import favicon from "/favicon.ico";
import NavbarItems from "./NavbarItems";
import { useEffect, useRef, useState } from "react";
import { HiMenu } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { motion } from "motion/react";
import PrimaryBtn from "../buttons/primaryBtn";
import SecondaryBtn from "../buttons/SecondaryBtn";

export default function Navbar({
  setShowContactModal,
  refs,
  showSmallScreenNav,
  setShowSmallScreenNav,
  activeItem,
  setActiveItem,
}) {
  const { homeRef, projectsRef, skillsRef, aboutRef, contactRef } = refs;
  const lastScrollYRef = useRef(0);
  const [isVisible, setIsVisible] = useState(true);
  const navItems = [
    ["Home", homeRef],
    ["Projects", projectsRef],
    ["Skills", skillsRef],
    ["About", aboutRef],
    ["Contact", contactRef],
  ];

  const handleLogoClick = () => {
    setActiveItem("Home");
    setShowSmallScreenNav(false);
    homeRef.current.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const isScrollingDown = currentScrollY > lastScrollYRef.current;

      if (currentScrollY < 12) {
        setIsVisible(true);
      } else if (isScrollingDown && !showSmallScreenNav) {
        setIsVisible(false);
      } else if (!isScrollingDown) {
        setIsVisible(true);
      }

      lastScrollYRef.current = currentScrollY;
    };

    lastScrollYRef.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showSmallScreenNav]);

  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: isVisible ? 0 : -100, opacity: 1 }}
      transition={{ duration: 0.28, ease: "easeOut" }}
      className="fixed inset-x-0 top-0 z-[30]"
    >
      <div className="flex w-full items-center justify-between bg-[var(--bg)] px-3 py-2 backdrop-blur-lg md:px-4 md:py-2.5">
        <button
          onClick={handleLogoClick}
          className="inline-flex items-center rounded-lg p-1 transition-transform duration-200 hover:scale-[1.03]"
          aria-label="Go to home"
        >
          <img src={favicon} className="h-8 w-8 md:h-9 md:w-9" alt="Logo" />
        </button>

        <nav className="hidden md:block">
          <ul className="flex list-none items-center gap-6">
            {navItems.map((item, ind) => (
              <NavbarItems
                name={item[0]}
                currRef={item[1]}
                key={ind}
                isActive={activeItem === item[0]}
                onNavigate={setActiveItem}
              />
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <PrimaryBtn
            Title={"Let's Talk"}
            ClickFun={() => {
              setShowSmallScreenNav(false);
              setShowContactModal(true);
            }}
          />
          <button
            onClick={() => {
              setShowSmallScreenNav((prev) => !prev);
            }}
            className="inline-flex items-center justify-center rounded-lg border border-[var(--text-green)]/20 bg-[hsl(200_22%_10%_/_0.68)] p-2 text-[var(--text)] transition-colors duration-200 hover:border-[var(--text-green)]/40 hover:text-[var(--text-green-light)] md:hidden"
            aria-label={
              showSmallScreenNav ? "Close navigation" : "Open navigation"
            }
            aria-expanded={showSmallScreenNav}
          >
            {showSmallScreenNav ? (
              <AiOutlineClose size={20} />
            ) : (
              <HiMenu size={20} />
            )}
          </button>
        </div>
      </div>
    </motion.header>
  );
}
