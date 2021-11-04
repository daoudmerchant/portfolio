import tw from "tailwind-styled-components";
import styled, { createGlobalStyle } from "styled-components";

// background
import { backgroundImg } from "./images";

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
  background-image: url(${(props) => props.backgroundImg.res640});
  @media (min-width: 641px) {
    background-image: url(${(props) => props.backgroundImg.res1920});
  }
  @media (min-width: 1921px) {
    background-image: url(${(props) => props.backgroundImg.res2400});
  }
  @media (min-width: 2401px) {
    background-image: url(${(props) => props.backgroundImg.res4160});
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
  mix-blend-lighten
  
  p {
    text-9xl
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Main backgroundImg={backgroundImg}>
          <WhiteFilter>
            <Frame />
          </WhiteFilter>
        </Main>

        {/* Photo by <a href="https://unsplash.com/@maripopeo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Maria Vojtovicova</a> on <a href="https://unsplash.com/s/photos/aurora-borealis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a> */}
      </div>
    </>
  );
}

export default App;
