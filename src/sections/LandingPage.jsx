import ContactButton from "../Components/Contact/ContactButton";
import { motion } from "motion/react";
import RectBg from "../Components/RectBg";
import Typewriter from "typewriter-effect";

export default function LandingPage({ homeRef, setShowContact }) {
  // Rectangles of background : top, right and delay of animation
  const rectsInfo = [
    [55, 0, 1.3],
    [55, 36, 1.1],
    [73, 18, 1.2],
    [91, 0, 1],
    [73, 54, 1.5],
    [91, 54, 1.4],
    [109, 36, 1.6],
  ];
  return (
    <div
      ref={homeRef}
      className="scroll-mt-16 min-h-screen w-screen flex flex-col justify-between pt-32 pb-8 md:ps-20 ps-8"
    >
      <div className="lg:text-4xl md:text-3xl text-2xl font-bold text-[var(--text-green)] leading-relaxed tracking-wider">
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0 }}
        >
          Hi, I'm Suresh Jat
        </motion.h1>
        <Typewriter
          options={{
            strings: ["MERN Stack Developer", "DSA Enthusiast"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="px-2 pe-8 mb-16">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="max-w-sm text-[var(--text-green-light)] my-6 md:text-base text-sm"
        >
          I'm Suresh Jat, a web developer with a strong DSA background. I build
          responsive MERN stack applications and enjoy learning new technologies
          through hands-on coding and real-world projects.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <ContactButton setShowContact={setShowContact} />
        </motion.div>
      </div>
      {/* ractangles for background  */}
      {rectsInfo.map((rect, ind) => (
        <RectBg top={rect[0]} right={rect[1]} delay={rect[2]} key={ind} />
      ))}
    </div>
  );
}
