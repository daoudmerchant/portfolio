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
    h-60
    bg-green
    w-20
`;

const Project = ({ visible }) => {
  return (
    <>
      <FrameContainer>
        <Frame corner="BOTTOMLEFT" visible={visible} />
      </FrameContainer>
      {/* <ProjectContainer />
      <ProjectPic /> */}
    </>
  );
};

export default Project;
