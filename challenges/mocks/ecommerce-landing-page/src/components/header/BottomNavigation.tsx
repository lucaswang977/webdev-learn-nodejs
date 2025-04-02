import {
  IoBagHandleOutline,
  IoGridOutline,
  IoHeartOutline,
  IoHomeOutline,
  IoMenuOutline,
} from "react-icons/io5";
import NavIcon from "./NavIcon";
import { useContext } from "react";
import MenuOpenContext from "../../contexts/MenuOpenContext";

const BottomNavigation = () => {
  const menuOpenContext = useContext(MenuOpenContext);

  return (
    <div className="border-cultured shadow-normal xs:rounded-t-lg fixed bottom-0 left-1/2 flex w-full max-w-[500px] -translate-x-1/2 justify-around border-t-[1px] bg-white py-[5px] lg:hidden">
      <NavIcon
        icon={IoMenuOutline}
        action={() => {
          if (menuOpenContext) {
            menuOpenContext.setIsMenuOpen(true);
            console.log("clicked");
          }
        }}
      />
      <NavIcon icon={IoBagHandleOutline} notification={0} />
      <NavIcon icon={IoHomeOutline} />
      <NavIcon icon={IoHeartOutline} notification={0} />
      <NavIcon icon={IoGridOutline} />
    </div>
  );
};

export default BottomNavigation;
