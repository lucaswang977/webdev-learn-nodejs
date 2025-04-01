type Props = {
  list: string[];
  selectedIndex: number;
};

const DropdownMenu = ({ list, selectedIndex }: Props) => {
  return (
    <select defaultValue={list[selectedIndex]}>
      {list.map((item: string, index: number) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;
