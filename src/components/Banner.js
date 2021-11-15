import tw from "tailwind-styled-components/dist/tailwind";

// background
import { BACKGROUND } from "../images";

import Frame from "./Frame";

const Background = tw.img`
  object-fill
  center
  h-full
  w-full
  z-0
  absolute
  top-0
  bottom-0
  left-0
  right-0
  overflow-hidden
`;

const Name = tw.h1`
    text-10
`;

const Banner = ({ visible }) => {
  return (
    <>
      <Background
        srcSet={`${BACKGROUND.res640} 640w, ${BACKGROUND.res1920} 1920w, ${BACKGROUND.res2400} 2400w, ${BACKGROUND.res4160} 4160w`}
        src={BACKGROUND.res1920}
        alt="Aurora Borealis"
      />
      <Frame topright={true} visible={visible}>
        <Name>Daoud Merchant</Name>
      </Frame>
    </>
  );
};

export default Banner;
