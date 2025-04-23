import RateStars from "@components/common/RateStars";

type ProductWithStarsProps = {
  data: {
    imageSrc: string;
    imageAlt: string;
    imageHref: string;
    title: string;
    titleHref: string;
    rating: number;
    price: string;
    originalPrice: string;
  };
};

const ProductWithStars = ({ data }: ProductWithStarsProps) => {
  return (
    <div className="flex max-w-[300px] gap-2">
      <a href={data.imageHref}>
        <img
          className="h-[50px] w-[50px]"
          src={data.imageSrc}
          alt={data.imageAlt}
        />
      </a>
      <div className="">
        <a className="truncate" href={data.titleHref}>
          {data.title}
        </a>
        <RateStars rate={data.rating} />
        <span className="flex gap-1">
          <p className="text-sonic-silver line-through">{data.originalPrice}</p>
          <p className="text-eerie-black font-semibold">{data.price}</p>
        </span>
      </div>
    </div>
  );
};

export default ProductWithStars;
