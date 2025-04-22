import Banner from "./Banner";
import ProductContainer from "./ProductContainer";
import RecommendedCategory from "./RecommendedCategory";

const Main = () => {
  return (
    <div data-section="main">
      <Banner />
      <div className="mx-auto mb-4 px-4 md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
        <RecommendedCategory />
        <ProductContainer />
      </div>
    </div>
  );
};

export default Main;
