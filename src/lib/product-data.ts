import { TColor } from "@/util/model";

export const specifications: string[] = [
  "t-shirts",
  "shorts",
  "shirts",
  "hoodie",
  "jeans",
];

export const categories: string[] = ["casual", "formal", "party", "gym"];

export const sizes = [
  { fullName: "xx-small", shortName: "xxs" },
  { fullName: "x-small", shortName: "xs" },
  { fullName: "small", shortName: "sm" },
  { fullName: "medium", shortName: "md" },
  { fullName: "large", shortName: "lg" },
  { fullName: "x-large", shortName: "xl" },
  { fullName: "xx-large", shortName: "xxl" },
  { fullName: "3x-large", shortName: "3xl" },
  { fullName: "4x-large", shortName: "4xl" },
];

export const colors: TColor[] = [
  { name: "green", value: "bg-green-600" },
  { name: "red", value: "bg-red-600" },
  { name: "yellow", value: "bg-yellow-600" },
  { name: "orange", value: "bg-orange-600" },
  { name: "blue", value: "bg-blue-600" },
  { name: "purple", value: "bg-purple-600" },
  { name: "pink", value: "bg-pink-600" },
  { name: "white", value: "bg-white" },
  { name: "black", value: "bg-black" },
  { name: "teal", value: "bg-teal-600" },
  { name: "indigo", value: "bg-indigo-600" },
  { name: "brown", value: "bg-yellow-900" },
];

export const cartItems: any[] = [
  {
    id: 1,
    name: "The Cozy Knit Blanket",
    price: 59.99,
    rating: 4.8,
    image: "/products/item1.png",
    color: "blue",
    size: "large",
  },
  {
    id: 2,
    name: "Adventure Backpack",
    price: 129.99,
    rating: 4.5,
    image: "/products/item2.png",
    color: "black",
    size: "medium",
  },
  {
    id: 3,
    name: "Sparkling Citrus Hand Soap",
    price: 7.99,
    rating: 4.7,
    image: "/products/item3.png",
    color: "yellow",
    size: "x-large",
  },
  {
    id: 4,
    name: "Artisan Coffee Blend",
    price: 14.99,
    rating: 4.9,
    image: "/products/item4.png",
    color: "brown",
    size: "small",
  },
  {
    id: 5,
    name: "Sustainable Bamboo Toothbrush",
    price: 5.99,
    rating: 4.6,
    image: "/products/item5.png",
    color: "White",
    size: "xx-large",
  },
];
