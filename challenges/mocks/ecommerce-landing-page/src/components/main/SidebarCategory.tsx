import { useState } from "react";
import { IoAddOutline, IoRemoveOutline } from "react-icons/io5";

import { sidebarCategories } from "@data/sidebarCategories";

const SidebarCategory = () => {
  const [opened, setOpen] = useState<string | undefined>(undefined);

  return (
    <div className="border-cultured hidden min-w-[250px] rounded-lg border-[1px] p-4 lg:block">
      <p className="mb-4 text-base font-semibold uppercase">category</p>
      <div className="flex flex-col gap-2 font-normal">
        {sidebarCategories.map((v) => (
          <div className="w-full">
            <button
              key={v.categoryTitle}
              className="flex w-full justify-between"
              onClick={() => {
                if (opened === v.categoryTitle) setOpen(undefined);
                else setOpen(v.categoryTitle);
              }}
            >
              <div className="flex gap-2">
                <img
                  src={v.categoryIconSrc}
                  alt={v.categoryIconAlt}
                  className="h-[20px] w-[20px]"
                />
                <p className="text-sonic-silver text-base">{v.categoryTitle}</p>
              </div>
              <IoAddOutline className="ionicon-semibold text-sonic-silver hidden h-[20px] w-[20px]" />
              <IoRemoveOutline className="ionicon-semibold text-sonic-silver h-[20px] w-[20px]" />
            </button>
            {opened === v.categoryTitle && (
              <ul>
                {v.subCategories.map((s) => (
                  <li key={s.name}>
                    <a href={s.href} className="flex justify-between">
                      <p>{s.name}</p>
                      <p>{s.stockValue}</p>
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SidebarCategory;
