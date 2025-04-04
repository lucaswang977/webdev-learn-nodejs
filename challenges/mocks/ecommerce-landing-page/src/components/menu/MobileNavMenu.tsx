import { useContext, useState } from "react";
import { IoCloseOutline, IoCaretBackOutline } from "react-icons/io5";
import MenuOpenContext from "../../contexts/MenuOpenContext";
import MenuCategory from "./MenuCategory";
import { menuCategories } from "../../data/menuCategories";
import { menuOptions } from "../../data/menuOptions";

const MenuTitle = () => {
  const menuOpenContext = useContext(MenuOpenContext);

  return (
    <div className="border-cultured mb-2 flex justify-between border-b-[2px] pb-3">
      <p className="text-salmon-pink text-lg font-semibold">Menu</p>
      <button
        className="text-[22px]"
        onClick={() => menuOpenContext?.setIsMenuOpen(false)}
      >
        <IoCloseOutline className="ionicon-semibold" />
      </button>
    </div>
  );
};

type MenuOptionProp = {
  name: string;
  options: string[];
  opened?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const MenuOption = ({ name, options, opened, setOpen }: MenuOptionProp) => {
  return (
    <>
      <button
        className="text-onyx mt-10 flex w-full items-center justify-between text-lg font-medium"
        onClick={() => setOpen && (opened ? setOpen(undefined) : setOpen(name))}
      >
        <p>{name}</p>
        {opened ? (
          <IoCaretBackOutline size="16px" className="-rotate-90" />
        ) : (
          <IoCaretBackOutline size="16px" />
        )}
      </button>
      {opened && (
        <ul>
          {options.map((v) => (
            <li key={v}>
              <button>{v}</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

const MobileNavMenu = () => {
  const menuOpenContext = useContext(MenuOpenContext);
  const [openCategory, setOpenCategory] = useState<string | undefined>(
    undefined,
  );
  const [openOption, setOpenOption] = useState<string | undefined>(undefined);

  return (
    menuOpenContext?.isMenuOpen && (
      <nav className="fixed top-0 left-0 z-10 h-screen w-full max-w-[320px] bg-white px-5 py-6">
        <MenuTitle />
        {menuCategories.map((category) => (
          <MenuCategory
            key={category.name}
            data={category}
            open={openCategory === category.name}
            setOpen={setOpenCategory}
          />
        ))}
        <div className="mt-10">
          {menuOptions.map((option) => (
            <MenuOption
              key={option.name}
              name={option.name}
              options={option.options}
              opened={openOption === option.name}
              setOpen={setOpenOption}
            />
          ))}
        </div>
      </nav>
    )
  );
};

export default MobileNavMenu;
