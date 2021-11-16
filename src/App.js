import { useState, useEffect } from "react";

import tw from "tailwind-styled-components";
import styled, { createGlobalStyle } from "styled-components";

// projects
import { PROJECTS } from "./projects";

// components
import Banner from "./components/Banner";
import Greeting from "./components/Greeting";
import Project from "./components/Project";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  body, html, .App {
    margin: 0;
    padding: 0;
    height: 100%;
    width: 100%;
    overflow: hidden;
    font-family: 'Raleway', sans-serif;
  }

  .App {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 0;

    // BREAKPOINTS
    font-size: 2.8px;
    @media screen and (min-width: 420px) {
      font-size: 3px;
    }
    @media screen and (min-width: 640px) {
      font-size: 3px;
    }
    @media screen and (min-width: 1024px) {
      font-size: 3.5px;
    }
    @media screen and (min-width: 1536px) {
      font-size: 4px;
    }
  }

  .App * {
    // hide scrollbar
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;

const main = styled.main`
  // hide scrollbar
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Main = tw(main)`
  absolute
  left-0
  bottom-0
  right-16
  top-16
  z-1
  bg-transparent
  overflow-x-auto
`;

const Fader = tw.div`
  h-4
  right-16
  left-0
  absolute
  z-50
  from-transparent
  to-white
`;

const TopFader = tw(Fader)`
  top-16
  bg-gradient-to-t
`;

const BottomFader = tw(Fader)`
  bottom-0
  bg-gradient-to-b
`;

function App() {
  const [showBanner, setShowBanner] = useState(false);

  // TODO: Improve 'start the show' logic
  useEffect(() => {
    setTimeout(() => setShowBanner(true), 500);
  }, []);

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Banner visible={showBanner} />
        <TopFader />
        <Main>
          <Greeting visible={showBanner} />
          {PROJECTS.map((project, i) => {
            return (
              <Project
                key={project.name}
                visible={showBanner}
                project={project}
              />
            );
          })}
          <Footer />
        </Main>
        <BottomFader />

        {/* Photo by <a href="https://unsplash.com/@maripopeo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Maria Vojtovicova</a> on <a href="https://unsplash.com/s/photos/aurora-borealis?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>
        <div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>*/}
      </div>
    </>
  );
}
export default App;
