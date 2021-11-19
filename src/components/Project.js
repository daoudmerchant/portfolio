import { useState } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
// import styled from "styled-components";
import ReactVisibilitySensor from "react-visibility-sensor";

import { useFocusManagement, useScreenType } from "../hooks";

import { getSrcSet } from "../utils";

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
    xl:h-projectpanel
    mix-blend-screen
    relative
`;

const ProjectPreview = tw.div`
    overflow-hidden
    absolute
    bg-white
    z-40
    w-projectboxlg
    xl:w-projectbox
    h-projectboxportrait
    sm:h-projectboxlg
    xl:h-projectbox
    left-16
    transform
    translate-y-raisescreenshot
    p-4
`;

const Marker = tw.div`
    h-px
    w-full
    bg-transparent
    absolute
    top-1/2
`;

const ProjectImgFallback = tw.img`
  h-full
  w-full
  relative
  object-contain
`;

const ProjectImg = tw.picture`
  h-full
  w-full
  relative
  object-contain
`;

const Project = ({ project, reportReady }) => {
  const [showMore, setShowMore] = useState(false);
  const [showVideo, setShowVideo] = useState(false);
  const toggleShowMore = () => setShowMore((prevState) => !prevState);

  const { isTouchscreen } = useScreenType();

  const { focused, handleScroll, reportHovered, reportUnhovered } =
    useFocusManagement(setShowMore);

  const Screenshot = () => {
    return (
      <ProjectImg onLoad={() => reportReady(project.name)}>
        {project.screenshots.map((collection) => (
          <>
            <source
              media="(max-width: 639px)"
              srcSet={getSrcSet(collection.mobile)}
              type={`image/${collection.type}`}
            />
            {!!collection.desktop && (
              <source
                media="(min-width: 640px)"
                srcSet={getSrcSet(collection.desktop)}
                typ={`image/${collection.type}`}
              />
            )}
          </>
        ))}
        <ProjectImgFallback
          src={
            project.screenshots[0].desktop[0] ||
            project.screenshots[0].mobile[0]
          }
          alt={project.name}
        />
      </ProjectImg>
    );
  };

  return (
    <div
      onMouseEnter={isTouchscreen ? null : reportHovered}
      onMouseLeave={isTouchscreen ? null : reportUnhovered}
    >
      <FrameContainer>
        <Frame topright={false} visible={focused}>
          <ProjectLink
            url="#"
            text="VIDEO"
            isLink={false}
            handleClick={() => setShowVideo(true)}
          />
          {!!project.demo && (!project.mobileOnly || isTouchscreen) && (
            <ProjectLink url={project.demo} text="DEMO" isLink={true} />
          )}
          <ProjectLink url={project.repo} text="REPO" isLink={true} />
          <ProjectLink
            text={showMore && !isTouchscreen ? "LESS" : "MORE"}
            isLink={false}
            handleClick={toggleShowMore}
            showMore={showMore}
          />
        </Frame>
      </FrameContainer>
      {isTouchscreen ? (
        <ProjectPreview>
          <ReactVisibilitySensor onChange={handleScroll}>
            <Marker />
          </ReactVisibilitySensor>
          {/* <ReactVisibilitySensor onChange={handleScroll}> */}
          <Screenshot />
          {/* </ReactVisibilitySensor> */}
          <ProjectAbout project={project} nested={true} showMore={showMore} />
        </ProjectPreview>
      ) : (
        <ProjectPreview>
          <Screenshot />
          <ProjectAbout project={project} nested={true} showMore={showMore} />
        </ProjectPreview>
      )}
      <ProjectAbout nested={false} project={project} focused={focused} />
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={showVideo}
        videoId={project.video}
        onClose={() => setShowVideo(false)}
      />
    </div>
  );
};

export default Project;
