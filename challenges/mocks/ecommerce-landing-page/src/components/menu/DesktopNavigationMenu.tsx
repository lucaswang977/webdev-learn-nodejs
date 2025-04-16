import { dropdownMenuItems } from "@data/dropdownMenuItems";
import { menuCategories } from "@data/menuCategories";
import { twMerge } from "tailwind-merge";

type DesktopNavMenuDropdownProps = {
  children: React.ReactNode;
  styles: string;
};

const DesktopNavMenuDropdown = ({
  children,
  styles,
}: DesktopNavMenuDropdownProps) => {
  return (
    <ul
      className={twMerge(
        "text-sonic-silver shadow-menu border-cultured invisible absolute top-[100%] left-0 z-10 translate-y-12 rounded-lg border-[1px] bg-white px-4 py-6 text-sm font-normal capitalize opacity-0 transition-all duration-200 ease-in group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
        styles,
      )}
    >
      {children}
    </ul>
  );
};

type DesktopNavMenuDropdownListProps = {
  title: string;
  items: { name: string; url: string }[];
  img: { url: string; jumpTo: string };
};

const DesktopNavMenuDropdownList = ({
  title,
  items,
  img,
}: DesktopNavMenuDropdownListProps) => {
  return (
    <div className="py-4">
      <h3>{title}</h3>
      <ul>
        {items.map((v) => (
          <li>
            <a href={v.url}>{v.name}</a>
          </li>
        ))}
      </ul>
      <a href={img.jumpTo}>
        <img src={img.url} alt="" />
      </a>
    </div>
  );
};

type DesktopNavMenuItemTitleProps = {
  name: string;
  href: string;
};
const DesktopNavMenuItemTitle = ({
  name,
  href,
}: DesktopNavMenuItemTitleProps) => {
  return (
    <a
      href={href}
      className="after:bg-salmon-pink after:transition-width relative py-4 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:duration-200 after:ease-in hover:after:w-full"
    >
      {name}
    </a>
  );
};

type DesktopNavMenuItemProps = {
  name: string;
  value: string | readonly { name: string; value: string }[];
};

const DesktopNavMenuItem = ({ name, value }: DesktopNavMenuItemProps) => {
  return (
    <li
      key={name}
      className="text-eerie-black hover:text-salmon-pink group cursor-pointer py-4 text-sm font-semibold uppercase transition-colors duration-200 ease-in not-nth-2:relative"
    >
      {value instanceof Array ? (
        name === "Categories" ? (
          <>
            <DesktopNavMenuItemTitle name={name} href="#" />
            <DesktopNavMenuDropdown styles="w-full">
              <div className="flex gap-4">
                {dropdownMenuItems.map((v) => (
                  <DesktopNavMenuDropdownList
                    title={v.title}
                    items={v.items}
                    img={v.img}
                  />
                ))}
              </div>
            </DesktopNavMenuDropdown>
          </>
        ) : (
          <>
            <DesktopNavMenuItemTitle name={name} href="#" />
            <DesktopNavMenuDropdown styles="w-[200px]">
              {value.map((item) => (
                <li key={item.name} className="hover:text-salmon-pink py-1">
                  <a href={item.value}>{item.name}</a>
                </li>
              ))}
            </DesktopNavMenuDropdown>
          </>
        )
      ) : (
        <DesktopNavMenuItemTitle name={name} href="#" />
      )}
    </li>
  );
};

const DesktopNavigationMenu = () => {
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

export default DesktopNavigationMenu;
