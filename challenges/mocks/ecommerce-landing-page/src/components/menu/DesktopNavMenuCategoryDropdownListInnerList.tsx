type DesktopNavMenuDropdownListProps = {
  title: string;
  items: { name: string; url: string }[];
  img: { url: string; jumpTo: string };
};

const DesktopNavMenuCategoryDropdownListInnerList = ({
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

export default DesktopNavMenuCategoryDropdownListInnerList;
