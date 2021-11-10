import tw from "tailwind-styled-components/dist/tailwind";

const Panel = tw.div`
  z-10
  bg-black
  transform
`;

const Horizontal = tw(Panel)`
  h-16
  skew-x-minus45
  ${(props) =>
    props.corner === "TOPRIGHT"
      ? "absolute mix-blend-screen left-8 right-8 top-0"
      : "relative overflow-hidden w-fullpanel left-8"}
`;

const Vertical = tw(Panel)`
  w-16
  skew-y-minus45
  ${(props) =>
    props.corner === "TOPRIGHT"
      ? "mix-blend-screen absolute right-0 top-0 bottom-8"
      : "relative h-80"}
    top-8
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
  bottom-16
`;

const LinkContainer = tw(Panel)`
transform
skew-x-45
  absolute
  z-20
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
  z-30
  bg-white
  absolute
  transform
  transition-all
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
  hover:right-fulloffset
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
  hover:top-fulloffset
`;

const Frame = ({ corner, vertical, visible, children }) => {
  return (
    <>
      <Vertical corner={corner}>
        {!!vertical && <IconContainer>{vertical}</IconContainer>}
        <VerticalSwiper visible={visible} corner={corner} />
      </Vertical>
      <Horizontal corner={corner}>
        <LinkContainer>{children}</LinkContainer>
        <HorizontalSwiper visible={visible} corner={corner} />
      </Horizontal>
    </>
  );
};

export default Frame;
