import { Slider, SliderItem } from "@components/common/Slider";

import SliderItemContent from "./SliderItemContent";

const Banner = () => {
  return (
    <div className="p-3 mt-3">
      <Slider>
        <SliderItem>
          <SliderItemContent
            imgUrl="https://i.postimg.cc/V6Rrdsk1/banner-1.jpg"
            category="Trending Item"
            title="Women's Latest Fashion Sale"
            shopUrl="#"
          />
        </SliderItem>

        <SliderItem>
          <SliderItemContent
            imgUrl="https://i.postimg.cc/RFXhvPgZ/banner-2.jpg"
            category="Trending accessories"
            title="Modern Sunglasses"
            shopUrl="#"
          />
        </SliderItem>

        <SliderItem>
          <SliderItemContent
            imgUrl="https://i.postimg.cc/MTKZ37z2/banner-3.jpg"
            category="Sale Offer"
            title="New Fashion Summer Sale"
            shopUrl="#"
          />
        </SliderItem>
      </Slider>
    </div>
  );
};

export default Banner;
