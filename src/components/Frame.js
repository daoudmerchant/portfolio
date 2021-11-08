import tw from "tailwind-styled-components/dist/tailwind";

const Panel = tw.div`
  absolute
  bg-black
  transform
`;

const Horizontal = tw(Panel)`
  h-16
  left-8
  right-8
  skew-x-minus45
${(props) => (props.side === "TOP" ? "top-0" : "bottom-0")}
`;

const Vertical = tw(Panel)`
  w-16
  top-8
  bottom-8
  skew-y-minus45
  ${(props) => (props.side === "RIGHT" ? "right-0" : "left-0")}
`;

const IconContainer = tw(Panel)`
  z-10
  w-full
  flex
  flex-col
  justify-center
  items-center
  skew-y-45
  bottom-16
`;

const LinkContainer = tw(Panel)`
  z-10
  h-full
  flex
  items-center
  skew-x-45
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
  h-full
  w-full
`;

const HorizontalSwiper = tw(Swiper)`
  
`;

const Frame = ({ corner, vertical, children }) => {
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
        <LinkContainer>{children}</LinkContainer>
      </Horizontal>
      <Vertical side={alignment.verticalSide}>
        {!!vertical && <IconContainer>{vertical}</IconContainer>}
      </Vertical>
    </>
  );
};

export default Frame;
