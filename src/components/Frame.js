import tw from "tailwind-styled-components/dist/tailwind";

const Panel = tw.div`
  z-0
  bg-black
  mix-blend-screen
  overflow-hidden
`;

const Horizontal = tw(Panel)`
  h-16
  relative
  ${(props) =>
    props.corner === "TOPRIGHT" ? "left-0 right-0" : "top-64 w-1/3"}
  top-0
`;

const Vertical = tw(Panel)`
  w-16
  ${(props) =>
    props.corner === "TOPRIGHT"
      ? "absolute right-0 bottom-0 top-0"
      : "clear-both relative h-80"}
`;

const IconContainer = tw(Panel)`
  absolute
  z-10
  w-full
  flex
  flex-col
  justify-center
  items-center
  bottom-16
`;

const LinkContainer = tw(Panel)`
  absolute
  z-10
  h-full
  flex
  items-center
  left-12
  text-white
  text-4xl
  md:text-5xl
  md:left-16
`;

const Swiper = tw.div`
  z-20
  bg-white
  absolute
  transform
  transition-all
  duration-700
  ease-in-out
`;

const HorizontalSwiper = tw(Swiper)`
  skew-x-minus45
  h-16
  ${(props) =>
    props.corner === "TOPRIGHT"
      ? "top-0 -left-16 right-8"
      : "bottom-0 left-8 -right-16"}
  ${(props) =>
    !props.visible
      ? null
      : props.corner === "TOPRIGHT"
      ? "right-fulloffset"
      : "left-fulloffset"}
  hover:right-fulloffset
`;

const VerticalSwiper = tw(Swiper)`
  skew-y-minus45
  w-16
  ${(props) =>
    props.corner === "TOPRIGHT"
      ? "right-0 -bottom-16 top-8"
      : "left-0 bottom-8 -top-16"}
  ${(props) =>
    !props.visible
      ? null
      : props.corner === "TOPRIGHT"
      ? "top-fulloffset"
      : "bottom-fulloffset"}
  hover:top-fulloffset
`;

const Frame = ({ corner, vertical, visible, children }) => {
  return (
    <>
      <Horizontal corner={corner}>
        <HorizontalSwiper visible={visible} corner={corner} />
        <LinkContainer>{children}</LinkContainer>
      </Horizontal>
      <Vertical corner={corner}>
        <VerticalSwiper visible={visible} corner={corner} />
        {!!vertical && <IconContainer>{vertical}</IconContainer>}
      </Vertical>
    </>
  );
};

export default Frame;
