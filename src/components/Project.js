import { useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { useMediaQuery } from "react-responsive";
import ReactVisibilitySensor from "react-visibility-sensor";

import Frame from "./Frame";

const FrameContainer = tw.div`
    z-0
    static
    clear-both
    bg-white
    w-full
    md:w-1/2
    h-100
    mix-blend-screen
`;

const ProjectPic = tw.div`
    bg-green-500
    absolute
    z-40
    w-fullpanel
    md:w-halfpanel
    h-80
    left-16
    transform
    -translate-y-96
`;

const ProjectDescription = tw.div`
  hidden
  md:block
  absolute
  bg-blue-500
  z-40
  w-1/2
  h-96
  transform
  translate-x-full
  -translate-y-full
`;

const Project = ({ visible }) => {
  const [focused, setFocused] = useState(false);
  const reportHovered = () => setFocused(true);
  const reportUnhovered = () => setFocused(false);

  const handleScroll = (isVisible) => setFocused(isVisible);

  const isTouchscreen = useMediaQuery({
    query: "(hover: none) and (pointer: coarse)",
  });

  return (
    <>
      <FrameContainer
        onMouseEnter={reportHovered}
        onMouseLeave={reportUnhovered}
      >
        {isTouchscreen ? (
          <ReactVisibilitySensor onChange={handleScroll}>
            <Frame corner="BOTTOMLEFT" visible={focused} />
          </ReactVisibilitySensor>
        ) : (
          <Frame corner="BOTTOMLEFT" visible={focused} />
        )}
      </FrameContainer>
      <ProjectPic onMouseEnter={reportHovered} onMouseLeave={reportUnhovered} />
      <ProjectDescription
        onMouseEnter={reportHovered}
        onMouseLeave={reportUnhovered}
      />
    </>
  );
};

export default Project;
