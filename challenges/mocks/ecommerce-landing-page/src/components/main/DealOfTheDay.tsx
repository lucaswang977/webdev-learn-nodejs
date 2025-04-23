import RateStars from "@components/common/RateStars";
import {
  DealOfTheDayType,
  productDealOfTheDay,
} from "@data/productDealoftheDay";

import ProductListTitle from "./ProductListTitle";

type DealOfTheDayItemProps = {
  data: DealOfTheDayType;
};

const DealOfTheDayItem = ({ data }: DealOfTheDayItemProps) => {
  return (
    <div className="border-cultured flex w-full rounded-lg border-[1px]">
      <img
        src={data.imageSrc}
        alt={data.imageAlt}
        className="aspect-auto w-[100px]"
      />
      <div>
        <RateStars rate={data.rating} />
        <p>{data.title}</p>
        <p>{data.description}</p>
      </div>
    </div>
  );
};

type Props = {};

const DealOfTheDay = (props: Props) => {
  return (
    <div>
      <ProductListTitle title="Deal Of The Day" />
      {productDealOfTheDay.map((v) => (
        <DealOfTheDayItem data={v} />
      ))}
    </div>
  );
};

export default DealOfTheDay;
