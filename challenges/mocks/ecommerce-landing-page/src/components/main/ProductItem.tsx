export type ProductType = {
  imageSrc: string;
  imageAlt: string;
  imageHref: string;
  title: string;
  titleHref: string;
  category: string;
  categoryHref: string;
  price: string;
  originalPrice: string;
};

type ProductItemProps = {
  product: ProductType;
};

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="border-cultured mb-2 flex w-full gap-[20px] rounded-lg border-[1px] p-4">
      <img src={product.imageSrc} alt={product.imageAlt} className="w-[60px]" />
      <div className="max-w-[calc(100%-80px)]">
        <p className="truncate text-sm font-semibold">{product.title}</p>
        <a
          href={product.categoryHref}
          className="hover:text-salmon-pink text-sonic-silver text-xs"
        >
          {product.category}
        </a>
        <div className="flex gap-2">
          <span className="text-salmon-pink text-sm font-bold">
            {product.price}
          </span>
          <span className="text-sonic-silver self-center text-xs line-through">
            {product.originalPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
