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
    <a href={href} className="">
      {name}
    </a>
  );
};

type Props = {
  name: string;
  value: string | readonly { name: string; value: string }[];
};

const DesktopNavMenuItem = ({ name, value }: Props) => {
  return (
    <li
      key={name}
      className="text-eerie-black hover:text-salmon-pink after:bg-salmon-pink after:transition-width group cursor-pointer py-4 text-sm font-semibold uppercase transition-colors duration-200 ease-in not-nth-2:relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:duration-200 after:ease-in hover:after:w-full"
    >
      {value instanceof Array ? (
        name === "Categories" ? (
          <>
            <span className="">{name}</span>
            <DesktopNavMenuDropdown styles="w-full">
              <div className="flex gap-4">
                <DesktopNavMenuDropdownList
                  title={dropdownMenuItems[0].title}
                  items={dropdownMenuItems[0].items}
                  img={dropdownMenuItems[0].img}
                />
                <DesktopNavMenuDropdownList
                  title={dropdownMenuItems[1].title}
                  items={dropdownMenuItems[1].items}
                  img={dropdownMenuItems[1].img}
                />
                <DesktopNavMenuDropdownList
                  title={dropdownMenuItems[2].title}
                  items={dropdownMenuItems[2].items}
                  img={dropdownMenuItems[2].img}
                />
                <DesktopNavMenuDropdownList
                  title={dropdownMenuItems[3].title}
                  items={dropdownMenuItems[3].items}
                  img={dropdownMenuItems[3].img}
                />
              </div>
            </DesktopNavMenuDropdown>
          </>
        ) : (
          <>
            <span className="">{name}</span>
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
        <a href={value} className="">
          {name}
        </a>
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
