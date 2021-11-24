import tw from "tailwind-styled-components/dist/tailwind";

// icons
import { ICONS } from "../images/icons/icons";

import { getSrcSet } from "../utils";

const IconContainer = tw.div`
z-10
bg-black
transform
font-bold
overflow-hidden
absolute
mix-blend-screen
transform
skew-y-45
  absolute
  top-8
  z-20
  w-full
  flex
  flex-col
  items-center
  h-fulllinks
  justify-end
`;

const Icon = tw.img`
  filter
  invert
  w-full
`;

const IconLink = tw.a`
  w-10
  h-10
  lg:w-14
  lg:h-14
  px-2
  md:px-1
  lg:px-2
  xl:px-0
  xl:w-11
  xl:h-11
  mt-8
`;

const Icons = () => {
  return (
    <IconContainer>
      {ICONS.map((icon) => (
        <IconLink
          href={icon.url}
          target={icon.type !== "EMAIL" ? "_blank" : null}
          rel={icon.type === "LINK" ? "noreferrer" : null}
        >
          <Icon
            src={icon.icons[0]}
            alt={icon.type}
            srcSet={getSrcSet(icon.icons)}
          />
        </IconLink>
      ))}
    </IconContainer>
  );
};

export default Icons;
