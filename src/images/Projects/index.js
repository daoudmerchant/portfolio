// SHOWMESOMETHING

// mobile

import ShowMeSomethingSmJpgHigh from "../Projects/ShowMeSomething/small/jpg/ShowMeSomethingSmHigh.jpg";
import ShowMeSomethingSmJpgMed from "../Projects/ShowMeSomething/small/jpg/ShowMeSomethingSmMed.jpg";
import ShowMeSomethingSmJpgLow from "../Projects/ShowMeSomething/small/jpg/ShowMeSomethingSmLow.jpg";

import ShowMeSomethingSmWebpHigh from "../Projects/ShowMeSomething/small/webp/ShowMeSomethingSmHigh.webp";
import ShowMeSomethingSmWebpMed from "../Projects/ShowMeSomething/small/webp/ShowMeSomethingSmMed.webp";
import ShowMeSomethingSmWebpLow from "../Projects/ShowMeSomething/small/webp/ShowMeSomethingSmLow.webp";

// desktop

import ShowMeSomethingLrgJpgHigh from "../Projects/ShowMeSomething/large/jpg/ShowMeSomethingLrgHigh.jpg";
import ShowMeSomethingLrgJpgMed from "../Projects/ShowMeSomething/large/jpg/ShowMeSomethingLrgMed.jpg";
import ShowMeSomethingLrgJpgLow from "../Projects/ShowMeSomething/large/jpg/ShowMeSomethingLrgLow.jpg";

import ShowMeSomethingLrgWebpHigh from "../Projects/ShowMeSomething/large/webp/ShowMeSomethingLrgHigh.webp";
import ShowMeSomethingLrgWebpMed from "../Projects/ShowMeSomething/large/webp/ShowMeSomethingLrgMed.webp";
import ShowMeSomethingLrgWebpLow from "../Projects/ShowMeSomething/large/webp/ShowMeSomethingLrgLow.webp";

// BATTLESHIPS

// mobile (ONLY)

import BattleshipsSmJpgHigh from "../Projects/Battleships/small/jpg/BattleshipsSmHigh.jpg";
import BattleshipsSmJpgMed from "../Projects/Battleships/small/jpg/BattleshipsSmMed.jpg";
import BattleshipsSmJpgLow from "../Projects/Battleships/small/jpg/BattleshipsSmLow.jpg";

import BattleshipsSmWebpHigh from "../Projects/Battleships/small/webp/BattleshipsSmHigh.webp";
import BattleshipsSmWebpMed from "../Projects/Battleships/small/webp/BattleshipsSmMed.webp";
import BattleshipsSmWebpLow from "../Projects/Battleships/small/webp/BattleshipsSmLow.webp";

// SHOPPING CART

// mobile

import ShoppingCartSmJpgHigh from "../Projects/ShoppingCart/small/jpg/ShoppingCartSmHigh.jpg";
import ShoppingCartSmJpgMed from "../Projects/ShoppingCart/small/jpg/ShoppingCartSmMed.jpg";
import ShoppingCartSmJpgLow from "../Projects/ShoppingCart/small/jpg/ShoppingCartSmLow.jpg";

import ShoppingCartSmWebpHigh from "../Projects/ShoppingCart/small/webp/ShoppingCartSmHigh.webp";
import ShoppingCartSmWebpMed from "../Projects/ShoppingCart/small/webp/ShoppingCartSmMed.webp";
import ShoppingCartSmWebpLow from "../Projects/ShoppingCart/small/webp/ShoppingCartSmLow.webp";

// desktop

import ShoppingCartLrgJpgHigh from "../Projects/ShoppingCart/large/jpg/ShoppingCartLrgHigh.jpg";
import ShoppingCartLrgJpgMed from "../Projects/ShoppingCart/large/jpg/ShoppingCartLrgMed.jpg";
import ShoppingCartLrgJpgLow from "../Projects/ShoppingCart/large/jpg/ShoppingCartLrgLow.jpg";

import ShoppingCartLrgWebpHigh from "../Projects/ShoppingCart/large/webp/ShoppingCartLrgHigh.webp";
import ShoppingCartLrgWebpMed from "../Projects/ShoppingCart/large/webp/ShoppingCartLrgMed.webp";
import ShoppingCartLrgWebpLow from "../Projects/ShoppingCart/large/webp/ShoppingCartLrgLow.webp";

