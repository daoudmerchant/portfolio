import { useFocusManagement, useScreenType } from "../../hooks";
import tw from "tailwind-styled-components";
import styled from "styled-components";

const link = styled.a`
  -webkit-tap-highlight-color: transparent;
`;

const Link = tw(link)`
  h-full
  flex-1
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

const button = styled.button`
  -webkit-tap-highlight-color: transparent;
`;

const Button = tw(button)`
block
lg:hidden
h-full
flex-1
flex
text-l
font-bold
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
    text-black
    w-full
    h-full
    transform
    flex
    items-center
    justify-center
    ${(props) => (props.hovered ? "translate-x-0" : "-translate-x-full")}
    ${(props) =>
      props.top ? "bg-white z-30 mix-blend-difference" : "bg-black z-20"}
    transition-transform
    duration-300
    ease-in-out
`;

const ProjectLink = ({ text, url, type, handleClick }) => {
  const { focused, reportHovered, reportUnhovered, toggleFocused } =
    useFocusManagement();

  const { isTouchscreen } = useScreenType();

  const Content = type === "LINK" ? Link : Button;

  return (
    <Content
      onMouseEnter={isTouchscreen ? null : reportHovered}
      onMouseLeave={isTouchscreen ? null : reportUnhovered}
      onClick={() => {
        isTouchscreen && toggleFocused();
        handleClick?.();
      }}
    >
      {!(type === "LINK" && isTouchscreen) && (
        <>
          <LinkSwiper hovered={focused} top={true}>
            {text === "MORE" && isTouchscreen ? "LESS" : ""}
          </LinkSwiper>
          {isTouchscreen && <LinkSwiper hovered={focused} top={false} />}
        </>
      )}
      {text}
    </Content>
  );
};

export default ProjectLink;
