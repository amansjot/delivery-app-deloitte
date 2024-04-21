export interface Perks {
  freeDelivery: boolean;
  priceNegotiable: boolean;
}

export interface Listing {
  id: number;
  title: string;
  price: number;
  image: string[];
  perks: Perks;
  category: string;
  keywords: string[];
}

export const listings: Listing[] = [
  {
    id: 1,
    title: "Organic Bananas",
    price: 0.59,
    image: ["https://i.imgur.com/hyGM52i.png"],
    perks: { freeDelivery: false, priceNegotiable: false },
    category: "produce",
    keywords: ["bananas", "fruit", "organic"],
  },
  {
    id: 2,
    title: "Fresh Whole Milk",
    price: 3.49,
    image: ["https://i.imgur.com/q13QARq.png"],
    perks: { freeDelivery: false, priceNegotiable: false },
    category: "dairy",
    keywords: ["milk", "dairy"],
  },
  {
    id: 4,
    title: "Artisan Bread Loaf",
    price: 4.50,
    image: ["https://i.imgur.com/VSU9ddD.png"],
    perks: { freeDelivery: false, priceNegotiable: false },
    category: "bakery",
    keywords: ["bread", "bakery", "artisan"],
  },
  {
    id: 5,
    title: "Peas & Carrots Frozen",
    price: 2.99,
    image: ["https://i.imgur.com/FFs8Vba.png"],
    perks: { freeDelivery: true, priceNegotiable: false },
    category: "frozen",
    keywords: ["frozen", "vegetables"],
  },
  {
    id: 6,
    title: "Spaghetti Pasta",
    price: 1.25,
    image: ["https://i.imgur.com/UFqgemS.png"],
    perks: { freeDelivery: false, priceNegotiable: false },
    category: "pantry",
    keywords: ["pasta", "pantry"],
  },
  {
    id: 7,
    title: "Apple Juice",
    price: 2.99,
    image: ["https://i.imgur.com/DkDFJfj.png"],
    perks: { freeDelivery: false, priceNegotiable: false },
    category: "beverages",
    keywords: ["juice", "beverages", "apple"],
  },
  {
    id: 8,
    title: "Greek Yogurt",
    price: 0.99,
    image: ["https://i.imgur.com/X7CIzFa.png"],
    perks: { freeDelivery: false, priceNegotiable: false },
    category: "dairy",
    keywords: ["yogurt", "dairy", "Greek"],
  },
  {
    id: 3,
    title: "Chicken Breast",
    price: 5.99,
    image: ["https://i.imgur.com/TCVuM7U.png"],
    perks: { freeDelivery: false, priceNegotiable: false },
    category: "meat",
    keywords: ["chicken", "poultry", "meat"],
  },
  {
    id: 9,
    title: "Ribeye Steak",
    price: 12.99,
    image: ["https://i.imgur.com/C5tk6b7.png"],
    perks: { freeDelivery: true, priceNegotiable: false },
    category: "meat",
    keywords: ["steak", "beef", "ribeye"],
  },
  {
    id: 10,
    title: "Chocolate Cake",
    price: 15.00,
    image: ["https://i.imgur.com/11kVUbf.png"],
    perks: { freeDelivery: false, priceNegotiable: false },
    category: "bakery",
    keywords: ["cake", "chocolate", "dessert"],
  },
  {
    id: 11,
    title: "Mixed Berries",
    price: 3.50,
    image: ["https://i.imgur.com/nyfuPpi.png"],
    perks: { freeDelivery: true, priceNegotiable: false },
    category: "produce",
    keywords: ["berries", "fruit", "mixed"],
  },
  {
    id: 12,
    title: "Canned Beans",
    price: 0.99,
    image: ["https://i.imgur.com/0ThvTqt.png"],
    perks: { freeDelivery: false, priceNegotiable: false },
    category: "pantry",
    keywords: ["beans", "canned", "pantry"],
  },
  {
    id: 13,
    title: "Espresso Coffee",
    price: 6.99,
    image: ["https://i.imgur.com/XP1HIZA.png"],
    perks: { freeDelivery: true, priceNegotiable: false },
    category: "beverages",
    keywords: ["coffee", "espresso", "beverages"],
  },
  {
    id: 14,
    title: "Ice Cream",
    price: 4.99,
    image: ["https://i.imgur.com/deazblg.png"],
    perks: { freeDelivery: false, priceNegotiable: false },
    category: "frozen",
    keywords: ["ice cream", "dessert"],
  },
  {
    id: 15,
    title: "Whole Wheat Crackers",
    price: 2.50,
    image: ["https://i.imgur.com/ltIu7ob.png"],
    perks: { freeDelivery: false, priceNegotiable: false },
    category: "pantry",
    keywords: ["crackers", "snack", "wheat"],
  },
];
