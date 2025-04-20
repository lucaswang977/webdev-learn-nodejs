import Banner from "./Banner";
import RecommendedCategory from "./RecommendedCategory";

const Main = () => {
  return (
    <div>
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
