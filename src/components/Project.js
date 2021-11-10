import { useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import { useMediaQuery } from "react-responsive";
import ReactVisibilitySensor from "react-visibility-sensor";

import ShowMeSomething from "../images/Projects/ShowMeSomething/ShowMeSomethingLg.png";

import Frame from "./Frame";

const FrameContainer = tw.div`
    z-0
    static
    clear-both
    bg-white
    w-full
    md:w-1/2
    h-3/4
    md:h-1/2
    mix-blend-screen
`;

const ProjectPic = tw.div`
    bg-green-500
    absolute
    z-40
    w-fullpanel
    md:w-halfpanel
    h-3/4panel
    md:h-halfpanel
    left-16
    transform
    translate-y-raisescreenshot
`;

const ProjectDescription = tw.div`
  hidden
  md:block
  absolute
  bg-blue-500
  z-40
  w-1/2
  h-1/2
  transform
  translate-x-full
  -translate-y-full
`;

const ProjectImg = tw.img`
  max-h-full
  max-w-full
  p-5
  relative
  left-1/2
  top-1/2
  transform
  -translate-x-1/2
  -translate-y-1/2
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
        <Frame corner="BOTTOMLEFT" visible={focused} />
      </FrameContainer>
      {isTouchscreen ? (
        <ReactVisibilitySensor onChange={handleScroll}>
          <ProjectPic
            onMouseEnter={reportHovered}
            onMouseLeave={reportUnhovered}
          >
            <ProjectImg src={ShowMeSomething} alt="ShowMeSomething" />
          </ProjectPic>
        </ReactVisibilitySensor>
      ) : (
        <ProjectPic onMouseEnter={reportHovered} onMouseLeave={reportUnhovered}>
          <ProjectImg src={ShowMeSomething} alt="ShowMeSomething" />
        </ProjectPic>
      )}
      <ProjectDescription
        onMouseEnter={reportHovered}
        onMouseLeave={reportUnhovered}
      />
    </>
  );
};

export default Project;
