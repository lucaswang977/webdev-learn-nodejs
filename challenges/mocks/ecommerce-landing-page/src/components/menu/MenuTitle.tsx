import { useContext } from "react";
import { IoCloseOutline } from "react-icons/io5";
import MenuOpenContext from "../../contexts/MenuOpenContext";

const MenuTitle = () => {
  const { setIsMenuOpen } = useContext(MenuOpenContext);

  return (
    <div className="border-cultured mb-2 flex justify-between border-b-[2px] pb-3">
      <p className="text-salmon-pink text-lg font-semibold">Menu</p>
      <button className="text-[22px]" onClick={() => setIsMenuOpen(false)}>
        <IoCloseOutline className="ionicon-semibold" />
      </button>
    </div>
  );
};

export default MenuTitle;
