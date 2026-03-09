import application from "../assets/images/application.png";
import beige from "../assets/images/beige.jpg";
import caseImg from "../assets/images/case1.jpg";
import cementGrey from "../assets/images/CementGrey.jpg";
import coffeeGrey from "../assets/images/coffee-grey.jpg";
import darkGrey from "../assets/images/dark-grey.jpg";
import earthyBrown from "../assets/images/earthy-brown.jpg";
import liteGrey from "../assets/images/lite-grey.jpg";
import warmWhite from "../assets/images/warm-white.jpg";
import cement from "../assets/images/cement.jpg";

export const brandContent = {
  creststone: [
    {
      id: 1,
      name: "Aerolitee",
      slug: "aerolite",
      image: caseImg,
      description:
        "Timeless Italian marble with distinctive veining, perfect for luxury interiors and facades.",
      variants: [
        {
          name: "Warm White",
          image: warmWhite,
        },
        {
          name: "Earthy Brown",
          image: earthyBrown,
        },
        {
          name: "Coffee Grey",
          image: coffeeGrey,
        },
      ],
    },

    {
      id: 2,
      name: "Cement Board",
      slug: "cement-board",
      image: cement,
      description:
        "Modern textured stone cladding designed for contemporary architecture.",
      variants: [
        {
          name: "Cement Board Light Grey",
          image: liteGrey,
        },
        {
          name: "Cement Board Medium Grey",
          image: cementGrey,
        },
        {
          name: "Stone Grey",
          image: darkGrey,
        },
      ],
    },

    {
      id: 3,
      name: "Charcoal Burat Wood Board",
      slug: "charcoal-board",
      image: caseImg,
      description:
        "Bold architectural panels that create powerful facade statements.",
      variants: [
        {
          name: "Graphite",
          image: darkGrey,
        },
        {
          name: "Dark Grey",
          image: darkGrey,
        },
        {
          name: "Natural Rock",
          image: earthyBrown,
        },
      ],
    },
  ],

  zerra: [
    {
      id: 1,
      name: "Concrete",
      slug: "concrete",
      image: caseImg,
      description:
        "Authentic natural stone veneers with hand finished textures.",
      variants: [
        {
          name: "Beige",
          image: beige,
        },
        {
          name: "Dark Grey",
          image: darkGrey,
        },
        {
          name: "Lite Grey",
          image: liteGrey,
        },
      ],
    },

    {
      id: 2,
      name: "Sandstone",
      slug: "sandstone",
      image: caseImg,
      description:
        "Raw stone finishes designed to bring organic textures to architecture.",
      variants: [
        {
          name: "Agra Red",
          image: earthyBrown,
        },
        {
          name: "Oxford Yellow",
          image: beige,
        },
        {
          name: "Rainbow",
          image: liteGrey,
        },
      ],
    },

    {
      id: 3,
      name: "PebbleCore",
      slug: "pebblecore",
      image: caseImg,
      description:
        "Lightweight stone veneer panels for interior and exterior walls.",
      variants: [
        {
          name: "Ivory White",
          image: warmWhite,
        },
        {
          name: "Granite Grey",
          image: darkGrey,
        },
        {
          name: "Rust Brown",
          image: earthyBrown,
        },
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
        {
          name: "Natural Oak",
          image: application,
        },
        {
          name: "Honey Oak",
          image: caseImg,
        },
        {
          name: "Dark Oak",
          image: darkGrey,
        },
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
        {
          name: "Classic Brown",
          image: earthyBrown,
        },
        {
          name: "Rust Oak",
          image: coffeeGrey,
        },
        {
          name: "Deep Walnut",
          image: darkGrey,
        },
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
        {
          name: "Golden Oak",
          image: application,
        },
        {
          name: "Smoke Grey",
          image: darkGrey,
        },
        {
          name: "Walnut Brown",
          image: coffeeGrey,
        },
      ],
    },
  ],
};