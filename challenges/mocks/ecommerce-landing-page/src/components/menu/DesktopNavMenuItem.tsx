import DesktopNavMenuCategoryDropList from "./DesktopNavMenuCategoryDropList";
import DesktopNavMenuItemTitle from "./DesktopNavMenuItemTitle";
import DesktopNavMenuSmallDropList from "./DesktopNavMenuSmallDropList";

type DesktopNavMenuItemProps = {
  name: string;
  value: string | readonly { name: string; value: string }[];
};

const DesktopNavMenuItem = ({ name, value }: DesktopNavMenuItemProps) => {
  return (
    <li className="text-eerie-black hover:text-salmon-pink group cursor-pointer py-4 text-sm font-semibold uppercase transition-colors duration-200 ease-in not-nth-2:relative">
      {value instanceof Array ? (
        name === "Categories" ? (
          <DesktopNavMenuCategoryDropList name={name} />
        ) : (
          <DesktopNavMenuSmallDropList name={name} value={value} />
        )
      ) : (
        <DesktopNavMenuItemTitle name={name} href="#" />
      )}
    </li>
  );
};

export default DesktopNavMenuItem;
