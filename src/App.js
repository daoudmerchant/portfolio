import { useState, useEffect, useMemo } from "react";

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
    font-size: 2.4px;
    @media screen and (min-width: 300) {
      font-size: 2.6px;
    }
    @media screen and (min-width: 340px) {
      font-size: 2.8px;
    }
    @media screen and (min-width: 400px) {
      font-size: 3.3px;
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
    @media screen and (min-width: 2000px) {
      font-size: 5px;
    }
    @media screen and (min-width: 4000px) {
      font-size: 10px;
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
  overflow-x-hidden
`;

const Screen = tw.div`
  h-full
  w-full
  bg-white
  z-50
  transition-position
  duration-500
  ease-in-out
  absolute
  ${(props) => (props.visible ? "left-full" : "left-0")};
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

const readyState = (() => {
  let state = {
    background: false,
    profile: false,
  };
  PROJECTS.forEach((project) => {
    state[project.name] = false;
  });
  return state;
})();

function App() {
  const [showBanner, setShowBanner] = useState(false);
  const [showContent, setShowContent] = useState(false);

  const [ready, setReady] = useState(readyState);

  const pageIsReady = useMemo(() => {
    const keys = Object.keys(ready);
    return keys.length > 2 && keys.every((item) => !!ready[item]);
  }, [ready]);

  useEffect(() => {
    if (!pageIsReady) return;
    setTimeout(() => setShowBanner(true), 300); // move to back of queue
    setTimeout(() => setShowContent(true), 600);
  }, [pageIsReady]);

  const reportReady = (name) => {
    if (ready[name]) return;
    setReady((prevReady) => ({
      ...prevReady,
      [name]: true,
    }));
  };

  return (
    <>
      <GlobalStyle />
      <div className="App">
        <Banner visible={showBanner} reportReady={reportReady} />
        <TopFader />
        <Main>
          <Screen visible={showContent} />
          <Greeting reportReady={reportReady} />
          {PROJECTS.map((project, i) => {
            return (
              <Project
                key={project.name}
                project={project}
                reportReady={reportReady}
              />
            );
          })}
          <Footer />
        </Main>
        <BottomFader />
      </div>
    </>
  );
}
export default App;
