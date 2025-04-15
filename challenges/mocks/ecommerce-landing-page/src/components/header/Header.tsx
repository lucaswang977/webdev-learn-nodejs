import BottomNavigation from "@components/header/BottomNavigation";
import HeaderMain from "@components/header/HeaderMain";
import HeaderTop from "@components/header/HeaderTop";
import DesktopNavigationMenu from "@components/menu/DesktopNavigationMenu";
import MobileNavMenu from "@components/menu/MobileNavMenu";

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
