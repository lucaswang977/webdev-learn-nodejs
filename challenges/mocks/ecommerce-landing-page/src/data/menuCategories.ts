export const menuCategories = [
  { name: "Home", value: "#" },
  { name: "Categories", value: [] },
  {
    name: "Men's",
    value: [
      { name: "Shirt", value: "#" },
      { name: "Short & Jeans", value: "#" },
      { name: "Safety Shoes", value: "#" },
      { name: "Wallet", value: "#" },
    ],
  },
  {
    name: "Women's",
    value: [
      { name: "Dress & Frock", value: "#" },
      { name: "Earrings", value: "#" },
      { name: "Necklace", value: "#" },
      { name: "Makeup Kit", value: "#" },
    ],
  },
  {
    name: "Jewelry",
    value: [
      { name: "Earrings", value: "#" },
      { name: "Couple Rings", value: "#" },
      { name: "Necklace", value: "#" },
      { name: "Bracelets", value: "#" },
    ],
  },
  {
    name: "Perfume",
    value: [
      { name: "Clothes Perfume", value: "#" },
      { name: "Flower Fragrance", value: "#" },
      { name: "Deodorant", value: "#" },
      { name: "Air Freshener", value: "#" },
    ],
  },
  { name: "Blog", value: "#" },
  { name: "Hot Offers", value: "#" },
] as const;

export type MenuCategoryType = (typeof menuCategories)[number];
