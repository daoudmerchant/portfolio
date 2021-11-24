import tw from "tailwind-styled-components/dist/tailwind";

import { BACKGROUND } from "../images/background";

import { getSrcSets } from "../constants/utils";

import Frame from "./Frame";

const BackgroundImg = tw.img`
  object-cover
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
  bg-blue-900
`;

const Name = tw.h1`
  text-10
`;

const Background = ({ visible, reportReady }) => {
  const reportFinished = () => reportReady("background");
  return (
    <>
      <picture>
        {getSrcSets(BACKGROUND)}
        <BackgroundImg
          onLoad={reportFinished}
          onError={reportFinished}
          src={BACKGROUND[0].files[2]}
          alt="Aurora Borealis"
        />
      </picture>
      <Frame topright={+true} visible={+visible}>
        <Name>Daoud Merchant</Name>
      </Frame>
    </>
  );
};

export default Background;
