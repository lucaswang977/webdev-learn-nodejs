type DesktopNavMenuItemTitleProps = {
  name: string;
  href: string;
};
const DesktopNavMenuItemTitle = ({
  name,
  href,
}: DesktopNavMenuItemTitleProps) => {
  return (
    <a
      href={href}
      className="after:bg-salmon-pink after:transition-width relative py-4 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:duration-200 after:ease-in hover:after:w-full"
    >
      {name}
    </a>
  );
};

export default DesktopNavMenuItemTitle;
