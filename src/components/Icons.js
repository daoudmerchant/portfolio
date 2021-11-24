import tw from "tailwind-styled-components/dist/tailwind";

import Obfuscate from "react-obfuscate";

// icons
import { ICONS } from "../images/icons/icons";

import { getSrcSet } from "../constants/utils";

const IconContainer = tw.div`
  w-full
  h-fulllinks
  bg-black
  z-10
  transform
  font-bold
  absolute
  mix-blend-screen
  transform
  skew-y-45
  top-8
  flex
  flex-col
  items-center
  justify-end
  overflow-hidden
`;

const Icon = tw.img`
  filter
  invert
  w-full
`;

const linkStyles = `
  w-10
  h-10
  lg:w-14
  lg:h-14
  px-1
  sm:px-2
  md:px-1
  lg:px-2
  xl:px-0
  xl:w-11
  xl:h-11
  mt-8
`;

const IconLink = tw.a(linkStyles);

const EmailLink = tw(Obfuscate)(linkStyles);

const Icons = () => {
  return (
    <IconContainer>
      {ICONS.map((icon) => {
        const isMail = icon.type === "EMAIL";
        const Link = isMail ? EmailLink : IconLink;
        return (
          <Link
            key={icon.url}
            href={isMail ? null : icon.url}
            target={isMail ? null : "_blank"}
            rel={isMail ? null : "noreferrer"}
            email={isMail ? icon.url : null}
          >
            <Icon
              src={icon.icons[0]}
              alt={icon.type}
              srcSet={getSrcSet(icon.icons)}
            />
          </Link>
        );
      })}
    </IconContainer>
  );
};

export default Icons;
