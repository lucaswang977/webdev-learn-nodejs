import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

import { twMerge } from "tailwind-merge";

import { MenuCategoryType } from "../../data/menuCategories";
import MenuCategoryItem from "./MenuCategoryItem";

type MenuCategoryProps = {
  data: MenuCategoryType;
  open?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const MenuCategory = ({ data, open, setOpen }: MenuCategoryProps) => {
  return (
    <div className="border-cultured text-onyx border-b-[1px] py-3 text-[15px] font-medium">
      {data.value instanceof Array ? (
        <>
          <button
            className="flex w-full justify-between"
            onClick={() => {
              if (!setOpen) return;
              if (!open) setOpen(data.name);
              else setOpen(undefined);
            }}
          >
            <p>{data.name}</p>
            {open ? (
              <IoRemoveOutline className="ionicon-bold" />
            ) : (
              <IoAddOutline className="ionicon-bold" />
            )}
          </button>
          <div
            className={twMerge(
              "transition-height overflow-hidden pl-3 duration-500",
              open ? "max-h-[144px]" : "max-h-0 invisible",
            )}
          >
            {data.value.map((v) => (
              <MenuCategoryItem
                key={v.name}
                name={v.name}
                value={v.value.toString()}
              />
            ))}
          </div>
        </>
      ) : (
        <a href={data.value}>{data.name}</a>
      )}
    </div>
  );
};

export default MenuCategory;
