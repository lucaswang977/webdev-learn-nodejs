import React, { useState } from "react";

import RateStars from "@components/common/RateStars";
import {
  ProductNewItemType,
  productNewProducts,
} from "@data/productNewProducts";
import { twMerge } from "tailwind-merge";

import ProductActionToolbar from "./ProductActionToolbar";
import ProductListTitle from "./ProductListTitle";

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
    <div
      data-section="product-new-item"
      className="border-cultured relative mb-4 w-full overflow-hidden rounded-xl border-[1px] p-4"
      onMouseEnter={() => setHovered(index)}
      onMouseLeave={() => setHovered(undefined)}
      onClick={() => setHovered(index)}
    >
      <ProductActionToolbar visible={hovered} />
      <div className="relative">
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
      <p className="text-salmon-pink mt-5 mb-3 text-xs uppercase">
        {data.category}
      </p>
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
    <div data-section="product-new-list">
      <ProductListTitle title="New Products" />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
};

export default ProductNewList;
