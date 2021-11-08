import { useState } from "react";

import tw from "tailwind-styled-components";
import styled, { createGlobalStyle } from "styled-components";

// background
import { BACKGROUND } from "./images";

// icons
import { ICONS } from "./images/icons/iconindex";

// components
import Frame from "./components/Frame";

const GlobalStyle = createGlobalStyle`
  body, html, .App {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    overflow: hidden;
  }
`;

const background = styled.main`
  background-image: url(${(props) => props.BACKGROUND.res640});
  @media (min-width: 641px) {
    background-image: url(${(props) => props.BACKGROUND.res1920});
  }
  @media (min-width: 1921px) {
    background-image: url(${(props) => props.BACKGROUND.res2400});
  }
  @media (min-width: 2401px) {
    background-image: url(${(props) => props.BACKGROUND.res4160});
  }
`;

const Main = tw(background)`
  bg-cover
  bg-no-repeat
  bg-center
  z-0
  absolute
  top-0
  bottom-0
  left-0
  right-0
`;

const WhiteFilter = tw.div`
  h-full
  w-full
  absolute
  z-1
  bg-white
  mix-blend-screen
`;

const Icon = tw.img`
  filter
  invert
`;

const IconLink = tw.a`
  my-4
`;

const TestContainer = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 0;
  height: 100px;
  width: 500px;
  background-color: red;
  isolation: isolate;
`;

const Toggle = tw.button`
  absolute
  text-4xl
  mix-blend-normal
`;

const LINKS = {
  CV: "#",
  LinkedIn: "https://www.linkedin.com",
  email: "mailto:hellodaoud@outlook.com",
  GitHub: "https://github.com/daoudmerchant",
};

const Icons = [ICONS.GITHUB, ICONS.LINKEDIN, ICONS.CV, ICONS.EMAIL].map(
  (Icons) => (
    <IconLink
      href={LINKS[Icons.type]}
      target={Icons.type === "email" ? undefined : "_blank"}
      rel={Icons.type === "email" ? undefined : "noreferrer"}
    >
      <Icon
        src={Icons.iconSet[0]}
        alt={Icons.type}
        srcSet={`${Icons.iconSet[0]}, ${Icons.iconSet[1]} 2x, ${Icons.iconSet[2]} 3x`}
      />
    </IconLink>
  )
);
function App() {
  const [showBanner, setShowBanner] = useState(false);

  const toggleBanner = () => setShowBanner((prevVisibility) => !prevVisibility);
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Main BACKGROUND={BACKGROUND}>
          <WhiteFilter>
            <Frame corner="TOPRIGHT" vertical={Icons} visible={showBanner}>
              <h1>Daoud Merchant</h1>
            </Frame>
            <TestContainer>
              <Toggle onClick={toggleBanner}>Toggle Banner</Toggle>
            </TestContainer>
          </WhiteFilter>
        </Main>

        {/* Photo by <a href="https://unsplash.com/@maripopeo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Maria Vojtovicova</a> on <a href="https://unsplash.com/s/photos/aurora-borealis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>*/}
      </div>
    </>
  );
}

export default App;
