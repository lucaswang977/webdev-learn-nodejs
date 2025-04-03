import { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import MenuOpenContext from "../../contexts/MenuOpenContext";

const MenuTitle = () => {
  const menuOpenContext = useContext(MenuOpenContext);

  return (
    <div className="border-cultured mb-2 flex justify-between border-b-[2px] pb-3">
      <p className="text-salmon-pink text-lg font-semibold">Menu</p>
      <button
        className="text-[22px]"
        onClick={() => menuOpenContext?.setIsMenuOpen(false)}
      >
        <IoCloseOutline className="ionicon-bold" />
      </button>
    </div>
  );
};

type MenuCategoryProps = {
  data: MenuCategoryType;
};

const MenuCategory = ({ data }: MenuCategoryProps) => {
  return (
    <div className="border-cultured text-onyx border-b-[1px] py-3 text-[15px] font-medium">
      {data.name}
    </div>
  );
};

const MenuCategoryItem = () => {
  return <div>MenuCategoryItem</div>;
};

const MenuOption = () => {
  return <div>MenuOption</div>;
};

type MenuCategoryType = { name: string; value: string | MenuCategoryType[] };

const menuCategories: MenuCategoryType[] = [
  { name: "Home", value: "#" },
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
];

const MobileNavMenu = () => {
  const menuOpenContext = useContext(MenuOpenContext);

  return (
    menuOpenContext?.isMenuOpen && (
      <nav className="fixed top-0 left-0 z-10 h-screen w-full max-w-[320px] bg-white px-5 py-5">
        <MenuTitle />
        {menuCategories.map((category) => (
          <MenuCategory data={category} />
        ))}
      </nav>
    )
  );
};

export default MobileNavMenu;