// CALCULATOR

// mobile

import CalculatorSmJpgHigh from "../Projects/Calculator/small/jpg/CalculatorSmHigh.jpg";
import CalculatorSmJpgMed from "../Projects/Calculator/small/jpg/CalculatorSmMed.jpg";
import CalculatorSmJpgLow from "../Projects/Calculator/small/jpg/CalculatorSmLow.jpg";

import CalculatorSmWebpHigh from "../Projects/Calculator/small/webp/CalculatorSmHigh.webp";
import CalculatorSmWebpMed from "../Projects/Calculator/small/webp/CalculatorSmMed.webp";
import CalculatorSmWebpLow from "../Projects/Calculator/small/webp/CalculatorSmLow.webp";

// desktop

import CalculatorLrgJpgHigh from "../Projects/Calculator/large/jpg/CalculatorLrgHigh.jpg";
import CalculatorLrgJpgMed from "../Projects/Calculator/large/jpg/CalculatorLrgMed.jpg";
import CalculatorLrgJpgLow from "../Projects/Calculator/large/jpg/CalculatorLrgLow.jpg";

import CalculatorLrgWebpHigh from "../Projects/Calculator/large/webp/CalculatorLrgHigh.webp";
import CalculatorLrgWebpMed from "../Projects/Calculator/large/webp/CalculatorLrgMed.webp";
import CalculatorLrgWebpLow from "../Projects/Calculator/large/webp/CalculatorLrgLow.webp";

export const SCREENSHOTS = {
  ShowMeSomething: [
    {
      type: "webp",
      mobile: [
        ShowMeSomethingSmWebpLow,
        ShowMeSomethingSmWebpMed,
        ShowMeSomethingSmWebpHigh,
      ],
      desktop: [
        ShowMeSomethingLrgWebpLow,
        ShowMeSomethingLrgWebpMed,
        ShowMeSomethingLrgWebpHigh,
      ],
    },
    {
      type: "jpg",
      mobile: [
        ShowMeSomethingSmJpgLow,
        ShowMeSomethingSmJpgMed,
        ShowMeSomethingSmJpgHigh,
      ],
      desktop: [
        ShowMeSomethingLrgJpgLow,
        ShowMeSomethingLrgJpgMed,
        ShowMeSomethingLrgJpgHigh,
      ],
    },
  ],
  Battleships: [
    {
      type: "webp",
      mobile: [
        BattleshipsSmWebpLow,
        BattleshipsSmWebpMed,
        BattleshipsSmWebpHigh,
      ],
      desktop: false,
    },
    {
      type: "jpg",
      mobile: [BattleshipsSmJpgLow, BattleshipsSmJpgMed, BattleshipsSmJpgHigh],
      desktop: false,
    },
  ],
  ShoppingCart: [
    {
      type: "webp",
      mobile: [
        ShoppingCartSmWebpLow,
        ShoppingCartSmWebpMed,
        ShoppingCartSmWebpHigh,
      ],
      desktop: [
        ShoppingCartLrgWebpLow,
        ShoppingCartLrgWebpMed,
        ShoppingCartLrgWebpHigh,
      ],
    },
    {
      type: "jpg",
      mobile: [
        ShoppingCartSmJpgLow,
        ShoppingCartSmJpgMed,
        ShoppingCartSmJpgHigh,
      ],
      desktop: [
        ShoppingCartLrgJpgLow,
        ShoppingCartLrgJpgMed,
        ShoppingCartLrgJpgHigh,
      ],
    },
  ],
  Calculator: [
    {
      type: "webp",
      mobile: [CalculatorSmWebpLow, CalculatorSmWebpMed, CalculatorSmWebpHigh],
      desktop: [
        CalculatorLrgWebpLow,
        CalculatorLrgWebpMed,
        CalculatorLrgWebpHigh,
      ],
    },
    {
      type: "jpg",
      mobile: [CalculatorSmJpgLow, CalculatorSmJpgMed, CalculatorSmJpgHigh],
      desktop: [CalculatorLrgJpgLow, CalculatorLrgJpgMed, CalculatorLrgJpgHigh],
    },
  ],
};
