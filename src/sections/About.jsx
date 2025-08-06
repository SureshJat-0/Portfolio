import MyPhoto from "../assets/MyPhoto.png";
import ContactButton from "../Components/Contact/ContactButton";
import { motion } from "motion/react";

export default function ({ setShowContact, aboutRef }) {
  return (
    <div ref={aboutRef} className="scroll-mt-16 w-full mb-8 my-4 py-8 lg:px-12 md:px-4 sm:px-2">
      <motion.h1
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="font-bold lg:text-5xl md:text-4xl text-4xl text-center text-[var(--text)] my-12"
      >
        <span className="text-[var(--text-green)]">Who</span> I Am
      </motion.h1>
      <div className="flex sm:flex-row flex-col items-center w-full h-full">
        <div className="lg:w-[50%] sm:w-[40%] flex justify-center items-center flex-col">
          <img src={MyPhoto} alt="profile-picture" className="profile-image sm:w-[75%] w-[60%]" />
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="text-2xl text-[var(--text-green-light)] my-4 py-2"
          >
            👋🏻 Hello
          </motion.h1>
        </div>
        <div className="lg:w-[45%] md:w-[70%] sm:w-[60%] w-[85%] text-[var(--text)] leading-relaxed lg:text-base text-sm px-4">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.3 }}
            className="my-4"
          >
            Hi, I'm Suresh Jat, a passionate full-stack web developer and
            problem solver who loves turning ideas into real-world digital
            experiences. My journey started with a deep curiosity about how the
            web works, which led me to explore everything from data structures
            and algorithms to building full-stack applications using modern
            frameworks.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="my-4"
          >
            I'm currently focused on building clean, performant, and
            user-friendly web apps with the MERN stack (MongoDB, Express, React,
            Node.js). Alongside that, I'm constantly improving my skills in
            authentication, real-time communication, and responsive UI
            development.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="my-4"
          >
            What truly drives me is the balance between logic and creativity —
            whether I'm writing elegant backend logic or crafting pixel-perfect
            frontends. I enjoy collaborating, debugging complex issues, and
            learning new tools that can make development more efficient and
            enjoyable.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="my-4"
          >
            In addition to development, I'm deeply interested in solving
            algorithmic problems and have actively practiced DSA (Data
            Structures & Algorithms) through platforms like LeetCode. This helps
            me write optimized and scalable code.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4, delay: 0.7 }}
          >
            <ContactButton setShowContact={setShowContact} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
