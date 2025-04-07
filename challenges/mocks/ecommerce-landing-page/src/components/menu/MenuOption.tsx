import { IoCaretBackOutline } from "react-icons/io5";

import { twMerge } from "tailwind-merge";

type MenuOptionProp = {
  name: string;
  options: string[];
  opened?: boolean;
  setOpen?: React.Dispatch<React.SetStateAction<string | undefined>>;
};

const MenuOption = ({ name, options, opened, setOpen }: MenuOptionProp) => {
  return (
    <>
      <button
        className="text-onyx mt-8 flex w-full items-center justify-between text-lg font-medium"
        onClick={() => setOpen && (opened ? setOpen(undefined) : setOpen(name))}
      >
        <p>{name}</p>
        {opened ? (
          <IoCaretBackOutline size="16px" className="-rotate-90" />
        ) : (
          <IoCaretBackOutline size="16px" />
        )}
      </button>
      <ul
        className={twMerge(
          "shadow-light border-cultured transition-height mt-2 overflow-hidden rounded-lg duration-500",
          opened ? "max-h-[144px] border-[1px]" : "max-h-0 invisible",
        )}
      >
        {options.map((v) => (
          <li
            key={v}
            className="border-cultured text-sonic-silver mx-4 not-last:border-b-[1px] py-2 text-[15px]"
          >
            <button>{v}</button>
          </li>
        ))}
      </ul>
    </>
  );
};

export default MenuOption;
