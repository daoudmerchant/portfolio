import tw from "tailwind-styled-components/dist/tailwind";

import Frame from "./Frame";

const ProjectContainer = tw.div`
    bg-white
`;

const ProjectPic = tw.div`
    h-60
    bg-green
    w-20
`;

const Project = ({ visible }) => {
  return (
    <>
      <Frame corner="BOTTOMLEFT" visible={visible} />
      {/* <ProjectContainer />
      <ProjectPic /> */}
    </>
  );
};

export default Project;
