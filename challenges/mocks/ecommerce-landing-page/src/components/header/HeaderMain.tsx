import HeaderLogo from "./HeaderLogo";
import HeaderSearchBox from "./HeaderSearchBox";

const HeaderMain = () => {
  return (
    <div className="border-cultured border-b-[1px] px-4 py-6 sm:flex sm:items-center sm:justify-between">
      <HeaderLogo />
      <HeaderSearchBox />
    </div>
  );
};

export default HeaderMain;
