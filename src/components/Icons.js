import tw from "tailwind-styled-components/dist/tailwind";

// icons
import { ICONS } from "../images/icons/iconindex";

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
  mt-8
`;

const LINKS = {
  CV: "#",
  LinkedIn: "https://www.linkedin.com",
  email: "mailto:hellodaoud@outlook.com",
  GitHub: "https://github.com/daoudmerchant",
};

const Icons = () => {
  return (
    <IconContainer>
      {[ICONS.GITHUB, ICONS.LINKEDIN, ICONS.CV, ICONS.EMAIL].map(
        (IconObject) => (
          <IconLink
            href={LINKS[IconObject.type]}
            target={IconObject.type === "email" ? undefined : "_blank"}
            rel={IconObject.type === "email" ? undefined : "noreferrer"}
          >
            <Icon
              src={IconObject.iconSet[0]}
              alt={IconObject.type}
              srcSet={`${IconObject.iconSet[0]}, ${IconObject.iconSet[1]} 2x, ${IconObject.iconSet[2]} 3x`}
            />
          </IconLink>
        )
      )}
    </IconContainer>
  );
};

export default Icons;
