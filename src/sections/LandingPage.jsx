import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "motion/react";
import ContactButton from "../Components/Contact/ContactButton";
import RectBg from "../Components/RectBg";
import Typewriter from "typewriter-effect";
import { FaCircleInfo } from "react-icons/fa6";
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
}) {
  // Rectangles of background : top, right and delay of animation
  // const rectsInfo = [
  //   [55, 0, 1.3],
  //   [55, 36, 1.1],
  //   [73, 18, 1.2],
  //   [91, 0, 1],
  //   [73, 54, 1.5],
  //   [91, 54, 1.4],
  //   [109, 36, 1.6],
  // ];
  const [show3D, setShow3D] = useState(false);
  const [showLottie, setShowLottie] = useState(false);
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

  const [showTypewriter, setShowTypewriter] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTypewriter(true); // delay in typing animation
      setShowLottie(true); // delay in lottie video animation
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const check3DSupport = () => {
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;
      const isDesktopViewport = window.innerWidth >= 1024;
      const isTrue = !isTouchDevice && isDesktopViewport;
      if (isTrue) {
        const roboTimer = setTimeout(() => {
          setShow3D(isTrue);
        }, 2000);
      }
    };

    check3DSupport();
    window.addEventListener("resize", check3DSupport);
    return () => window.removeEventListener("resize", check3DSupport);
    return () => clearTimeout(roboTimer);
  }, []);

  return (
    <div
      ref={homeRef}
      className="relative scroll-mt-16 min-h-screen w-full overflow-x-clip flex flex-col lg:flex-row lg:[background:linear-gradient(90deg,hsl(200_23%_8%)_0%,hsl(200_23%_7%)_46%,hsl(198_34%_7%)_63%,hsl(197_46%_6%)_100%)]"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden lg:block [background:radial-gradient(circle_at_66%_50%,hsl(127_42%_56%_/_0.045)_0%,transparent_42%),radial-gradient(circle_at_78%_44%,hsl(189_74%_16%_/_0.18)_0%,transparent_60%),linear-gradient(90deg,transparent_44%,hsl(198_34%_8%_/_0.24)_56%,transparent_67%)]"
      ></div>
      <div className="relative flex flex-col justify-between pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-10 lg:pb-8 px-6 sm:px-8 lg:ps-20 lg:pe-6 w-full lg:w-[50vw]">
        <div className="lg:text-4xl md:text-3xl text-2xl font-bold text-[var(--text-green-light)] leading-relaxed tracking-wider">
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
        <div className="block lg:hidden mt-2">
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
        <div className="px-1 lg:pe-8 md:mb-10 lg:mb-16 mb-10">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="max-w-md text-[var(--text-green-light)] my-6 md:text-base text-sm"
          >
            I'm Suresh Jat, a web developer with a strong DSA background. I
            build responsive MERN stack applications and enjoy learning new
            technologies through hands-on coding and real-world projects.
          </motion.p>
          <div className="flex">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 w-full max-w-[32rem]"
            >
              <ContactButton setShowContactModal={setShowContactModal} />
              <button
                onClick={() =>
                  projectsRef.current.scrollIntoView({ behavior: "smooth" })
                }
                className="w-full bg-[var(--bg)] border border-[var(--text-green)] text-[var(--text-green)] hover:bg-[var(--text-green)] hover:text-black md:px-8 md:py-2 px-6 py-1 rounded tracking-wider cursor-pointer transition-all duration-400"
              >
                View Work
              </button>
              <a
                href="/suresh_jat_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full text-center bg-[var(--bg)] border border-[var(--text-green)] text-[var(--text-green)] hover:bg-[var(--text-green)] hover:text-black md:px-8 md:py-2 px-6 py-1 rounded tracking-wider cursor-pointer transition-all duration-400"
              >
                View Resume
              </a>
              <a
                href="/suresh_jat_resume.pdf"
                download
                className="w-full text-center bg-[var(--bg)] border border-[var(--text-green)] text-[var(--text-green)] hover:bg-[var(--text-green)] hover:text-black md:px-8 md:py-2 px-6 py-1 rounded tracking-wider cursor-pointer transition-all duration-400"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>
      </div>
      <div className="relative hidden w-[50vw] items-center justify-center overflow-hidden px-2 [background:radial-gradient(circle_at_68%_48%,hsl(128_40%_56%_/_0.06),transparent_42%),radial-gradient(circle_at_45%_78%,hsl(200_90%_12%_/_0.62),transparent_48%)] [isolation:isolate] lg:flex">
        <div
          className="absolute inset-[10%_6%_10%_12%] z-[1] opacity-60 [background-image:linear-gradient(to_right,hsl(127_32%_50%_/_0.11)_1px,transparent_1px),linear-gradient(to_bottom,hsl(127_32%_50%_/_0.11)_1px,transparent_1px)] [background-size:32px_32px] [mask-image:radial-gradient(circle_at_center,black_45%,transparent_85%)]"
          aria-hidden="true"
        ></div>
        <div
          className="absolute z-[2] aspect-square w-[min(54vw,540px)] rounded-full [background:radial-gradient(circle_at_50%_58%,hsl(127_48%_66%_/_0.18)_0%,hsl(128_30%_40%_/_0.08)_45%,transparent_70%)] blur-[12px] [animation:glowPulse_6s_ease-in-out_infinite] 2xl:w-[min(64vw,620px)]"
          aria-hidden="true"
        ></div>
        <div
          className="absolute z-[3] aspect-square w-[min(50vw,500px)] rounded-full border border-[hsl(127_34%_66%_/_0.28)] shadow-[inset_0_0_0_1px_hsl(128_30%_68%_/_0.15),0_0_42px_hsl(128_55%_66%_/_0.2)] [animation:ringShift_7s_ease-in-out_infinite] 2xl:w-[min(58vw,560px)]"
          aria-hidden="true"
        ></div>

        {robotBadges.map((badge, index) => (
          <motion.div
            key={badge.label}
            // initial={{ opacity: 0, y: 18 }}
            // animate={{ opacity: 1, y: [0, -6, 0] }}
            // transition={{
            //   duration: 3,
            //   delay: index * 0.15,
            //   repeat: Infinity,
            //   repeatType: "reverse",
            // }}
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
            // <motion.div
            //   initial={{ opacity: 0, y: 15 }}
            //   animate={{ opacity: 1, y: 0 }}
            //   transition={{ duration: 0.4 }}
            //   className="max-w-[340px] rounded-[0.8rem] border border-[hsl(127_28%_66%_/_0.25)] bg-[hsl(200_24%_8%_/_0.8)] px-[1.1rem] py-4 text-[var(--text-muted)]"
            // >
            //   <span className="flex items-center gap-2">
            //     <FaCircleInfo />
            //     <p>3D robot view is available on non-touch desktop screens.</p>
            //   </span>
            // </motion.div>
          )}
        </div>
      </div>
      {/* ractangles for background  */}
      {/* {rectsInfo.map((rect, ind) => (
        <RectBg top={rect[0]} right={rect[1]} delay={rect[2]} key={ind} />
      ))} */}
    </div>
  );
}
