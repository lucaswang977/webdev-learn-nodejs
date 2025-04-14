import { Slider, SliderItem } from "@components/common/Slider";

import SliderItemContent from "./SliderItemContent";

const Banner = () => {
  return (
    <div className="px-4 py-7 lg:py-0 md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1200px] 2xl:max-w-[1350px] mx-auto">
      <Slider>
        <SliderItem>
          <SliderItemContent
            imgUrl="https://i.postimg.cc/V6Rrdsk1/banner-1.jpg"
            imgStyle="object-right"
            category="Trending Item"
            title="Women's Latest Fashion Sale"
            slogan={["Starting at $", "20", ".00"]}
            shopUrl="#"
          />
        </SliderItem>

        <SliderItem>
          <SliderItemContent
            imgUrl="https://i.postimg.cc/RFXhvPgZ/banner-2.jpg"
            imgStyle="object-right"
            category="Trending accessories"
            title="Modern Sunglasses"
            slogan={["Starting at $", "15", ".00"]}
            shopUrl="#"
          />
        </SliderItem>

        <SliderItem>
          <SliderItemContent
            imgUrl="https://i.postimg.cc/MTKZ37z2/banner-3.jpg"
            imgStyle="object-top"
            category="Sale Offer"
            title="New Fashion Summer Sale"
            slogan={["Starting at $", "29", ".99"]}
            shopUrl="#"
          />
        </SliderItem>
      </Slider>
    </div>
  );
};

export default Banner;
