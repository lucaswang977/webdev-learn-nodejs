import { recommendedCategories } from "@data/recommendedCategories";

type Props = {};

const RecommendedCategory = (props: Props) => {
  return (
    <div className="scroll-snap-inline scrollbar-style mx-auto flex snap-x snap-mandatory gap-[25px] overflow-hidden overflow-x-auto overflow-y-hidden overscroll-contain px-4 md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
      {recommendedCategories.map((v) => (
        <a
          key={v.name}
          href="#"
          className="border-cultured flex gap-4 rounded-md border-[1px] p-4"
        >
          <div className="bg-cultured rounded-md p-2">
            <img src={v.icon} alt="" className="h-8 w-8" />
          </div>
          <div className="block">
            <p className="text-eerie-black font-medium uppercase">{v.name}</p>
            <p className="text-salmon-pink mt-1 text-sm">Show All</p>
          </div>
          <p className="text-sonic-silver items-start text-[0.7rem]">
            ({v.count})
          </p>
        </a>
      ))}
    </div>
  );
};

export default RecommendedCategory;
