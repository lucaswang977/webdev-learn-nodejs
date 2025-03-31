import { IoSearchOutline } from "react-icons/io5";

const HeaderSearchBox = () => {
  return (
    <div className="relative sm:min-w-[300px]">
      <input
        type="text"
        placeholder="Enter your product name"
        className="border-cultured text-onyx w-full rounded-md border-[1px] px-4 py-3 text-sm font-normal"
      />
      <button className="text-onyx absolute top-[50%] right-[6px] -translate-y-1/2 bg-white p-3 text-lg">
        <IoSearchOutline />
      </button>
    </div>
  );
};

export default HeaderSearchBox;
