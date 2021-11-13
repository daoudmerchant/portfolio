import tw from "tailwind-styled-components/dist/tailwind";

const ProjectDescription = tw.div`
  ${(props) => (props.nested ? "pr-4 pt-4" : "px-4 pb-16")}
  ${(props) =>
    props.nested
      ? "block lg:hidden h-full+ w-full+"
      : "hidden lg:block w-projectpanel h-projectpanel absolute"}
  bg-white
  z-40
  transform
  transition-transform
  duration-300
  ease-in-out
  ${(props) =>
    props.nested && props.showMore ? "translate-x-0" : "translate-x-full"}
  -translate-y-full
  text-center
`;

const Border = tw.div`
    h-full
    relative
    p-10
`;

const Line = tw.div`
    bg-red-500
    absolute
    transition-all
    duration-700
    ease-in-out
    z-20
    hidden
    lg:block
`;

const HorizontalLine = tw(Line)`
    h-5
`;

const VerticalLine = tw(Line)`
    w-5
`;

const TopLine = tw(HorizontalLine)`
    top-0
    right-0
    ${(props) => (props.focused ? "w-full" : "w-0")}
`;

const BottomLine = tw(HorizontalLine)`
    bottom-0
    left-0
    ${(props) => (props.focused ? "w-full" : "w-0")}
`;

const LeftLine = tw(VerticalLine)`
    left-0
    bottom-0
    ${(props) => (props.focused ? "h-full" : "h-0")}
`;

const RightLine = tw(VerticalLine)`
    right-0
    top-0
    ${(props) => (props.focused ? "h-full" : "h-0")}
`;

const Tag = tw.p`
    bg-white
    text-black
    mix-blend-screen
    z-30
    absolute
    top-0
    font-bold
    text-xl
    left-14
    px-5
    h-5
    flex
    justify-center
    items-center
`;

const Title = tw.h2`
    hidden
    lg:block
    text-4xl
`;

const Text = tw.p`
    text-left
    mb-4
`;

const ProjectAbout = ({
  nested,
  reportCursor,
  showMore,
  project,
  focused = true,
  tag = "LATEST",
}) => {
  return (
    <ProjectDescription
      onMouseEnter={!!reportCursor ? reportCursor.hover : null}
      onMouseLeave={!!reportCursor ? reportCursor.unhover : null}
      nested={nested}
      showMore={showMore}
    >
      {!!tag && <Tag>{tag}</Tag>}
      <Border nested={nested}>
        <TopLine focused={focused} />
        <BottomLine focused={focused} />
        <LeftLine focused={focused} />
        <RightLine focused={focused} />
        <Title>{project.name}</Title>
        <Text>{project.description}</Text>
        <Text>{project.more}</Text>
        <p>{project.technologies}</p>
      </Border>
    </ProjectDescription>
  );
};

export default ProjectAbout;
