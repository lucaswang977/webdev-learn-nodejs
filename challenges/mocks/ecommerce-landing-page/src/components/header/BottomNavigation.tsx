import {
  IoBagHandleOutline,
  IoGridOutline,
  IoHeartOutline,
  IoHomeOutline,
  IoMenuOutline,
} from "react-icons/io5";

import NavIcon from "@components/header/NavIcon";
import useMenuOpen from "@contexts/MenuOpenContext";

const BottomNavigation = () => {
  const { setIsMenuOpen } = useMenuOpen();

  return (
    <div
      data-section="bottom-navigation"
      className="border-cultured shadow-normal xs:rounded-t-lg fixed bottom-0 left-1/2 flex w-full max-w-[500px] -translate-x-1/2 justify-around border-t-[1px] bg-white py-[5px] lg:hidden"
    >
      <NavIcon icon={IoMenuOutline} action={() => setIsMenuOpen(true)} />
      <NavIcon icon={IoBagHandleOutline} notification={0} />
      <NavIcon icon={IoHomeOutline} />
      <NavIcon icon={IoHeartOutline} notification={0} />
      <NavIcon icon={IoGridOutline} />
    </div>
  );
};

export default BottomNavigation;
