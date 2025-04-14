import BottomNavigation from "@components/header/BottomNavigation";
import HeaderMain from "@components/header/HeaderMain";
import HeaderTop from "@components/header/HeaderTop";
import MobileNavMenu from "@components/menu/MobileNavMenu";

import DesktopNavigationMenu from "./DesktopNavigationMenu";

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderMain />
      <DesktopNavigationMenu />
      <BottomNavigation />
      <MobileNavMenu />
    </header>
  );
};

export default Header;
