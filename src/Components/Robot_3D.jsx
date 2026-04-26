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
    <main className="h-full w-full">
      <Spline
        scene="https://prod.spline.design/ORSx8xXoW8l5ugqd/scene.splinecode"
        style={{ width: "100%", height: "100%" }}
      />
    </main>
  );
}
