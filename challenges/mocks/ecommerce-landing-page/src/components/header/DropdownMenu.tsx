type Props = {
  name: string;
  list: string[];
  selectedIndex: number;
};

const DropdownMenu = ({ name, list, selectedIndex }: Props) => {
  return (
    <select name={name} defaultValue={list[selectedIndex]}>
      {list.map((item: string, index: number) => (
        <option key={index} value={item}>
          {item}
        </option>
      ))}
    </select>
  );
};

export default DropdownMenu;
