type SliderProps = {
  children: React.ReactNode;
};
type SliderItemProps = {
  children: React.ReactNode;
};

export const Slider = ({ children }: SliderProps) => {
  return (
    <div className="flex gap-3 scroll-snap-inline snap-mandatory snap-x overflow-x-auto overflow-y-hidden overscroll-contain pb-2">
      {children}
    </div>
  );
};

export const SliderItem = ({ children }: SliderItemProps) => {
  return (
    <div className="relative aspect-square min-w-[100%] max-h-[450px] xs:aspect-5/3 sm:aspect-4/2 md:aspect-auto rounded-xl overflow-hidden snap-start md:h-[350px] lg:h-[360px]">
      {children}
    </div>
  );
};
