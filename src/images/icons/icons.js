// CV file

import CVFILE from "../../downloads/CV Daoud Merchant.pdf";

// ICONS

// CV
import CV32 from "./cv/cv32.png";
import CV64 from "./cv/cv64.png";
import CV128 from "./cv/cv128.png";

// EMAIL
import EMAIL32 from "./email/email32.png";
import EMAIL64 from "./email/email64.png";
import EMAIL128 from "./email/email128.png";

// LINKEDIN
import LINKEDIN32 from "./linkedin/linkedin32.png";
import LINKEDIN64 from "./linkedin/linkedin64.png";
import LINKEDIN128 from "./linkedin/linkedin128.png";

// GITHUB
import GITHUB32 from "./github/github32.png";
import GITHUB64 from "./github/github64.png";
import GITHUB128 from "./github/github128.png";

// CALENDAAR
import CALENDAR24 from "./calendar/calendar24.png";
import CALENDAR32 from "./calendar/calendar32.png";

export const ICONS = [
  {
    name: "EMAIL",
    type: "EMAIL",
    url: "hello@daoudmerchant.com",
    icons: [EMAIL32, EMAIL64, EMAIL128],
  },
  {
    name: "CV",
    type: "DOWNLOAD",
    url: CVFILE,
    icons: [CV32, CV64, CV128],
  },
  {
    name: "LINKEDIN",
    type: "LINK",
    url: "https://www.linkedin.com/in/daoudmerchant",
    icons: [LINKEDIN32, LINKEDIN64, LINKEDIN128],
  },
  {
    name: "GITHUB",
    type: "LINK",
    url: "https://www.github.com/daoudmerchant",
    icons: [GITHUB32, GITHUB64, GITHUB128],
  },
];

export const CALENDAR = {
  iconSet: [CALENDAR24, CALENDAR32],
  type: "calendar",
};
