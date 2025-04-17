import { twMerge } from "tailwind-merge";

type DesktopNavMenuDropdownProps = {
  children: React.ReactNode;
  styles: string;
};

const DesktopNavMenuDropdownListStyle = ({
  children,
  styles,
}: DesktopNavMenuDropdownProps) => {
  return (
    <ul
      className={twMerge(
        "text-sonic-silver shadow-menu border-cultured pointer-events-none invisible absolute top-[100%] left-0 z-10 translate-y-12 rounded-lg border-[1px] bg-white px-4 py-6 text-sm font-normal capitalize opacity-0 transition-all duration-200 ease-in group-hover:pointer-events-auto group-hover:visible group-hover:translate-y-0 group-hover:opacity-100",
        styles,
      )}
    >
      {children}
    </ul>
  );
};

export default DesktopNavMenuDropdownListStyle;
