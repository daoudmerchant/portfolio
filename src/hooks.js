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
  return useMediaQuery({
    query: "(hover: none) and (pointer: coarse)",
  });
};
