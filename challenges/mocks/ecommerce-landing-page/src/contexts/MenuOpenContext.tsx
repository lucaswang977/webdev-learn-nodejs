import { createContext, useState } from "react";

interface MenuOpenContextType {
  isMenuOpen: boolean;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MenuOpenContext = createContext<MenuOpenContextType | undefined>(
  undefined,
);

interface MenuOpenProviderProps {
  children: React.ReactNode;
}

export const MenuOpenProvider = ({ children }: MenuOpenProviderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const value: MenuOpenContextType = {
    isMenuOpen,
    setIsMenuOpen,
  };
  return (
    <MenuOpenContext.Provider value={value}>
      {children}
    </MenuOpenContext.Provider>
  );
};
