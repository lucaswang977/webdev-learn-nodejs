import React, { useContext } from "react";
import { createContext } from "react";

export interface MenuOpenContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuOpenContext = createContext<MenuOpenContextType>({
  isMenuOpen: false,
  setIsMenuOpen: () => {},
});

export default function useMenuOpen() {
  return useContext(MenuOpenContext);
}
