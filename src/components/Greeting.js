import tw from "tailwind-styled-components/dist/tailwind";

import { ABOUT } from "../copy";

import { PROFILE } from "../images/profile";

import { getSrcSets } from "../utils";

const GreetingContainer = tw.header`
    w-full
    md:w-2/3
    md:h-100
    bg-white
    float-right
    flex
    justify-center
    items-center
    px-6
`;

const GreetingText = tw.div`
text-left
text-gray-600
mb-8
md:mb-0
md:mr-8
`;

const Phrase = tw.p`
  pt-1
  text-5
xs:text-6
md:text-4.5
xl:text-5
`;

const ProfileContainer = tw.div`
    z-20
    h-70
    md:h-100
    w-full
    md:w-1/3
    float-left
    flex
    justify-center
    items-center
    bg-white
    mix-blend-screen
`;

const ProfileBorder = tw.div`
    border-6
    border-black
    h-56
    w-56
    md:h-48
    md:w-48
    md:h-64
    md:w-64
    rounded-full
`;

const ProfilePic = tw.img`
    absolute
    z-30
    h-40
    w-40
    md:h-48
    md:w-48
    top-15
    md:top-26
    left-1/2
    md:left-1/6
    transform
    -translate-x-1/2
    rounded-full
    m-0
`;

const Greeting = ({ reportReady }) => {
  return (
    <>
      <ProfileContainer>
        <ProfileBorder />
      </ProfileContainer>
      <picture onLoad={() => reportReady("profile")}>
        {getSrcSets(PROFILE)}
        <ProfilePic src={PROFILE[1].files[0]} alt="profile" />
      </picture>
      <GreetingContainer>
        <GreetingText>
          {ABOUT.map((phrase) => (
            <Phrase key={phrase}>{phrase}</Phrase>
          ))}
        </GreetingText>
      </GreetingContainer>
    </>
  );
};

export default Greeting;
