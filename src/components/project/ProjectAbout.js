import tw from "tailwind-styled-components/dist/tailwind";

const ProjectDescription = tw.div`
  ${(props) =>
    props.nested
      ? "block lg:hidden h-full+ w-full+"
      : "hidden lg:block w-projectpanel h-projectpanel absolute"}
  pr-8
  pt-8
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

const Title = tw.h2`
    hidden
    lg:block
    text-4xl
`;

const Text = tw.p`
    text-left
    mb-4
`;

const ProjectAbout = ({ nested, reportCursor, showMore, project }) => {
  console.log(reportCursor);
  return (
    <ProjectDescription
      onMouseEnter={!!reportCursor ? reportCursor.hover : null}
      onMouseLeave={!!reportCursor ? reportCursor.unhover : null}
      nested={nested}
      showMore={showMore}
    >
      <Title>{project.name}</Title>
      <Text>{project.description}</Text>
      <Text>{project.more}</Text>
      <p>{project.technologies}</p>
    </ProjectDescription>
  );
};

export default ProjectAbout;
