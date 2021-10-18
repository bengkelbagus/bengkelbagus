import { useState, useEffect } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
    isLaptopDisplay: false,
    isTabletDisplay: false,
    isMobileDisplay: false,
  });

  useEffect(() => {
    const onResize = () => {
      const getSize = {
        width: window.outerWidth,
        height: window.outerHeight,
        isLaptopDisplay: window.outerWidth < 1420 || window.innerWidth < 1420,
        isTabletDisplay: window.outerWidth < 920 || window.innerWidth < 920,
        isMobileDisplay: window.outerWidth < 612 || window.innerWidth < 612,
      };
      setWindowSize(getSize);
    };
    window.addEventListener("resize", onResize);
    onResize();
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return windowSize;
};

export default useWindowSize;
