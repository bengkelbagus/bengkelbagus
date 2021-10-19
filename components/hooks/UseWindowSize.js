import { useState } from "react";
import useEventListener from "./UseEventListener";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEventListener("resize", () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
      isLaptopDisplay: window.outerWidth < 1420 || window.innerWidth < 1420,
      isTabletDisplay: window.outerWidth < 920 || window.innerWidth < 920,
      isMobileDisplay: window.outerWidth < 612 || window.innerWidth < 612,
    });
  });

  return windowSize;
};

export default useWindowSize;
