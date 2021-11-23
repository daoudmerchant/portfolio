import tw from "tailwind-styled-components/dist/tailwind";

// background
import { BACKGROUND } from "../images/background";

import { getSrcSets } from "../utils";

import Frame from "./Frame";

const Background = tw.picture`
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
`;

const Fallback = tw.img`
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
`;

const Name = tw.h1`
    text-10
`;

const Banner = ({ visible, reportReady }) => {
  return (
    <>
      <Background onLoad={() => reportReady("background")}>
        {getSrcSets(BACKGROUND)}
        <Fallback src={BACKGROUND[0].files[2]} alt="Aurora Borealis" />
      </Background>
      <Frame topright={true} visible={visible}>
        <Name>Daoud Merchant</Name>
      </Frame>
    </>
  );
};

export default Banner;
