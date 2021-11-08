import tw from "tailwind-styled-components/dist/tailwind";

const Panel = tw.div`
    absolute
    bg-black
    transform
`;

const Horizontal = tw(Panel)`
h-60px
left-30px
right-30px
md:h-80px
md:left-40px
md:right-40px
skew-x-minus45
${(props) => (props.side === "TOP" ? "top-0" : "bottom-0")}
`;

const Vertical = tw(Panel)`
  w-60px
  top-30px
  bottom-30px
  md:w-80px
  md:top-40px
  md:bottom-40px
  skew-y-minus45
  ${(props) => (props.side === "RIGHT" ? "right-0" : "left-0")}
`;

const Frame = ({ corner }) => {
  /*
        corner = "TOPRIGHT" || "BOTTOMLEFT"
    */
  return (
    <>
      <Horizontal side="TOP" />
      <Vertical side="RIGHT" />
    </>
  );
};

export default Frame;
