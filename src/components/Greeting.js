import tw from "tailwind-styled-components/dist/tailwind";

import { ABOUT } from "../copy";

const GreetingContainer = tw.header`
    w-full
    md:w-2/3
    md:h-80
    bg-white
    float-right
    flex
    justify-center
    items-center
    px-6
`;

const GreetingText = tw.div`
text-5
xs:text-6
md:text-4.5
text-left
text-gray-600
mb-2
md:mb-0

// animation
opacity-0
${(props) => (props.visible ? "animate-fade-in" : null)}
`;

const Phrase = tw.p`
  pt-1
`;

const ProfileContainer = tw.div`
    z-20
    h-70
    md:h-80
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

    // animation
    opacity-0
    ${(props) => (props.visible ? "animate-fade-in" : null)}
`;

const ProfilePic = tw.img`
    absolute
    z-30
    h-40
    w-40
    md:h-48
    md:w-48
    left-1/2
    top-15
    md:top-16
    md:left-1/6
    transform
    -translate-x-1/2
    rounded-full
    m-0

    // animation
    opacity-0
    ${(props) => (props.visible ? "animate-fade-in" : null)}
`;

const Greeting = ({ visible }) => {
  return (
    <>
      <ProfileContainer>
        <ProfileBorder visible={visible} />
      </ProfileContainer>
      <ProfilePic
        src="https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1365/gallery-1511194376-cavachon-puppy-christmas.jpg?resize=980:*"
        alt="PLACEHOLDER ALTER"
        visible={visible}
      />
      <GreetingContainer visible={visible}>
        <GreetingText visible={visible}>
          {ABOUT.map((phrase) => (
            <Phrase>{phrase}</Phrase>
          ))}
        </GreetingText>
      </GreetingContainer>
    </>
  );
};

export default Greeting;
