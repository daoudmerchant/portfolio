import { useState } from "react";
import { useMediaQuery } from "react-responsive";

export const useFocusManagement = () => {
  const [focused, setFocused] = useState(false);
  const reportHovered = () => setFocused(true);
  const reportUnhovered = () => setFocused(false);
  const handleScroll = (isVisible) => setFocused(isVisible);
  return {
    focused,
    reportHovered,
    reportUnhovered,
    handleScroll,
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
