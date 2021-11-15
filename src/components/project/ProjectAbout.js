import tw from "tailwind-styled-components/dist/tailwind";

import { CALENDAR } from "../../images/icons/iconindex";

const ProjectDescription = tw.div`
  ${(props) => (props.nested ? "pr-4 pt-4" : "p-4")}
  ${(props) =>
    props.nested
      ? "block lg:hidden h-full+ w-full+ -translate-y-full"
      : "hidden lg:block w-projectpanel h-projectbox absolute translate-y-raisescreenshot"}
  bg-white
  z-40
  transform
  transition-transform
  duration-300
  ease-in-out
  ${(props) =>
    props.nested && props.showMore ? "translate-x-0" : "translate-x-full"}
  text-center
  overflow-hidden
`;

const Border = tw.div`
    h-full
    relative
    p-4
    md:p-10
    flex
    flex-col
    justify-between
    overflow-scroll
`;

const Line = tw.div`
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
    hidden
    lg:block
    bg-white
    text-black
    mix-blend-screen
    z-30
    absolute
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
    tracking-wide
    text-8
    md:text-12
    lg:text-14
    font-bold
    border-b-2 border-grey-300
`;

const DateContainer = tw.div`
    flex
    relative
    justify-center
    items-center
    py-4
`;

const Calendar = tw.img`
    h-4
    sm:h-6
    w-4
    sm:w-6
    mr-4
`;

const Date = tw.h3`
    text-l
    text-6
    md:text-10
    lg:text-14
`;

const Text = tw.p`
    text-left
    text-6
`;

const Technologies = tw.div`
    text-l
    sm:text-xl
`;

const Technology = tw.p`
    inline-block
    py-0.5
    px-0.5
    mx-0.5
    my-0.5
    whitespace-nowrap
    bg-white
    rounded-full
    shadow-pill
    text-5
    md:text-1
`;

const ProjectAbout = ({
  nested,
  reportCursor,
  showMore,
  project,
  focused = true,
}) => {
  console.log(project);
  return (
    <ProjectDescription
      onMouseEnter={!!reportCursor ? reportCursor.hover : null}
      onMouseLeave={!!reportCursor ? reportCursor.unhover : null}
      nested={nested}
      showMore={showMore}
    >
      {!!project.tag && <Tag>{project.tag.text}</Tag>}
      <Border nested={nested}>
        {!!project.tag && (
          <>
            <TopLine
              style={{ backgroundColor: project.tag.color }}
              focused={focused}
            />
            <BottomLine
              style={{ backgroundColor: project.tag.color }}
              focused={focused}
            />
            <LeftLine
              style={{ backgroundColor: project.tag.color }}
              focused={focused}
            />
            <RightLine
              style={{ backgroundColor: project.tag.color }}
              focused={focused}
            />
          </>
        )}
        <div>
          <Title>{project.name}</Title>
          <DateContainer>
            <Calendar
              srcSet={`${CALENDAR.iconSet[0]} 1x, ${CALENDAR.iconSet[1]} 2x`}
              src={CALENDAR.iconSet[0]}
              alt="Calendar icon"
            />
            <Date>{project.date}</Date>
          </DateContainer>
        </div>
        <div>
          {project.description.map((paragraph) => (
            <Text key={paragraph.slice(0, 5)}>{paragraph}</Text>
          ))}
        </div>
        <Technologies>
          {project.technologies.map((technology) => (
            <Technology>{technology}</Technology>
          ))}
        </Technologies>
      </Border>
    </ProjectDescription>
  );
};

export default ProjectAbout;
