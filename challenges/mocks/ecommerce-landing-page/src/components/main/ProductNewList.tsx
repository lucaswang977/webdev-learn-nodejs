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
      <img src={data.defaultImageSrc} alt={data.imageAlt} />
      <p className="text-salmon-pink text-xs uppercase">{data.category}</p>
      <p className="text-sonic-silver text-sm font-light">{data.title}</p>
      <RateStars rate={data.rating} />
      <span className="flex gap-1">
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
        <p className="bg-eerie-black absolute top-0 left-0 w-20 -rotate-45 py-1 text-center text-xs text-white">
          {data.badge.text}
        </p>
      )}
    </div>
  );
};

const ProductNewList = () => {
  return (
    <div>
      <ProductListTitle title="New Products" />
      <div>
        {productNewProducts.map((v) => (
          <ProductNewItem data={v} />
        ))}
      </div>
    </div>
  );
};

export default ProductNewList;
