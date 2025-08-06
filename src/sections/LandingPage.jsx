import ContactButton from "../Components/Contact/ContactButton";
import { motion } from "motion/react";
import RectBg from "../Components/RectBg";

export default function LandingPage({ homeRef, setShowContact }) {
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
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          MERN Stack Dev & DSA Enthusiast
        </motion.h1>
      </div>
      <div className="px-2 mb-12">
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
      <RectBg top={55} right={0} delay={1.3} />
      <RectBg top={55} right={36} delay={1.1} />
      <RectBg top={73} right={18} delay={1.2} />
      <RectBg top={91} right={0} delay={1} />
      <RectBg top={73} right={54} delay={1.5} />
      <RectBg top={91} right={54} delay={1.4} />
      <RectBg top={109} right={36} delay={1.6} />
    </div>
  );
}
