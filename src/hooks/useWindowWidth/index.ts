import { useState, useEffect } from "react";

const MOBILE_BREAKPOINT = 767;

/**
 * Hook to determine if the current viewport is mobile-sized
 * @returns true if viewport width is <= 767px, false otherwise
 */
function useIsMobile(): boolean {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => window.innerWidth <= MOBILE_BREAKPOINT;

    setIsMobile(checkIsMobile());

    const handleResize = () => {
      setIsMobile(checkIsMobile());
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
}

/**
 * Hook to get responsive values based on viewport size
 * @param desktopValue - Value to return for desktop viewport
 * @param mobileValue - Value to return for mobile viewport
 * @returns desktopValue if viewport > 767px, mobileValue otherwise
 */
function useWindowWidth<T>(desktopValue: T, mobileValue: T): T {
  const isMobile = useIsMobile();
  return isMobile ? mobileValue : desktopValue;
}

export default useWindowWidth;
export { useIsMobile };
