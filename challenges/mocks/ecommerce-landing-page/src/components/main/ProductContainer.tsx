import { productNewArrivals } from "@data/productNewArrivals";
import { productTopRated } from "@data/productTopRated";
import { productTrending } from "@data/productTrending";

import ProductList from "./ProductList";

const ProductContainer = () => {
  return (
    <div
      data-section="product-container"
      className="sm:flex sm:flex-wrap sm:justify-center sm:gap-[20px]"
    >
      <ProductList title="New Arrivals" products={productNewArrivals} />
      <ProductList title="Trending" products={productTrending} />
      <ProductList title="Top Rated" products={productTopRated} />
    </div>
  );
};

export default ProductContainer;
