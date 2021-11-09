import tw from "tailwind-styled-components/dist/tailwind";

const Panel = tw.div`
z-0
  absolute
  bg-black
  mix-blend-screen
`;

const Horizontal = tw(Panel)`
  h-16
  left-0
  right-0
${(props) => (props.side === "TOP" ? "top-0" : "bottom-0")}
`;

const Vertical = tw(Panel)`
  w-16
  top-0
  bottom-0
  ${(props) => (props.side === "RIGHT" ? "right-0" : "left-0")}
`;

const IconContainer = tw(Panel)`
  z-10
  w-full
  flex
  flex-col
  justify-center
  items-center
  bottom-16
`;

const LinkContainer = tw(Panel)`
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
  duration-500
  ease-in-out
`;

const HorizontalSwiper = tw(Swiper)`
  skew-x-minus45
  h-16
  ${(props) =>
    props.side === "TOP"
      ? "top-0 -left-16 right-8"
      : "bottom-0 left-8 -right-16"}
  ${(props) => (props.visible ? "right-fulloffset" : null)}
`;

const VerticalSwiper = tw(Swiper)`
  skew-y-minus45
  w-16
  ${(props) =>
    props.side === "RIGHT"
      ? "right-0 -bottom-16 top-8"
      : "left-0 bottom-8 -top-16"}
  ${(props) => (props.visible ? "top-fulloffset" : null)}
`;

const Frame = ({ corner, vertical, visible, children }) => {
  const alignment =
    corner === "TOPRIGHT"
      ? {
          horizontalSide: "TOP",
          verticalSide: "RIGHT",
        }
      : {
          horizontalSide: "BOTTOM",
          verticalSide: "LEFT",
        };
  return (
    <>
      <Horizontal side={alignment.horizontalSide}>
        <HorizontalSwiper visible={visible} side={alignment.horizontalSide} />
        <LinkContainer>{children}</LinkContainer>
      </Horizontal>
      <Vertical side={alignment.verticalSide}>
        <VerticalSwiper visible={visible} side={alignment.verticalSide} />
        {!!vertical && <IconContainer>{vertical}</IconContainer>}
      </Vertical>
    </>
  );
};

export default Frame;
