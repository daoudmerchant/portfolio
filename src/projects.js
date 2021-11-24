import tw from "tailwind-styled-components/dist/tailwind";

import { SCREENSHOTS } from "./images/Projects";

const Link = tw.a`
  border-b-2
  border-blue-600
  text-blue-600
  hover:text-blue-800
  hover:border-blue-800
  visited:text-purple-600
  visited:border-purple-600
`;

export const PROJECTS = [
  {
    name: "ShowMeSomething",
    date: "October 2021",
    description: [
      "A button-based Reddit app using the Reddit API, with " +
        "CRUD management of buttons stored in user accounts on Google " +
        "Firebase upon form validation.",
      "The goal was to make Reddit content consumption immediate, improve " +
        "accessibility and eliminate 'doom-scrolling'.",
    ],
    technologies: [
      "React",
      "React Router Dom",
      "Firebase",
      "Reddit API",
      "Sass",
    ],
    demo: "https://daoudmerchant.github.io/show-me-something/#/",
    repo: "https://github.com/daoudmerchant/show-me-something",
    video: "L4Fa_zh-WmM",
    tag: {
      text: "LATEST",
      color: "#ffde8c",
    },
    screenshots: SCREENSHOTS.ShowMeSomething,
    mobileOnly: false,
  },
  {
    name: "Battleships",
    date: "September 2021",
    description: [
      "A mobile Battleships app with two-player hot-seating, " +
        "an AI opponent, multiple grid sizes and a drag-and-drop " +
        "ship placement interface, unit tested in Jest.",
    ],
    warning: [
      "This app uses technology specifically for touchscreens " +
        "and is therefore only available on mobile devices (see why ",
      <Link
        href="https://github.com/daoudmerchant/battleships#why-doesnt-this-work-on-desktop"
        rel="noreferrer"
        target="_blank"
      >
        here
      </Link>,
      ").",
    ],
    technologies: ["React", "React Drag-And-Drop", "Jest", "Styled Components"],
    demo: "https://daoudmerchant.github.io/battleships/",
    repo: "https://github.com/daoudmerchant/battleships",
    video: "x2teyEYqs5A",
    screenshots: SCREENSHOTS.Battleships,
    mobileOnly: true,
  },
  {
    name: "Shopping Cart",
    date: "August 2021",
    description: [
      "A simple e-commerce website with category and stock " +
        "filtering, reordering, list and grid views, case-insensitive " +
        "search and basket logic.",
      "(Can you guess that I was searching online for a particular " +
        "Switch game at the time?)",
    ],
    technologies: ["React", "React Router Dom", "Styled Components"],
    demo: "https://daoudmerchant.github.io/shopping-cart/#/",
    repo: "https://github.com/daoudmerchant/shopping-cart",
    video: "DntN1dEsbIg",
    screenshots: SCREENSHOTS.ShoppingCart,
    mobileOnly: false,
  },
  {
    name: "Calculator",
    date: "March 2021",
    description: [
      "See my progress! A retro calculator with a fixed 8 digit " +
        "display, 'error' message when you break it (like the ones at school) " +
        "and keyboard controls.",
      "Written entirely by hand in vanilla, furiously polluting the " +
        "global namespace before I knew better.",
    ],
    technologies: ["Vanilla JS", "Vanilla CSS", "HTML5", "Mobile-Unfriendly"],
    demo: "https://daoudmerchant.github.io/calculator/",
    repo: "https://github.com/daoudmerchant/calculator",
    video: "uWlrfumgFpU",
    tag: {
      text: "SEE MY PROGRESS",
      color: "#c2cbff",
    },
    screenshots: SCREENSHOTS.Calculator,
    mobileOnly: false,
  },
  {
    name: "This Site",
    date: "November 2021",
    description: [
      "Created without any template for a deeper learning experience and more explicit " +
        "example of my current skill level.",
      "Apart from practising knock-out graphics, forcing myself to use Tailwind taught " +
        "me a lot about its advanced usage and configuration.",
    ],
    technologies: ["React", "Styled Components", "Tailwind"],
    repo: "https://github.com/daoudmerchant/portfolio",
    demo: false,
    video: "uWlrfumgFpU", // FIX
    tag: {
      text: "SITE-CEPTION",
      color: "#d4d4d4",
    },
    screenshots: SCREENSHOTS.ThisSite,
    mobileOnly: false,
  },
];
