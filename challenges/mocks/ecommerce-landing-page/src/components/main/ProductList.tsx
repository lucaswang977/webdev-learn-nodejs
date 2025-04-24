import ProductItem, { ProductType } from "./ProductItem";
import ProductListTitle from "./ProductListTitle";

type ProductListProps = {
  title: string;
  products: ProductType[];
};

const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <div
      data-section="product-list"
      className="w-full md:w-[calc(50%-10px)] lg:w-[calc(33.33%-14px)]"
    >
      <ProductListTitle title={title} />
      <div className="scrollbar-style flex snap-x snap-mandatory gap-[20px] overflow-hidden overflow-x-auto">
        <div className="min-w-full snap-start sm:min-w-[calc(50%-10px)] md:min-w-full">
          {products.slice(0, 4).map((v) => (
            <ProductItem key={v.title} product={v} />
          ))}
        </div>
        <div className="min-w-full snap-start sm:min-w-[calc(50%-10px)] md:min-w-full">
          {products.slice(4).map((v) => (
            <ProductItem key={v.title} product={v} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
