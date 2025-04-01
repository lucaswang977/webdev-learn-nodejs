import React from "react";
import { type IconType } from "react-icons";
type Props = {
  icon: IconType;
  notification?: number;
  action?: () => void;
};

const NavIcon = ({ icon, notification, action }: Props) => {
  return (
    <button
      className="relative p-[10px] text-[26px]"
      onClick={() => {
        if (action) action();
      }}
    >
      {notification !== undefined && (
        <span className="bg-bittersweet font-md absolute top-0 right-0 flex h-4 w-4 items-center justify-center rounded-full text-[12px] text-white">
          {notification}
        </span>
      )}
      {React.createElement(icon)}
    </button>
  );
};

export default NavIcon;
