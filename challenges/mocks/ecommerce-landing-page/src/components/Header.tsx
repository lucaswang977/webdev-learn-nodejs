import BottomNavigation from "./header/BottomNavigation";
import HeaderMain from "./header/HeaderMain";
import HeaderTop from "./header/HeaderTop";

const Header = () => {
  return (
    <header>
      <HeaderTop />
      <HeaderMain />
      <BottomNavigation />
    </header>
  );
};

export default Header;
