import Banner from "./Banner";
import DealOfTheDay from "./DealOfTheDay";
import ProductContainer from "./ProductContainer";
import ProductNewList from "./ProductNewList";
import RecommendedCategory from "./RecommendedCategory";
import SidebarBestseller from "./SidebarBestseller";
import SidebarCategory from "./SidebarCategory";

const Main = () => {
  return (
    <div data-section="main">
      <Banner />
      <div className="mx-auto mb-4 px-4 md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
        <RecommendedCategory />
        <div className="gap-2 lg:flex">
          <div className="hidden lg:block">
            <SidebarCategory />
            <SidebarBestseller />
          </div>
          <div>
            <ProductContainer />
            <DealOfTheDay />
            <ProductNewList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
