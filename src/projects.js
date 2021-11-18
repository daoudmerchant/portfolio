import { SCREENSHOTS } from "./images/Projects";

export const PROJECTS = [
  {
    name: "ShowMeSomething",
    date: "October 2021",
    description: [
      "A button-based Reddit app using the Reddit API, with " +
        "CRUD management of buttons stored in user accounts on Google " +
        "Firebase (OAuth sign-in).",
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
    tag: {
      text: "LATEST",
      color: "#ffde8c",
    },
    screenshots: SCREENSHOTS.ShowMeSomething,
  },
  {
    name: "Battleships",
    date: "September 2021",
    description: [
      "A mobile Battleships app with two-player hot-seating, " +
        "an AI opponent, multiple grid sizes and a drag-and-drop " +
        "ship placement interface, fully unit tested in Jest.",
      [
        "This app uses technology specifically for touchscreens " +
          "and is therefore only available on mobile devices (see why ",
        <a
          href="https://github.com/daoudmerchant/battleships#why-doesnt-this-work-on-desktop"
          rel="noreferrer"
          target="_blank"
        >
          here
        </a>,
        ").",
      ],
    ],
    technologies: ["React", "React Drag-And-Drop", "Jest", "Styled Components"],
    demo: "https://daoudmerchant.github.io/battleships/",
    repo: "https://github.com/daoudmerchant/battleships",
    screenshots: SCREENSHOTS.Battleships,
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
  },
  {
    name: "Calculator",
    date: "March 2021",
    description: [
      "One of my first projects: a retro calculator with a fixed 8 digit " +
        "display, 'error' message when you break it (like the ones at school) " +
        "and keyboard controls.",
      "Written entirely by hand in vanilla, furiously polluting the " +
        "global namespace before I knew better.",
    ],
    technologies: ["Vanilla JS", "Vanilla CSS", "HTML5", "Mobile-Unfriendly"],
    demo: "https://daoudmerchant.github.io/calculator/",
    repo: "https://github.com/daoudmerchant/calculator",
    tag: {
      text: "SEE MY PROGRESS",
      color: "#c2cbff",
    },
  },
];
