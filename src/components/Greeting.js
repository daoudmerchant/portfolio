import tw from "tailwind-styled-components/dist/tailwind";

const GreetingContainer = tw.header`
    text-4xl
    w-full
    h-auto
    bg-white
`;

const Greeting = () => {
  return (
    <GreetingContainer>This is the greeting (NOT blended)</GreetingContainer>
  );
};

export default Greeting;
