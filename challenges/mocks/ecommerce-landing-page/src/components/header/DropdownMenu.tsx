type Props = {
  list: string[];
  selectedIndex: number;
};

const DropdownMenu = ({ list, selectedIndex }: Props) => {
  return (
    <select>
      {list.map((item: string, index: number) => (
        <option key={index} selected={index === selectedIndex}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;
