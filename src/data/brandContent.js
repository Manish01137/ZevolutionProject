import { crestoneBrandContent } from "./crestoneData";
import application from "../assets/images/application.png";
import caseImg from "../assets/images/case1.jpg";
import coffeeGrey from "../assets/images/coffee-grey.jpg";
import darkGrey from "../assets/images/dark-grey.jpg";
import earthyBrown from "../assets/images/earthy-brown.jpg";

// ── Zerra · Sandstone ─────────────────────────────────────────────────────────
import sandstoneAgra from "../assets/images/zerra/Sandstone/AgraRedSandStone.jpg";
import sandstoneOxford from "../assets/images/zerra/Sandstone/OXFORDYELLOWSandstone.jpg";
import sandstoneRainbow from "../assets/images/zerra/Sandstone/raibow1Sandstone.jpg";

// ── Zerra · Marble ────────────────────────────────────────────────────────────
import marbleAtlantic from "../assets/images/zerra/Marble/AtlanticWhitemarble.jpg";
import marbleGrigio from "../assets/images/zerra/Marble/GrigioCliffmarble.JPG";
import marbleArctic from "../assets/images/zerra/Marble/articstromMarble.jpg";

// ── Zerra · Limestone ─────────────────────────────────────────────────────────
import limestoneAqua from "../assets/images/zerra/Limestone/AquaBlanco.jpg";
import limestoneIce from "../assets/images/zerra/Limestone/IcePearlLimestone.jpg";
import limestoneBrown from "../assets/images/zerra/Limestone/brownpeacockLimestone.jpg";

// ── Zerra · Concrete ──────────────────────────────────────────────────────────
import concreteWhite from "../assets/images/zerra/Concrete/WhiteConcrete.jpg";
import concreteMedium from "../assets/images/zerra/Concrete/MideumGreyconcrete.JPG";
import concreteDark from "../assets/images/zerra/Concrete/DarkGreyConcrete.JPG";

// ── Zerra · Slate & Quartzite ─────────────────────────────────────────────────
import slateSilver from "../assets/images/zerra/slate&Quartzite/SilverShineSlate.jpg";
import slateTerra from "../assets/images/zerra/slate&Quartzite/TerraredSlate.JPG";
import slateZeera from "../assets/images/zerra/slate&Quartzite/ZeeraGreen.SlateJPG.JPG";

export const brandContent = {
  creststone: crestoneBrandContent,

  zerra: [
    {
      id: 1,
      name: "Sandstone",
      slug: "sandstone",
      image: sandstoneAgra,
      description:
        "Warm-toned HandPeeled™ sandstone veneers with natural surface variation, ideal for heritage and contemporary residential facades.",
      variants: [
        { name: "Agra Red", image: sandstoneAgra },
        { name: "Oxford Yellow", image: sandstoneOxford },
        { name: "Rainbow", image: sandstoneRainbow },
      ],
    },
    {
      id: 2,
      name: "Marble",
      slug: "marble",
      image: marbleAtlantic,
      description:
        "Authentic marble veneers hand-finished to capture the depth and elegance of quarried stone at a fraction of the weight.",
      variants: [
        { name: "Atlantic White", image: marbleAtlantic },
        { name: "Grigio Cliff", image: marbleGrigio },
        { name: "Arctic Storm", image: marbleArctic },
      ],
    },
    {
      id: 3,
      name: "Limestone",
      slug: "limestone",
      image: limestoneAqua,
      description:
        "Organic limestone surfaces with refined texture, perfect for luxury interiors and light-toned exterior facades.",
      variants: [
        { name: "Aqua Blanco", image: limestoneAqua },
        { name: "Ice Pearl", image: limestoneIce },
        { name: "Brown Peacock", image: limestoneBrown },
      ],
    },
    {
      id: 4,
      name: "Concrete",
      slug: "concrete",
      image: concreteMedium,
      description:
        "Industrial-inspired concrete stone veneers for bold contemporary architecture and feature wall applications.",
      variants: [
        { name: "White Concrete", image: concreteWhite },
        { name: "Medium Grey", image: concreteMedium },
        { name: "Dark Grey", image: concreteDark },
      ],
    },
    {
      id: 5,
      name: "Slate & Quartzite",
      slug: "slate-quartzite",
      image: slateSilver,
      description:
        "Dramatic slate and quartzite veneers with rich mineral tones, engineered for high-impact exterior and interior installations.",
      variants: [
        { name: "Silver Shine", image: slateSilver },
        { name: "Terra Red", image: slateTerra },
        { name: "Zeera Green", image: slateZeera },
      ],
    },
  ],

  formiq: [
    {
      id: 1,
      name: "OakPrime",
      slug: "oakprime",
      image: caseImg,
      description:
        "Premium oak flooring engineered for modern luxury interiors.",
      variants: [
        { name: "Natural Oak", image: application },
        { name: "Honey Oak", image: caseImg },
        { name: "Dark Oak", image: darkGrey },
      ],
    },
    {
      id: 2,
      name: "TerraWood",
      slug: "terrawood",
      image: caseImg,
      description:
        "Warm wooden flooring designed to elevate living spaces.",
      variants: [
        { name: "Classic Brown", image: earthyBrown },
        { name: "Rust Oak", image: coffeeGrey },
        { name: "Deep Walnut", image: darkGrey },
      ],
    },
    {
      id: 3,
      name: "LineaFloor",
      slug: "lineafloor",
      image: caseImg,
      description:
        "Wide plank flooring systems engineered for modern homes.",
      variants: [
        { name: "Golden Oak", image: application },
        { name: "Smoke Grey", image: darkGrey },
        { name: "Walnut Brown", image: coffeeGrey },
      ],
    },
  ],
};