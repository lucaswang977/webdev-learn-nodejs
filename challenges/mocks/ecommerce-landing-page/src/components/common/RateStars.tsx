import { IoStarOutline, IoStarSharp } from "react-icons/io5";

type RateStarsProps = {
  rate: number;
};
const RateStars = ({ rate }: RateStarsProps) => {
  return (
    <span className="flex">
      {Array.from({ length: 5 }).map((_, i) =>
        i <= rate - 1 ? (
          <IoStarSharp className="text-sandy-brown h-[15px] w-[15px]" />
        ) : (
          <IoStarOutline className="text-sandy-brown h-[15px] w-[15px]" />
        ),
      )}
    </span>
  );
};

export default RateStars;
