import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { MdEmail } from "react-icons/md";
import { motion } from "motion/react";

export default function Contact({ contactRef, showContact, setShowContact }) {
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        e.target,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        }
      );
      setFields({
        name: "",
        email: "",
        message: "",
      });
      setShowContact(false);
    } catch (err) {
      console.log("Failed to send email", err);
    }
  };

  return (
    <div
      ref={contactRef}
      className="scroll-mt-16 w-full flex sm:flex-row flex-col items-center lg:px-6 md:px-4 sm:px-8 p-4 my-4"
    >
      <div className="xl:w-[50%] lg:w-[50%] md:w-[75%] sm:w-[80%] w-full text-[var(--text-muted)] text-lg flex flex-col justify-center items-center">
        <div className="flex flex-col gap-1 md:gap-2 lg:w-[50%] md:w-[75%] sm:w-full w-[95%] mb-0 sm:mb-8 md:text-base text-sm pb-4">
          <motion.h3
            className={`${showContact ? "hidden" : "block"} sm:block`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Contact
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            +91 7984760826
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.4 }}
          >
            sureshjatcode@gmail.com
          </motion.p>
          <motion.p
            className={`${showContact ? "hidden" : "block"} sm:block`}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.5 }}
          >
            Jaipur | Rajasthan
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex lg:gap-5 md:gap-3 gap-4 my-1 md:my-4 text-3xl"
          >
            <a
              href="https://github.com/SureshJat-0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiGithub className="cursor-pointer" />
            </a>
            <a
              href="https://www.linkedin.com/in/suresh-jat-340b46322/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiLinkedin className="cursor-pointer" />
            </a>
            <a
              href="https://x.com/SureshJat012"
              target="_blank"
              rel="noopener noreferrer"
            >
              <SiX className="cursor-pointer" />
            </a>
            <a href="mailto:sureshjatcode@gmail.com">
              <MdEmail className="cursor-pointer" />
            </a>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className={`${
              showContact ? "hidden" : "block"
            } sm:block "w-[80%] text-sm`}
          >
            Feel free to reach out — I'm open to collaborations, freelance
            opportunities, or just a chat about tech!
          </motion.p>
        </div>
      </div>
      <div className="lg:w-[50%] w-full sm:pt-4">
        <form
          onSubmit={handleSubmitForm}
          className="text-[var(--text)] flex flex-col xl:w-[60%] lg:w-[80%] md:w-[80%] rounded-2xl px-4 py-4 min-h-[60vh] bg-[var(--bg-light)] shadow-xl"
        >
          <div className="my-2 text-center border-b border-[var(--text-muted)]">
            <h1 className="text-xl font-bold mb-2">Let's talk</h1>
          </div>
          <div className="border-b border-[var(--text-muted)] pb-2 flex">
            <label htmlFor="name" className="text-[var(--text-muted)]">
              Name:{" "}
            </label>
            <input
              value={fields.name}
              required
              onChange={(e) =>
                setFields({ ...fields, [e.target.name]: e.target.value })
              }
              name="name"
              id="name"
              type="text"
              autoComplete="name"
              className="w-full outline-0 text-[var(--text-muted)] mx-2"
              placeholder="Your name here..."
            />
          </div>
          <div className="border-b border-[var(--text-muted)] py-2 flex">
            <label htmlFor="email" className="text-[var(--text-muted)]">
              Email:{" "}
            </label>
            <input
              value={fields.email}
              required
              onChange={(e) =>
                setFields({ ...fields, [e.target.name]: e.target.value })
              }
              name="email"
              id="email"
              type="email"
              autoComplete="email"
              className="w-full outline-0 text-[var(--text-muted)] mx-2"
              placeholder="Your email here..."
            />
          </div>
          <div className="border-b border-[var(--text-muted)] py-2 flex grow">
            <textarea
              value={fields.message}
              required
              onChange={(e) =>
                setFields({ ...fields, [e.target.name]: e.target.value })
              }
              name="message"
              type="text"
              className="w-full outline-0 text-[var(--text-muted)] h-full"
              placeholder="Write your message..."
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              className="mt-2 rounded-2xl bg-[var(--text-green)] px-6 py-1 cursor-pointer text-black shadow-2xl"
              type="submit"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
