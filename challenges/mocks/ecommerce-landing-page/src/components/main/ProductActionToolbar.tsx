import { ReactNode } from "react";
import {
  IoBagAddOutline,
  IoEyeOutline,
  IoHeartOutline,
  IoRepeatOutline,
} from "react-icons/io5";

import { twMerge } from "tailwind-merge";

type ProductActionProps = {
  children: ReactNode;
};

const ProductAction = ({ children }: ProductActionProps) => {
  return (
    <button className="border-cultured hover:bg-eerie-black text-sonic-silver cursor-pointer rounded-md border-[1px] bg-white p-[5px] text-[20px] transition-all duration-200 hover:text-white">
      {children}
    </button>
  );
};

type ProductActionToolbarProps = {
  visible: boolean;
};

const ProductActionToolbar = ({ visible }: ProductActionToolbarProps) => {
  return (
    <div
      data-section="product-action-toolbar"
      className={twMerge(
        "absolute top-2 right-2 z-5 flex flex-col gap-1 transition-all duration-200",
        visible ? "translate-x-0" : "translate-x-20",
      )}
    >
      <ProductAction>
        <IoHeartOutline />
      </ProductAction>
      <ProductAction>
        <IoEyeOutline />
      </ProductAction>
      <ProductAction>
        <IoRepeatOutline />
      </ProductAction>
      <ProductAction>
        <IoBagAddOutline />
      </ProductAction>
    </div>
  );
};

export default ProductActionToolbar;
