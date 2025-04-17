import DesktopNavMenuDropdownListStyle from "./DesktopNavMenuDropdownListStyle";
import DesktopNavMenuItemTitle from "./DesktopNavMenuItemTitle";

type Props = {
  name: string;
  value: readonly { name: string; value: string }[];
};

const DesktopNavMenuSmallDropList = ({ name, value }: Props) => {
  return (
    <>
      <DesktopNavMenuItemTitle name={name} href="#" />
      <DesktopNavMenuDropdownListStyle styles="w-[200px]">
        {value.map((item) => (
          <li key={item.name} className="hover:text-salmon-pink py-1">
            <a href={item.value}>{item.name}</a>
          </li>
        ))}
      </DesktopNavMenuDropdownListStyle>
    </>
  );
};

export default DesktopNavMenuSmallDropList;
