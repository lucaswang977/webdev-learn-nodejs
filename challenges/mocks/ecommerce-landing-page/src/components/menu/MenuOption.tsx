import { IoCaretBackOutline } from "react-icons/io5";

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
      {opened && (
        <ul className="border-cultured shadow-light mt-2 rounded-lg border-[1px]">
          {options.map((v) => (
            <li
              key={v}
              className="border-cultured text-sonic-silver mx-4 border-b-[1px] py-2 text-[15px]"
            >
              <button>{v}</button>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default MenuOption;
