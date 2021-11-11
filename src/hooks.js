import { useState } from "react";

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
