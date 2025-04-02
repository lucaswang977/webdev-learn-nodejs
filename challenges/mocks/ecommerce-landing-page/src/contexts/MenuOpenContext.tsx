import React from "react";
import { createContext } from "react";

export interface MenuOpenContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MenuOpenContext = createContext<MenuOpenContextType | null>(null);

export default MenuOpenContext;
