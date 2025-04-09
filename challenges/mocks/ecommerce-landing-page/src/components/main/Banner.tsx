import { Slider, SliderItem } from "@components/common/Slider";

type Props = {};

const Banner = (props: Props) => {
  return (
    <div>
      <Slider>
        <SliderItem>
          <img src="https://i.postimg.cc/V6Rrdsk1/banner-1.jpg" alt="" />
        </SliderItem>

        <SliderItem>
          <img src="https://i.postimg.cc/RFXhvPgZ/banner-2.jpg" alt="" />
        </SliderItem>

        <SliderItem>
          <img src="https://i.postimg.cc/MTKZ37z2/banner-3.jpg" alt="" />
        </SliderItem>
      </Slider>
    </div>
  );
};

export default Banner;
