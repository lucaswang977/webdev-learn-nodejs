type SliderProps = {
  children: React.ReactNode;
};
type SliderItemProps = {
  children: React.ReactNode;
};

export const Slider = ({ children }: SliderProps) => {
  return (
    <div className="scroll-snap-inline scrollbar-style flex w-full snap-x snap-mandatory gap-3 overflow-x-auto overflow-y-hidden pb-2">
      {children}
    </div>
  );
};

export const SliderItem = ({ children }: SliderItemProps) => {
  return (
    <div className="xs:aspect-5/3 relative aspect-square max-h-[450px] min-w-[100%] snap-start overflow-hidden rounded-xl sm:aspect-4/2 md:aspect-auto md:h-[350px] lg:h-[360px]">
      {children}
    </div>
  );
};
