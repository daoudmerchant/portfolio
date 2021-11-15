import { useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
// import styled from "styled-components";
import ReactVisibilitySensor from "react-visibility-sensor";

import { useFocusManagement, useScreenType } from "../hooks";

import ShowMeSomethingLg from "../images/Projects/ShowMeSomething/ShowMeSomethingLg.png";
import ShowMeSomethingSm from "../images/Projects/ShowMeSomething/ShowMeSomethingSm.png";

import ModalVideo from "react-modal-video";
import Frame from "./Frame";
import ProjectLink from "./project/ProjectLink";
import ProjectAbout from "./project/ProjectAbout";

const FrameContainer = tw.div`
    z-10
    relative
    clear-both
    w-full
    h-projectpanelportrait
    sm:h-projectpanellg
    lg:h-projectpanel
    mix-blend-screen
    relative
`;

const ProjectPreview = tw.div`
    overflow-hidden
    absolute
    bg-white
    z-40
    w-projectboxlg
    lg:w-projectbox
    h-projectboxportrait
    sm:h-projectboxlg
    lg:h-projectbox
    left-16
    transform
    translate-y-raisescreenshot
    p-4
`;

// const Marker = tw.div`
//     h-px
//     w-full
//     bg-transparent
//     absolute
//     top-1/2
// `;

const ProjectImgFallback = tw.img`
  h-full
  w-full
  relative
`;

const ProjectImg = tw.picture`
  h-full
  w-full
  relative
`;

const SideTitle = tw.p`
    text-white
    transform
    -rotate-90
    absolute
    top-4
`;

const Project = ({ project, visible, tag }) => {
  const [showMore, setShowMore] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const toggleShowMore = () => setShowMore((prevState) => !prevState);

  const { focused, handleScroll, reportHovered, reportUnhovered } =
    useFocusManagement(setShowMore);

  const reportCursor = {
    hover: reportHovered,
    unhover: reportUnhovered,
  };

  const { isTouchscreen } = useScreenType();

  const Screenshot = () => (
    <ProjectImg>
      <source media="(max-width: 639px)" srcset={ShowMeSomethingSm} />
      <source media="(min-width: 640px)" srcset={ShowMeSomethingLg} />
      <ProjectImgFallback src={ShowMeSomethingLg} alt="Show Me Something" />
    </ProjectImg>
  );

  return (
    <>
      <FrameContainer
        onMouseEnter={isTouchscreen ? null : reportHovered}
        onMouseLeave={isTouchscreen ? null : reportUnhovered}
      >
        <Frame
          topright={false}
          vertical={<SideTitle>ShowMeSomething</SideTitle>}
          visible={focused}
        >
          <ProjectLink
            href="#"
            text="VIDEO"
            type="BUTTON"
            handleClick={() => setShowVideo(true)}
          />
          <ProjectLink href="#" text="DEMO" type="LINK" />
          <ProjectLink href="#" text="REPO" type="LINK" />
          <ProjectLink
            href="#"
            text={showMore && !isTouchscreen ? "LESS" : "MORE"}
            type="BUTTON"
            handleClick={toggleShowMore}
          />
        </Frame>
      </FrameContainer>
      {isTouchscreen ? (
        <ProjectPreview>
          {/* <Marker /> */}
          <ReactVisibilitySensor onChange={handleScroll}>
            <Screenshot />
          </ReactVisibilitySensor>
          <ProjectAbout
            project={project}
            nested={true}
            showMore={showMore}
            tag={tag}
          />
        </ProjectPreview>
      ) : (
        <ProjectPreview
          onMouseEnter={reportHovered}
          onMouseLeave={reportUnhovered}
        >
          <Screenshot />
          <ProjectAbout
            project={project}
            nested={true}
            showMore={showMore}
            tag={tag}
          />
        </ProjectPreview>
      )}
      <ProjectAbout
        reportCursor={reportCursor}
        nested={false}
        project={project}
        focused={focused}
        tag={tag}
      />
      <ModalVideo
        channel="vimeo"
        autoplay
        isOpen={showVideo}
        videoId="65107797"
        onClose={() => setShowVideo(false)}
      />
    </>
  );
};

export default Project;
