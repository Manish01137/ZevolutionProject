import application from "../assets/images/Application.png"
import Beige from "../assets/images/Beige.jpg"
import caseImg from "../assets/images/case1.jpg"
import CementGrey from "../assets/images/CementGrey.jpg"
import coffeGrey from "../assets/images/coffeeGrey.jpg"
import darkgrey from "../assets/images/darkgrey.jpg"
import EarthyBrown from "../assets/images/EarthyBrown.jpg"
import LiteGrey from "../assets/images/LiteGrey.jpg"
import warmehite from "../assets/images/WarmWhite.jpg"
import cement from "../assets/images/cement.jpg"

export const brandContent = {
  creststone: [

    {
      id: 1,
      name: "Aerolite",
      slug: "aerolite",
      image: caseImg,
      description:
        "Timeless Italian marble with distinctive veining, perfect for luxury interiors and facades.",
      variants: [
        {
          name: "Warm White",
          image: warmehite
        },
        {
          name: "Earthy Brown",
          image: EarthyBrown
        },
        {
          name: "Coffee Grey",
          image: coffeGrey
        }
      ]
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
          image: LiteGrey
        },
        {
          name: "Cement Board Medium Grey",
          image: CementGrey
        },
        {
          name: "Stone Grey",
          image: darkgrey
        }
      ]
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
          image: darkgrey
        },
        {
          name: "Dark Grey",
          image: darkgrey
        },
        {
          name: "Natural Rock",
          image: EarthyBrown
        }
      ]
    }

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
          image: Beige
        },
        {
          name: "Dark Grey",
          image: darkgrey
        },
        {
          name: "Lite Grey",
          image: LiteGrey
        }
      ]
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
          image: EarthyBrown
        },
        {
          name: "Oxford Yellow",
          image: Beige
        },
        {
          name: "Rainbow",
          image: LiteGrey
        }
      ]
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
          image: warmehite
        },
        {
          name: "Granite Grey",
          image: darkgrey
        },
        {
          name: "Rust Brown",
          image: EarthyBrown
        }
      ]
    }

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
          image: application
        },
        {
          name: "Honey Oak",
          image: caseImg
        },
        {
          name: "Dark Oak",
          image: darkgrey
        }
      ]
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
          image: EarthyBrown
        },
        {
          name: "Rust Oak",
          image: coffeGrey
        },
        {
          name: "Deep Walnut",
          image: darkgrey
        }
      ]
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
          image: application
        },
        {
          name: "Smoke Grey",
          image: darkgrey
        },
        {
          name: "Walnut Brown",
          image: coffeGrey
        }
      ]
    }

  ]
};