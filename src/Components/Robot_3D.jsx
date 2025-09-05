import Spline from "@splinetool/react-spline";
import { useEffect, useState } from "react";

export default function Robot_3D() {
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    const isTouchDevice = () =>
      "ontouchstart" in window || navigator.maxTouchPoints > 0; // This checks whether device has multi touch or not
    if (!isTouchDevice()) setShow3D(true);
  }, []);

  if (!show3D) return null;
  return (
    <main className="absolute bottom-2 xl:right-[30vw] lg:right-[20vw] md:right-[5vw] sm:right-0 invisible md:visible z-[-2]">
      <Spline scene="https://prod.spline.design/ORSx8xXoW8l5ugqd/scene.splinecode" />
      <div className="absolute h-14 w-40 bg-[var(--bg)] bottom-2 right-0 hidden md:block"></div>
    </main>
  );
}
