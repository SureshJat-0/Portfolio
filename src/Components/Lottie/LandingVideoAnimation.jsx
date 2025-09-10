import Lottie from "lottie-react";
import animationData from "./LottieVideo.json";

export default function LandingVideoAnimation() {
  return (
    <Lottie
      animationData={animationData}
      loop={true}
      style={{ width: 200 }}
      className="ml-4"
    />
  );
}
