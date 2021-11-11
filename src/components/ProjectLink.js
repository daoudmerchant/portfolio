import { useFocusManagement } from "../hooks";
import tw from "tailwind-styled-components";

const Link = tw.div`
  h-full
  flex-grow
  flex
  text-l
  md:text-xl
  lg:text-2xl
  justify-center
  items-center
  relative
  overflow-hidden
`;

const LinkSwiper = tw.div`
    absolute
    bg-white
    w-full
    h-full
    transform
    translate-z-0
    ${(props) => (props.hovered ? "translate-x-0" : "-translate-x-full")}
    transition-transform
    duration-300
    ease-in-out
    mix-blend-difference
`;

const ProjectLink = ({ children }) => {
  const { focused, reportHovered, reportUnhovered } = useFocusManagement();

  console.log(focused);

  return (
    <Link onMouseEnter={reportHovered} onMouseLeave={reportUnhovered}>
      <LinkSwiper hovered={focused} />
      {"Hello"}
    </Link>
  );
};

export default ProjectLink;
