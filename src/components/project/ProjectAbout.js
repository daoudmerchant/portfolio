import tw from "tailwind-styled-components/dist/tailwind";

import { CALENDAR } from "../../images/icons/icons";

import { getSrcSet } from "../../constants/utils";

const ProjectDescription = tw.div`
  ${(props) =>
    props.$nested
      ? "block xl:hidden h-full+ w-full+ -translate-y-full relative pr-4 pt-4"
      : "hidden xl:block w-projectpanel h-projectbox absolute translate-y-raisescreenshot p-4 lg:p-2 xl:p-0"}
  bg-white
  z-40
  transform
  transition-transform
  duration-300
  startrek
  ${(props) =>
    props.$nested && props.$showMore ? "translate-x-0" : "translate-x-full"}
  text-center
  overflow-hidden
`;

const Border = tw.div`
  h-full
  w-full
  absolute
  p-5
  2xl:px-8
  3xl:px-16
`;

const Line = tw.div`
  absolute
  transition-all
  duration-700
  startrek
  z-20
  hidden
  xl:block
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
  ${(props) => (props.$focused ? "w-full" : "w-0")}
`;

const BottomLine = tw(HorizontalLine)`
  bottom-0
  left-0
  ${(props) => (props.$focused ? "w-full" : "w-0")}
`;

const LeftLine = tw(VerticalLine)`
  left-0
  bottom-0
  ${(props) => (props.$focused ? "h-full" : "h-0")}
`;

const RightLine = tw(VerticalLine)`
  right-0
  top-0
  ${(props) => (props.$focused ? "h-full" : "h-0")}
`;

const TextContainer = tw.div`
  h-full
  w-full
  overflow-scroll
  md:overflow-hidden
  flex
  flex-col
  justify-around
`;

const Tag = tw.p`
  hidden
  lg:block
  bg-white
  text-black
  text-4
  mix-blend-screen
  z-30
  absolute
  font-bold
  left-2
  px-1
  flex
  justify-center
  items-center
`;

const Title = tw.h2`
  mt-0
  tracking-wide
  text-7
  xs:text-8
  sm:text-6
  md:text-10
  xl:text-6
  font-bold
  border-b-2
  border-grey-300
`;

const DateContainer = tw.div`
  flex
  relative
  justify-center
  items-center
  pt-1
`;

const Calendar = tw.img`
  h-4
  sm:h-6
  w-4
  sm:w-6
  mr-4
`;

const Date = tw.h3`
  text-6
  sm:text-5
  md:text-7
  lg:text-14
  xl:text-4
`;

const Text = tw.p`
  text-left
  text-4.5
  xs:text-6
  sm:text-5
  md:text-5
  lg:text-6
  xl:text-4
  p-0.5
`;

const Warning = tw(Text)`
  bg-gray-100
  border-l-8
  border-gray-300
`;

const Technologies = tw.div`
  text-4
  2xs:text-3
  xs:text-5
  sm:text-4.5
  md:text-5
  xl:text-3
`;

const Technology = tw.p`
  inline-block
  py-0.5
  px-1
  mx-0.5
  my-0.5
  whitespace-nowrap
  bg-white
  rounded-full
  shadow-pill
  md:text-1
`;

const ProjectAbout = ({
  nested,
  reportCursor,
  showMore,
  project,
  focused = true,
}) => {
  return (
    <ProjectDescription
      onMouseEnter={!!reportCursor ? reportCursor.hover : null}
      onMouseLeave={!!reportCursor ? reportCursor.unhover : null}
      $nested={nested}
      $showMore={+showMore}
    >
      {!!project.tag && <Tag>{project.tag.text}</Tag>}
      <Border>
        {!!project.tag && (
          <>
            <TopLine
              style={{ backgroundColor: project.tag.color }}
              $focused={+focused}
            />
            <BottomLine
              style={{ backgroundColor: project.tag.color }}
              $focused={+focused}
            />
            <LeftLine
              style={{ backgroundColor: project.tag.color }}
              $focused={+focused}
            />
            <RightLine
              style={{ backgroundColor: project.tag.color }}
              $focused={+focused}
            />
          </>
        )}
        <TextContainer>
          <div>
            <Title>{project.name}</Title>
            <DateContainer>
              <Calendar
                srcSet={getSrcSet(CALENDAR.iconSet)}
                src={CALENDAR.iconSet[0]}
                alt="Calendar icon"
              />
              <Date>{project.date}</Date>
            </DateContainer>
          </div>
          <div>
            {project.description.map((paragraph) => (
              <Text key={paragraph}>{paragraph}</Text>
            ))}
            {project.warning && <Warning>{project.warning}</Warning>}
          </div>
          <Technologies>
            {project.technologies.map((technology) => (
              <Technology key={technology}>{technology}</Technology>
            ))}
          </Technologies>
        </TextContainer>
      </Border>
    </ProjectDescription>
  );
};

export default ProjectAbout;
