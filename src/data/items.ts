import { Location, Action, Season, Weather } from "./types";
export default [
  {
    id: 613,
    name: "Apple",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Fall],
    description: "A crisp fruit used for juice and cider."
  },
  {
    id: 634,
    name: "Apricot",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Spring],
    description: "Valuable, but slow-growing. Despite its pale color, the florets are packed with nutrients."
  },
  {
    id: 62,
    name: "Aquamarine",
    locations: [Location.Mines],
    obtained: [Action.Mining],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A shimmery blue-green gem."
  },
  {
    id: 767,
    name: "Bat Wing",
    locations: [Location.Mines],
    obtained: [Action.MonsterKilling],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "The material is surprisingly delicate."
  },
  {
    id: 410,
    name: "Blackberry",
    locations: [Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Fall],
    description: "An early-fall treat."
  },
  {
    id: 258,
    name: "Blueberry",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Summer],
    description:
      "A popular berry reported to have many health benefits. The blue skin has the highest nutrient concentration."
  },
  {
    id: 132,
    name: "Bream",
    locations: [Location.River],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A fairly common river fish that becomes active at night."
  },
  {
    id: 700,
    name: "Bullhead",
    locations: [Location.Lake],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A relative of the catfish that eats a variety of foods off the lake bottom."
  },
  {
    id: 90,
    name: "Cactus Fruit",
    locations: [Location.DesertOasis],
    obtained: [Action.Forage],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "The sweet fruit of the prickly pear cactus."
  },
  {
    id: 142,
    name: "Carp",
    locations: [Location.Lake, Location.SecretWoods],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A common pond fish."
  },
  {
    id: 143,
    name: "Catfish",
    locations: [Location.River, Location.SecretWoods, Location.WitchSwamp],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Summer, Season.Fall],
    description: "An uncommon fish found in streams."
  },
  {
    id: 190,
    name: "Cauliflower",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Spring],
    description: ""
  },
  {
    id: 78,
    name: "Cave Carrot",
    locations: [Location.Mines],
    obtained: [Action.Forage],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A starchy snack found in caves. It helps miners work longer."
  },
  {
    id: 424,
    name: "Cheese",
    locations: [Location.Farm],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "It's your basic cheese."
  },
  {
    id: 638,
    name: "Cherry",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Spring],
    description: "It's popular, and ripens sooner than most other fruits."
  },
  {
    id: 702,
    name: "Chub",
    locations: [Location.Lake, Location.River],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A common freshwater fish known for its voracious appetite."
  },
  {
    id: 372,
    name: "Clam",
    locations: [Location.Ocean],
    obtained: [Action.CrabPot],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "Someone lived here once."
  },
  {
    id: 428,
    name: "Cloth",
    locations: [Location.Farm, Location.SkullCavern],
    obtained: [Action.Construction, Action.MonsterKilling],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A bolt of fine wool cloth."
  },
  {
    id: 718,
    name: "Cockle",
    locations: [Location.Ocean],
    obtained: [Action.CrabPot],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A common saltwater clam."
  },
  {
    id: 88,
    name: "Coconut",
    locations: [Location.DesertOasis],
    obtained: [Action.Forage],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A seed of the coconut palm. It has many culinary uses."
  },
  {
    id: 404,
    name: "Common Mushroom",
    locations: [Location.SecretWoods],
    obtained: [Action.Forage],
    seasons: [Season.Spring, Season.Fall],
    description: "Slightly nutty, with a good texture."
  },
  {
    id: 334,
    name: "Copper Bar",
    locations: [Location.Farm],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A bar of pure copper."
  },
  {
    id: 270,
    name: "Corn",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Summer, Season.Fall],
    description: "One of the most popular grains. The sweet, fresh cobs are a summer favorite."
  },
  {
    id: 717,
    name: "Crab",
    locations: [Location.Ocean],
    obtained: [Action.CrabPot],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A marine crustacean with two powerful pincers."
  },
  {
    id: 716,
    name: "Crayfish",
    locations: [Location.River, Location.Lake],
    obtained: [Action.CrabPot],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A small freshwater relative of the lobster."
  },
  {
    id: 418,
    name: "Crocus",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Winter],
    description: "A flower that can bloom in the winter."
  },
  {
    id: 414,
    name: "Crystal Fruit",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Winter],
    description: "A delicate fruit that pops up from the snow."
  },
  {
    id: 18,
    name: "Daffodil",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Spring],
    description: "A traditional spring flower that makes a nice gift."
  },
  {
    id: 22,
    name: "Dandelion",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Spring],
    description: "Not the prettiest flower, but the leaves make a good salad."
  },
  {
    id: 442,
    name: "Duck Egg",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "It's still warm."
  },
  {
    id: 444,
    name: "Duck Feather",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "It's so colorful."
  },
  {
    id: 86,
    name: "Earth Crystal",
    locations: [Location.Mines],
    obtained: [Action.Mining],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A resinous substance found near the surface."
  },
  {
    id: 148,
    name: "Eel",
    locations: [Location.Ocean],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Fall],
    description: "A long, slippery little fish."
  },
  {
    id: 272,
    name: "Eggplant",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Fall],
    description: "A rich and wholesome relative of the tomato. Delicious fried or stewed."
  },
  {
    id: 259,
    name: "Fiddlehead Fern",
    locations: [Location.SecretWoods, Location.SkullCavern, Location.GingerIsland],
    obtained: [Action.Forage],
    seasons: [Season.Summer],
    description: "The young shoots are an edible specialty."
  },
  {
    id: 82,
    name: "Fire Quartz",
    locations: [Location.Mines],
    obtained: [Action.Mining],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A glowing red crystal commonly found near hot lava."
  },
  {
    id: 194,
    name: "Fried Egg",
    locations: [Location.Farm],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "Sunny-side up."
  },
  {
    id: 536,
    name: "Frozen Geode",
    locations: [Location.Mines],
    obtained: [Action.Mining],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A blacksmith can break this open for you."
  },
  {
    id: 84,
    name: "Frozen Tear",
    locations: [Location.Mines],
    obtained: [Action.Mining],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A crystal fabled to be the frozen tears of a yeti."
  },
  {
    id: 156,
    name: "Ghostfish",
    locations: ["Mine Ponds"],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A pale, blind fish found in underground lakes."
  },
  {
    id: 426,
    name: "Goat Cheese",
    locations: [Location.Farm],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "Soft cheese made from goat's milk."
  },
  {
    id: 336,
    name: "Gold Bar",
    locations: [Location.Mines],
    obtained: [Action.Mining],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A bar of pure gold."
  },
  {
    id: 398,
    name: "Grape",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Forage, Action.Farming],
    seasons: [Season.Summer, Season.Fall],
    description: "A sweet cluster of fruit."
  },
  {
    id: 188,
    name: "Green Bean",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Spring],
    description: "A juicy little bean with a cool, crisp snap."
  },
  {
    id: 709,
    name: "Hardwood",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Construction, Action.Forage],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A special kind of wood with superior strength and beauty."
  },
  {
    id: 178,
    name: "Hay",
    locations: [Location.Farm],
    obtained: [Action.Forage],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "Dried grass used as animal food."
  },
  {
    id: 408,
    name: "Hazelnut",
    locations: [Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Fall],
    description: "That's one big hazelnut!"
  },
  {
    id: 340,
    name: "Honey",
    locations: [Location.Farm],
    obtained: ["Artisan Goods"],
    seasons: [Season.Spring, Season.Summer, Season.Fall],
    description: "It's a sweet syrup produced by bees."
  },
  {
    id: 260,
    name: "Hot Pepper",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Summer],
    description: "Fiery hot with a hint of sweetness."
  },
  {
    id: 335,
    name: "Iron Bar",
    locations: [Location.Farm],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A bar of pure iron."
  },
  {
    id: 344,
    name: "Jelly",
    locations: [Location.Farm],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "Gooey."
  },
  {
    id: 182,
    name: "Large Brown Egg",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "It's an uncommonly large brown egg!"
  },
  {
    id: 438,
    name: "Large Goat Milk",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A gallon of creamy goat's milk."
  },
  {
    id: 186,
    name: "Large Milk",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A large jug of cow's milk."
  },
  {
    id: 174,
    name: "Large White Egg",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "It's an uncommonly large white egg!"
  },
  {
    id: 136,
    name: "Largemouth Bass",
    locations: [Location.Lake],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A popular fish that lives in lakes."
  },
  {
    id: 20,
    name: "Leek",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Spring],
    description: "A tasty relative of the onion."
  },
  {
    id: 399,
    name: "Spring Onion",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Spring],
    description: "These grow wild during the spring."
  },
  {
    id: 283,
    name: "Holly",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Winter],
    description: "The leaves and bright red berries make a popular winter decoration."
  },
  {
    id: 157,
    name: "White Algae",
    locations: [Location.Mines, Location.WitchSwamp],
    obtained: [Action.MonsterKilling, Action.Fishing],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "It's super slimy."
  },
  {
    id: 304,
    name: "Hops",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Summer],
    description: "A bitter, tangy flower used to flavor beer."
  },
  {
    id: 246,
    name: "Wheat Flour",
    locations: [],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A common cooking ingredient made from crushed wheat seeds."
  },
  {
    id: 715,
    name: "Lobster",
    locations: [Location.Ocean],
    obtained: [Action.CrabPot],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A large ocean-dwelling crustacean with a strong tail."
  },
  {
    id: 228,
    name: "Maki Roll",
    locations: [Location.Farm],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "Fish and rice wrapped in seaweed."
  },
  {
    id: 724,
    name: "Maple Syrup",
    locations: [Location.Farm],
    obtained: [Action.Forage],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A sweet syrup with a unique flavor."
  },
  {
    id: 254,
    name: "Melon",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Summer],
    description: "A cool, sweet summer treat."
  },
  {
    id: 257,
    name: "Morel",
    locations: [Location.SecretWoods],
    obtained: [Action.Forage],
    seasons: [Season.Spring],
    description: "Sought after for its unique nutty flavor."
  },
  {
    id: 719,
    name: "Mussel",
    locations: [Location.Ocean],
    obtained: [Action.CrabPot],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A common bivalve that often lives in clusters."
  },
  {
    id: 392,
    name: "Nautilus Shell",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Winter],
    description: "An ancient shell."
  },
  {
    id: 725,
    name: "Oak Resin",
    locations: [Location.Farm],
    obtained: [Action.Forage],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A sticky, fragrant substance derived from oak sap."
  },
  {
    id: 635,
    name: "Orange",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Summer],
    description: "Juicy, tangy, and bursting with sweet summer aroma."
  },
  {
    id: 723,
    name: "Oyster",
    locations: [Location.Ocean],
    obtained: [Action.CrabPot],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description:
      "Constantly filters water to find food. In the process, it removes dangerous toxins from the environment."
  },
  {
    id: 24,
    name: "Parsnip",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Spring],
    description: "A spring tuber closely related to the carrot. It has an earthy taste and is full of nutrients."
  },
  {
    id: 636,
    name: "Peach",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Summer],
    description: "It's almost fuzzy to the touch."
  },
  {
    id: 722,
    name: "Periwinkle",
    locations: [Location.Lake, Location.River],
    obtained: [Action.CrabPot],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A tiny freshwater snail that lives in a blue shell."
  },
  {
    id: 726,
    name: "Pine Tar",
    locations: [Location.Farm],
    obtained: [Action.Forage],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A pungent substance derived from pine sap."
  },
  {
    id: 637,
    name: "Pomegranate",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Fall],
    description: "Within the fruit are clusters of juicy seeds."
  },
  {
    id: 376,
    name: "Poppy",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Summer],
    description: "In addition to its colorful flower, the Poppy has culinary and medicinal uses."
  },
  {
    id: 192,
    name: "Potato",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Spring],
    description: "A widely cultivated tuber."
  },
  {
    id: 128,
    name: "Pufferfish",
    locations: [Location.Ocean],
    obtained: [Action.Fishing],
    seasons: [Season.Summer],
    description: "Inflates when threatened."
  },
  {
    id: 276,
    name: "Pumpkin",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Fall],
    description:
      "A fall favorite, grown for its crunchy seeds and delicately flavored flesh. As a bonus, the hollow shell can be carved into a festive decoration."
  },
  {
    id: 422,
    name: "Purple Mushroom",
    locations: [Location.Mines],
    obtained: [Action.Forage],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A rare mushroom found deep in caves."
  },
  {
    id: 80,
    name: "Quartz",
    locations: [Location.Mines],
    obtained: [Action.Mining],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A clear crystal commonly found in caves and mines."
  },
  {
    id: 446,
    name: "Rabbit's Foot",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "Some say it's lucky."
  },
  {
    id: 266,
    name: "Red Cabbage",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Summer],
    description:
      "Often used in salads and coleslaws. The color can range from purple to blue to green-yellow depending on soil conditions."
  },
  {
    id: 420,
    name: "Red Mushroom",
    locations: [Location.SecretWoods, Location.Mines],
    obtained: [Action.Forage],
    seasons: [Season.Summer, Season.Fall],
    description: "A spotted mushroom sometimes found in caves."
  },
  {
    id: 150,
    name: "Red Snapper",
    locations: [Location.Ocean],
    obtained: [Action.Fishing],
    seasons: [Season.Summer, Season.Fall, Season.Winter],
    description: "A popular fish with a nice red color."
  },
  {
    id: 164,
    name: "Sandfish",
    locations: [Location.DesertOasis],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "It tries to hide using camouflage."
  },
  {
    id: 131,
    name: "Sardine",
    locations: [Location.Ocean],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Fall, Season.Winter],
    description: "A common ocean fish."
  },
  {
    id: 397,
    name: "Sea Urchin",
    locations: ["Beach"],
    obtained: [Action.Forage],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A slow-moving, spiny creature that some consider a delicacy."
  },
  {
    id: 706,
    name: "Shad",
    locations: [Location.River],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Summer, Season.Fall],
    description: "Lives in a school at sea, but returns to the rivers to spawn."
  },
  {
    id: 720,
    name: "Shrimp",
    locations: [Location.Ocean],
    obtained: [Action.CrabPot],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A scavenger that feeds off the ocean floor. Widely prized for its meat."
  },
  {
    id: 766,
    name: "Slime",
    locations: [Location.Mines],
    obtained: [Action.MonsterKilling],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A shimmering, gelatinous glob with no smell."
  },
  {
    id: 721,
    name: "Snail",
    locations: [Location.Lake, Location.River],
    obtained: [Action.CrabPot],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A wide-ranging mollusc that lives in a spiral shell."
  },
  {
    id: 416,
    name: "Snow Yam",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Winter],
    description: "This little yam was hiding beneath the snow."
  },
  {
    id: 768,
    name: "Solar Essence",
    locations: [Location.Mines],
    obtained: [Action.MonsterKilling],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "The glowing face is warm to the touch."
  },
  {
    id: 396,
    name: "Spice Berry",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Summer],
    description: "It fills the air with a pungent aroma."
  },
  {
    id: 390,
    name: "Stone",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Construction, Action.Forage],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A common material with many uses in crafting and building."
  },
  {
    id: 698,
    name: "Sturgeon",
    locations: [Location.Lake],
    obtained: [Action.Fishing],
    seasons: [Season.Summer, Season.Winter],
    description: "An ancient bottom-feeder with a dwindling population. Females can live up to 150 years."
  },
  {
    id: 145,
    name: "Sunfish",
    locations: [Location.River],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Summer],
    description: "A common river fish."
  },
  {
    id: 421,
    name: "Sunflower",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Summer, Season.Fall],
    description: "A common misconception is that the flower turns so it's always facing the sun."
  },
  {
    id: 402,
    name: "Sweet Pea",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Summer],
    description: "A fragrant summer flower."
  },
  {
    id: 699,
    name: "Tiger Trout",
    locations: [Location.River],
    obtained: [Action.Fishing],
    seasons: [Season.Fall, Season.Winter],
    description: "A rare hybrid trout that cannot bear offspring of its own."
  },
  {
    id: 701,
    name: "Tilapia",
    locations: [Location.Ocean, Location.GingerIsland],
    obtained: [Action.Fishing],
    seasons: [Season.Summer, Season.Fall],
    description: "A primarily vegetarian fish that prefers warm water."
  },
  {
    id: 256,
    name: "Tomato",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Summer],
    description: "Rich and slightly tangy, the Tomato has a wide variety of culinary uses."
  },
  {
    id: 430,
    name: "Truffle",
    locations: [Location.Farm],
    obtained: ["Pigs"],
    seasons: [Season.Spring, Season.Summer, Season.Fall],
    description: "A gourmet type of mushroom with a unique taste."
  },
  {
    id: 432,
    name: "Truffle Oil",
    locations: [Location.Farm],
    obtained: ["Artisan Goods"],
    seasons: [Season.Spring, Season.Summer, Season.Fall],
    description: "A gourmet cooking ingredient."
  },
  {
    id: 130,
    name: "Tuna",
    locations: [Location.Ocean],
    obtained: [Action.Fishing],
    seasons: [Season.Summer, Season.Winter],
    description: "A large fish that lives in the ocean."
  },
  {
    id: 769,
    name: "Void Essence",
    locations: [Location.Mines],
    obtained: [Action.MonsterKilling],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "It's quivering with dark energy."
  },
  {
    id: 140,
    name: "Walleye",
    locations: [Location.River],
    obtained: [Action.Fishing],
    seasons: [Season.Fall, Season.Winter],
    description: "A freshwater fish caught at night."
  },
  {
    id: 262,
    name: "Wheat",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Summer, Season.Fall],
    description: "One of the most widely cultivated grains. Makes a great flour for breads and cakes."
  },
  {
    id: 16,
    name: "Wild Horseradish",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Spring],
    description: "A spicy root found in the spring."
  },
  {
    id: 406,
    name: "Wild Plum",
    locations: [Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Fall],
    description: "Tart and juicy with a pungent aroma."
  },
  {
    id: 348,
    name: "Wine",
    locations: [Location.Farm],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "Drink in moderation."
  },
  {
    id: 412,
    name: "Winter Root",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Winter],
    description: "A starchy tuber."
  },
  {
    id: 388,
    name: "Wood",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Construction, Action.Forage],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A sturdy, yet flexible plant material with a wide variety of uses."
  },
  {
    id: 734,
    name: "Woodskip",
    locations: [Location.SecretWoods],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A very sensitive fish that can only live in pools deep in the forest."
  },
  {
    id: 440,
    name: "Wool",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "Soft, fluffy wool."
  },
  {
    id: 280,
    name: "Yam",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Fall],
    description: "A starchy tuber with a lot of culinary versatility."
  },
  {
    id: 454,
    name: "Ancient Fruit",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Spring, Season.Summer, Season.Fall],
    description: "It's been dormant for eons."
  },
  {
    id: 417,
    name: "Sweet Gem Berry",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Fall],
    description: "It's by far the sweetest thing you've ever smelled."
  },
  {
    id: 812,
    name: "Roe",
    locations: [Location.Farm],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "Fresh fish eggs. These can be aged in a preserves jar to bring out more flavor."
  },
  {
    id: 814,
    name: "Squid Ink",
    locations: [Location.Farm],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "Squid use this ink to confuse would-be predators."
  },
  {
    id: 447,
    name: "Aged Roe",
    locations: [Location.Farm],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "Fish eggs aged in salt to bring out the flavor."
  },
  {
    id: 597,
    name: "Blue Jazz",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Spring],
    description: "The flower grows in a sphere to invite as many butterflies as possible."
  },
  {
    id: 593,
    name: "Summer Spangle",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Summer],
    description: "A tropical bloom that thrives in the humid summer air. Has a sweet, tangy aroma."
  },
  {
    id: 595,
    name: "Fairy Rose",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Fall],
    description: "An old folk legend suggests that the sweet smell of this flower attracts fairies."
  },
  {
    id: 459,
    name: "Mead",
    locations: [Location.Farm, Location.GingerIsland],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A fermented beverage made from honey. Drink in moderation."
  },
  {
    id: 303,
    name: "Pale Ale",
    locations: [Location.Farm, Location.GingerIsland],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "Drink in moderation."
  },
  {
    id: 350,
    name: "Juice",
    locations: [Location.Farm],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A sweet, nutritious beverage."
  },
  {
    id: 614,
    name: "Green Tea",
    locations: [Location.Farm],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A pleasant, energizing beverage made from lightly processed tea leaves."
  },
  {
    id: 162,
    name: "Lava Eel",
    locations: [Location.Mines],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "It can somehow survive in pools of red-hot lava."
  },
  {
    id: 165,
    name: "Scorpion Carp",
    locations: [Location.DesertOasis],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "It's like a regular carp but with a sharp stinger.",
    time: ["6am", "8pm"]
  },
  {
    id: 149,
    name: "Octopus",
    locations: [Location.Ocean, Location.GingerIsland, Location.NightMarket],
    obtained: [Action.Fishing, Action.Buy],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A mysterious and intelligent creature.",
    time: ["6am", "1pm"]
  },
  {
    id: 800,
    name: "Blobfish",
    locations: [Location.NightMarket],
    obtained: [Action.Buy],
    seasons: [Season.Winter],
    description: "This odd creature floats above the ocean floor, consuming any edible material in its path."
  },
  {
    id: 881,
    name: "Bone Fragment",
    locations: [Location.Mines],
    obtained: [Action.MonsterKilling],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A small piece of bone."
  },
  {
    id: -1,
    name: "Gold Coin",
    locations: [],
    obtained: [],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A coin made of gold."
  },
  {
    id: 66,
    name: "Amethyst",
    locations: [Location.Mines, Location.SkullCavern],
    obtained: [Action.Mining],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A purple variant of quartz."
  },
  {
    id: 72,
    name: "Diamond",
    locations: [Location.Mines, Location.SkullCavern],
    obtained: [Action.Mining],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A rare and valuable gem."
  },
  {
    id: 60,
    name: "Emerald",
    locations: [Location.Mines, Location.SkullCavern],
    obtained: [Action.Mining],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A precious stone with a brilliant green color."
  },
  {
    id: 64,
    name: "Ruby",
    locations: [Location.Mines, Location.SkullCavern],
    obtained: [Action.Mining],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A precious stone that is sought after for its rich color and beautiful luster."
  },
  {
    id: 68,
    name: "Topaz",
    locations: [Location.Mines, Location.SkullCavern],
    obtained: [Action.Mining],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "Fairly common but still prized for its beauty."
  },
  {
    id: 386,
    name: "Iridium Ore",
    locations: [Location.Mines, Location.SkullCavern],
    obtained: [Action.Mining],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "An exotic ore with many curious properties. Can be smelted into bars."
  },
  {
    id: 787,
    name: "Battery Pack",
    locations: [],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "It's fully charged with precious energy."
  },
  {
    id: 338,
    name: "Refined Quartz",
    locations: [],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A more pure form of quartz."
  },
  {
    id: 284,
    name: "Beet",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Fall],
    description: "A sweet and earthy root vegatable. As a bonus, the leaves make a great salad."
  },
  {
    id: 300,
    name: "Amaranth",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Fall],
    description: "A purple grain cultivated by an ancient civilization."
  },
  {
    id: 268,
    name: "Starfruit",
    locations: [Location.Farm],
    obtained: [Action.Farming],
    seasons: [Season.Summer],
    description: "An extremely juicy fruit that grows in hot, humid weather. Slightly sweet with a sour undertone."
  },
  {
    id: 337,
    name: "Iridium Bar",
    locations: [Location.Farm],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A bar of pure iridium."
  },
  {
    id: 296,
    name: "Salmonberry",
    locations: [Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A spring-time berry with the flavor of the forest."
  },
  {
    id: 223,
    name: "Cookie",
    locations: [Location.Farm],
    obtained: [Action.Cooking],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "Very chewy."
  },
  {
    id: 103,
    name: "Ancient Doll",
    locations: [Location.AroundMap],
    obtained: [Action.Artifact],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description:
      "An ancient doll covered in grime. This doll may have been used as a toy, a decoration, or a prop in some kind of ritual."
  },
  {
    id: 233,
    name: "Ice Cream",
    locations: [Location.Farm, Location.DesertOasis],
    obtained: [Action.Cooking, Action.Buy],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "It's hard to find someone who doesn't like this."
  },
  {
    id: 807,
    name: "Dinosaur Mayonnaise",
    locations: [Location.Farm],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "It's thick and creamy, with a vivid green hue. It smells like grass and leather."
  },
  {
    id: 74,
    name: "Prismatic Shard",
    locations: [Location.Mines, Location.SkullCavern],
    obtained: [Action.Mining, Action.MonsterKilling],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A very rare and powerful substance with unknown origins."
  },
  {
    id: 795,
    name: "Void Salmon",
    locations: [Location.WitchSwamp],
    obtained: [Action.Fishing],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description:
      "A salmon, twisted by void energy. The fresh meat is jet black, but rapidly turns pink when exposed to air."
  },
  {
    id: 445,
    name: "Caviar",
    locations: [Location.Farm],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "The cured roe of a sturgeon fish. Considered to be a luxurious delicacy!"
  },
  {
    id: -5,
    name: "Any Egg",
    locations: [Location.Farm],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "Any type of egg."
  },
  {
    id: -6,
    name: "Any Milk",
    locations: [Location.Farm],
    obtained: [Action.Construction],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "Any type of milk."
  },
  {
    id: 92,
    name: "Sap",
    locations: [Location.Farm, Location.AroundMap],
    obtained: [Action.Forage],
    seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
    description: "A fluid obtained from trees."
  }
];
