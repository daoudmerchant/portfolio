import tw from "tailwind-styled-components/dist/tailwind";

const GreetingContainer = tw.header`
    w-full
    md:w-1/2
    lg:w-2/3
    md:h-80
    bg-white
    float-right
    flex
    justify-center
    items-center
    px-6
`;

const GreetingText = tw.p`
text-2xl
text-center
italic
mb-2
md:mb-0

// animation
opacity-0
${(props) => (props.visible ? "animate-fade-in" : null)}
`;

const ProfileContainer = tw.div`
    z-20
    h-64
    md:h-80
    w-full
    md:w-1/2
    lg:w-1/3
    float-left
    flex
    justify-center
    items-center
    bg-white
    mix-blend-screen
`;

const ProfileBorder = tw.div`
    border-8
    border-black
    h-48
    w-48
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
    md:h-56
    md:w-56
    top-0
    left-1/2
    md:left-1/4
    lg:left-1/6
    transform
    -translate-x-1/2
    top-12
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
          This is the greeting (NOT blended)
          <br />
          In it I'll talk a little bit about myself, trying to sound
          professional and appealing
        </GreetingText>
      </GreetingContainer>
    </>
  );
};

export default Greeting;
