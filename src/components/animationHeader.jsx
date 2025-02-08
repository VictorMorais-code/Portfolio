import Lottie from "lottie-react";
import animationData from "../assets/animations/Animation-header.json";

function AnimationHeader() {
  return (
    <div>
      <Lottie animationData={animationData} loop={true} />
    </div>
  );
}

export default AnimationHeader;
