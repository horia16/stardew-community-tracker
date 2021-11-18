import { Action, Location, Season, Weather } from "../static/enums";

export interface Item {
    name: string;
    sprite: string;
    description: string | null;
    foundBy: Array<Action>;
    foundIn: Array<Location>;
    seasons: Array<Season>;
    time: { start: string; end: string } | null;
    weather: Array<Weather>;
}
const items: Array<Item> = [
    {
        name: "Cherry",
        sprite: "Cherry.png",
        description: "It's popular, and ripens sooner than most other fruits.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Spring],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Apricot",
        sprite: "Apricot.png",
        description: "Valuable, but slow-growing. Despite its pale color, the florets are packed with nutrients.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Spring],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Parsnip",
        sprite: "Parsnip.png",
        description: "A spring tuber closely related to the carrot. It has an earthy taste and is full of nutrients.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Spring],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Cauliflower",
        sprite: "Cauliflower.png",
        description: "",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Spring],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Green Bean",
        sprite: "Green_Bean.png",
        description: "A juicy little bean with a cool, crisp snap.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Spring],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Potato",
        sprite: "Potato.png",
        description: "A widely cultivated tuber.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Spring],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Gold Star Parsnip X5",
        sprite: "Parsnip.png",
        description: "A spring tuber closely related to the carrot. It has an earthy taste and is full of nutrients.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Spring],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Wild Horseradish",
        sprite: "Wild_Horseradish.png",
        description: "A spicy root found in the spring.",
        foundBy: [Action.Forage],
        foundIn: [Location.Farm, Location.AroundMap],
        seasons: [Season.Spring],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Leek",
        sprite: "Leek.png",
        description: "A tasty relative of the onion.",
        foundBy: [Action.Forage],
        foundIn: [Location.Farm, Location.AroundMap],
        seasons: [Season.Spring],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Daffodil",
        sprite: "Daffodil.png",
        description: "A traditional spring flower that makes a nice gift.",
        foundBy: [Action.Forage],
        foundIn: [Location.Farm, Location.AroundMap],
        seasons: [Season.Spring],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Dandelion",
        sprite: "Dandelion.png",
        description: "Not the prettiest flower, but the leaves make a good salad.",
        foundBy: [Action.Forage],
        foundIn: [Location.Farm, Location.AroundMap],
        seasons: [Season.Spring],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },

    {
        name: "Morel",
        sprite: "Morel.png",
        description: "Sought after for its unique nutty flavor.",
        foundBy: [Action.Forage],
        foundIn: [Location.SecretWoods],
        seasons: [Season.Spring],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Common Mushroom",
        sprite: "Common_Mushroom.png",
        description: "Slightly nutty, with a good texture.",
        foundBy: [Action.Forage],
        foundIn: [Location.SecretWoods],
        seasons: [Season.Spring, Season.Fall],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Eel",
        sprite: "Eel.png",
        description: "A long, slippery little fish.",
        foundBy: [Action.Fishing],
        foundIn: [Location.Ocean],
        seasons: [Season.Spring, Season.Fall],
        time: { start: "6AM", end: "7PM" },
        weather: [Weather.Raining]
    },
    {
        name: "Sardine",
        sprite: "Sardine.png",
        description: "A common ocean fish.",
        foundBy: [Action.Fishing],
        foundIn: [Location.Ocean],
        seasons: [Season.Spring, Season.Fall, Season.Winter],
        time: { start: "4PM", end: "2AM" },
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Sunfish",
        sprite: "Sunfish.png",
        description: "A common river fish.",
        foundBy: [Action.Fishing],
        foundIn: [Location.River],
        seasons: [Season.Spring, Season.Summer],
        time: { start: "6AM", end: "7PM" },
        weather: [Weather.Sunny]
    },
    {
        name: "Catfish",
        sprite: "Catfish.png",
        description: "An uncommon fish found in streams.",
        foundBy: [Action.Fishing],
        foundIn: [Location.River, Location.SecretWoods, Location.WitchSwamp],
        seasons: [Season.Spring, Season.Summer, Season.Fall],
        time: { start: "6AM", end: "2AM" },
        weather: [Weather.Raining]
    },
    {
        name: "Shad",
        sprite: "Shad.png",
        description: "Lives in a school at sea, but returns to the rivers to spawn.",
        foundBy: [Action.Fishing],
        foundIn: [Location.River],
        seasons: [Season.Spring, Season.Summer, Season.Fall],
        time: { start: "9AM", end: "2AM" },
        weather: [Weather.Raining]
    },
    {
        name: "Honey",
        sprite: "Honey.png",
        description: "It's a sweet syrup produced by bees.",
        foundBy: [Action.ArtisanGoods],
        foundIn: [Location.Farm],
        seasons: [Season.Spring, Season.Summer, Season.Fall],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Truffle Oil",
        sprite: "Truffle_Oil.png",
        description: "A gourmet cooking ingredient.",
        foundBy: [Action.ArtisanGoods],
        foundIn: [Location.Farm],
        seasons: [Season.Spring, Season.Summer, Season.Fall],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Truffle",
        sprite: "Truffle.png",
        description: "A gourmet type of mushroom with a unique taste.",
        foundBy: [Action.Pigs],
        foundIn: [Location.Farm],
        seasons: [Season.Spring, Season.Summer, Season.Fall],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Orange",
        sprite: "Orange.png",
        description: "Juicy, tangy, and bursting with sweet summer aroma.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Summer],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Peach",
        sprite: "Peach.png",
        description: "It's almost fuzzy to the touch.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Summer],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Tomato",
        sprite: "Tomato.png",
        description: "Rich and slightly tangy, the Tomato has a wide variety of culinary uses.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Summer],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Melon",
        sprite: "Melon.png",
        description: "A cool, sweet summer treat.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Summer],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Hot Pepper",
        sprite: "Hot_Pepper.png",
        description: "Fiery hot with a hint of sweetness.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Summer],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Blueberry",
        sprite: "Blueberry.png",
        description:
            "A popular berry reported to have many health benefits. The blue skin has the highest nutrient concentration.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Summer],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Poppy",
        sprite: "Poppy.png",
        description: "In addition to its colorful flower, the Poppy has culinary and medicinal uses.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Summer],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Red Cabbage",
        sprite: "Red_Cabbage.png",
        description:
            "Often used in salads and coleslaws. The color can range from purple to blue to green-yellow depending on soil conditions.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Summer],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Gold Star Melon X5",
        sprite: "Melon.png",
        description: "A cool, sweet summer treat.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Summer],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Sturgeon",
        sprite: "Sturgeon.png",
        description: "An ancient bottom-feeder with a dwindling population. Females can live up to 150 years.",
        foundBy: [Action.Fishing],
        foundIn: [Location.Lake],
        seasons: [Season.Summer, Season.Winter],
        time: { start: "6AM", end: "7PM" },
        weather: [Weather.Raining, Weather.Sunny]
    },

    {
        name: "Tuna",
        sprite: "Tuna.png",
        description: "A large fish that lives in the ocean.",
        foundBy: [Action.Fishing],
        foundIn: [Location.Ocean],
        seasons: [Season.Summer, Season.Winter],
        time: { start: "6AM", end: "7PM" },
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Pufferfish",
        sprite: "Pufferfish.png",
        description: "Inflates when threatened.",
        foundBy: [Action.Fishing],
        foundIn: [Location.Ocean],
        seasons: [Season.Summer],
        time: { start: "12PM", end: "4PM" },
        weather: [Weather.Sunny]
    },
    {
        name: "Fiddlehead Fern",
        sprite: "Fiddlehead_Fern.png",
        description: "The young shoots are an edible specialty.",
        foundBy: [Action.Forage],
        foundIn: [Location.SecretWoods, Location.SkullCavern, Location.GingerIsland],
        seasons: [Season.Summer],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Sweet Pea",
        sprite: "Sweet_Pea.png",
        description: "A fragrant summer flower.",
        foundBy: [Action.Forage],
        foundIn: [Location.Farm, Location.AroundMap],
        seasons: [Season.Summer],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Spice Berry",
        sprite: "Spice_Berry.png",
        description: "It fills the air with a pungent aroma.",
        foundBy: [Action.Forage],
        foundIn: [Location.Farm, Location.AroundMap],
        seasons: [Season.Summer],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Corn",
        sprite: "Corn.png",
        description: "One of the most popular grains. The sweet, fresh cobs are a summer favorite.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Summer, Season.Fall],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Gold Star Corn X5",
        sprite: "Corn.png",
        description: "One of the most popular grains. The sweet, fresh cobs are a summer favorite.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Summer, Season.Fall],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Wheat X10",
        sprite: "Wheat.png",
        description: "One of the most widely cultivated grains. Makes a great flour for breads and cakes.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Summer, Season.Fall],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Sunflower",
        sprite: "Sunflower.png",
        description: "A common misconception is that the flower turns so it's always facing the sun.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Summer, Season.Fall],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Red Snapper",
        sprite: "Red_Snapper.png",
        description: "A popular fish with a nice red color.",
        foundBy: [Action.Fishing],
        foundIn: [Location.Ocean],
        seasons: [Season.Summer, Season.Fall, Season.Winter],
        time: { start: "6AM", end: "7PM" },
        weather: [Weather.Raining]
    },
    {
        name: "Tilapia",
        sprite: "Tilapia.png",
        description: "A primarily vegetarian fish that prefers warm water.",
        foundBy: [Action.Fishing],
        foundIn: [Location.Ocean, Location.GingerIsland],
        seasons: [Season.Summer, Season.Fall],
        time: { start: "6AM", end: "2PM" },
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Red Mushroom",
        sprite: "Red_Mushroom.png",
        description: "A spotted mushroom sometimes found in caves.",
        foundBy: [Action.Forage],
        foundIn: [Location.SecretWoods, Location.Mines],
        seasons: [Season.Summer, Season.Fall],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Grape",
        sprite: "Grape.png",
        description: "A sweet cluster of fruit.",
        foundBy: [Action.Forage, Action.Farming],
        foundIn: [Location.Farm, Location.AroundMap],
        seasons: [Season.Summer, Season.Fall],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Apple X4",
        sprite: "Apple.png",
        description: "A crisp fruit used for juice and cider.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Fall],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Pomegranate",
        sprite: "Pomegranate.png",
        description: "Within the fruit are clusters of juicy seeds.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Fall],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Yam",
        sprite: "Yam.png",
        description: "A starchy tuber with a lot of culinary versatility.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Fall],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Pumpkin",
        sprite: "Pumpkin.png",
        description:
            "A fall favorite, grown for its crunchy seeds and delicately flavored flesh. As a bonus, the hollow shell can be carved into a festive decoration.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Fall],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Gold Star Pumpkin X5",
        sprite: "Pumpkin.png",
        description:
            "A fall favorite, grown for its crunchy seeds and delicately flavored flesh. As a bonus, the hollow shell can be carved into a festive decoration.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Fall],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Eggplant",
        sprite: "Eggplant.png",
        description: "A rich and wholesome relative of the tomato. Delicious fried or stewed.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Fall],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Large Goat Milk",
        sprite: "Large_Goat_Milk.png",
        description: "A gallon of creamy goat's milk.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Large Milk",
        sprite: "Large_Milk.png",
        description: "A large jug of cow's milk.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Large White Egg",
        sprite: "Large_Egg.png",
        description: "It's an uncommonly large white egg!",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Large Brown Egg",
        sprite: "Large_Brown_Egg.png",
        description: "It's an uncommonly large brown egg!",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Wool",
        sprite: "Wool.png",
        description: "Soft, fluffy wool.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Duck Egg",
        sprite: "Duck_Egg.png",
        description: "It's still warm.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Rabbit's Foot",
        sprite: "Rabbit's_Foot.png",
        description: "Some say it's lucky.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    },
    {
        name: "Duck Feather",
        sprite: "Duck_Feather.png",
        description: "It's so colorful.",
        foundBy: [Action.Farming],
        foundIn: [Location.Farm],
        seasons: [Season.Spring, Season.Summer, Season.Fall, Season.Winter],
        time: null,
        weather: [Weather.Raining, Weather.Sunny]
    }
];

export default items.sort((a, b) => (a.name > b.name ? 1 : -1));
