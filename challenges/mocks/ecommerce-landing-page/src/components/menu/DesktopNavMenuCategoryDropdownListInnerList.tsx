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
    <div className="">
      <h3 className="text-onyx border-cultured border-b-[1px] py-2 text-sm font-semibold">
        {title}
      </h3>
      <ul className="mt-4 mb-6">
        {items.map((v) => (
          <li key={v.name} className="mt-2">
            <a href={v.url}>{v.name}</a>
          </li>
        ))}
      </ul>
      <a href={img.jumpTo}>
        <img src={img.url} alt="" className="rounded-lg" />
      </a>
    </div>
  );
};

export default DesktopNavMenuCategoryDropdownListInnerList;
