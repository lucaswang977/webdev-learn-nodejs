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
        className={twMerge("w-full h-full object-cover", imgStyle)}
        src={imgUrl}
        alt=""
      />
      <div className="absolute bottom-6 left-6 lg:left-[75px] right-6 xs:right-auto xs:bottom-auto xs:top-[50%] xs:max-w-[320px] xs:-translate-y-[50%] bg-white/50 sm:bg-white/0 rounded-xl p-4 lg:max-w-[400px]">
        <p className="text-salmon-pink font-medium text-sm tracking-wide mb-3 capitalize xs:text-base xs:tracking-widest md:text-xl lg:text-2xl">
          {category}
        </p>
        <p className="text-eerie-black text-2xl font-bold uppercase mb-3 leading-none xs:text-3xl md:text-[2.3rem]">
          {title}
        </p>
        <p className="hidden xs:block mb-3 text-sonic-silver font-medium text-sm md:text-xl lg:text-2xl">
          {slogan.map((v, i) => {
            if (i === 1) {
              return <span className="pl-1 font-bold text-[1.4em]">{v}</span>;
            }
            return v;
          })}
        </p>
        <a
          href={shopUrl}
          className="uppercase bg-salmon-pink rounded-xl xs:rounded-lg text-white font-semibold text-[0.6rem] px-3 py-1 xs:py-2 xs:px-5 transition-all duration-200 ease-in hover:bg-eerie-black md:text-xs lg:text-sm"
        >
          Shop now
        </a>
      </div>
    </>
  );
};

export default SliderItemContent;
