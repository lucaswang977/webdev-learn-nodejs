import { recommendedCategories } from "@data/recommendedCategories";

const RecommendedCategory = () => {
  return (
    <div
      data-section="recommended-category"
      className="scrollbar-style mb-4 flex snap-x snap-mandatory flex-nowrap gap-[30px] overflow-hidden overflow-x-auto"
    >
      {recommendedCategories.map((v) => (
        <a
          key={v.name}
          href="#"
          className="border-cultured flex min-w-full shrink-0 snap-start gap-4 rounded-md border-[1px] p-4 sm:min-w-[calc(50%-30px/2)] lg:min-w-[calc(33.33%-60px/3)] xl:min-w-[calc(25%-22.5px)]"
        >
          <div className="bg-cultured rounded-md border-[1px] border-gray-300 p-2">
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
  );
};

export default RecommendedCategory;
