import { useFocusManagement, useScreenType } from "../hooks";
import tw from "tailwind-styled-components";
import styled from "styled-components";

const link = styled.a`
  -webkit-tap-highlight-color: transparent;
`;

const Link = tw(link)`
  h-full
  flex-grow
  flex
  text-l
  sm:text-xl
  md:text-2xl
  lg:text-3xl
  justify-center
  items-center
  relative
  overflow-hidden
  cursor-pointer
  active:bg-white
  active:text-black
  select-none
`;

const LinkSwiper = tw.div`
    absolute
    bg-white
    w-full
    h-full
    transform
    translate-z-0
    ${(props) => (props.hovered ? "translate-x-0" : "-translate-x-full")}
    transition-transform
    duration-300
    ease-in-out
    mix-blend-difference
`;

const ProjectLink = ({ text, url }) => {
  const { focused, reportHovered, reportUnhovered } = useFocusManagement();

  const { isTouchscreen } = useScreenType();

  return (
    <Link onMouseEnter={reportHovered} onMouseLeave={reportUnhovered}>
      {!isTouchscreen && <LinkSwiper hovered={focused} />}
      {text}
    </Link>
  );
};

export default ProjectLink;
