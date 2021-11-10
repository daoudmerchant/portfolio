import tw from "tailwind-styled-components/dist/tailwind";

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
    bg-black
    absolute
    z-50
    top-100
    bottom-0
    left-0
    right-0
`;

const Project = ({ visible }) => {
  return (
    <>
      <FrameContainer>
        <Frame corner="BOTTOMLEFT" visible={visible} />
      </FrameContainer>
      <ProjectPic />
    </>
  );
};

export default Project;
