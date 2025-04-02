import { useState } from "react";
import MenuOpenContext from "./MenuOpenContext";

function MenuOpenProvider({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <MenuOpenContext.Provider value={{ isMenuOpen, setIsMenuOpen }}>
      {children}
    </MenuOpenContext.Provider>
  );
}

export default MenuOpenProvider;
