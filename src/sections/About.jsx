import MyPhoto from "../assets/MyPhoto.png";
import ContactButton from "../Components/Contact/ContactButton";
import "../index.css";

export default function ({ setShowContactModal, aboutRef }) {
  return (
    <div
      ref={aboutRef}
      className="scroll-mt-16 w-full mb-12 my-4 py-8 lg:px-12 md:px-4 sm:px-2"
    >
      <h1 className="font-bold lg:text-5xl md:text-4xl text-4xl text-center text-[var(--text)] my-8">
        <span className="text-[var(--text-green)]">Who</span> I Am
      </h1>
      <div className="flex sm:flex-row flex-col items-center justify-center gap-4 sm:gap-16">
        <div className="scroll-animate inset-0 flex justify-center items-center flex-col">
          <img
            src={MyPhoto}
            alt="profile-picture"
            className="h-72 sm:h-96 bg-[var(--bg-light)] object-cover rounded-2xl shadow-[0_0_35px_10px_var(--bg-dark)]/50 border border-[var(--text-green)]/10"
          />
        </div>
        <div className="scroll-animate lg:w-[45%] md:w-[70%] sm:w-[60%] w-[85%] text-[var(--text)] leading-relaxed lg:text-base text-sm px-4">
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
            <ContactButton setShowContactModal={setShowContactModal} />
          </div>
        </div>
      </div>
    </div>
  );
}
