import {
  IoBagHandleOutline,
  IoHeartOutline,
  IoPersonOutline,
} from "react-icons/io5";

import HeaderLogo from "./HeaderLogo";
import HeaderSearchBox from "./HeaderSearchBox";

// TODO: Change to NavIcon
const HeaderUserAction = () => {
  return (
    <div className="hidden md:flex items-center gap-[15px] text-[35px] text-onyx">
      <button className="p-2">
        <IoPersonOutline />
      </button>
      <button>
        <IoHeartOutline />
      </button>
      <button>
        <IoBagHandleOutline />
      </button>
    </div>
  );
};

const HeaderMain = () => {
  return (
    <div className="border-cultured border-b-[1px] px-4 py-6 sm:flex sm:items-center sm:justify-between md:gap-[80px]">
      <HeaderLogo />
      <HeaderSearchBox />
      <HeaderUserAction />
    </div>
  );
};

export default HeaderMain;
