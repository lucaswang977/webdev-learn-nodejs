import { MenuOpenContext, MenuOpenContextType } from "./MenuOpenContext";

interface MenuOpenProviderProps {
  children: React.ReactNode;
  value: MenuOpenContextType;
}

function MenuOpenProvider({ children, value }: MenuOpenProviderProps) {
  return (
    <MenuOpenContext.Provider value={value}>
      {children}
    </MenuOpenContext.Provider>
  );
}

export default MenuOpenProvider;
