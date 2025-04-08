import {
  IoBagHandleOutline,
  IoHeartOutline,
  IoPersonOutline,
} from "react-icons/io5";

import HeaderLogo from "./HeaderLogo";
import HeaderSearchBox from "./HeaderSearchBox";
import NavIcon from "./NavIcon";

const HeaderUserAction = () => {
  return (
    <div className="hidden lg:flex items-center gap-[15px] text-[35px] text-onyx">
      <NavIcon icon={IoPersonOutline} style="text-[35px] p-2"></NavIcon>
      <NavIcon
        icon={IoHeartOutline}
        notification={0}
        style="text-[35px] p-2"
      ></NavIcon>
      <NavIcon
        icon={IoBagHandleOutline}
        notification={0}
        style="text-[35px] p-2"
      ></NavIcon>
    </div>
  );
};

const HeaderMain = () => {
  return (
    <div className="border-cultured border-b-[1px] w-full">
      <div className="px-4 py-6 sm:flex sm:items-center sm:justify-between md:gap-[80px] md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1200px] 2xl:max-w-[1350px] mx-auto">
        <HeaderLogo />
        <HeaderSearchBox />
        <HeaderUserAction />
      </div>
    </div>
  );
};

export default HeaderMain;
