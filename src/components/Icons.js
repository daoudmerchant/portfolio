import tw from "tailwind-styled-components/dist/tailwind";

// icons
import { ICONS } from "../images/icons/iconindex";

const Icon = tw.img`
  filter
  invert
  w-iconlandscape
  portrait:w-iconportrait
`;

const IconLink = tw.a`
  my-iconmarginlandscape
  portrait:my-iconmarginportrait
`;

const LINKS = {
  CV: "#",
  LinkedIn: "https://www.linkedin.com",
  email: "mailto:hellodaoud@outlook.com",
  GitHub: "https://github.com/daoudmerchant",
};

const Icons = () => {
  return (
    <>
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
    </>
  );
};

export default Icons;
