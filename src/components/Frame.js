import tw from "tailwind-styled-components/dist/tailwind";

const Top = tw.div`
    h-20
    bg-black
    w-9/10
    transform
    skew-x-minus45
    absolute
    top-0
    right-10
`;

const Frame = () => {
  return (
    <>
      <Top />
    </>
  );
};

export default Frame;
