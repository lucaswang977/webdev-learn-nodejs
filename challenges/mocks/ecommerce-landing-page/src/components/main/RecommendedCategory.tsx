import { recommendedCategories } from "@data/recommendedCategories";

const RecommendedCategory = () => {
  return (
    <div className="mx-auto mb-4 px-4 md:max-w-[750px] lg:max-w-[980px] xl:max-w-[1200px] 2xl:max-w-[1350px]">
      <div className="scrollbar-style flex snap-x snap-mandatory flex-nowrap gap-[30px] overflow-hidden overflow-x-auto overflow-y-hidden">
        {recommendedCategories.map((v) => (
          <a
            key={v.name}
            href="#"
            className="border-cultured flex min-w-full shrink-0 snap-start gap-4 rounded-md border-[1px] p-4 md:min-w-[calc(50%-30px/2)] lg:min-w-[calc(33.33%-60px/3)] xl:min-w-[calc(25%-22.5px)]"
          >
            <div className="bg-cultured rounded-md p-2">
              <img src={v.icon} alt="" className="h-8 w-8" />
            </div>
            <div className="flex w-full flex-col justify-between">
              <div className="flex justify-between">
                <p className="text-eerie-black text-[0.75rem] font-semibold uppercase">
                  {v.name}
                </p>
                <p className="text-sonic-silver items-start self-center text-[0.63rem]">
                  ({v.count})
                </p>
              </div>
              <p className="text-salmon-pink mt-1 text-sm text-[0.75rem]">
                Show All
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecommendedCategory;
