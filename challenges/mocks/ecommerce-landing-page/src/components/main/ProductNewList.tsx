import RateStars from "@components/common/RateStars";
import {
  ProductNewItemType,
  productNewProducts,
} from "@data/productNewProducts";

import ProductListTitle from "./ProductListTitle";

type ProductNewItemProps = {
  data: ProductNewItemType;
};

const ProductNewItem = ({ data }: ProductNewItemProps) => {
  return (
    <div className="border-cultured relative mb-4 w-full overflow-hidden rounded-xl border-[1px] p-4">
      <div className="group relative">
        <img
          className="group-hover:absolute group-hover:top-0 group-hover:left-0"
          src={data.hoverImageSrc}
          alt={data.imageAlt}
        />
        <img
          className="absolute top-0 left-0"
          src={data.defaultImageSrc}
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
        <p className="bg-ocean-green absolute top-3 left-3 rounded-md px-3 py-1 text-xs text-white">
          {data.badge.text}
        </p>
      )}
      {data.badge && data.badge.type === "text" && (
        <p className="bg-eerie-black absolute top-3 -left-8 -rotate-45 px-10 py-1 text-xs text-white uppercase">
          {data.badge.text}
        </p>
      )}
      {data.badge && data.badge.type === "new" && (
        <p className="bg-salmon-pink absolute top-3 -left-8 -rotate-45 px-10 py-1 text-xs text-white uppercase">
          {data.badge.text}
        </p>
      )}
    </div>
  );
};

const ProductNewList = () => {
  return (
    <div className="">
      <ProductListTitle title="New Products" />
      {productNewProducts.map((v, index) => (
        <ProductNewItem data={v} />
      ))}
    </div>
  );
};

export default ProductNewList;
