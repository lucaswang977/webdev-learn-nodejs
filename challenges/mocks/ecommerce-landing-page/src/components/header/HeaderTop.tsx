import DropdownMenu from "./DropdownMenu";

const HeaderTop = () => {
  return (
    <div className="text-sonic-silver border-cultured xs:flex xs:justify-between hidden border-b-[1px] px-4 py-3 text-xs uppercase sm:py-4">
      <p>
        <span className="font-medium">Free Shipping</span>
        <span className="font-normal"> This week Order Over - $55</span>
      </p>
      <div className="hidden sm:flex sm:gap-4">
        <DropdownMenu list={["USD $", "EUR €"]} selectedIndex={0} />
        <DropdownMenu
          list={["English", "Español", "Français"]}
          selectedIndex={0}
        />
      </div>
    </div>
  );
};

export default HeaderTop;
