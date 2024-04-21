export interface Category {
  name: string;
  value: string;
  emoji: string;
  description: string;
}

export const categories: Category[] = [
  {
    name: "",
    value: "",
    emoji: "",
    description: "everything in one place",
  },
  {
    name: "Produce",
    value: "produce",
    emoji: "🥦",
    description: "fruits, vegetables, herbs",
  },
  {
    name: "Dairy",
    value: "dairy",
    emoji: "🥛",
    description: "milk, cheese, yogurt",
  },
  {
    name: "Frozen",
    value: "frozen",
    emoji: "❄️",
    description: "ice cream, frozen meals",
  },
  {
    name: "Meat",
    value: "meat",
    emoji: "🍖",
    description: "beef, chicken, pork",
  },
  {
    name: "Bakery",
    value: "bakery",
    emoji: "🥖",
    description: "bread, pastries, cakes",
  },
  {
    name: "Pantry",
    value: "pantry",
    emoji: "🥫",
    description: "canned goods, cereals, spices",
  },
  {
    name: "Beverages",
    value: "beverages",
    emoji: "🥤",
    description: "sodas, juices, teas",
  },
];
