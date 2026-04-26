import NavbarItems from "./NavbarItems";
import { motion } from "motion/react";

export default function NavbarSmallScreen({
  setShowSmallScreenNav,
  refs,
  activeItem,
  setActiveItem,
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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-[25] bg-black/35 px-4 pt-[4.8rem] backdrop-blur-[1px] md:hidden"
      onClick={() => setShowSmallScreenNav(false)}
    >
      <motion.div
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.22 }}
        onClick={(e) => e.stopPropagation()}
        className="mx-auto w-full max-w-[560px] rounded-2xl border border-[hsl(127_20%_25%_/_0.45)] bg-[hsl(202_58%_7%_/_0.9)] p-3 shadow-[0_18px_30px_hsl(200_50%_2%_/_0.65)]"
      >
        <div className="mb-2 border-b border-[var(--text-green)]/15 px-1 pb-2 text-xs font-semibold tracking-[0.1em] text-[var(--text-green)]/80">
          NAVIGATION
        </div>

        <ul className="flex list-none flex-col gap-1 text-[var(--text)]">
          {navItems.map((item, ind) => (
            <NavbarItems
              name={item[0]}
              currRef={item[1]}
              key={ind}
              setShowSmallScreenNav={setShowSmallScreenNav}
              variant="mobile"
              isActive={activeItem === item[0]}
              onNavigate={setActiveItem}
            />
          ))}
        </ul>
      </motion.div>
    </motion.div>
  );
}
