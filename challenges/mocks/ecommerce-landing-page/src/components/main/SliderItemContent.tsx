import { twMerge } from "tailwind-merge";

interface SlideItemContentProps {
  imgUrl: string;
  imgStyle: string;
  category: string;
  title: string;
  slogan: string[];
  shopUrl: string;
}

const SliderItemContent = ({
  imgUrl,
  imgStyle,
  category,
  title,
  slogan,
  shopUrl,
}: SlideItemContentProps) => {
  return (
    <>
      <img
        className={twMerge("h-full w-full object-cover", imgStyle)}
        src={imgUrl}
        alt=""
      />
      <div className="xs:right-auto xs:bottom-auto xs:top-[50%] xs:max-w-[320px] xs:-translate-y-[50%] absolute right-6 bottom-6 left-6 rounded-xl bg-white/50 p-4 sm:bg-white/0 lg:left-[75px] lg:max-w-[400px]">
        <p className="text-salmon-pink xs:text-base xs:tracking-widest mb-3 text-sm font-medium tracking-wide capitalize md:text-xl lg:text-2xl">
          {category}
        </p>
        <p className="text-eerie-black xs:text-3xl mb-3 text-2xl leading-none font-bold uppercase md:text-[2.3rem]">
          {title}
        </p>
        <p className="xs:block text-sonic-silver mb-3 hidden text-sm font-medium md:text-xl lg:text-2xl">
          {slogan.map((v, i) => {
            if (i === 1) {
              return (
                <span key={i} className="pl-1 text-[1.4em] font-bold">
                  {v}
                </span>
              );
            }
            return v;
          })}
        </p>
        <a
          href={shopUrl}
          className="bg-salmon-pink xs:rounded-lg xs:py-2 xs:px-5 hover:bg-eerie-black rounded-xl px-3 py-1 text-[0.6rem] font-semibold text-white uppercase transition-all duration-200 ease-in md:text-xs lg:text-sm"
        >
          Shop now
        </a>
      </div>
    </>
  );
};

export default SliderItemContent;
