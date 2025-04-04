type MenuCategoryItemProps = {
  name: string;
  value: string;
};

const MenuCategoryItem = ({ name, value }: MenuCategoryItemProps) => {
  return (
    <div className="text-sonic-silver mt-3 font-light">
      <a href={value}>{name}</a>
    </div>
  );
};

export default MenuCategoryItem;
