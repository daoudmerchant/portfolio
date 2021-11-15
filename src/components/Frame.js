import tw from "tailwind-styled-components/dist/tailwind";

import Icons from "./Icons";
import Triangles from "./stylecomponents/Triangle";

const Panel = tw.div`
  z-10
  bg-black
  transform
  font-bold
  overflow-hidden
  absolute
  mix-blend-screen
  text-frame
`;

const Horizontal = tw(Panel)`
  h-16
  skew-x-minus45
  left-8
  right-8
  ${(props) => (props.topright ? "top-0" : "bottom-0")}
`;

/*
    Project horizontal will always be 50% (- 4em)
    16:10 ratio
    50 / 16 * 10 = 31.25% (- 4em)
*/

const Vertical = tw(Panel)`
  w-16
  skew-y-minus45
  top-8
  bottom-8
  ${(props) => (props.topright ? "right-0" : "left-0")}
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
  left-0
  right-0
  ${(props) => (console.log(props) || props.topright ? "top-0" : "bottom-0")}
  ${(props) =>
    !props.visible ? null : props.topright ? "right-full" : "left-full"}
`;

const VerticalSwiper = tw(Swiper)`
  w-16
  bottom-0
  top-0
  ${(props) => (props.topright ? "right-0" : "left-0")}
  ${(props) =>
    !props.visible ? null : props.topright ? "top-full" : "bottom-full"}
`;

const Frame = ({ topright, vertical, visible, children }) => {
  return (
    <>
      <Triangles />
      <Vertical topright={topright}>
        {topright && <Icons />}
        <VerticalSwiper visible={visible} topright={topright} />
      </Vertical>
      <Horizontal topright={topright}>
        <LinkContainer>{children}</LinkContainer>
        <HorizontalSwiper visible={visible} topright={topright} />
      </Horizontal>
    </>
  );
};

export default Frame;
