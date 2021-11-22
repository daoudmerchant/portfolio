import tw from "tailwind-styled-components/dist/tailwind";
import styled from "styled-components";

const FooterEl = tw.footer`
    w-full
    bg-gray-100
    flex
    flex-col
    lg:flex-row
    space-around
    lg:p-footer
`;

const SubContainer = tw.div`
  flex-1
  flex
  flex-col
  justify-center
  items-center
  p-footertext
`;

const SpotifyContainer = tw(SubContainer)`
  lg:flex-row
`;

const Text = tw.p`
text-4
text-gray-600
xs:text-5
sm:text-4
md:text-5
xl:text-3
py-footertext
`;

const SpotifyText = tw(Text)`
  block
  text-center
  bg-gray-200
  w-spotify
  lg:w-auto
  lg:h-spotify
  lg:flex
  lg:items-center
  lg:px-2
`;

const SpotifyIframe = styled.iframe`
  width: 250px;
  @media (min-width: 1024px) {
    width: 300px !important;
  }
`;

const Footer = () => {
  return (
    <FooterEl>
      <SubContainer>
        <Text>Daoud Merchant, 2021</Text>
        <Text>
          Next, I really want to try a FrontendMentor challenge written in
          Typescript
        </Text>
        <Text>
          Background photo by{" "}
          <a href="https://unsplash.com/@maripopeo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Maria Vojtovicova
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/aurora-borealis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
          , icons made by{" "}
          <a
            href="https://www.flaticon.com/authors/pixel-perfect"
            title="Pixel perfect"
          >
            Pixel perfect
          </a>{" "}
          from{" "}
          <a href="https://www.flaticon.com/" title="Flaticon">
            www.flaticon.com
          </a>
        </Text>
      </SubContainer>
      <SpotifyContainer>
        <SpotifyText>Hear me play drums</SpotifyText>
        <SpotifyIframe
          title="spotify"
          src="https://open.spotify.com/embed/track/3JqsmGGE44NkrY7sOMdEXL"
          height="80"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
      </SpotifyContainer>
    </FooterEl>
  );
};

export default Footer;
