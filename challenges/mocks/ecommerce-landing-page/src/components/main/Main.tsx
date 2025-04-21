import { productNewArrivals } from "@data/productNewArrivals";

import Banner from "./Banner";
import RecommendedCategory from "./RecommendedCategory";

type ProductType = {
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

type ProductProps = {
  product: ProductType;
};

const Product = ({ product }: ProductProps) => {
  return (
    <div className="border-cultured mb-2 flex w-full gap-4 rounded-lg border-[1px] p-4">
      <img src={product.imageSrc} alt={product.imageAlt} className="w-[60px]" />
      <div>
        <p className="text-sm font-semibold">{product.title}</p>
        <a
          href={product.categoryHref}
          className="hover:text-salmon-pink text-sonic-silver text-xs"
        >
          {product.category}
        </a>
        <div className="flex gap-1">
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

type ProductListProps = {
  title: string;
  products: ProductType[];
};

const ProductList = ({ title, products }: ProductListProps) => {
  return (
    <div>
      <p className="border-b-cultured mb-10 border-b-[1px] py-2 text-base font-semibold">
        {title}
      </p>
      <div>
        {products.map((v) => (
          <Product key={v.title} product={v} />
        ))}
      </div>
    </div>
  );
};

const Main = () => {
  return (
    <div data-section="main">
      <Banner />
      <RecommendedCategory />
      <div data-section="product-container" className="">
        <div
          data-section="product-column-lists"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        >
          <div data-section="product-list" className="px-4">
            <ProductList title="New Arrivals" products={productNewArrivals} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
