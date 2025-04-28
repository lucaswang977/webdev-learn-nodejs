import React, { ReactNode, useState } from "react";
import {
  IoBagAddOutline,
  IoEyeOutline,
  IoHeartOutline,
  IoRepeatOutline,
} from "react-icons/io5";

import RateStars from "@components/common/RateStars";
import {
  ProductNewItemType,
  productNewProducts,
} from "@data/productNewProducts";
import { twMerge } from "tailwind-merge";

import ProductListTitle from "./ProductListTitle";

type ProductActionProps = {
  focused: boolean;
  children: ReactNode;
};

const ProductAction = ({ focused, children }: ProductActionProps) => {
  return (
    <button
      className={twMerge(
        "border-cultured rounded-md border-[1px] p-[5px] text-[20px] transition-all duration-200",
        focused ? "bg-eerie-black text-white" : "text-sonic-silver bg-white",
      )}
    >
      {children}
    </button>
  );
};

type ProductNewItemProps = {
  data: ProductNewItemType;
  index: number;
  hovered: boolean;
  setHovered: React.Dispatch<React.SetStateAction<number | undefined>>;
};

const ProductNewItem = ({
  data,
  index,
  hovered,
  setHovered,
}: ProductNewItemProps) => {
  return (
    <div className="border-cultured relative mb-4 w-full overflow-hidden rounded-xl border-[1px] p-4">
      <div className="absolute top-2 right-2 z-5 flex flex-col gap-1">
        <ProductAction focused={true}>
          <IoHeartOutline />
        </ProductAction>
        <ProductAction focused={false}>
          <IoEyeOutline />
        </ProductAction>
        <ProductAction focused={false}>
          <IoRepeatOutline />
        </ProductAction>
        <ProductAction focused={false}>
          <IoBagAddOutline />
        </ProductAction>
      </div>
      <div
        className="relative"
        onMouseEnter={() => setHovered(index)}
        onMouseLeave={() => setHovered(undefined)}
        onClick={() => setHovered(index)}
      >
        <img
          className="z-1 h-full w-full"
          src={data.defaultImageSrc}
          alt={data.imageAlt}
        />
        <img
          className={twMerge(
            "absolute top-0 left-0 z-2 h-full w-full transition-all",
            hovered ? "scale-110 opacity-100" : "opacity-0",
          )}
          src={data.hoverImageSrc}
          alt={data.imageAlt}
        />
      </div>
      <p className="text-salmon-pink mb-3 text-xs uppercase">{data.category}</p>
      <p className="text-sonic-silver mb-3 text-sm font-light">{data.title}</p>
      <RateStars rate={data.rating} />
      <span className="mt-3 flex gap-1">
        <p className="text-eerie-black text-sm font-bold">{data.price}</p>
        <p className="text-sonic-silver text-sm font-light line-through">
          {data.originalPrice}
        </p>
      </span>
      {data.badge && data.badge.type === "percentage" && (
        <p className="bg-ocean-green absolute top-3 left-3 z-5 rounded-md px-3 py-1 text-xs text-white">
          {data.badge.text}
        </p>
      )}
      {data.badge && data.badge.type === "text" && (
        <p className="bg-eerie-black absolute top-3 -left-8 z-5 -rotate-45 px-10 py-1 text-xs text-white uppercase">
          {data.badge.text}
        </p>
      )}
      {data.badge && data.badge.type === "new" && (
        <p className="bg-salmon-pink absolute top-3 -left-8 z-5 -rotate-45 px-10 py-1 text-xs text-white uppercase">
          {data.badge.text}
        </p>
      )}
    </div>
  );
};

const ProductNewList = () => {
  const [hovered, setHovered] = useState<number | undefined>();
  return (
    <div>
      <ProductListTitle title="New Products" />
      {productNewProducts.map((v, index) => (
        <ProductNewItem
          key={index}
          data={v}
          index={index}
          hovered={hovered === index ? true : false}
          setHovered={setHovered}
        />
      ))}
    </div>
  );
};

export default ProductNewList;
