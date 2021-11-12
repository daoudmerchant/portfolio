import { useState } from "react";
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
    overflow-hidden
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
  relative
`;

const ProjectDescription = tw.div`
  ${(props) => (props.nested ? "block lg:hidden" : "hidden lg:block")}
  ${(props) => (props.nested ? null : "absolute")}
  bg-green-500
  z-40
  ${(props) =>
    props.nested ? "h-full w-full" : "w-projectpanel h-projectpanel"}
  
  transform
  transition-transform
  duration-300
  ease-in-out
  ${(props) =>
    props.nested && props.showMore ? "translate-x-0" : "translate-x-full"}
  -translate-y-full
`;

const sidetitle = styled.p`
  writing-mode: sideways-lr;
`;

const SideTitle = tw(sidetitle)`
    text-white
`;

const Project = ({ visible }) => {
  const [showMore, setShowMore] = useState(false);
  const toggleShowMore = () => setShowMore((prevState) => !prevState);

  const { focused, handleScroll, reportHovered, reportUnhovered } =
    useFocusManagement();

  const { isTouchscreen } = useScreenType();

  return (
    <>
      <FrameContainer
        onMouseEnter={reportHovered}
        onMouseLeave={reportUnhovered}
      >
        <Frame
          corner="BOTTOMLEFT"
          vertical={<SideTitle>ShowMeSomething</SideTitle>}
          visible={focused}
        >
          <ProjectLink href="#" text="DEMO" type="LINK" />
          <ProjectLink href="#" text="REPO" type="LINK" />
          <ProjectLink
            href="#"
            text={showMore ? "LESS" : "MORE"}
            type="BUTTON"
            onClick={toggleShowMore}
          />
        </Frame>
      </FrameContainer>
      {isTouchscreen ? (
        <ReactVisibilitySensor onChange={handleScroll}>
          <ProjectPreview>
            <ProjectImg src={ShowMeSomething} alt="ShowMeSomething" />
            <ProjectDescription nested={true} showMore={showMore}>
              <h2>ShowMeSomething</h2>
              <p>This is the small-screen version</p>
            </ProjectDescription>
          </ProjectPreview>
        </ReactVisibilitySensor>
      ) : (
        <ProjectPreview
          onMouseEnter={reportHovered}
          onMouseLeave={reportUnhovered}
        >
          <ProjectImg src={ShowMeSomething} alt="ShowMeSomething" />

          <ProjectDescription nested={true} showMore={showMore}>
            <h2>ShowMeSomething</h2>
            <p>This is the small-screen version</p>
          </ProjectDescription>
        </ProjectPreview>
      )}
      <ProjectDescription
        onMouseEnter={reportHovered}
        onMouseLeave={reportUnhovered}
        nested={false}
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
