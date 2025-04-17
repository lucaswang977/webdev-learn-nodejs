import BottomNavigation from "@components/header/BottomNavigation";
import HeaderMain from "@components/header/HeaderMain";
import HeaderTop from "@components/header/HeaderTop";
import DesktopNavMenu from "@components/menu/DesktopNavMenu";
import MobileNavMenu from "@components/menu/MobileNavMenu";

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderMain />
      <DesktopNavMenu />
      <BottomNavigation />
      <MobileNavMenu />
    </header>
  );
};

export default Header;
