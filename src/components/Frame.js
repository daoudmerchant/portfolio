import tw from "tailwind-styled-components/dist/tailwind";

import Triangles from "./stylecomponents/Triangle";

const Panel = tw.div`
  z-10
  bg-black
  transform
  font-bold
  overflow-hidden
  absolute
  mix-blend-screen
`;

const Horizontal = tw(Panel)`
  h-16
  skew-x-minus45
  left-8
  right-8
  ${(props) => (props.corner === "TOPRIGHT" ? "top-0" : "bottom-0")}
`;

/*
    Project horizontal will always be 50% (- 4em)
    16:10 ratio
    50 / 16 * 10 = 31.25% (- 4em)
*/

const Vertical = tw(Panel)`
  w-16
  skew-y-minus45
  top-0
  bottom-8
  ${(props) => (props.corner === "TOPRIGHT" ? "right-0" : "left-0")}
`;

const IconContainer = tw(Panel)`
transform
skew-y-45
  absolute
  z-20
  w-full
  flex
  flex-col
  justify-center
  items-center
  ${(props) => (props.corner === "TOPRIGHT" ? "bottom-16" : "top-24")}
`;

const LinkContainer = tw(Panel)`
transform
skew-x-45
left-8
  z-20
  h-full
  w-fulllinks
  flex
  items-center
  text-white
  justify-between
`;

const Swiper = tw.div`
  z-30
  bg-white
  absolute
  transform
  transition-position
  duration-700
  ease-in-out
`;

const HorizontalSwiper = tw(Swiper)`
  h-16
  ${(props) =>
    props.corner === "TOPRIGHT"
      ? "top-0 -left-16 right-0"
      : "bottom-0 left-0 right-0"}
  ${(props) =>
    !props.visible
      ? null
      : props.corner === "TOPRIGHT"
      ? "right-full"
      : "left-full"}
`;

const VerticalSwiper = tw(Swiper)`
  w-16
  ${(props) =>
    props.corner === "TOPRIGHT"
      ? "right-0 -bottom-16 top-0"
      : "left-0 bottom-0 top-0"}
  ${(props) =>
    !props.visible
      ? null
      : props.corner === "TOPRIGHT"
      ? "top-full"
      : "bottom-full"}
`;

const Frame = ({ corner, vertical, visible, children }) => {
  return (
    <>
      <Triangles />
      <Vertical corner={corner}>
        {!!vertical && (
          <IconContainer corner={corner}>{vertical}</IconContainer>
        )}
        <VerticalSwiper visible={visible} corner={corner} />
      </Vertical>
      <Horizontal corner={corner}>
        <LinkContainer length={children.length}>{children}</LinkContainer>
        <HorizontalSwiper visible={visible} corner={corner} />
      </Horizontal>
    </>
  );
};

export default Frame;
