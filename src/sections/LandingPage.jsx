import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "motion/react";
import Typewriter from "typewriter-effect";
import {
  FaArrowRight,
  FaCode,
  FaDownload,
  FaEnvelope,
  FaEye,
  FaFileLines,
  FaFolderOpen,
  FaRocket,
  FaShieldHalved,
} from "react-icons/fa6";
import Robo3d from "../assets/Robo3dImage.webp";
import LottieImage from "../assets/LottieImage.webp";

const Robot_3D = lazy(() => import("../Components/Robot_3D"));
const LandingVideoAnimation = lazy(
  () => import("../Components/Lottie/LandingVideoAnimation"),
);

export default function LandingPage({
  homeRef,
  projectsRef,
  setShowContactModal,
  setShowResumePage,
}) {
  const [show3D, setShow3D] = useState(false);
  const [showLottie, setShowLottie] = useState(false);
  const [showTypewriter, setShowTypewriter] = useState(false);

  const robotBadges = [
    {
      label: "DSA",
      icon: "</>",
      position: "top-[22%] left-[5%] 2xl:top-[24%] 2xl:left-[8%]",
    },
    {
      label: "MERN Stack",
      icon: "<>",
      position: "top-[22%] right-[5%] 2xl:top-[25%] 2xl:right-[9%]",
    },
    {
      label: "Problem Solver",
      icon: "[]",
      position: "bottom-[22%] left-[3%] 2xl:left-[6%]",
    },
    {
      label: "Clean Code",
      icon: "//",
      position: "bottom-[15%] right-[4%] 2xl:right-[10%]",
    },
  ];

  const highlights = [
    { icon: FaCode, label: "Clean Code" },
    { icon: FaRocket, label: "Performance Focused" },
    { icon: FaShieldHalved, label: "Scalable Solutions" },
    // { icon: FaFolderOpen, label: "Always Learning" },
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true);
      setShowLottie(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let roboTimer;

    const check3DSupport = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isDesktopViewport = window.innerWidth >= 1024;

      if (!isTouchDevice && isDesktopViewport) {
        roboTimer = setTimeout(() => {
          setShow3D(true);
        }, 2000);
      } else {
        setShow3D(false);
      }
    };

    check3DSupport();
    window.addEventListener("resize", check3DSupport);

    return () => {
      window.removeEventListener("resize", check3DSupport);
      if (roboTimer) clearTimeout(roboTimer);
    };
  }, []);

  return (
    <div
      ref={homeRef}
      className="relative flex min-h-screen w-full flex-col overflow-x-clip scroll-mt-16 lg:flex-row lg:[background:linear-gradient(90deg,hsl(200_23%_8%)_0%,hsl(200_23%_7%)_46%,hsl(198_34%_7%)_63%,hsl(197_46%_6%)_100%)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block [background:radial-gradient(circle_at_66%_50%,hsl(127_42%_56%_/_0.045)_0%,transparent_42%),radial-gradient(circle_at_78%_44%,hsl(189_74%_16%_/_0.18)_0%,transparent_60%),linear-gradient(90deg,transparent_44%,hsl(198_34%_8%_/_0.24)_56%,transparent_67%)]"
      />

      <div className="relative flex w-full flex-col justify-between px-6 pb-8 pt-24 sm:px-8 md:pb-10 md:pt-28 lg:w-[50vw] lg:ps-20 lg:pe-6 lg:pb-8 lg:pt-32">
        <div className="text-2xl font-bold leading-relaxed tracking-wider text-[var(--text-green-light)] md:text-3xl lg:text-4xl">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0 }}
          >
            Hi, I'm Suresh Jat
          </motion.h1>
          <span className="text-[var(--text-green)]">
            {showTypewriter ? (
              <Typewriter
                options={{
                  strings: ["MERN Stack Developer", "DSA Enthusiast"],
                  autoStart: true,
                  loop: true,
                }}
              />
            ) : (
              <p>MERN Stack Developer</p>
            )}
          </span>
        </div>

        <div className="mt-2 block lg:hidden">
          <Suspense
            fallback={
              <img
                src={LottieImage}
                alt="preview"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            }
          >
            {showLottie ? (
              <LandingVideoAnimation />
            ) : (
              <img
                src={LottieImage}
                alt="preview"
                style={{ width: "200px", height: "200px", objectFit: "cover" }}
              />
            )}
          </Suspense>
        </div>

        <div className="mb-10 px-1 lg:pe-8 md:mb-10 lg:mb-16">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="my-6 max-w-[42rem] text-[0.95rem] leading-[1.85] text-[var(--text-muted)] md:text-[1.05rem]"
          >
            I'm <span className="text-[var(--text-green)]">Suresh Jat</span>, a
            web developer with a strong{" "}
            <span className="text-[var(--text-green)]">DSA</span> background. I
            build responsive{" "}
            <span className="text-[var(--text-green)]">MERN</span> stack
            applications and enjoy learning new technologies through hands-on
            coding and real-world projects.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="max-w-[44rem] space-y-4"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <button
                type="button"
                onClick={() => setShowContactModal(true)}
                className="group flex items-center justify-between gap-4 rounded-[0.85rem] border border-[hsl(127_40%_60%_/_0.2)] bg-[hsl(147_46%_40%_/_0.94)] px-5 py-2 text-left text-[var(--text)] shadow-[0_0_0_1px_hsl(127_48%_60%_/_0.06),0_8px_14px_hsl(127_50%_18%_/_0.1)] transition-transform duration-300 hover:-translate-y-0.5 cursor-pointer"
              >
                <span className="flex items-center gap-4">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(200_22%_8%_/_0.2)] text-white">
                    <FaEnvelope className="text-[0.7rem]" />
                  </span>
                  <span className="text-[0.95rem] font-[500]">Contact Me</span>
                </span>
                <FaArrowRight className="text-[0.95rem] text-white/85 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                type="button"
                onClick={() =>
                  projectsRef.current?.scrollIntoView({ behavior: "smooth" })
                }
                className="group flex w-full items-center justify-between gap-4 rounded-[0.85rem] border border-[hsl(127_40%_60%_/_0.38)] bg-[hsl(200_23%_8%_/_0.2)] px-5 py-2 text-left text-[var(--text-green-light)] transition-colors duration-300 hover:border-[hsl(127_52%_68%_/_0.75)] hover:bg-[hsl(200_23%_8%_/_0.32)] cursor-pointer"
              >
                <span className="flex items-center gap-4">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[hsl(127_40%_60%_/_0.16)] bg-[hsl(200_23%_8%_/_0.3)] text-[var(--text-green-light)]">
                    <FaFolderOpen className="text-[0.7rem]" />
                  </span>
                  <span className="text-[0.9rem] font-[500] sm:text-[0.95rem]">
                    View Projects
                  </span>
                </span>
                <FaArrowRight className="text-[0.95rem] text-[var(--text-green-light)] transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>

            <div className="rounded-[0.95rem] border border-[hsl(127_24%_38%_/_0.18)] bg-[hsl(200_23%_8%_/_0.68)] px-4 py-3 shadow-[inset_0_0_0_1px_hsl(127_30%_46%_/_0.04)]">
              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-start gap-4">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[hsl(127_36%_50%_/_0.14)] bg-[hsl(200_24%_12%_/_0.62)] text-[var(--text-green-light)]">
                    <FaFileLines className="text-[0.95rem]" />
                  </span>
                  <div>
                    <h2 className="font-[600] text-[var(--text)] text-[0.8rem] md:text-[0.9rem]">
                      Resume
                    </h2>
                    <p className="mt-1 text-[var(--text-muted)] text-[0.75rem] md:text-[0.8rem]">
                      Open the web version or download the PDF.
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row lg:items-stretch">
                  <a
                    href="suresh_jat_resume.pdf"
                    target="_blank"
                    className="inline-flex min-w-[10rem] items-center justify-center gap-2 rounded-[0.8rem] border border-[hsl(127_40%_60%_/_0.28)] bg-[hsl(200_23%_8%_/_0.26)] py-2 text-[var(--text-green-light)] transition-colors duration-300 hover:border-[var(--text-green-light)] hover:bg-[hsl(200_23%_8%_/_0.4)]"
                  >
                    <FaEye className="text-[0.8rem]" />
                    <span>View Resume</span>
                  </a>
                  <a
                    href="/suresh_jat_resume.pdf"
                    download
                    className="inline-flex min-w-[10rem] items-center justify-center gap-2 rounded-[0.8rem] border border-[hsl(127_40%_60%_/_0.28)] bg-[hsl(200_23%_8%_/_0.26)] px-2 py-2 text-[var(--text-green-light)] transition-colors duration-300 hover:border-[var(--text-green-light)] hover:bg-[hsl(200_23%_8%_/_0.4)]"
                  >
                    <FaDownload className="text-[0.8rem]" />
                    <span>Download PDF</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              {highlights.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 ${
                      index !== 0
                        ? "md:border-l md:border-[hsl(127_20%_38%_/_0.45)] md:pl-4"
                        : ""
                    }`}
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-[0.8rem] border border-[hsl(127_28%_44%_/_0.12)] bg-[hsl(200_23%_8%_/_0.3)] text-[var(--text-green-light)]">
                      <Icon className="text-[0.75rem]" />
                    </span>
                    <span className="text-[0.78rem] text-[var(--text-muted)] md:text-[0.85rem]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>

      <div className="relative hidden w-[50vw] items-center justify-center overflow-hidden px-2 [isolation:isolate] lg:flex [background:radial-gradient(circle_at_68%_48%,hsl(128_40%_56%_/_0.06),transparent_42%),radial-gradient(circle_at_45%_78%,hsl(200_90%_12%_/_0.62),transparent_48%)]">
        <div
          className="absolute inset-[10%_6%_10%_12%] z-[1] opacity-60 [background-image:linear-gradient(to_right,hsl(127_32%_50%_/_0.11)_1px,transparent_1px),linear-gradient(to_bottom,hsl(127_32%_50%_/_0.11)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(circle_at_center,black_45%,transparent_85%)]"
          aria-hidden="true"
        />
        <div
          className="absolute z-[2] aspect-square w-[min(54vw,540px)] rounded-full [background:radial-gradient(circle_at_50%_58%,hsl(127_48%_66%_/_0.18)_0%,hsl(128_30%_40%_/_0.08)_45%,transparent_70%)] blur-[12px] [animation:glowPulse_6s_ease-in-out_infinite] 2xl:w-[min(64vw,620px)]"
          aria-hidden="true"
        />
        <div
          className="absolute z-[3] aspect-square w-[min(50vw,500px)] rounded-full border border-[hsl(127_34%_66%_/_0.28)] shadow-[inset_0_0_0_1px_hsl(128_30%_68%_/_0.15),0_0_42px_hsl(128_55%_66%_/_0.2)] [animation:ringShift_7s_ease-in-out_infinite] 2xl:w-[min(58vw,560px)]"
          aria-hidden="true"
        />

        {robotBadges.map((badge) => (
          <motion.div
            key={badge.label}
            className={`absolute z-[7] flex items-center gap-[0.6rem] rounded-[0.8rem] border border-[hsl(127_32%_64%_/_0.3)] bg-[hsl(200_24%_8%_/_0.72)] px-[0.85rem] py-[0.7rem] text-[0.9rem] font-medium tracking-[0.02em] text-[var(--text-green-light)] backdrop-blur-[6px] 2xl:px-4 2xl:py-[0.85rem] 2xl:text-[1rem] ${badge.position}`}
          >
            <span className="text-[0.9rem] font-bold text-[var(--text-green)]">
              {badge.icon}
            </span>
            <p>{badge.label}</p>
          </motion.div>
        ))}

        <div className="relative z-[6] flex aspect-square w-[min(38vw,460px)] items-center justify-center 2xl:w-[min(42vw,500px)]">
          {show3D ? (
            <Suspense
              fallback={
                <div className="flex h-full w-full items-center justify-center">
                  <img
                    src={Robo3d}
                    alt="3D robot preview"
                    className="h-[92%] w-[92%] object-contain [filter:drop-shadow(0_15px_24px_hsl(0_0%_0%_/_0.3))]"
                  />
                </div>
              }
            >
              <div className="flex h-full w-full items-center justify-center">
                <Robot_3D />
              </div>
            </Suspense>
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <img
                src={Robo3d}
                alt="3D robot preview"
                className="h-[92%] w-[92%] object-contain [filter:drop-shadow(0_15px_24px_hsl(0_0%_0%_/_0.3))]"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
