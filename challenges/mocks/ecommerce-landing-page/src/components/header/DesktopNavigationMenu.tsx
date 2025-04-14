import { menuCategories } from "@data/menuCategories";
import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  styles: string;
};

const DesktopNavMenuDropdown = ({ children, styles }: Props) => {
  return (
    <ul
      className={twMerge(
        "invisible opacity-0 translate-y-12 absolute left-0 top-[100%] font-normal text-sm text-sonic-silver bg-white z-10 rounded-lg shadow-menu py-6 px-4 capitalize group-hover:visible group-hover:translate-y-0 transition-all duration-200 ease-in group-hover:opacity-100 border-[1px] border-cultured",
        styles,
      )}
    >
      {children}
    </ul>
  );
};

const DesktopNavigationMenu = () => {
  return (
    <div className="hidden lg:block w-full">
      <ul className="flex justify-center items-center gap-7 xl:gap-11 lg:max-w-[980px] md:max-w-[750px] mx-auto">
        {menuCategories.map((category) => (
          <li
            key={category.name}
            className="text-eerie-black font-semibold text-sm cursor-pointer uppercase py-4 hover:text-salmon-pink transition-colors duration-200 ease-in relative after:left-0 after:bottom-0 after:h-[2px] after:w-0 after:absolute after:bg-salmon-pink hover:after:w-full after:transition-width after:duration-200 after:ease-in group"
          >
            {category.value instanceof Array ? (
              category.name === "Categories" ? (
                <div>
                  <span>{category.name}</span>
                  <DesktopNavMenuDropdown styles="w-full">
                    <p>Big menu</p>
                  </DesktopNavMenuDropdown>
                </div>
              ) : (
                <div>
                  <span>{category.name}</span>
                  <DesktopNavMenuDropdown styles="w-[200px]">
                    {category.value.map((item) => (
                      <li
                        key={item.name}
                        className="py-1 hover:text-salmon-pink"
                      >
                        <a href={item.value}>{item.name}</a>
                      </li>
                    ))}
                  </DesktopNavMenuDropdown>
                </div>
              )
            ) : (
              <a href={category.value} className="">
                {category.name}
              </a>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DesktopNavigationMenu;
