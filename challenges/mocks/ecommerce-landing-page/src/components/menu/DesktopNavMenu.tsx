import { menuCategories } from "@data/menuCategories";

import DesktopNavMenuItem from "./DesktopNavMenuItem";

const DesktopNavMenu = () => {
  return (
    <div className="mx-auto hidden px-4 md:max-w-[750px] lg:block lg:max-w-[980px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
      <ul className="relative flex items-center justify-center gap-7 xl:gap-11">
        {menuCategories.map((category) => (
          <DesktopNavMenuItem name={category.name} value={category.value} />
        ))}
      </ul>
    </div>
  );
};

export default DesktopNavMenu;
