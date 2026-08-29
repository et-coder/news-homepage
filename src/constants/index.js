import retro from "../assets/image-retro-pcs.jpg";
import gaming from "../assets/image-gaming-growth.jpg";
import laptops from "../assets/image-top-laptops.jpg";

const navItems = ["Home", "New", "Popular", "Trending", "Categories"];

const asides = [
  {
    heading: " Hydrogen VS Electric Cars ",
    description: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    heading: "The Downsides of AI Artistry",
    description:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    heading: "Is VC Funding Drying Up?",
    description:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

const related = [
  {
    img: retro,
    id: "01",
    heading: "Reviving Retro PCs",
    description: "What happens when old PCs are given modern upgrades?",
  },
  {
    img: laptops,
    id: "02",
    heading: "Top 10 Laptops of 2022",
    description: "Our best picks for various needs and budgets.",
  },
  {
    img: gaming,
    id: "03",
    heading: "The Growth of Gaming",
    description: "How the pandamic has sparked fresh opportunities",
  },
];

export { navItems, asides, related };
