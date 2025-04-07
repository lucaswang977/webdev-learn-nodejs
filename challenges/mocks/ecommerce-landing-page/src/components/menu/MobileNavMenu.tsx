import React, { useContext, useState } from "react";
import {
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter,
} from "react-icons/io5";

import { twMerge } from "tailwind-merge";

import MenuOpenContext from "../../contexts/MenuOpenContext";
import { menuCategories } from "../../data/menuCategories";
import { menuOptions } from "../../data/menuOptions";
import MenuCategory from "./MenuCategory";
import MenuOption from "./MenuOption";
import MenuTitle from "./MenuTitle";

const SocialButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="bg-cultured rounded-lg p-[10px]">
      <a href="#">{children}</a>
    </li>
  );
};

const MobileNavMenu = () => {
  const { isMenuOpen } = useContext(MenuOpenContext);
  const [openCategory, setOpenCategory] = useState<string | undefined>(
    undefined,
  );
  const [openOption, setOpenOption] = useState<string | undefined>(undefined);

  return (
    <nav
      className={twMerge(
        "fixed top-0 z-10 h-screen w-full max-w-[320px] overflow-y-scroll overscroll-contain bg-white px-5 py-6 transition-all duration-500 ease-in-out shadow-normal",
        isMenuOpen ? "translate-x-0" : "-translate-x-full invisible",
      )}
    >
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
      <ul className="text-eerie-black mt-10 flex w-full justify-center gap-2 text-xl">
        <li>
          <SocialButton>
            <IoLogoFacebook />
          </SocialButton>
        </li>
        <li>
          <SocialButton>
            <IoLogoTwitter />
          </SocialButton>
        </li>
        <li>
          <SocialButton>
            <IoLogoInstagram />
          </SocialButton>
        </li>
        <li>
          <SocialButton>
            <IoLogoLinkedin />
          </SocialButton>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
