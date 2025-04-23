import Banner from "./Banner";
import DealOfTheDay from "./DealOfTheDay";
import ProductContainer from "./ProductContainer";
import RecommendedCategory from "./RecommendedCategory";
import SidebarBestseller from "./SidebarBestseller";
import SidebarCategory from "./SidebarCategory";

const Main = () => {
  return (
    <div data-section="main">
      <Banner />
      <div className="mx-auto mb-4 px-4 md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
        <RecommendedCategory />
        <div className="flex gap-2">
          <div>
            <SidebarCategory />
            <SidebarBestseller />
          </div>
          <div>
            <ProductContainer />
            <DealOfTheDay />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
