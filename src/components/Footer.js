import tw from "tailwind-styled-components/dist/tailwind";

const FooterEl = tw.footer`
    w-full
    h-80
    bg-red-500
`;

const Footer = () => {
  return <FooterEl>Footer</FooterEl>;
};

export default Footer;
