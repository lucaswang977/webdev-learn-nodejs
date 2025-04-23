export const productDealOfTheDay = [
  {
    imageSrc: "https://i.postimg.cc/wjGDnM81/shampoo.jpg",
    imageAlt: "shampoo, conditioner & facewash packs",
    rating: 3,
    title: "SHAMPOO, CONDITIONER & FACEWASH PACKS",
    titleHref: "#",
    description:
      "Old Spice includes a variety of products designed for men's grooming needs, such as deodorants and antiperspirants, body washes, shaving creams, aftershaves and hair and beard care",
    price: "$150.00",
    originalPrice: "$200.00",
    addToCartButtonText: "Add to Cart",
    status: {
      sold: "20",
      available: "40",
    },
    countdown: {
      days: "360",
      hours: "24",
      min: "59",
      sec: "00",
    },
    countdownDescription: "Hurry up! Offer ends in:",
  },
  {
    imageSrc: "https://i.postimg.cc/6qd3mpCv/jewellery-1.jpg",
    imageAlt: "Rose Gold diamonds Earring",
    rating: 3,
    title: "ROSE GOLD DIAMOND EARRINGS",
    titleHref: "#",
    description:
      "It's a stylish piece of jewelry that combines the warm tones of rose gold with the brilliance of diamonds. Enjoy a a luxurious and elegant accessory, perfect for enhancing any outfit while adding a touch of sophistication",
    price: "$1990.00",
    originalPrice: "$2000.00",
    addToCartButtonText: "Add to Cart",
    status: {
      sold: "15",
      available: "40",
    },
    countdown: {
      days: "360",
      hours: "24",
      min: "59",
      sec: "00",
    },
    countdownDescription: "Hurry up! Offer ends in:",
  },
];

export type DealOfTheDayType = (typeof productDealOfTheDay)[0];
