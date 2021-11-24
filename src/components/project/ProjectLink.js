import { useFocusManagement, useScreenType } from "../../constants/hooks";
import tw from "tailwind-styled-components";
import styled from "styled-components";

const link = styled.a`
  -webkit-tap-highlight-color: transparent;
`;

const Link = tw(link)`
  ${(props) => (props.isVertical ? "w-full transform -rotate-90" : "h-full")}
  relative
  text-white
  flex-1
  flex
  text-5
  xs:text-6
  sm:text-7
  md:text-8
  justify-center
  items-center
  overflow-hidden
  cursor-pointer
  active:bg-white
  active:text-black
  select-none
`;

const button = styled.button`
  -webkit-tap-highlight-color: transparent;
`;

const Button = tw(button)`
  block
  ${(props) => (props.isMore ? "xl:hidden" : null)}
  ${(props) => (props.isVertical ? "w-full" : "flex-1")}
  h-full
  relative
  text-white
  font-bold
  text-5
  xs:text-6
  sm:text-7
  md:text-8
  flex
  justify-center
  items-center
  overflow-hidden
  cursor-pointer
  active:bg-white
  active:text-black
  select-none
`;

const LinkSwiper = tw.div`
  h-full
  w-full
  absolute
  text-black
  transform
  flex
  justify-center
  items-center
  ${(props) => (props.hovered ? "translate-x-0" : "-translate-x-full")}
  ${(props) =>
    props.top ? "bg-white z-30 mix-blend-difference" : "bg-black z-20"}
  transition-transform
  duration-300
  ease-in-out
`;

const ProjectLink = ({ text, url, isLink, handleClick, showMore = null }) => {
  const { focused, reportHovered, reportUnhovered } = useFocusManagement();

  const { isTouchscreen } = useScreenType();

  const Content = isLink ? Link : Button;

  const isMore = text === "MORE";

  return (
    <Content
      onMouseEnter={isTouchscreen ? null : reportHovered}
      onMouseLeave={isTouchscreen ? null : reportUnhovered}
      onClick={() => {
        handleClick?.();
      }}
      href={isLink ? url : null}
      rel={isLink ? "noreferrer" : null}
      target={isLink ? "_blank" : null}
      isMore={isMore}
    >
      {!(isLink && isTouchscreen) && (
        <>
          <LinkSwiper hovered={+showMore || +focused} top={+true}>
            {
              // text on swiper if touchscreen (instead of hover)
              isMore && isTouchscreen ? "LESS" : ""
            }
          </LinkSwiper>
          {
            // black backing on touchscreen only for swiper text knock-out effect
            isTouchscreen && isMore && (
              <LinkSwiper hovered={+showMore || +focused} top={+false} />
            )
          }
        </>
      )}
      {text}
    </Content>
  );
};

export default ProjectLink;
