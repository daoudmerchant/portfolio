import tw from "tailwind-styled-components/dist/tailwind";
import styled from "styled-components";
import ReactVisibilitySensor from "react-visibility-sensor";

import { useFocusManagement, useScreenType } from "../hooks";

import ShowMeSomething from "../images/Projects/ShowMeSomething/ShowMeSomethingLg.png";

import Frame from "./Frame";
import ProjectLink from "./ProjectLink";

const FrameContainer = tw.div`
    z-0
    static
    clear-both
    bg-white
    w-full
    lg:w-projectpanel
    h-projectpanellg
    lg:h-projectpanel
    mix-blend-screen
`;

/*
  Project height

  16x10

  width = 50vw - 2rem;
  height = (50vw - 8rem) / 16 * 10 = 31.25vw - 1.25rem
*/

const ProjectPreview = tw.div`
    absolute
    z-40
    w-projectboxlg
    lg:w-projectbox
    h-projectboxlg
    lg:h-projectbox
    left-16
    transform
    translate-y-raisescreenshot
    p-4
`;

const ProjectImg = tw.img`
  h-full
  w-full
`;

const ProjectDescription = tw.div`
  hidden
  lg:block
  absolute
  bg-white
  z-40
  w-projectpanel
  h-projectpanel
  transform
  translate-x-full
  -translate-y-full
`;

const TouchTitle = styled.p`
  writing-mode: sideways-lr;
`;

const Project = ({ visible }) => {
  const { focused, handleScroll, reportHovered, reportUnhovered } =
    useFocusManagement();

  const { isTouchscreen, isSmallScreen } = useScreenType();

  return (
    <>
      <FrameContainer
        onMouseEnter={reportHovered}
        onMouseLeave={reportUnhovered}
      >
        <Frame
          corner="BOTTOMLEFT"
          vertical={
            isTouchscreen ? <TouchTitle>ShowMeSomething</TouchTitle> : null
          }
          visible={focused}
        >
          <ProjectLink href="#" text="DEMO" />
          <ProjectLink href="#" text="REPO" />
          {isTouchscreen && <ProjectLink href="#" text="MORE" />}
        </Frame>
      </FrameContainer>
      {isTouchscreen ? (
        <ReactVisibilitySensor onChange={handleScroll}>
          <ProjectPreview
            onMouseEnter={reportHovered}
            onMouseLeave={reportUnhovered}
          >
            <ProjectImg src={ShowMeSomething} alt="ShowMeSomething" />
          </ProjectPreview>
        </ReactVisibilitySensor>
      ) : (
        <ProjectPreview
          onMouseEnter={reportHovered}
          onMouseLeave={reportUnhovered}
        >
          <ProjectImg src={ShowMeSomething} alt="ShowMeSomething" />
          {/* {isSmallScreen && (
            <ProjectDescription>
              <h2>ShowMeSomething</h2>
              <p>This is the small-screen version</p>
            </ProjectDescription>
          )} */}
        </ProjectPreview>
      )}
      <ProjectDescription
        onMouseEnter={reportHovered}
        onMouseLeave={reportUnhovered}
      >
        <h2>ShowMeSomething</h2>
        <p>
          A 'button'-based Reddit client using the Reddit API, with CRUD button
          management stored on user accounts in Google Firebase.
        </p>
      </ProjectDescription>
    </>
  );
};

export default Project;
