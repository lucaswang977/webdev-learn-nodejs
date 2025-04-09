type SliderProps = {
  children: React.ReactNode;
};
type SliderItemProps = {
  children: React.ReactNode;
};

export const Slider = ({ children }: SliderProps) => {
  return <div className="flex overflow-hidden">{children}</div>;
};

export const SliderItem = ({ children }: SliderItemProps) => {
  return <div className="min-w-[100%]">{children}</div>;
};
