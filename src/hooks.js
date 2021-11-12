import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useFocusManagement = (setShowMore = null) => {
  const [focused, setFocused] = useState(false);
  const reportHovered = () => setFocused(true);
  const reportUnhovered = () => {
    setFocused(false);
    setShowMore?.(false);
  };
  const handleScroll = (isVisible) => {
    setFocused(isVisible);
    if (isVisible) return;
    setShowMore?.(false);
  };
  const toggleFocused = () => setFocused((prevState) => !prevState);
  return {
    focused,
    reportHovered,
    reportUnhovered,
    handleScroll,
    toggleFocused,
  };
};

export const useScreenType = () => {
  const isTouchscreen = useMediaQuery({
    query: "(hover: none) and (pointer: coarse)",
  });
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 640px)",
  });
  return {
    isTouchscreen,
    isSmallScreen,
  };
};
