import { productBestSellers } from "@data/sidebarBestSellers";

import ProductWithStars from "./ProductWithStars";

const SidebarBestseller = () => {
  return (
    <div>
      <p className="text-eerie-black text-base font-semibold uppercase">
        best sellers
      </p>
      <div>
        {productBestSellers.map((v) => (
          <ProductWithStars key={v.title} data={v} />
        ))}
      </div>
    </div>
  );
};

export default SidebarBestseller;
