import {
  IoBagHandleOutline,
  IoHeartOutline,
  IoPersonOutline,
} from "react-icons/io5";

import HeaderLogo from "@components/header/HeaderLogo";
import HeaderSearchBox from "@components/header/HeaderSearchBox";
import NavIcon from "@components/header/NavIcon";

const HeaderUserAction = () => {
  return (
    <div
      data-section="header-user-action"
      className="text-onyx hidden items-center gap-[15px] text-[35px] lg:flex"
    >
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
    <div
      data-section="header-main"
      className="border-cultured w-full border-b-[1px]"
    >
      <div className="mx-auto p-4 sm:flex sm:items-center sm:justify-between md:max-w-[750px] md:gap-[80px] lg:max-w-[980px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
        <HeaderLogo />
        <HeaderSearchBox />
        <HeaderUserAction />
      </div>
    </div>
  );
};

export default HeaderMain;
