interface SlideItemContentProps {
  imgUrl: string;
  category: string;
  title: string;
  shopUrl: string;
}

const SliderItemContent = ({
  imgUrl,
  category,
  title,
  shopUrl,
}: SlideItemContentProps) => {
  return (
    <>
      <img
        className="w-full h-full object-cover object-right"
        src={imgUrl}
        alt=""
      />
      <div className="absolute bottom-6 left-6 right-6 bg-white/50 rounded-xl p-4">
        <p className="text-salmon-pink font-medium text-sm tracking-wide mb-3 capitalize">
          {category}
        </p>
        <p className="text-eerie-black text-2xl font-bold uppercase mb-3 leading-none">
          {title}
        </p>
        <a
          href={shopUrl}
          className="uppercase bg-salmon-pink rounded-xl text-white font-semibold text-[0.6rem] px-3 py-1 transition-all duration-200 ease-in hover:bg-eerie-black"
        >
          Shop now
        </a>
      </div>
    </>
  );
};

export default SliderItemContent;
