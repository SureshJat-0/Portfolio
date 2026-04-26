import { useState } from "react";
import emailjs from "@emailjs/browser";
import { SiGithub, SiLinkedin, SiX } from "react-icons/si";
import { FaPhone } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { motion } from "motion/react";
import { toast } from "react-hot-toast";

export default function Contact({
  contactRef,
  showContactModal,
  setShowContactModal,
}) {
  const [loading, setLoading] = useState(false);
  const [fields, setFields] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await emailjs.sendForm(
        import.meta.env.VITE_EMAIL_SERVICE_ID,
        import.meta.env.VITE_EMAIL_TEMPLATE_ID,
        e.target,
        {
          publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
        },
      );
      setFields({
        name: "",
        email: "",
        message: "",
      });
      toast.success("Message sent");
    } catch (err) {
      console.log("Failed to send email", err);
      toast.error("Error sending message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      ref={contactRef}
      className="scroll-mt-16 w-full flex lg:flex-row flex-col items-center justify-center gap-12 lg:px-12 md:px-8 px-6 my-2 py-6 lg:py-12"
    >
      {/* contact info */}
      <div className="lg:w-1/2 flex flex-col justify-start">
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold my-4">
              <span className="text-[var(--text)]">Let's </span>
              <span className="text-[var(--text-green)]">Connect</span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className={`${showContactModal ? "hidden" : "block"} lg:block w-[80%] text-[var(--text)]`}
          >
            Feel free to reach out — I'm open to collaborations, freelance
            opportunities, or just a chat about tech!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-3 mt-2 lg:mt-8"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--text-green)]/10 flex items-center justify-center">
                <MdEmail className="text-2xl text-[var(--text-green)]" />
              </div>
              <div>
                <p className="text-sm text-[var(--text-muted)]">Email</p>
                <a
                  href="mailto:sureshjatcode@gmail.com"
                  className="text-[var(--text)] hover:text-[var(--text-green)] transition-colors"
                >
                  sureshjatcode@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-[var(--text-green)]/10 flex items-center justify-center">
                <FaPhone className="text-2xl text-[var(--text-green)]" />
              </div>
              <div>
                <p className="text-sm text-[var(--text-muted)]">Phone</p>
                <p className="text-[var(--text)]">+91 7984760826</p>
              </div>
            </div>

            <div
              className={`${showContactModal ? "hidden" : "flex"} lg:flex items-center gap-4`}
            >
              <div className="w-12 h-12 rounded-full bg-[var(--text-green)]/10 flex items-center justify-center">
                <FaLocationDot className="text-2xl text-[var(--text-green)]" />
              </div>
              <div>
                <p className="text-sm text-[var(--text-muted)]">Location</p>
                <p className="text-[var(--text)]">Jaipur, Rajasthan</p>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.55 }}
            viewport={{ once: true }}
            className="flex gap-4 mt-6 lg:mt-8 pt-4 lg:pt-8 border-t border-[var(--text-green)]/8"
          >
            <a
              href="https://github.com/SureshJat-0"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[var(--text-green)]/10 hover:bg-[var(--text-green)]/50 flex items-center justify-center text-2xl text-[var(--text-green)] hover:text-white transition-all duration-200"
            >
              <SiGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/suresh-jat-340b46322/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[var(--text-green)]/10 hover:bg-[var(--text-green)]/50 flex items-center justify-center text-2xl text-[var(--text-green)] hover:text-white transition-all duration-200"
            >
              <SiLinkedin />
            </a>
            <a
              href="https://x.com/SureshJat012"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-[var(--text-green)]/10 hover:bg-[var(--text-green)]/50 flex items-center justify-center text-2xl text-[var(--text-green)] hover:text-white transition-all duration-200"
            >
              <SiX />
            </a>
            <a
              href="mailto:sureshjatcode@gmail.com"
              className="w-12 h-12 rounded-full bg-[var(--text-green)]/10 hover:bg-[var(--text-green)]/50 flex items-center justify-center text-2xl text-[var(--text-green)] hover:text-white transition-all duration-200"
            >
              <MdEmail />
            </a>
          </motion.div>
        </div>
      </div>
      {/* contact form */}
      <div className="lg:w-1/2 w-full max-w-md">
        <form
          onSubmit={(e) => handleSubmitForm(e)}
          className="space-y-2 lg:space-y-6 p-4 lg:p-8 rounded-2xl bg-[var(--bg-light)] text-sm lg:text-base"
        >
          <div>
            <h3 className="text-2xl font-bold text-white mb-6">
              Send me a Message
            </h3>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-[var(--text-muted)] mb-2"
            >
              Your Name
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
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg)] border border-[var(--text-green)]/15 text-[var(--text)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--text-green)]/40 transition-colors duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-[var(--text-muted)] mb-2"
            >
              Your Email
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
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg)] border border-[var(--text-green)]/15 text-[var(--text)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--text-green)]/40 transition-colors duration-200"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-[var(--text-muted)] mb-2"
            >
              Message
            </label>
            <textarea
              value={fields.message}
              required
              onChange={(e) =>
                setFields({ ...fields, [e.target.name]: e.target.value })
              }
              name="message"
              id="message"
              rows={5}
              placeholder="Your message here..."
              className="w-full px-4 py-3 rounded-lg bg-[var(--bg)] border border-[var(--text-green)]/15 text-[var(--text)] placeholder-[var(--text-muted)]/50 focus:outline-none focus:border-[var(--text-green)]/40 transition-colors duration-200 resize-none"
            />
          </div>
          <div className="flex justify-center items-center">
            <button
              disabled={loading}
              className="w-full py-3 rounded-lg bg-[var(--btn-bg)] bg-gradient-to-br from-[var(--text-green)] from-50% to-[var(--text-green-dark)] border hover:border-[var(--text-green)] hover:shadow-[var(--bg-dark)] text-black/90 font-semibold hover:shadow-[var(--text-green)]/20 transition-all duration-200 cursor-pointer disabled:cursor-not-allowed"
              type="submit"
            >
              {loading ? <p>Sending...</p> : <p>Send Message</p>}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
