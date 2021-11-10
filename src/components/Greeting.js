import tw from "tailwind-styled-components/dist/tailwind";

const GreetingContainer = tw.header`
    text-2xl
    w-full
    md:w-1/2
    lg:w-2/3
    h-64
    md:h-80
    bg-white
    md:float-right
    md:flex
    md:justify-center
    md:items-center
    text-center
    px-6
    italic
`;

const ProfileContainer = tw.div`
    z-20
    h-64
    md:h-80
    w-full
    md:w-1/2
    lg:w-1/3
    md:float-left
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
`;

const Greeting = () => {
  return (
    <>
      <ProfileContainer>
        <ProfileBorder />
      </ProfileContainer>
      <ProfilePic
        src="https://hips.hearstapps.com/countryliving.cdnds.net/17/47/2048x1365/gallery-1511194376-cavachon-puppy-christmas.jpg?resize=980:*"
        alt="PLACEHOLDER ALTER"
      />
      <GreetingContainer>
        This is the greeting (NOT blended)
        <br />
        In it I'll talk a little bit about myself, trying to sound professional
        and appealing
      </GreetingContainer>
    </>
  );
};

export default Greeting;
