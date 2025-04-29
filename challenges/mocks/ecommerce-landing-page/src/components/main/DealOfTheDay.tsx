import RateStars from "@components/common/RateStars";
import {
  DealOfTheDayType,
  productDealOfTheDay,
} from "@data/productDealoftheDay";

import ProductListTitle from "./ProductListTitle";

type CountDownItemProps = {
  num: string;
  title: string;
};

const CountDownItem = ({ num, title }: CountDownItemProps) => {
  return (
    <div className="bg-cultured rounded-lg px-3 py-2 text-center">
      <p className="text-eerie-black text-base font-medium">{num}</p>
      <p className="text-eerie-black text-[10px] font-normal">{title}</p>
    </div>
  );
};

type DealOfTheDayItemProps = {
  data: DealOfTheDayType;
};

const DealOfTheDayItem = ({ data }: DealOfTheDayItemProps) => {
  return (
    <div
      data-section="deal-of-the-day-item"
      className="border-cultured w-full min-w-full snap-start rounded-lg border-[1px] p-8 md:flex"
    >
      <div className="gap-2 md:flex md:items-center md:justify-center">
        <div>
          <img
            src={data.imageSrc}
            alt={data.imageAlt}
            className="mx-auto block sm:max-w-[450px] md:w-full"
          />
        </div>
        <div className="mt-4 max-w-[calc(100%-345px)]">
          <RateStars rate={data.rating} />
          <p className="mt-4 text-sm font-bold">{data.title}</p>
          <p className="text-sonic-silver mt-2 text-sm font-light">
            {data.description}
          </p>
          <span className="mt-2 flex gap-2">
            <p className="text-salmon-pink text-xl font-bold">{data.price}</p>
            <p className="text-sonic-silver text-xl font-light line-through">
              {data.originalPrice}
            </p>
          </span>
          <button className="bg-salmon-pink hover:bg-eerie-black mt-2 rounded-lg px-3 py-2 text-xs font-bold text-white uppercase transition-colors duration-200">
            add to cart
          </button>
          <div className="mt-2 w-full">
            <div className="flex w-full justify-between">
              <span className="text-eerie-black text-xs uppercase">
                already sold: <b>20</b>
              </span>
              <span className="text-eerie-black text-xs uppercase">
                available: <b>40</b>
              </span>
            </div>
            <div className="bg-cultured before:bg-salmon-pink relative mt-2 h-[10px] w-full rounded-lg before:absolute before:top-[3px] before:left-[3px] before:h-[4px] before:w-1/3 before:rounded-lg"></div>
          </div>
          <div className="mt-2">
            <p className="text-eerie-black text-xs font-bold uppercase">
              hurry up! offer ends in:
            </p>
            <div className="mt-2 flex gap-1">
              <CountDownItem num={data.countdown.days} title="Days" />
              <CountDownItem num={data.countdown.hours} title="Hours" />
              <CountDownItem num={data.countdown.min} title="Min" />
              <CountDownItem num={data.countdown.sec} title="Sec" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const DealOfTheDay = () => {
  return (
    <div>
      <ProductListTitle title="Deal Of The Day" />
      <div className="scrollbar-style flex snap-x snap-mandatory gap-1 overflow-x-auto">
        {productDealOfTheDay.map((v) => (
          <DealOfTheDayItem key={v.title} data={v} />
        ))}
      </div>
    </div>
  );
};

export default DealOfTheDay;
