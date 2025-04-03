import BottomNavigation from "./header/BottomNavigation";
import HeaderMain from "./header/HeaderMain";
import HeaderTop from "./header/HeaderTop";
import MobileNavMenu from "./menu/MobileNavMenu";

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderMain />
      <BottomNavigation />
      <MobileNavMenu />
    </header>
  );
};

export default Header;
