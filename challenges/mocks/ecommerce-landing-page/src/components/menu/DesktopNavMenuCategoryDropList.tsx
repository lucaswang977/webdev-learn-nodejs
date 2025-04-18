import { dropdownMenuItems } from "@data/dropdownMenuItems";

import DesktopNavMenuCategoryDropdownListInnerList from "./DesktopNavMenuCategoryDropdownListInnerList";
import DesktopNavMenuDropdownListStyle from "./DesktopNavMenuDropdownListStyle";
import DesktopNavMenuItemTitle from "./DesktopNavMenuItemTitle";

const DesktopNavMenuCategoryDropList = ({ name }: { name: string }) => {
  return (
    <>
      <DesktopNavMenuItemTitle name={name} href="#" />
      <DesktopNavMenuDropdownListStyle styles="w-full">
        <div className="flex gap-7 px-4">
          {dropdownMenuItems.map((v) => (
            <DesktopNavMenuCategoryDropdownListInnerList
              key={v.title}
              title={v.title}
              items={v.items}
              img={v.img}
            />
          ))}
        </div>
      </DesktopNavMenuDropdownListStyle>
    </>
  );
};
export default DesktopNavMenuCategoryDropList;
