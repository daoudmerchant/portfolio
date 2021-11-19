import BackgroundJpgHigh from "../background/jpg/AuroraBorealisHigh.jpg";
import BackgroundJpgMed from "../background/jpg/AuroraBorealisMed.jpg";
import BackgroundJpgLow from "../background/jpg/AuroraBorealisLow.jpg";

import BackgroundWebpHigh from "../background/webp/AuroraBorealisHigh.webp";
import BackgroundWebpMed from "../background/webp/AuroraBorealisMed.webp";
import BackgroundWebpLow from "../background/webp/AuroraBorealisLow.webp";

export const BACKGROUND = [
  {
    type: "webp",
    files: [BackgroundWebpLow, BackgroundWebpMed, BackgroundWebpHigh],
  },
  {
    type: "jpg",
    files: [BackgroundJpgLow, BackgroundJpgMed, BackgroundJpgHigh],
  },
];
