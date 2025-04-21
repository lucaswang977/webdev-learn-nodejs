import Banner from "./Banner";
import RecommendedCategory from "./RecommendedCategory";

type ProductListProps = {};

const ProductList = (props: Props) => {
  return <div></div>;
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
          <div data-section="product-list" className=""></div>
        </div>
      </div>
    </div>
  );
};

export default Main;
