import { useFocusManagement, useScreenType } from "../../hooks";
import tw from "tailwind-styled-components";
import styled from "styled-components";

const link = styled.a`
  -webkit-tap-highlight-color: transparent;
`;

const Link = tw(link)`
  ${(props) => (props.isVertical ? "w-full transform -rotate-90" : "h-full")}
  text-white
  flex-1
  flex
  text-6
  md:text-8
  justify-center
  items-center
  overflow-hidden
  cursor-pointer
  active:bg-white
  active:text-black
  select-none
  relative
`;

const button = styled.button`
  -webkit-tap-highlight-color: transparent;
`;

const Button = tw(button)`
${(props) => (props.isVertical ? "w-full block" : "flex-1 block")}
h-16
text-white
flex
text-l
font-bold
text-6
md:text-8
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
    ${(props) => (props.isVertical ? "w-16" : "w-full")}
    h-16
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

const ProjectLink = ({
  text,
  url,
  isVertical,
  type,
  handleClick,
  showMore = null,
}) => {
  const { focused, reportHovered, reportUnhovered } = useFocusManagement();

  const { isTouchscreen } = useScreenType();

  const Content = type === "LINK" ? Link : Button;

  return (
    <Content
      onMouseEnter={isTouchscreen ? null : reportHovered}
      onMouseLeave={isTouchscreen ? null : reportUnhovered}
      onClick={() => {
        handleClick?.();
      }}
    >
      {!(type === "LINK" && isTouchscreen) && (
        <>
          <LinkSwiper
            hovered={showMore || focused}
            top={true}
            isVertical={isVertical}
          >
            {text === "MORE" && isTouchscreen ? "LESS" : ""}
          </LinkSwiper>
          {isTouchscreen && text === "MORE" && (
            <LinkSwiper
              hovered={showMore || focused}
              top={false}
              isVertical={isVertical}
            />
          )}
        </>
      )}
      {text}
    </Content>
  );
};

export default ProjectLink;
