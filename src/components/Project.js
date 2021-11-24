import { useState, Fragment } from "react";
import tw from "tailwind-styled-components/dist/tailwind";
import ReactVisibilitySensor from "react-visibility-sensor";

import { useFocusManagement, useScreenType } from "../hooks";

import { getSrcSet } from "../utils";

import ModalVideo from "react-modal-video";
import Frame from "./Frame";
import ProjectLink from "./project/ProjectLink";
import ProjectAbout from "./project/ProjectAbout";

const FrameContainer = tw.div`
  w-full
  h-projectpanelportrait
  sm:h-projectpanellg
  xl:h-projectpanel
  clear-both
  z-10
  relative
  mix-blend-screen
`;

const ProjectPreview = tw.div`
  h-projectboxportrait
  sm:h-projectboxlg
  xl:h-projectbox
  w-projectboxlg
  xl:w-projectbox
  absolute
  overflow-hidden
  bg-white
  z-40
  left-16
  transform
  translate-y-raisescreenshot
  p-4
`;

const Marker = tw.div`
  h-px
  w-full
  absolute
  bg-transparent
  top-1/2
`;

const ProjectImg = tw.img`
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

  const reportFinished = () => reportReady(project.name);

  const Screenshot = () => {
    return (
      <picture>
        {project.screenshots.map((collection) => (
          <Fragment key={collection.mobile[0]}>
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
          </Fragment>
        ))}
        <ProjectImg
          onLoad={reportFinished}
          onError={reportFinished}
          src={
            project.screenshots[0].desktop[0] ||
            project.screenshots[0].mobile[0]
          }
          alt={project.name}
        />
      </picture>
    );
  };

  return (
    <div
      onMouseEnter={isTouchscreen ? null : reportHovered}
      onMouseLeave={isTouchscreen ? null : reportUnhovered}
    >
      <FrameContainer>
        <Frame topright={+false} visible={+focused}>
          <ProjectLink
            url="#"
            text="VIDEO"
            isLink={false}
            handleClick={() => setShowVideo(true)}
          />
          {
            // Only show DEMO button if:
            // - Demo exists
            // - Demo is mobile and desktop OR demo is mobile and device is mobile
            !!project.demo && (!project.mobileOnly || isTouchscreen) && (
              <ProjectLink url={project.demo} text="DEMO" isLink={true} />
            )
          }
          <ProjectLink url={project.repo} text="REPO" isLink={true} />
          <ProjectLink
            // Only toggle text on mouse interfaces (slider on touch)
            text={showMore && !isTouchscreen ? "LESS" : "MORE"}
            isLink={false}
            handleClick={toggleShowMore}
            showMore={+showMore}
          />
        </Frame>
      </FrameContainer>
      {
        // Only include visibility reporter IF device is touch (no hover)
        isTouchscreen ? (
          <ProjectPreview>
            {/* Visibility reported by invisible marker half-way up screenshot */}
            <ReactVisibilitySensor onChange={handleScroll}>
              <Marker />
            </ReactVisibilitySensor>
            <Screenshot />
            <ProjectAbout
              project={project}
              nested={+true}
              showMore={+showMore}
            />
          </ProjectPreview>
        ) : (
          <ProjectPreview>
            <Screenshot />
            <ProjectAbout
              project={project}
              nested={+true}
              showMore={+showMore}
            />
          </ProjectPreview>
        )
      }
      <ProjectAbout nested={+false} project={project} focused={+focused} />
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
