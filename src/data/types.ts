export interface Bundle {
  key: number;
  name: string;
  type: string;
  reward: string;
  items: Array<BundleItem>;
  color: number;
}

export interface BundleItem {
  id: number;
  quantity: number;
  quality: number;
  data?: Item;
  completed?: boolean;
}
export interface Item {
  id: number;
  name: string;
  locations: Array<string>;
  obtained: Array<string>;
  seasons: Array<string>;
  description: string;
}

export interface BundleProgress {
  key: number;
  value: Array<boolean>;
}

export enum Action {
  Forage = "Forage",
  Fishing = "Fishing",
  Farming = "Farming",
  CrabPot = "Crab Pot",
  Mining = "Mining",
  Pigs = "Pigs",
  MonsterKilling = "Monster Killing",
  ArtisanGoods = "Artisan Goods",
  Cooking = "Cooking",
  Construction = "Construction",
  Buy = "Buy",
  Artifact = "Artifact"
}

export enum Location {
  Ocean = "Ocean",
  Lake = "Lake",
  River = "River",
  MinePonds = "Mine Ponds",
  DesertOasis = "Desert Oasis",
  SecretWoods = "Secret Woods",
  Farm = "Farm",
  WitchSwamp = "Witch's Swamp",
  AroundMap = "Around the Map",
  SkullCavern = "Skull Cavern",
  GingerIsland = "Ginger Island",
  Mines = "Mines",
  Beach = "Beach",
  NightMarket = "Night Market"
}

export enum Season {
  Spring = "Spring",
  Summer = "Summer",
  Fall = "Fall",
  Winter = "Winter"
}

export enum Weather {
  Sunny = "Sunny",
  Raining = "Raining"
}
