import MyPhoto from "../assets/MyPhoto.png";
import ContactButton from "../Components/Contact/ContactButton";
import { motion } from "motion/react";

export default function ({ setShowContact, aboutRef }) {
  return (
    <div
      ref={aboutRef}
      className="scroll-mt-16 w-full mb-12 my-4 py-8 lg:px-12 md:px-4 sm:px-2"
    >
      <h1 className="font-bold lg:text-5xl md:text-4xl text-4xl text-center text-[var(--text)] my-8">
        <span className="text-[var(--text-green)]">Who</span> I Am
      </h1>
      <div className="flex sm:flex-row flex-col items-center w-full h-full">
        <div className="lg:w-[50%] sm:w-[40%] flex justify-center items-center flex-col">
          <img
            src={MyPhoto}
            alt="profile-picture"
            className="profile-image w-[50%] bg-[var(--bg-light)] rounded-2xl shadow-2xl"
          />
        </div>
        <div className="lg:w-[45%] md:w-[70%] sm:w-[60%] w-[85%] text-[var(--text)] leading-relaxed lg:text-base text-sm px-4">
          <p className="my-4">
            Hi, I'm Suresh Jat, a passionate full-stack web developer who loves
            turning ideas into real-world digital experiences. My journey began
            with curiosity about how the web works, which led me from mastering
            data structures and algorithms to building full-stack applications
            with modern frameworks.
          </p>
          <p className="my-4">
            I specialize in the MERN stack (MongoDB, Express, React, Node.js),
            creating clean, performant, and user-friendly web apps. Alongside
            development, I actively practice DSA through platforms like
            LeetCode, which strengthens my ability to write optimized and
            scalable code. Balancing logic and creativity, I enjoy everything
            from designing backend systems to crafting responsive, pixel-perfect
            frontends.
          </p>

          <div>
            <ContactButton setShowContact={setShowContact} />
          </div>
        </div>
      </div>
    </div>
  );
}
